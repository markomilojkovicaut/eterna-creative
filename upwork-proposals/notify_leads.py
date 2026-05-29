#!/usr/bin/env python3
"""
Upwork job lead notifier.

Fetches recent Upwork job listings via RSS, compares against a seen-jobs
cache, prints new leads, and updates the cache.

Usage:
    python notify_leads.py [--max-age DAYS] [--dry-run]

Environment variables:
    UPWORK_SEARCH_QUERIES   Comma-separated search terms (default: see below)
    SLACK_WEBHOOK_URL       Slack incoming webhook URL for notifications
    NOTIFICATION_EMAIL      Recipient email (requires SMTP_* vars too)
    SMTP_HOST               SMTP server host
    SMTP_PORT               SMTP server port (default: 587)
    SMTP_USER               SMTP username
    SMTP_PASSWORD           SMTP password
    SMTP_FROM               Sender address
"""

import argparse
import json
import os
import smtplib
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

try:
    import requests
    from dateutil import parser as dateparser
except ImportError as e:
    print(f"Missing dependency: {e}. Run: pip install -r requirements.txt", file=sys.stderr)
    sys.exit(1)

SCRIPT_DIR = Path(__file__).parent
SEEN_JOBS_FILE = SCRIPT_DIR / "seen_jobs.json"

DEFAULT_SEARCH_QUERIES = [
    "video editing creative",
    "motion graphics animation",
    "graphic design branding",
    "social media content creator",
    "creative agency video",
]

UPWORK_RSS_URL = (
    "https://www.upwork.com/ab/feed/jobs/rss"
    "?q={query}&sort=recency&paging=0%3B20&api_params=1"
)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0"
    ),
    "Accept": "application/rss+xml, application/xml, text/xml, */*",
}


def load_seen_jobs() -> set:
    if SEEN_JOBS_FILE.exists():
        with open(SEEN_JOBS_FILE) as f:
            data = json.load(f)
        return set(data) if isinstance(data, list) else set(data.keys())
    return set()


def save_seen_jobs(seen: set) -> None:
    with open(SEEN_JOBS_FILE, "w") as f:
        json.dump(sorted(seen), f, indent=2)


def parse_rss(xml_text: str, query: str) -> list[dict]:
    """Parse RSS XML and return list of job dicts."""
    jobs = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError as e:
        print(f"  Warning: XML parse error for '{query}': {e}", file=sys.stderr)
        return jobs

    ns = {"atom": "http://www.w3.org/2005/Atom"}

    channel = root.find("channel")
    if channel is None:
        return jobs

    for item in channel.findall("item"):
        job_id = (item.findtext("guid") or item.findtext("link") or "").strip()
        title = (item.findtext("title") or "No title").strip()
        link = (item.findtext("link") or "").strip()
        published = (item.findtext("pubDate") or "").strip()
        description = (item.findtext("description") or "").strip()

        if not job_id:
            continue

        jobs.append({
            "id": job_id,
            "title": title,
            "link": link,
            "published": published,
            "summary": description[:300],
            "query": query,
        })

    return jobs


def fetch_jobs(query: str) -> list[dict]:
    url = UPWORK_RSS_URL.format(query=urllib.parse.quote(query))
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        resp.raise_for_status()
        return parse_rss(resp.text, query)
    except requests.exceptions.HTTPError as e:
        code = e.response.status_code if e.response is not None else "?"
        print(f"  Warning: HTTP {code} for '{query}' — Upwork may require auth", file=sys.stderr)
        return []
    except Exception as e:
        print(f"  Warning: failed to fetch jobs for '{query}': {e}", file=sys.stderr)
        return []


def parse_published(published_str: str) -> datetime:
    if not published_str:
        return datetime.now(timezone.utc)
    try:
        dt = dateparser.parse(published_str)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt
    except Exception:
        return datetime.now(timezone.utc)


def filter_by_age(jobs: list[dict], max_age_days: int) -> list[dict]:
    cutoff = datetime.now(timezone.utc) - timedelta(days=max_age_days)
    return [j for j in jobs if parse_published(j["published"]) >= cutoff]


