#!/usr/bin/env python3
"""
Upwork Lead Notifier — Eterna product studio

Scrapes Bubble.io/no-code jobs, applies hard filters, scores each job
via Claude Haiku using detailed criteria, and posts qualifying leads to Slack.

Usage:
    python notify_leads.py
    python notify_leads.py --min-score 7 --max-age 1
"""

import os
import re
import sys
import json
import argparse
import requests
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
import anthropic
from apify_client import ApifyClient

load_dotenv()

ACTOR_ID = "flash_mage~upwork"
SCORE_MODEL = "claude-haiku-4-5-20251001"
SLACK_MENTION = "<@U097GGDRGGG>"  # @Marko
SEEN_FILE = os.path.join(os.path.dirname(__file__), "config", "seen_jobs.json")

ALLOWED_COUNTRIES = {
    "United States", "Canada",
    "United Kingdom", "Ireland", "Germany", "France", "Netherlands", "Belgium",
    "Switzerland", "Austria", "Luxembourg", "Denmark", "Sweden", "Norway",
    "Finland", "Iceland", "Spain", "Portugal", "Italy", "Greece", "Malta", "Cyprus",
    "Poland", "Czech Republic", "Slovakia", "Hungary", "Romania", "Bulgaria",
    "Croatia", "Slovenia", "Estonia", "Latvia", "Lithuania", "Serbia",
    "Ukraine", "Georgia", "Armenia", "Moldova",
}

# --- Hard exclusion keywords (auto-reject if found in title+description) ---
EXCLUDE_KEYWORDS = [
    "node.js required", "python backend required", "react required",
    "angular required", "vue required", "custom code required",
    "native mobile", "ios app", "android app", "wordpress", "php",
    "ar/vr", "blockchain", "machine learning model", "custom ai training",
    "contract-to-hire", "equity only", "revenue share only",
    "vibe coding only", "no-code only, no bubble",
]

# --- Red flag phrases (each one lowers score significantly) ---
RED_FLAG_PHRASES = [
    "quick job", "simple app", "just need", "easy project", "few hours",
    "like facebook", "like instagram", "like airbnb", "like uber but",
    "same as", "but cheaper", "starting at $500", "budget flexible",
]

# --- Keywords that signal a good match ---
PLATFORM_KEYWORDS = ["bubble.io", "bubble developer", "bubble.io developer", "no-code", "no code", "webflow"]
PROJECT_KEYWORDS = ["marketplace", "saas", "mvp", "crm", "dashboard", "booking platform",
                    "directory", "workflow automation", "multi-role", "b2b platform",
                    "client portal", "admin dashboard", "social platform", "community platform"]
FEATURE_KEYWORDS = ["stripe", "stripe connect", "api integration", "openai", "ai integration",
                    "claude api", "user authentication", "multi-tenant", "role-based",
                    "database design", "backend workflow", "e-signature", "docusign",
                    "scheduling", "quote builder"]
INDUSTRY_KEYWORDS = ["construction", "healthcare", "professional network", "real estate",
                     "legal tech", "education platform", "wellness", "manufacturing",
                     "luxury", "premium", "enterprise", "b2b", "epc"]

SCORE_PROMPT = """Score this Upwork job 1-10 for a Bubble.io/no-code specialist (Eterna product studio).

SCORE BASED PRIMARILY ON THE DESCRIPTION. If a data field is 0 or unknown, skip that criterion — do not penalise.

ADD points for:
+3 Bubble.io explicitly mentioned in title or description
+2 no-code or low-code explicitly preferred
+2 MVP, new build, or greenfield project (not bug fixes/maintenance)
+1 mentions premium UI, design quality, or polished product
+1 mentions long-term, ongoing, or phase 2
+1 two or more user roles (admin, vendor, client, driver, etc.)
+1 Stripe, payment, or Stripe Connect required
+1 API integration required
+1 industry match: B2B, construction, healthcare, wellness, real estate, legal, luxury, education
+1 budget is $3,000+ fixed or $35+/hr (if shown; skip if unknown)
+1 client spent $5,000+ on Upwork (if shown; skip if unknown)
+1 under 20 proposals (if shown; skip if unknown)

SUBTRACT points for:
-4 requires React, Angular, Vue, Node.js backend, or native mobile app
-3 red flag phrases: "quick job", "simple app", "easy project", "few hours"
-2 "like Airbnb/Uber but for X", "clone", "same as X but cheaper"
-2 contract-to-hire, equity only, or revenue share

Job Title: {title}
Budget: {budget}
Client: rating {client_rating} | ${client_spent:,} spent | payment verified: {payment_verified}
Proposals: {applicants}
Skills: {skills}
Description: {description}

Reply ONLY with valid JSON:
{{"score": <1-10>, "reason": "<max 12 words>", "matched": <number of positive criteria matched>}}"""


