#!/usr/bin/env python3
"""
Upwork Proposal Generator

Generates customized cover letters and project proposals for Upwork jobs.
Uses Sonnet 4.5 with extended thinking for high-quality personalization.
Generates Mermaid diagrams and embeds them in Google Doc proposals.

Usage:
    python upwork_proposal_generator.py --input .tmp/upwork_jobs.json
    python upwork_proposal_generator.py --input .tmp/upwork_jobs.json --workers 3 -o .tmp/proposals.json
"""

import base64
import json
import os
import re
import time
import argparse
import threading
import anthropic
from concurrent.futures import ThreadPoolExecutor, as_completed
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from dotenv import load_dotenv

load_dotenv()

MODEL = "claude-opus-4-20250514"


def load_config() -> dict:
    """Load user config from config/profile.json."""
    config_path = os.path.join(os.path.dirname(__file__), "config", "profile.json")
    if os.path.exists(config_path):
        with open(config_path) as f:
            return json.load(f)
    return {}


def create_message(client: anthropic.Anthropic, **kwargs) -> str:
    """Create a message using streaming (required for Opus with large outputs).
    Returns the concatenated text content."""
    text = ""
    with client.messages.stream(**kwargs) as stream:
        for event in stream:
            if hasattr(event, 'type') and event.type == 'content_block_delta':
                if hasattr(event.delta, 'text'):
                    text += event.delta.text
    return text.strip()


# Semaphore to serialize Google Doc creation (prevents SSL/rate limit errors)
DOC_CREATION_LOCK = threading.Semaphore(1)


def discover_contact_name(job: dict, anthropic_client: anthropic.Anthropic) -> dict:
    """
    Use AI to discover the likely contact name from job posting.

    Returns dict with:
    - name: str | None
    - confidence: 'high' | 'medium' | 'low' | None
    - source: 'description' | 'company_research' | None
    - hedge: bool
    """
    description = job.get('description', '')
    title = job.get('title', '')

    if not description:
        return {"name": None, "confidence": None, "source": None, "hedge": False}

    try:
        result_text = create_message(
            anthropic_client,
            model=MODEL,
            max_tokens=300,
            messages=[{
                "role": "user",
                "content": f"""Analyze this Upwork job posting and find the name of the person who posted it.

TITLE: {title}

DESCRIPTION:
{description[:1500]}

Look for:
1. Signatures at the end (e.g., "Thanks, John" or "- Sarah")
2. Self-introductions (e.g., "My name is..." or "I'm Mike...")
3. Company/product names that you recognize - if so, who is the likely founder/CEO?
4. Any other clues about who posted this

Respond in this exact JSON format:
{{"name": "FirstName", "confidence": "high/medium/low", "source": "description/company_research", "hedge": true/false}}

Rules:
- "name": First name only, or null if not found
- "confidence": "high" if name is explicitly stated, "medium" if inferred from company, "low" if guessing
- "source": "description" if found in text, "company_research" if inferred from company name
- "hedge": true if confidence is medium or low (we should hedge in our greeting), false if high

If you cannot determine a name with reasonable confidence, return:
{{"name": null, "confidence": null, "source": null, "hedge": false}}

Return ONLY the JSON, no other text."""
            }]
        )
        result = json.loads(result_text)
        return {
            "name": result.get("name"),
            "confidence": result.get("confidence"),
            "source": result.get("source"),
            "hedge": result.get("hedge", False)
        }
    except Exception as e:
        print(f"    Contact discovery failed: {str(e)[:40]}")
        return {"name": None, "confidence": None, "source": None, "hedge": False}


def format_greeting(contact_info: dict) -> str:
    """Format the greeting based on contact discovery results."""
    if not contact_info.get("name"):
        return "Hey"

    name = contact_info["name"]

    if contact_info.get("hedge"):
        return f"Hey {name} (if I have the right person)"
    else:
        return f"Hey {name}"