def send_slack_notification(webhook_url: str, leads: list[dict]) -> None:
    count = len(leads)
    blocks = [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": f"Upwork: {count} new lead{'s' if count != 1 else ''} found",
            },
        }
    ]
    for lead in leads[:10]:
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"*<{lead['link']}|{lead['title']}>*\nQuery: `{lead['query']}`",
            },
        })
    if count > 10:
        blocks.append({
            "type": "section",
            "text": {"type": "mrkdwn", "text": f"_…and {count - 10} more._"},
        })

    try:
        resp = requests.post(webhook_url, json={"blocks": blocks}, timeout=10)
        resp.raise_for_status()
        print(f"Slack notification sent ({count} leads).")
    except Exception as e:
        print(f"Warning: Slack notification failed: {e}", file=sys.stderr)


def send_email_notification(recipient: str, leads: list[dict]) -> None:
    smtp_host = os.environ.get("SMTP_HOST", "")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASSWORD", "")
    smtp_from = os.environ.get("SMTP_FROM", smtp_user)

    if not all([smtp_host, smtp_user, smtp_pass]):
        print("Warning: SMTP credentials incomplete, skipping email.", file=sys.stderr)
        return

    count = len(leads)
    subject = f"Upwork: {count} new lead{'s' if count != 1 else ''} found"

    lines = [f"Found {count} new Upwork lead(s):\n"]
    for i, lead in enumerate(leads, 1):
        lines.append(f"{i}. {lead['title']}")
        lines.append(f"   Link: {lead['link']}")
        lines.append(f"   Query: {lead['query']}")
        lines.append(f"   Posted: {lead['published']}")
        lines.append("")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_from
    msg["To"] = recipient
    msg.attach(MIMEText("\n".join(lines), "plain"))

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_from, [recipient], msg.as_string())
        print(f"Email sent to {recipient} ({count} leads).")
    except Exception as e:
        print(f"Warning: email notification failed: {e}", file=sys.stderr)


def main() -> None:
    parser = argparse.ArgumentParser(description="Notify about new Upwork job leads.")
    parser.add_argument(
        "--max-age",
        type=int,
        default=7,
        metavar="DAYS",
        help="Maximum job age in days (default: 7)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print leads without updating cache or sending notifications",
    )
    args = parser.parse_args()

    queries_env = os.environ.get("UPWORK_SEARCH_QUERIES", "")
    queries = [q.strip() for q in queries_env.split(",") if q.strip()] or DEFAULT_SEARCH_QUERIES

    print(f"Checking {len(queries)} search queries (max-age: {args.max_age}d)…")

    seen = load_seen_jobs()
    all_jobs: list[dict] = []

    for query in queries:
        jobs = fetch_jobs(query)
        recent = filter_by_age(jobs, args.max_age)
        all_jobs.extend(recent)
        print(f"  '{query}': {len(recent)} recent job(s)")

    # Deduplicate across queries
    seen_in_run: set[str] = set()
    new_leads: list[dict] = []
    for job in all_jobs:
        job_id = job["id"]
        if job_id and job_id not in seen and job_id not in seen_in_run:
            new_leads.append(job)
            seen_in_run.add(job_id)

    print(f"\nNew leads found: {len(new_leads)}")

    if new_leads:
        for lead in new_leads:
            print(f"  • {lead['title']}")
            print(f"    {lead['link']}")
            print(f"    Query: {lead['query']} | Posted: {lead['published']}")
            print()

        if not args.dry_run:
            slack_url = os.environ.get("SLACK_WEBHOOK_URL", "")
            if slack_url:
                send_slack_notification(slack_url, new_leads)

            notify_email = os.environ.get("NOTIFICATION_EMAIL", "")
            if notify_email:
                send_email_notification(notify_email, new_leads)

            if not slack_url and not notify_email:
                print(
                    "(No notification channels configured. "
                    "Set SLACK_WEBHOOK_URL or NOTIFICATION_EMAIL to enable alerts.)"
                )
    else:
        print("No new leads since last run.")

    if not args.dry_run:
        all_job_ids = {j["id"] for j in all_jobs if j["id"]}
        updated_seen = seen | all_job_ids
        save_seen_jobs(updated_seen)
        if updated_seen != seen:
            print(f"Cache updated: {len(updated_seen)} total seen job(s).")
        else:
            print("Cache unchanged.")
    else:
        print("(Dry-run: cache not updated.)")


if __name__ == "__main__":
    main()
