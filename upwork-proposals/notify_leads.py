#!/usr/bin/env python3
"""
Upwork Lead Notifier

Scrapes Bubble.io/no-code jobs, scores each one via Claude Haiku,
and posts qualifying leads (score >= 6) to Slack.

Designed to be called by a Claude Code Routine every hour.

Usage:
    python notify_leads.py
    python notify_leads.py --min-score 7 --max-age 1
"""

import os
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

ALLOWED_COUNTRIES = {
    "United States", "Canada",
    "United Kingdom", "Ireland", "Germany", "France", "Netherlands", "Belgium",
    "Switzerland", "Austria", "Luxembourg", "Denmark", "Sweden", "Norway",
    "Finland", "Iceland", "Spain", "Portugal", "Italy", "Greece", "Malta", "Cyprus",
    "Poland", "Czech Republic", "Slovakia", "Hungary", "Romania", "Bulgaria",
    "Croatia", "Slovenia", "Estonia", "Latvia", "Lithuania", "Serbia",
    "Ukraine", "Georgia", "Armenia", "Moldova",
}

SCORE_PROMPT = """Score this Upwork job 1-10 for a Bubble.io/no-code specialist (Eterna product studio).

Scoring rules:
+3 Bubble.io explicitly mentioned
+2 no-code or low-code preferred
+2 MVP or new app build (not maintenance/bug fixing)
+1 client from US, Canada, or Europe
+1 no React/Angular/Vue/custom coding required
-3 requires React, Angular, Vue, or custom dev work
-3 clearly not Bubble.io fit (mobile native app, game, data science, ML)

Job Title: {title}
Budget: {budget}
Description: {description}

Reply ONLY with valid JSON, no other text:
{{"score": <number 1-10>, "reason": "<max 12 words>"}}"""

SEEN_FILE = os.path.join(os.path.dirname(__file__), "config", "seen_jobs.json")


def load_seen() -> set:
    """Load previously notified job URLs. Entries older than 7 days are dropped."""
    if not os.path.exists(SEEN_FILE):
        return set()
    with open(SEEN_FILE) as f:
        data = json.load(f)
    cutoff = (datetime.now() - timedelta(days=7)).isoformat()
    return {url for url, ts in data.items() if ts > cutoff}


def save_seen(new_urls: list):
    """Append new URLs to the seen file, pruning entries older than 7 days."""
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


def scrape_jobs(max_age_days: int = 2) -> list[dict]:
    token = os.getenv("APIFY_API_TOKEN")
    if not token:
        print("Error: APIFY_API_TOKEN not set", file=sys.stderr)
        return []

    client = ApifyClient(token)
    run_input = {
        "query": ["bubble.io", "no-code MVP", "bubble developer", "no-code app"],
        "maxItems": 30,
    }

    try:
        from datetime import timedelta as td
        run = client.actor(ACTOR_ID).call(run_input=run_input, run_timeout=td(seconds=120))
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

        # Budget
        budget = "Not specified"
        if budget_data.get("fixedBudget"):
            budget = f"${budget_data['fixedBudget']:,.0f} fixed"
        elif budget_data.get("hourlyRate", {}).get("min"):
            hr = budget_data["hourlyRate"]
            budget = f"${hr['min']}–${hr['max']}/hr"

        # Skills
        skills_raw = data.get("skills", opening.get("skills", []))
        skills = [s.get("name", str(s)) if isinstance(s, dict) else str(s) for s in skills_raw][:6]

        # URL
        url = item.get("link", "")
        if "?" in url:
            url = url.split("?")[0]

        stats = client_data.get("stats", {})

        jobs.append({
            "title": item.get("title", "Untitled"),
            "description": (opening.get("description", ""))[:1500],
            "url": url,
            "budget": budget,
            "skills": skills,
            "country": country or "Unknown",
            "client_spent": stats.get("totalSpent", 0) if isinstance(stats, dict) else 0,
        })

    return jobs


def score_job(job: dict, ai_client: anthropic.Anthropic) -> tuple[int, str]:
    prompt = SCORE_PROMPT.format(
        title=job["title"],
        budget=job["budget"],
        description=job["description"],
    )
    try:
        msg = ai_client.messages.create(
            model=SCORE_MODEL,
            max_tokens=120,
            messages=[{"role": "user", "content": prompt}],
        )
        text = msg.content[0].text
        match = __import__("re").search(r"\{.*?\}", text, __import__("re").DOTALL)
        if match:
            parsed = json.loads(match.group())
            return int(parsed.get("score", 0)), parsed.get("reason", "")
    except Exception as e:
        print(f"Scoring error for '{job['title']}': {e}", file=sys.stderr)
    return 0, ""


def send_slack(job: dict, score: int, reason: str, webhook_url: str) -> bool:
    skills_line = f"\n🛠 {', '.join(job['skills'])}" if job["skills"] else ""
    country_part = f"  |  📍 {job['country']}" if job["country"] != "Unknown" else ""
    text = (
        f"{SLACK_MENTION} *🎯 New Upwork Lead — Score: {score}/10*\n"
        f"> {reason}\n\n"
        f"*{job['title']}*\n"
        f"💰 {job['budget']}{country_part}{skills_line}\n\n"
        f"<{job['url']}|→ View & Apply on Upwork>"
    )
    try:
        resp = requests.post(webhook_url, json={"text": text}, timeout=10)
        return resp.status_code == 200
    except Exception as e:
        print(f"Slack error: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(description="Scrape Upwork, score leads, notify Slack")
    parser.add_argument("--min-score", type=int, default=6, help="Minimum score to notify (default: 6)")
    parser.add_argument("--max-age", type=int, default=2, help="Max job age in days (default: 2)")
    args = parser.parse_args()

    webhook_url = os.getenv("SLACK_WEBHOOK_URL")
    if not webhook_url:
        print("Error: SLACK_WEBHOOK_URL not set", file=sys.stderr)
        sys.exit(1)

    anthropic_key = os.getenv("ANTHROPIC_API_KEY")
    if not anthropic_key:
        print("Error: ANTHROPIC_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    ai_client = anthropic.Anthropic(api_key=anthropic_key)

    print(f"[{datetime.now().strftime('%H:%M')}] Scraping jobs...")
    jobs = scrape_jobs(max_age_days=args.max_age)
    print(f"Found {len(jobs)} jobs after geo/age filter")

    seen = load_seen()
    new_notified = []
    sent = 0

    for job in jobs:
        if job["url"] in seen:
            print(f"  ⟳ [skip] {job['title'][:60]}")
            continue

        score, reason = score_job(job, ai_client)
        status = "✓" if score >= args.min_score else "✗"
        print(f"  {status} [{score}/10] {job['title'][:60]}")

        if score >= args.min_score:
            if send_slack(job, score, reason, webhook_url):
                sent += 1
                new_notified.append(job["url"])

    if new_notified:
        save_seen(new_notified)
        print(f"  Saved {len(new_notified)} URLs to seen cache")

    print(f"\nDone — {sent} new leads sent to Slack (threshold: {args.min_score}/10)")


if __name__ == "__main__":
    main()