def retry_with_backoff(func, max_retries=5, base_delay=2.0):
    """Execute function with exponential backoff retry."""
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise
            delay = base_delay * (2 ** attempt)
            print(f"    Retry {attempt + 1}/{max_retries} after {delay}s: {str(e)[:200]}...")
            time.sleep(delay)
    return None


def extract_job_id(url: str) -> str:
    """Extract job ID from Upwork URL."""
    match = re.search(r'~(\d+)', url)
    return f"~{match.group(1)}" if match else None


def create_apply_link(url: str) -> str:
    """Convert job URL to apply link."""
    job_id = extract_job_id(url)
    if job_id:
        return f"https://www.upwork.com/nx/proposals/job/{job_id}/apply/"
    return url


def generate_mermaid_image_url(mermaid_code: str) -> str:
    """Convert Mermaid code to an image URL via mermaid.ink (PNG for Google Docs compatibility)."""
    encoded = base64.urlsafe_b64encode(mermaid_code.encode()).decode()
    return f"https://mermaid.ink/img/{encoded}"


def generate_proposal_with_diagram(job: dict, client: anthropic.Anthropic, contact_info: dict = None, extra_context: str = None) -> tuple:
    """
    Generate project proposal + Mermaid diagram using Sonnet 4.5 with extended thinking.
    Returns (proposal_text, mermaid_code).
    """
    greeting = format_greeting(contact_info) if contact_info else "Hey"

    # Include client questions if available
    questions_context = ""
    questions = job.get('questions', [])
    if questions:
        if isinstance(questions, list):
            questions_text = "\n".join(f"- {q}" for q in questions[:5])
        else:
            questions_text = str(questions)
        questions_context = f"\nClient Questions:\n{questions_text}\n"

    context_block = ""
    if extra_context:
        context_block = f"""
RELEVANT EXPERIENCE & CASE STUDIES (use these naturally in the proposal - reference specific results where they fit, don't dump all at once):
{extra_context}
"""

    # Load config
    config = load_config()
    name = config.get("name", "there")
    pitch = config.get("pitch", "I specialize in building similar solutions")

    prompt = f"""Write a personalized project proposal for this Upwork job. Write as {name} - first person, conversational, direct.

JOB DETAILS:
Title: {job['title']}
Description: {job.get('description', '')[:500]}
Skills Required: {job.get('skills', [])}
Budget: {job.get('budget', 'Not specified')}
{questions_context}{context_block}
PROPOSAL FORMAT:

{greeting}.

I spent ~15 minutes putting this together for you. In short, it's how I would create your [2-4 word paraphrase of their system/need] end to end.

{pitch}

Here's a step-by-step, along with my reasoning at every point:

My proposed approach

[Provide 4-6 detailed numbered steps. For each step:
- Start with what you'd do
- Explain WHY this approach (the reasoning)
- Mention specific tools/tech where relevant (n8n, Claude API, Zapier, Make, GPT, etc.)
- Keep it conversational, like you're explaining to a smart person]

What you'll get

[2-3 concrete deliverables, be specific]

Timeline

[Realistic estimate, conversational tone]

TONE RULES:
- First person ("I would...", "Here's how I'd...")
- Direct and confident, not salesy
- Like you're talking to a peer, not pitching
- Specific technical details, no fluff
- Use plain text with clear section headers (no markdown symbols like ** or #)
- NEVER use em dashes. Use regular dashes (-) only.
- Total ~300 words
{f"- Address the client's questions naturally within your proposal" if questions else ""}

After the proposal text, add exactly this separator on its own line:
---MERMAID---

Then write a simple Mermaid flowchart (graph TD) showing your proposed approach as a visual flow.
Rules for the diagram:
- Max 6 nodes
- Short labels (3-5 words per node)
- Use graph TD (top-down)
- Keep it clean and readable
- No special characters in labels

Return the proposal text, then ---MERMAID---, then the Mermaid code."""

    full_text = create_message(
        client,
        model=MODEL,
        max_tokens=10000,
        messages=[{"role": "user", "content": prompt}]
    )

    # Split proposal and Mermaid code
    if "---MERMAID---" in full_text:
        parts = full_text.split("---MERMAID---", 1)
        proposal = parts[0].strip()
        mermaid_code = parts[1].strip()
        # Clean mermaid code - remove markdown code fences if present
        mermaid_code = re.sub(r'^```(?:mermaid)?\s*', '', mermaid_code)
        mermaid_code = re.sub(r'\s*```$', '', mermaid_code)
    else:
        proposal = full_text
        mermaid_code = ""

    return proposal, mermaid_code


