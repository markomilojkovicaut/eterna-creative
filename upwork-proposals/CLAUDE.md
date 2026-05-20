# Upwork Job Scraper & Proposal Generator

Scrape Upwork jobs by keyword, generate personalized proposals with Mermaid diagrams, and output everything to a Google Sheet with one-click apply links.

## First-Time Setup

Guide the user through these steps one at a time.

### Step 1: Profile
Ask the user:
- "What's your name?" (used in proposal greetings)
- "Write a 1-2 sentence pitch about yourself/your agency. Example: 'I run My Agency - we build AI automations and voice agents for businesses, and I have experience building similar workflows.'"

Update `config/profile.json` with their answers.

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Environment Variables
```bash
cp .env.example .env
```

Guide them to get:
1. **Apify API token** - Sign up at https://apify.com, go to Settings > Integrations
2. **Anthropic API key** - Get at https://console.anthropic.com/settings/keys

### Step 4: Google OAuth (for Sheets + Docs output)
1. Go to https://console.cloud.google.com
2. Create a project (or use existing)
3. Enable these APIs: Google Sheets API, Google Docs API, Google Drive API
4. Create OAuth 2.0 credentials (Desktop app type)
5. Download the JSON and save as `config/credentials.json`
6. Run the auth flow: `python -c "from google_auth_oauthlib.flow import InstalledAppFlow; flow = InstalledAppFlow.from_client_secrets_file('config/credentials.json', ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive']); creds = flow.run_local_server(port=0); open('config/token.json', 'w').write(creds.to_json())"`

### Step 5: Test
```bash
python upwork_scraper_v2.py --query "ai automation" --max-age 3 --limit 5 -o .tmp/test_jobs.json
```

## Usage

### Scrape jobs
```bash
python upwork_scraper_v2.py --query "appointment setter" --max-age 2 --limit 20 -o .tmp/jobs.json
```

### Generate proposals
```bash
python upwork_proposal_generator.py -i .tmp/jobs.json --workers 3 -o .tmp/proposals.json
```

### Search modes
- `--query` - General search
- `--search-any` - At least one keyword matches
- `--search-exact` - Exact phrase match
- `--search-title` - Must appear in job title

### Filters
- `--max-age N` - Jobs posted in last N days
- `--verified-payment` - Only verified payment clients
- `--min-budget N` - Minimum budget
- `--limit N` - Max jobs to return

### Extra context
Pass a text file with your case studies/experience for better proposals:
```bash
python upwork_proposal_generator.py -i .tmp/jobs.json --context my-case-studies.txt
```

## Output
- Google Sheet with all jobs, cover letters, proposal doc links, and one-click apply URLs
- Each proposal gets its own Google Doc with a Mermaid diagram

## Cost Estimate
- Scraping: ~$0.07 for 20 jobs (Apify)
- Proposals: ~$0.35-0.50 per proposal (Claude Opus)
- Total for 20 proposals: ~$7-10