# ---------------------------------------------------------------------------
# Seen-jobs deduplication
# ---------------------------------------------------------------------------

def load_seen() -> set:
    if not os.path.exists(SEEN_FILE):
        return set()
    with open(SEEN_FILE) as f:
        data = json.load(f)
    cutoff = (datetime.now() - timedelta(days=7)).isoformat()
    return {url for url, ts in data.items() if ts > cutoff}


def save_seen(new_urls: list):
    existing = {}
    if os.path.exists(SEEN_FILE):
        with open(SEEN_FILE) as f:
            existing = json.load(f)
    now = datetime.now().isoformat()
    for url in new_urls:
        existing[url] = now
    cutoff = (datetime.now() - timedelta(days=7)).isoformat()
    pruned = {u: t for u, t in existing.items() if t > cutoff}
    with open(SEEN_FILE, "w") as f:
        json.dump(pruned, f, indent=2)


# ---------------------------------------------------------------------------
# Scraping
# ---------------------------------------------------------------------------

def scrape_jobs(max_age_days: int = 1) -> list[dict]:
    token = os.getenv("APIFY_API_TOKEN")
    if not token:
        print("Error: APIFY_API_TOKEN not set", file=sys.stderr)
        return []

    client = ApifyClient(token)
    run_input = {
        "query": [
            "bubble.io", "bubble developer", "no-code MVP",
            "no-code platform", "webflow developer",
        ],
        "maxItems": 50,
    }

    try:
        run = client.actor(ACTOR_ID).call(run_input=run_input, run_timeout=timedelta(seconds=150))
    except Exception as e:
        print(f"Apify error: {e}", file=sys.stderr)
        return []

    if not run:
        return []

    raw_items = list(client.dataset(run.default_dataset_id).iterate_items())
    cutoff = datetime.now(timezone.utc) - timedelta(days=max_age_days)
    jobs = []

    for item in raw_items:
        if item.get("type") != "detail":
            continue

        data = item.get("data", {})
        opening = data.get("opening", {})
        client_data = data.get("client", {})
        budget_data = data.get("budget", {})

        # Age filter
        posted = opening.get("postedOn") or opening.get("publishTime", "")
        if posted:
            try:
                post_date = datetime.fromisoformat(posted.replace("Z", "+00:00"))
                if post_date < cutoff:
                    continue
            except (ValueError, TypeError):
                pass

        # Geo filter
        location = client_data.get("location", {})
        country = location.get("country", "") if isinstance(location, dict) else ""
        if country and country not in ALLOWED_COUNTRIES:
            continue

        # Raw budget values
        fixed_budget = budget_data.get("fixedBudget", 0) or 0
        hr = budget_data.get("hourlyRate", {}) or {}
        hourly_min = hr.get("min", 0) or 0
        hourly_max = hr.get("max", 0) or 0

        # Formatted budget string
        budget_str = "Not specified"
        if fixed_budget:
            budget_str = f"${fixed_budget:,.0f} fixed"
        elif hourly_min:
            budget_str = f"${hourly_min}–${hourly_max}/hr"

        # Skills
        skills_raw = data.get("skills", opening.get("skills", []))
        skills = [s.get("name", str(s)) if isinstance(s, dict) else str(s) for s in skills_raw][:8]

        # URL
        url = item.get("link", "")
        if "?" in url:
            url = url.split("?")[0]

        stats = client_data.get("stats", {}) or {}
        client_rating = stats.get("rating", 0) if isinstance(stats, dict) else 0
        client_spent = stats.get("totalSpent", 0) if isinstance(stats, dict) else 0
        payment_verified = client_data.get("paymentMethodVerified", False)
        applicants = opening.get("applicants", 0) or 0

        jobs.append({
            "title": item.get("title", "Untitled"),
            "description": (opening.get("description", ""))[:2000],
            "url": url,
            "budget_str": budget_str,
            "fixed_budget": fixed_budget,
            "hourly_min": hourly_min,
            "skills": skills,
            "country": country or "Unknown",
            "client_rating": client_rating,
            "client_spent": client_spent,
            "payment_verified": payment_verified,
            "applicants": applicants,
            "posted": posted,
        })

    return jobs


# ---------------------------------------------------------------------------
# Hard filter — auto-reject before spending API credits on scoring
# ---------------------------------------------------------------------------