def generate_cover_letter(job: dict, proposal_doc_url: str, client: anthropic.Anthropic) -> str:
    """Generate customized cover letter using Sonnet 4.5 with extended thinking."""

    prompt = f"""Generate a short, personalized Upwork cover letter for this job.

JOB DETAILS:
Title: {job['title']}
Skills: {job.get('skills', [])}
Budget: {job.get('budget', 'Not specified')}

COVER LETTER FORMAT (follow EXACTLY - must fit above the fold):
"Hi. I work with [2-4 word paraphrase] daily & just built a [2-5 word thing]. Free walkthrough: [LINK]"

EXAMPLES of good paraphrases:
- "n8n automations" not "n8n workflow automation pipelines"
- "AI agents" not "AI-powered autonomous agent systems"
- "Zapier workflows" not "Zapier integration and automation workflows"
- "CRM setups" not "customer relationship management system configurations"

RULES:
- Total must be under 35 words (critical - must stay above the fold)
- [2-4 word paraphrase] = very short description of their need
- [2-5 word thing] = specific relevant thing you built
- End with: Free walkthrough: [LINK]
- No "I'm excited", "I'd love to", or any filler
- NEVER use em dashes. Use regular dashes (-) only.

Return ONLY the cover letter text, nothing else. The [LINK] placeholder will be replaced."""

    text = create_message(
        client,
        model=MODEL,
        max_tokens=8000,
        messages=[{"role": "user", "content": prompt}]
    )

    text = text.replace('[LINK]', proposal_doc_url)
    text = text.replace('[link]', proposal_doc_url)
    return text


def generate_cover_letter_simple(job: dict, client: anthropic.Anthropic) -> str:
    """Generate simplified cover letter without doc link."""

    prompt = f"""Generate a short, personalized Upwork cover letter for this job.

JOB DETAILS:
Title: {job['title']}
Skills: {job.get('skills', [])}
Budget: {job.get('budget', 'Not specified')}

FORMAT (follow EXACTLY - must fit above the fold):
"Hi. I work with [2-4 word paraphrase] daily & just built a [2-5 word thing]. Happy to walk you through my approach."

RULES:
- Total must be under 35 words
- No "I'm excited", "I'd love to", or any filler
- NEVER use em dashes. Use regular dashes (-) only.
- End with offer to explain approach

Return ONLY the cover letter text."""

    return create_message(
        client,
        model=MODEL,
        max_tokens=500,
        messages=[{"role": "user", "content": prompt}]
    )


