#!/usr/bin/env python3
"""
Upwork Job Scraper v2

Uses flash_mage~upwork Apify actor with server-side keyword search.
Supports multiple query terms (array), returns detailed job data
with proper Upwork URLs and apply links.

Usage:
    python upwork_scraper_v2.py --query "appointment setter" --max-age 2 --limit 20
    python upwork_scraper_v2.py --search-any "ai automation n8n" --limit 50
    python upwork_scraper_v2.py --search-exact "voice agent" --experience intermediate,expert
    python upwork_scraper_v2.py --query "chatbot" --verified-payment --min-budget 1000 -o .tmp/jobs.json
"""

import os
import re
import sys
import json
import argparse
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from apify_client import ApifyClient

load_dotenv()

ACTOR_ID = "flash_mage~upwork"


def scrape_upwork_jobs(
    query: str = None,
    search_any: str = None,
    search_exact: str = None,
    search_title: str = None,
    category: list = None,
    location: list = None,
    experience_level: list = None,
    job_type: list = None,
    max_age_days: int = None,
) -> list[dict]:
    """Scrape Upwork jobs using flash_mage Apify actor with keyword search.

    flash_mage accepts 'query' as an array of search terms.
    We combine all search params into query array terms.
    """

    api_token = os.getenv("APIFY_API_TOKEN")
    if not api_token:
        print("Error: APIFY_API_TOKEN not found in .env", file=sys.stderr)
        return []

    client = ApifyClient(api_token)

    # Build query array from all search params
    queries = []
    if query:
        queries.append(query)
    if search_any:
        # Split into individual terms and combine as one query
        queries.append(search_any)
    if search_exact:
        queries.append(search_exact)
    if search_title:
        queries.append(search_title)

    if not queries:
        queries = [""]  # empty query returns recent jobs

    run_input = {
        "query": queries,
        "maxItems": 50,  # flash_mage free tier returns ~10 per run
    }

    # Log what we're searching for
    search_desc = " | ".join(queries)
    print(f'Scraping Upwork jobs: "{search_desc}"')
    if max_age_days:
        print(f"  Max age: {max_age_days} days")
    if experience_level:
        print(f"  Experience: {', '.join(experience_level)}")
    if location:
        print(f"  Location: {', '.join(location)}")

    try:
        run = client.actor(ACTOR_ID).call(run_input=run_input, timeout_secs=120)
    except Exception as e:
        print(f"Error running actor: {e}", file=sys.stderr)
        return []

    if not run:
        print("Error: Actor run failed to start", file=sys.stderr)
        return []

    dataset_id = run["defaultDatasetId"]
    print(f"Scrape finished. Fetching results from dataset {dataset_id}...")

    # Fetch all results
    raw_items = list(client.dataset(dataset_id).iterate_items())
    print(f"Fetched {len(raw_items)} items from Apify")

    # Filter to detail items only and apply max_age filter
    jobs = []
    cutoff = None
    if max_age_days:
        cutoff = datetime.now(timezone.utc) - timedelta(days=max_age_days)

    for item in raw_items:
        if item.get("type") != "detail":
            continue

        data = item.get("data", {})
        opening = data.get("opening", {})

        # Apply age filter
        if cutoff:
            posted = opening.get("postedOn", "") or opening.get("publishTime", "")
            if posted:
                try:
                    post_date = datetime.fromisoformat(posted.replace("Z", "+00:00"))
                    if post_date < cutoff:
                        continue
                except (ValueError, TypeError):
                    pass

        jobs.append(item)

    print(f"Jobs after age filter: {len(jobs)}")
    return jobs


def filter_jobs(
    jobs: list[dict],
    verified_payment: bool = False,
    min_budget: float = None,
    limit: int = None,
) -> list[dict]:
    """Apply post-scrape filters."""

    filtered = []

    for job in jobs:
        data = job.get("data", {})
        client_data = data.get("client", {})
        budget_data = data.get("budget", {})

        # Payment verification filter
        if verified_payment:
            if not client_data.get("paymentMethodVerified", False):
                continue

        # Budget filter
        if min_budget:
            fb = budget_data.get("fixedBudget", 0) or 0
            hr = budget_data.get("hourlyRate", {})
            max_rate = hr.get("max", 0) if hr else 0
            max_val = max(fb, max_rate)
            if max_val < min_budget:
                continue

        filtered.append(job)

    # Apply limit after filtering
    if limit and len(filtered) > limit:
        filtered = filtered[:limit]

    return filtered