def hard_filter(job: dict) -> tuple[bool, str]:
    text = (job["title"] + " " + job["description"]).lower()

    # Budget hard minimums (only filter if budget is known)
    if job["fixed_budget"] and job["fixed_budget"] < 2500:
        return False, f"fixed budget too low (${job['fixed_budget']:,.0f})"
    if job["hourly_min"] and job["hourly_min"] < 30:
        return False, f"hourly rate too low (${job['hourly_min']}/hr)"

    # Client quality (only filter if data is present)
    if job["client_rating"] and job["client_rating"] < 3.5:
        return False, f"client rating too low ({job['client_rating']})"
    if job["client_spent"] and job["client_spent"] < 1000:
        return False, f"client spend too low (${job['client_spent']:,})"
    if not job["payment_verified"] and job["client_spent"] > 0:
        return False, "payment not verified"

    # Too competitive
    if job["applicants"] and job["applicants"] >= 50:
        return False, f"too many proposals ({job['applicants']})"

    # Hard exclude keywords
    for kw in EXCLUDE_KEYWORDS:
        if kw in text:
            return False, f'excluded: "{kw}"'

    return True, ""


# ---------------------------------------------------------------------------
# Scoring
# ---------------------------------------------------------------------------

def score_job(job: dict, ai_client: anthropic.Anthropic) -> tuple[int, str, int]:
    prompt = SCORE_PROMPT.format(
        title=job["title"],
        budget=job["budget_str"],
        client_rating=job["client_rating"],
        client_spent=job["client_spent"],
        payment_verified=job["payment_verified"],
        applicants=job["applicants"],
        skills=", ".join(job["skills"]),
        description=job["description"],
    )
    try:
        msg = ai_client.messages.create(
            model=SCORE_MODEL,
            max_tokens=150,
            messages=[{"role": "user", "content": prompt}],
        )
        text = msg.content[0].text
        match = re.search(r"\{.*?\}", text, re.DOTALL)
        if match:
            parsed = json.loads(match.group())
            return int(parsed.get("score", 0)), parsed.get("reason", ""), int(parsed.get("matched", 0))
    except Exception as e:
        print(f"Scoring error for '{job['title']}': {e}", file=sys.stderr)
    return 0, "", 0


# ---------------------------------------------------------------------------
# Slack notification
# ---------------------------------------------------------------------------

def send_slack(job: dict, score: int, reason: str, matched: int, webhook_url: str) -> bool:
    if score >= 8:
        header = f"🟢 *HIGH PRIORITY — Score {score}/10* ({matched}/15 criteria)"
    else:
        header = f"🟡 *LEAD — Score {score}/10* ({matched}/15 criteria)"

    skills_line = f"\n🛠 {', '.join(job['skills'])}" if job["skills"] else ""
    country_part = f"  |  📍 {job['country']}" if job["country"] != "Unknown" else ""
    rating_part = f"  |  ⭐ {job['client_rating']}" if job["client_rating"] else ""
    spent_part = f"  |  💼 ${job['client_spent']:,.0f} spent" if job["client_spent"] else ""
    props_part = f"  |  📨 {job['applicants']} proposals" if job["applicants"] else ""

    text = (
        f"{SLACK_MENTION} {header}\n"
        f"> _{reason}_\n\n"
        f"*{job['title']}*\n"
        f"💰 {job['budget_str']}{country_part}{rating_part}{spent_part}{props_part}"
        f"{skills_line}\n\n"
        f"<{job['url']}|→ View & Apply on Upwork>"
    )
    try:
        resp = requests.post(webhook_url, json={"text": text}, timeout=10)
        return resp.status_code == 200
    except Exception as e:
        print(f"Slack error: {e}", file=sys.stderr)
        return False


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--min-score", type=int, default=6)
    parser.add_argument("--max-age", type=int, default=1)
    args = parser.parse_args()

    webhook_url = os.getenv("SLACK_WEBHOOK_URL")
    if not webhook_url:
        print("Error: SLACK_WEBHOOK_URL not set", file=sys.stderr)
        sys.exit(1)
    if not os.getenv("ANTHROPIC_API_KEY"):
        print("Error: ANTHROPIC_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    ai_client = anthropic.Anthropic()

    print(f"[{datetime.now().strftime('%H:%M')}] Scraping jobs...")
    jobs = scrape_jobs(max_age_days=args.max_age)
    print(f"Found {len(jobs)} jobs after geo/age filter")

    seen = load_seen()
    new_notified = []
    sent = 0

    for job in jobs:
        if job["url"] in seen:
            print(f"  ⟳ [seen]  {job['title'][:60]}")
            continue

        ok, reason = hard_filter(job)
        if not ok:
            print(f"  ✗ [hard]  {job['title'][:55]}  ({reason})")
            continue

        score, reason, matched = score_job(job, ai_client)
        tier = "🟢 HIGH" if score >= 8 else "🟡 OK " if score >= args.min_score else "✗    "
        print(f"  {tier} [{score}/10 {matched}/15] {job['title'][:50]}")

        if score >= args.min_score:
            if send_slack(job, score, reason, matched, webhook_url):
                sent += 1
                new_notified.append(job["url"])

    if new_notified:
        save_seen(new_notified)

    print(f"\nDone — {sent} new leads sent to Slack (min score: {args.min_score}/10)")


if __name__ == "__main__":
    main()