def create_formatted_google_doc(title: str, content: str, drive_service, docs_service, mermaid_image_url: str = None) -> str:
    """Create a Google Doc with formatted proposal content and optional Mermaid diagram."""

    doc = docs_service.documents().create(body={
        'title': f"Proposal: {title[:50]}"
    }).execute()

    doc_id = doc.get('documentId')

    # Parse content and build formatting requests
    requests = []
    current_index = 1

    lines = content.split('\n')

    # Section headers to make bold
    headers = ['My proposed approach', 'What you\'ll get', 'Timeline',
               'Project Understanding', 'Proposed Approach', 'Deliverables',
               'Timeline & Investment', 'Investment', 'Why Me']

    # Track where to insert diagram (after "My proposed approach" header)
    diagram_insert_index = None

    for line in lines:
        if not line.strip():
            requests.append({
                'insertText': {
                    'location': {'index': current_index},
                    'text': '\n'
                }
            })
            current_index += 1
            continue

        is_header = any(line.strip().startswith(h) or line.strip() == h for h in headers)
        is_bullet = line.strip().startswith('- ') or line.strip().startswith('• ')

        if is_bullet:
            clean_line = line.strip()[2:].strip()
            text_to_insert = f"\u2022 {clean_line}\n"
        else:
            text_to_insert = f"{line.strip()}\n"

        requests.append({
            'insertText': {
                'location': {'index': current_index},
                'text': text_to_insert
            }
        })

        if is_header:
            requests.append({
                'updateTextStyle': {
                    'range': {
                        'startIndex': current_index,
                        'endIndex': current_index + len(text_to_insert) - 1
                    },
                    'textStyle': {
                        'bold': True,
                        'fontSize': {'magnitude': 12, 'unit': 'PT'}
                    },
                    'fields': 'bold,fontSize'
                }
            })

            # Mark position after "My proposed approach" for diagram insertion
            if 'proposed approach' in line.strip().lower():
                diagram_insert_index = current_index + len(text_to_insert)

        current_index += len(text_to_insert)

    # Insert Mermaid diagram image if available
    if mermaid_image_url and diagram_insert_index:
        # Add a newline before the image
        requests.append({
            'insertText': {
                'location': {'index': diagram_insert_index},
                'text': '\n'
            }
        })
        requests.append({
            'insertInlineImage': {
                'location': {'index': diagram_insert_index + 1},
                'uri': mermaid_image_url,
                'objectSize': {
                    'width': {'magnitude': 400, 'unit': 'PT'},
                    'height': {'magnitude': 250, 'unit': 'PT'}
                }
            }
        })
        requests.append({
            'insertText': {
                'location': {'index': diagram_insert_index + 2},
                'text': '\n'
            }
        })

    # Execute all requests
    if requests:
        try:
            docs_service.documents().batchUpdate(
                documentId=doc_id,
                body={'requests': requests}
            ).execute()
        except Exception as img_err:
            if 'insertInlineImage' in str(img_err) and mermaid_image_url:
                # Retry without image if image insert fails
                text_only_requests = [r for r in requests if 'insertInlineImage' not in r]
                docs_service.documents().batchUpdate(
                    documentId=doc_id,
                    body={'requests': text_only_requests}
                ).execute()
                print(f"    (diagram skipped - image fetch failed)")
            else:
                raise

    # Make publicly viewable with link
    drive_service.permissions().create(
        fileId=doc_id,
        body={'type': 'anyone', 'role': 'reader'},
        fields='id'
    ).execute()

    drive_service.files().update(
        fileId=doc_id,
        body={'copyRequiresWriterPermission': False}
    ).execute()

    return f"https://docs.google.com/document/d/{doc_id}"


def process_job(job: dict, anthropic_client, drive_service, docs_service, extra_context: str = None) -> dict:
    """Process a single job: discover contact, generate proposal + diagram, then cover letter."""

    print(f"  Processing: {job['title'][:50]}...")

    # Discover contact name first
    contact_info = discover_contact_name(job, anthropic_client)
    if contact_info.get("name"):
        confidence = contact_info.get("confidence", "?")
        print(f"    Contact found: {contact_info['name']} ({confidence})")

    # Generate apply link
    apply_link = create_apply_link(job.get('url', ''))

    # Generate proposal with Mermaid diagram
    proposal, mermaid_code = generate_proposal_with_diagram(job, anthropic_client, contact_info, extra_context)

    # Generate Mermaid image URL
    mermaid_image_url = generate_mermaid_image_url(mermaid_code) if mermaid_code else None

    # Create Google Doc with semaphore (serialized) and exponential retry
    doc_url = ""
    if docs_service is not None:
        with DOC_CREATION_LOCK:
            try:
                doc_url = retry_with_backoff(
                    lambda: create_formatted_google_doc(
                        job['title'], proposal, drive_service, docs_service, mermaid_image_url
                    ),
                    max_retries=4,
                    base_delay=1.5
                )
                print(f"    Doc created: {doc_url[:60]}...")
            except Exception as e:
                print(f"    Doc failed after retries: {str(e)[:300]}")

    # Generate cover letter
    if doc_url:
        cover_letter = generate_cover_letter(job, doc_url, anthropic_client)
    else:
        cover_letter = generate_cover_letter_simple(job, anthropic_client)

    return {
        **job,
        'apply_link': apply_link,
        'cover_letter': cover_letter,
        'proposal_doc': doc_url if doc_url else proposal[:500],
        'contact_name': contact_info.get('name'),
        'contact_confidence': contact_info.get('confidence'),
    }