def format_job(item: dict) -> dict:
    """Normalize flash_mage actor output to standard format.

    flash_mage returns items with: id, type, title, link, data
    data contains: opening (description, skills, etc), budget, client, skills
    """

    data = item.get("data", {})
    opening = data.get("opening", {})
    budget_data = data.get("budget", {})
    client_data = data.get("client", {})
    skills_raw = data.get("skills", opening.get("skills", []))

    # Format budget string
    budget = "Not specified"
    if budget_data:
        fb = budget_data.get("fixedBudget", 0)
        hr = budget_data.get("hourlyRate", {})
        if fb:
            budget = f"${fb:,.0f} fixed"
        elif hr and hr.get("min"):
            budget = f"${hr['min']}-${hr['max']}/hr"

    # Extract skill names
    skills = []
    if isinstance(skills_raw, list):
        for s in skills_raw:
            if isinstance(s, dict):
                skills.append(s.get("name", str(s)))
            else:
                skills.append(str(s))

    # Extract questions
    questions = opening.get("questions", [])
    if isinstance(questions, list):
        questions = [q.get("question", q) if isinstance(q, dict) else q for q in questions]

    # Clean URL
    url = item.get("link", "")
    if "?" in url:
        url = url.split("?")[0]

    # Client stats
    client_stats = client_data.get("stats", {})
    if isinstance(client_stats, dict):
        total_spent = client_stats.get("totalSpent", 0)
        total_hires = client_stats.get("totalHires", 0)
    else:
        total_spent = 0
        total_hires = 0

    location = client_data.get("location", {})
    country = location.get("country", "") if isinstance(location, dict) else ""

    return {
        "id": item.get("id", ""),
        "title": item.get("title", ""),
        "description": opening.get("description", ""),
        "url": url,
        "budget": budget,
        "job_type": opening.get("workload", ""),
        "experience_level": opening.get("contractorTier", ""),
        "duration": opening.get("duration", ""),
        "skills": skills,
        "category": "",
        "questions": questions or [],
        "posted": opening.get("postedOn") or opening.get("publishTime", ""),
        "applicants": opening.get("applicants", 0),
        "client": {
            "country": country,
            "industry": client_data.get("industry", ""),
            "payment_verified": client_data.get("paymentMethodVerified", False),
            "total_spent": total_spent,
            "rating": client_stats.get("rating", 0) if isinstance(client_stats, dict) else 0,
            "hire_rate": 0,
            "has_hired": total_hires > 0,
        },
    }


def main():
    parser = argparse.ArgumentParser(description="Scrape Upwork jobs with keyword search")

    # Search parameters (server-side)
    parser.add_argument("--query", "-q", help="Main search term (e.g. 'appointment setter')")
    parser.add_argument("--search-any", help="Space-separated words, at least one must match")
    parser.add_argument("--search-exact", help="Exact phrase match")
    parser.add_argument("--search-title", help="Words that must appear in job title")

    # Filter parameters
    parser.add_argument("--category", help="Job categories (comma-separated)")
    parser.add_argument("--location", help="Client locations (comma-separated)")
    parser.add_argument("--experience", "-e", help="Experience levels (comma-separated: entry,intermediate,expert)")
    parser.add_argument("--job-type", help="Job types (comma-separated: fixed,hourly)")
    parser.add_argument("--max-age", "-d", type=int, help="Max job age in days (e.g. 2 = last 2 days)")

    # Post-scrape filters
    parser.add_argument("--verified-payment", "-v", action="store_true", help="Only verified payment clients")
    parser.add_argument("--min-budget", type=float, help="Minimum budget ($)")
    parser.add_argument("--limit", "-l", type=int, help="Max jobs to return after filtering")

    # Output
    parser.add_argument("--output", "-o", help="Output JSON file")

    args = parser.parse_args()

    # At least one search parameter required
    if not any([args.query, args.search_any, args.search_exact, args.search_title]):
        print("Error: Provide at least one search parameter (--query, --search-any, --search-exact, --search-title)")
        sys.exit(1)

    # Parse comma-separated list args
    category = [c.strip() for c in args.category.split(",")] if args.category else None
    location = [l.strip() for l in args.location.split(",")] if args.location else None
    experience = [e.strip() for e in args.experience.split(",")] if args.experience else None
    job_type = [j.strip() for j in args.job_type.split(",")] if args.job_type else None

    # Scrape jobs
    jobs = scrape_upwork_jobs(
        query=args.query,
        search_any=args.search_any,
        search_exact=args.search_exact,
        search_title=args.search_title,
        category=category,
        location=location,
        experience_level=experience,
        job_type=job_type,
        max_age_days=args.max_age,
    )

    # Post-scrape filters
    filtered = filter_jobs(
        jobs,
        verified_payment=args.verified_payment,
        min_budget=args.min_budget,
        limit=args.limit,
    )

    # Format jobs
    formatted = [format_job(job) for job in filtered]

    # Display results
    print(f"\n=== {len(formatted)} jobs {'after filtering' if args.verified_payment or args.min_budget else 'found'} ===\n")

    for i, job in enumerate(formatted[:10], 1):
        print(f"{i}. {job['title'][:70]}")
        print(f"   Budget: {job['budget']} | Level: {job['experience_level']} | Applicants: {job['applicants']}")
        print(f"   Client: {job['client']['country']} | Spent: ${job['client']['total_spent']:,.0f} | Rating: {job['client']['rating']}")
        print(f"   Skills: {', '.join(job['skills'][:5])}")
        print(f"   URL: {job['url']}")
        print()

    if len(formatted) > 10:
        print(f"... and {len(formatted) - 10} more jobs")

    # Save to file
    if args.output:
        os.makedirs(os.path.dirname(args.output) or ".", exist_ok=True)
        with open(args.output, "w") as f:
            json.dump(formatted, f, indent=2)
        print(f"\nSaved {len(formatted)} jobs to {args.output}")

    return formatted


if __name__ == "__main__":
    main()
