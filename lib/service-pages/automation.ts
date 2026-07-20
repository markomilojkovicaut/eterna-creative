import type { ServicePageContent } from "@/lib/service-page-types";

export const automationPage: ServicePageContent = {
  slug: "automation",
  hero: {
    label: "Automation AI",
    lines: [
      { text: "Stop doing manually", variant: "default" },
      { text: "what should run on its own", variant: "gradient" },
    ],
    subheading:
      "We map your most time-consuming workflows and automate them - so your team focuses on work that actually moves the business forward.",
    stats: [
      { num: "8h→2h", label: "Typical proposal prep" },
      { num: "0", label: "Manual steps after setup" },
      { num: "24/7", label: "Workflows while you sleep" },
    ],
    secondaryCta: { label: "See packages", href: "#packages" },
  },
  problem: {
    title: "Every hour spent on repetition is an hour not spent growing",
    body: "Most businesses have 10–20 workflows running manually that could be fully automated. The cost is not just time - it is mistakes, delays, and people doing work they should not have to.",
    cards: [
      {
        title: "Proposal prep: 8h → 2h",
        body: "Before: research, structure, writing, formatting takes most of a day. After: human reviews and personalises an AI-prepared draft.",
      },
      {
        title: "Content pipeline: 3h → 15m",
        body: "Before: write a blog, then reformat into social posts every time. After: fill a spreadsheet row. Blog and social posts generate automatically.",
      },
      {
        title: "Lead handling: 15m → 0m",
        body: "Before: copy to CRM, welcome email, Slack notify. After: form submit triggers CRM, email, and Slack in under 10 seconds.",
      },
      {
        title: "Monthly reporting: 4h → 0m",
        body: "Before: pull from four tools, format, summarise. After: report generates on the 1st and lands in your inbox.",
      },
    ],
  },
  included: {
    title: "If it is repetitive, it can be automated",
    description:
      "From content pipelines to lead qualification to internal reporting. If your team does the same thing more than once a week, it is a candidate.",
    items: [
      {
        title: "Content creation",
        body: "Blog posts, social content, newsletters from your inputs, in your brand voice, ready for human review.",
        tags: ["LLM", "Sheets", "Social"],
      },
      {
        title: "Lead capture & nurturing",
        body: "Leads routed to CRM, tagged, personalised welcome sequences, flagged in Slack - before you open your laptop.",
        tags: ["Gmail", "Notion", "Slack"],
      },
      {
        title: "Proposal & document prep",
        body: "Proposals, onboarding docs, and reports drafted from your inputs. Human reviews. AI does the heavy lifting.",
        tags: ["LLM", "Docs"],
      },
      {
        title: "Data sync & CRM workflows",
        body: "Keep Notion, Sheets, and your CRM in sync without copy-pasting. Updates propagate everywhere.",
        tags: ["Notion", "Sheets", "API"],
      },
      {
        title: "Reporting & analytics",
        body: "Pull from multiple tools, format, summarise with AI, deliver on a schedule.",
        tags: ["Sheets", "Slack", "LLM"],
      },
      {
        title: "Notifications & alerts",
        body: "Right info to the right person: signups, payment failures, milestones, anomaly alerts.",
        tags: ["Slack", "Gmail"],
      },
    ],
  },
  differentiator: {
    title: "Your existing stack. Finally connected.",
    body: "We do not ask you to change how you work. We connect the tools you already use. Built in n8n with error handling and edge-case coverage.",
    items: [
      {
        title: "Google Sheets",
        body: "Trigger workflows from data, write results back automatically.",
      },
      {
        title: "Notion",
        body: "Create pages, update databases, sync project data.",
      },
      {
        title: "Slack",
        body: "Automated alerts, summaries, and team notifications.",
      },
      {
        title: "Gmail",
        body: "Trigger on incoming emails, send automated responses.",
      },
      {
        title: "LLMs (OpenAI, Claude)",
        body: "Writing, analysis, classification, summarisation inside workflows.",
      },
      {
        title: "Any API",
        body: "If a tool has an API, we can automate it.",
      },
    ],
  },
  process: {
    title: "We map it before we build it",
    description: "Fixed scope, fixed price. No hourly billing.",
    steps: [
      {
        title: "Discovery",
        description:
          "Walk through every step, exception, and tool. Document the workflow and find where automation creates the most value.",
        outcome: "Mapped workflow + value opportunities",
      },
      {
        title: "Scoping",
        description:
          "Clear scope: what gets built, which tools connect, what output looks like, fixed price.",
        outcome: "Fixed quote before we start",
      },
      {
        title: "Build",
        description:
          "Built in n8n with proper error handling. Tested with real data - including failure scenarios.",
        outcome: "Tested automation ready for handover",
      },
      {
        title: "Handover",
        description:
          "Walkthrough of triggers and adjustments. Documentation for your team. Optional monthly maintenance retainer.",
        outcome: "You run it. We support it.",
      },
    ],
  },
  packages: {
    title: "Priced by complexity. Not by the hour.",
    tiers: [
      {
        name: "Starter",
        tagline: "One focused workflow. One significant time saving. Fast to deploy.",
        price: "From €800",
        features: [
          "Automation discovery call",
          "1 workflow (up to 5 steps)",
          "2–3 tool integrations",
          "Basic error handling",
          "Documentation + handover",
          "About 1 week delivery",
        ],
      },
      {
        name: "Business",
        tagline:
          "Complex multi-step workflow with AI, branching logic, and multiple tool connections.",
        price: "From €2,500",
        featured: true,
        features: [
          "Everything in Starter",
          "1–3 workflows with complex logic",
          "AI/LLM integration",
          "Branching conditions and error routing",
          "4–6 tool integrations",
          "Human-in-the-loop checkpoints",
          "Testing across edge cases",
          "About 2-week delivery",
        ],
      },
      {
        name: "Full System",
        tagline:
          "End-to-end automation architecture across your operation. Multiple workflows, all connected.",
        price: "From €6,000",
        features: [
          "Everything in Business",
          "Full automation audit",
          "5–10 connected workflows",
          "Advanced AI pipelines",
          "Custom API integrations",
          "Full error handling + fallbacks",
          "Dashboard for monitoring",
          "Team training session",
          "3–4 week delivery",
          "Priority support first 30 days",
        ],
      },
    ],
  },
  faq: {
    title: "Things people always ask",
    items: [
      {
        q: "How do I know if my workflow can be automated?",
        a: "If it is repetitive, rule-based, and moves data between tools, it almost certainly can. Best candidates: copy-pasting, recurring emails, standard documents, reports. A call tells you in 20 minutes.",
      },
      {
        q: "What happens when something breaks?",
        a: "Every workflow includes error handling that notifies you on failure. No silent breakage. Maintenance retainer covers monitoring and fixes.",
      },
      {
        q: "Do I need technical knowledge to manage it?",
        a: "No. Documented so a non-technical person can understand it and adjust simple things like templates or triggers. Complex changes: you have us.",
      },
      {
        q: "Can you automate something that involves AI?",
        a: "Yes. OpenAI, Claude, and other LLMs as workflow steps: write content, classify data, extract from documents, summarise, or decide.",
      },
      {
        q: "What if my process has exceptions and edge cases?",
        a: "Discovery maps every exception before we build. Branching logic and human-in-the-loop checkpoints for approvals.",
      },
    ],
  },
  finalCta: {
    title: "Tell us the workflow that is wasting your time most",
    body: "One free call. We will tell you if it is automatable, how long it takes, and what it costs. No commitment.",
  },
  relatedEngineIds: ["analytics", "retention"],
};