def create_new_spreadsheet(title: str, sheets_service) -> str:
    """Create a new Google Sheet and return its ID."""
    spreadsheet = sheets_service.spreadsheets().create(body={
        'properties': {'title': title},
        'sheets': [{'properties': {'title': 'Jobs'}}]
    }).execute()
    return spreadsheet.get('spreadsheetId')


HEADERS = [
    'Title', 'URL', 'Budget', 'Experience', 'Skills',
    'Client Country', 'Client Spent', 'Client Rating', 'Applicants',
    'Contact Name', 'Contact Confidence', 'Apply Link', 'Cover Letter', 'Proposal Doc'
]

SHEET_ID_FILE = os.path.join(os.path.dirname(__file__), '.tmp', 'upwork_sheet_id.txt')


def get_default_sheet_id():
    """Load the saved default sheet ID, if any."""
    if os.path.exists(SHEET_ID_FILE):
        with open(SHEET_ID_FILE) as f:
            return f.read().strip()
    return None


def save_default_sheet_id(sheet_id: str):
    """Save sheet ID as the default for future runs."""
    os.makedirs(os.path.dirname(SHEET_ID_FILE), exist_ok=True)
    with open(SHEET_ID_FILE, 'w') as f:
        f.write(sheet_id)


def ensure_headers(sheet_id: str, sheets_service):
    """Add headers if the sheet is empty."""
    result = sheets_service.spreadsheets().values().get(
        spreadsheetId=sheet_id,
        range='Jobs!A1:N1'
    ).execute()
    existing = result.get('values', [])
    if not existing:
        sheets_service.spreadsheets().values().update(
            spreadsheetId=sheet_id,
            range='Jobs!A1:N1',
            valueInputOption='RAW',
            body={'values': [HEADERS]}
        ).execute()


def append_to_sheet(sheet_id: str, jobs: list[dict], sheets_service):
    """Append job rows to the existing sheet below current data."""
    ensure_headers(sheet_id, sheets_service)

    rows = []
    for job in jobs:
        skills = job.get('skills', [])
        if isinstance(skills, list):
            skills = ', '.join(skills[:5])

        client = job.get('client', {})

        rows.append([
            job.get('title', ''),
            job.get('url', ''),
            job.get('budget', ''),
            job.get('experience_level', ''),
            skills,
            client.get('country', '') if isinstance(client, dict) else '',
            f"${client.get('total_spent', 0):,.0f}" if isinstance(client, dict) else '',
            client.get('rating', 0) if isinstance(client, dict) else '',
            job.get('applicants', ''),
            job.get('contact_name', '') or '',
            job.get('contact_confidence', '') or '',
            job.get('apply_link', ''),
            job.get('cover_letter', ''),
            job.get('proposal_doc', ''),
        ])

    sheets_service.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range='Jobs!A:N',
        valueInputOption='RAW',
        insertDataOption='INSERT_ROWS',
        body={'values': rows}
    ).execute()

    print(f"Appended {len(jobs)} jobs to sheet")


def main():
    parser = argparse.ArgumentParser(description="Generate Upwork proposals")
    parser.add_argument("--input", "-i", required=True, help="Input JSON file with jobs")
    parser.add_argument("--sheet-id", "-s", help="Google Sheet ID (creates new if not provided)")
    parser.add_argument("--output", "-o", help="Output JSON file")
    parser.add_argument("--filter-keywords", "-f", help="Only process jobs with these keywords (comma-separated)")
    parser.add_argument("--workers", "-w", type=int, default=5, help="Number of parallel workers (default: 5)")
    parser.add_argument("--context", "-c", help="Text file with extra context to inject into proposal prompts (case studies, approach, etc.)")

    args = parser.parse_args()

    # Load jobs
    with open(args.input) as f:
        jobs = json.load(f)

    # Filter if specified
    if args.filter_keywords:
        keywords = [k.strip().lower() for k in args.filter_keywords.split(',')]
        jobs = [j for j in jobs if any(
            kw in (j.get('title', '') + ' ' + j.get('description', '')).lower()
            for kw in keywords
        )]

    # Load extra context if provided
    extra_context = None
    if args.context:
        with open(args.context) as f:
            extra_context = f.read().strip()
        print(f"Loaded context from {args.context} ({len(extra_context)} chars)")

    print(f"Processing {len(jobs)} jobs...", flush=True)

    # Initialize Anthropic client
    anthropic_client = anthropic.Anthropic()

    # Initialize Google services
    with open('config/token.json', 'r') as f:
        token_data = json.load(f)
    available_scopes = token_data.get('scopes', [])

    creds = Credentials.from_authorized_user_file('config/token.json', available_scopes)
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())

    sheets_service = build('sheets', 'v4', credentials=creds)
    drive_service = build('drive', 'v3', credentials=creds)

    has_docs_scope = 'https://www.googleapis.com/auth/documents' in available_scopes
    docs_service = build('docs', 'v1', credentials=creds) if has_docs_scope else None
    if not has_docs_scope:
        print("Note: documents scope not available - will skip Google Doc creation")

    # Resolve sheet: explicit flag > saved default > create new
    if args.sheet_id:
        sheet_id = args.sheet_id
        save_default_sheet_id(sheet_id)
    else:
        sheet_id = get_default_sheet_id()
        if sheet_id:
            print(f"Using existing sheet: https://docs.google.com/spreadsheets/d/{sheet_id}")
        else:
            sheet_title = "Upwork Proposals"
            sheet_id = create_new_spreadsheet(sheet_title, sheets_service)
            save_default_sheet_id(sheet_id)
            print(f"Created new sheet: https://docs.google.com/spreadsheets/d/{sheet_id}")

    # Process jobs in parallel
    print(f"Processing {len(jobs)} jobs with {args.workers} parallel workers...", flush=True)

    processed_jobs = [None] * len(jobs)
    completed = 0

    def process_with_index(idx_job):
        idx, job = idx_job
        try:
            return idx, process_job(job, anthropic_client, drive_service, docs_service, extra_context), None
        except Exception as e:
            return idx, {**job, 'apply_link': create_apply_link(job.get('url', '')), 'cover_letter': '', 'proposal_doc': ''}, str(e)

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {executor.submit(process_with_index, (i, job)): i for i, job in enumerate(jobs)}

        for future in as_completed(futures):
            idx, result, error = future.result()
            processed_jobs[idx] = result
            completed += 1

            if error:
                print(f"[{completed}/{len(jobs)}] X {jobs[idx]['title'][:40]}... Error: {error[:50]}", flush=True)
            else:
                print(f"[{completed}/{len(jobs)}] OK {result['title'][:50]}...", flush=True)

    # Append to sheet
    append_to_sheet(sheet_id, processed_jobs, sheets_service)

    # Save output
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(processed_jobs, f, indent=2)
        print(f"Saved to {args.output}")

    print(f"\nDone! Processed {len(processed_jobs)} jobs")
    print(f"Sheet: https://docs.google.com/spreadsheets/d/{sheet_id}")

    return processed_jobs


if __name__ == "__main__":
    main()
