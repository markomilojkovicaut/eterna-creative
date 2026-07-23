import type { ServiceIconId, ServicePhase } from "@/lib/services";

export interface ServicePageContent {
  slug: string;
  hero: {
    label: string;
    lines: { text: string; variant?: "default" | "gradient" }[];
    subheading: string;
  };
  problem: {
    title: string;
    body: string;
  };
  deliverables: string[];
  process: { title: string; description: string }[];
  relatedEngineIds: string[];
  relatedLinks?: { label: string; href: string }[];
}

export const servicePageContent: Record<string, ServicePageContent> = {
  application: {
    slug: "application",
    hero: {
      label: "Application",
      lines: [
        { text: "Build a product", variant: "default" },
        { text: "you own", variant: "gradient" },
      ],
      subheading:
        "AI-assisted custom code by default - no-code when the stage calls for it. Spec first, flat price, engineered to scale.",
    },
    problem: {
      title: "When you need a real product, not a prototype",
      body: "Founders outgrow spreadsheets, agencies, and platform limits. We ship owned software - MVPs, platforms, and AI-native tools - with the judgment layer that makes AI builds reliable in production.",
    },
    deliverables: [
      "Architecture and data model locked before build",
      "High-craft UI - not generic AI slop",
      "Auth, payments, and integrations scoped to your stage",
      "Owned codebase or clean Bubble delivery",
      "Launch support and handoff documentation",
    ],
    process: [
      {
        title: "Launch Plan",
        description: "Free Scope Session - app map, hero preview, flat price, timeline.",
      },
      {
        title: "Build",
        description: "Fixed-scope sprints with weekly demos and no surprise scope creep.",
      },
      {
        title: "Launch + Care",
        description: "Go live with monitoring, then optional Growth retainer.",
      },
    ],
    relatedEngineIds: ["architecture", "activation", "retention"],
    relatedLinks: [
      { label: "Bubble migration", href: "/migration" },
      { label: "Blueprint", href: "/blueprint" },
    ],
  },
  automation: {
    slug: "automation",
    hero: {
      label: "Automation",
      lines: [
        { text: "Automate the", variant: "default" },
        { text: "manual work", variant: "gradient" },
      ],
      subheading:
        "n8n workflows and AI agents that run reliably after launch - scoped per outcome, not per hour.",
    },
    problem: {
      title: "Your team is the integration layer",
      body: "Copy-paste between tools, manual follow-ups, and brittle Zapier chains do not scale. We design automations that survive edge cases - with eval discipline so AI steps do not hallucinate in production.",
    },
    deliverables: [
      "Workflow map and success metrics",
      "n8n (or equivalent) implementation",
      "AI agent steps with guardrails and fallbacks",
      "Runbooks and monitoring",
      "Flat monthly run-and-maintain option",
    ],
    process: [
      {
        title: "Discovery",
        description: "Map the workflow, volume, and failure modes on a strategy call.",
      },
      {
        title: "Build + test",
        description: "Implement with test cases for happy path and edge cases.",
      },
      {
        title: "Operate",
        description: "Optional retainer for changes, monitoring, and new automations.",
      },
    ],
    relatedEngineIds: ["analytics", "retention"],
  },
  research: {
    slug: "research",
    hero: {
      label: "Research & validation",
      lines: [
        { text: "Validate before", variant: "default" },
        { text: "you build", variant: "gradient" },
      ],
      subheading:
        "Real user signal - ICP, interviews, and go/no-go - so you do not burn budget on the wrong product.",
    },
    problem: {
      title: "Building without signal is expensive guesswork",
      body: "Most failed products had enough budget to build but not enough validation to know who it was for. We run structured discovery so you commit to build with eyes open.",
    },
    deliverables: [
      "ICP definition and interview guide",
      "15-30+ user conversations (or synthesis of yours)",
      "Competitive and market scan",
      "Validation plan and success metrics",
      "Honest go/no-go recommendation",
    ],
    process: [
      {
        title: "Validation Sprint",
        description: "Paid deep-dive when you need more than the free Launch Plan.",
      },
      {
        title: "Synthesis",
        description: "Findings doc with recommended next step - build, pivot, or stop.",
      },
      {
        title: "Blueprint handoff",
        description: "Graduate to Blueprint when the signal is a go.",
      },
    ],
    relatedEngineIds: ["research", "architecture"],
    relatedLinks: [{ label: "Blueprint", href: "/blueprint" }],
  },
  "product-strategy": {
    slug: "product-strategy",
    hero: {
      label: "Product strategy",
      lines: [
        { text: "Strategy that", variant: "default" },
        { text: "survives build", variant: "gradient" },
      ],
      subheading:
        "Vision, positioning, and GTM locked so engineering has a north star - not a moving target.",
    },
    problem: {
      title: "Features without strategy become rework",
      body: "Teams that skip strategy rebuild the same product three times. We align offer, audience, and roadmap before code - so every sprint moves toward revenue, not just shipping.",
    },
    deliverables: [
      "Positioning and value proposition",
      "Offer ladder and pricing hypothesis",
      "GTM channels and first 90 days plan",
      "Feature prioritization (MoSCoW)",
      "Stakeholder-ready strategy summary",
    ],
    process: [
      {
        title: "Scope Session",
        description: "Free Launch Plan covers high-level strategy for build-ready founders.",
      },
      {
        title: "Blueprint",
        description: "Paid tier adds investor-ready depth when fundraising or complexity demands it.",
      },
      {
        title: "Build alignment",
        description: "Strategy feeds directly into architecture and sprint planning.",
      },
    ],
    relatedEngineIds: ["research", "acquisition"],
    relatedLinks: [{ label: "Blueprint", href: "/blueprint" }],
  },
  website: {
    slug: "website",
    hero: {
      label: "Website",
      lines: [
        { text: "Sites that", variant: "default" },
        { text: "convert", variant: "gradient" },
      ],
      subheading:
        "Marketing and product sites with clear story, fast performance, and CMS when you need to ship content often.",
    },
    problem: {
      title: "Traffic without conversion is wasted spend",
      body: "Generic templates and slow pages leak leads. We design and build sites that match your product quality - with the same craft we bring to apps.",
    },
    deliverables: [
      "Information architecture and wireframes",
      "Design system aligned to brand",
      "Next.js or Webflow delivery (scoped upfront)",
      "CMS setup for blog or landing pages",
      "Analytics and basic SEO foundation",
    ],
    process: [
      {
        title: "Scope",
        description: "Single call often enough - no full Launch Plan required for smaller sites.",
      },
      {
        title: "Design + build",
        description: "Flat price with defined page count and revision rounds.",
      },
      {
        title: "Launch",
        description: "Deploy, DNS, and optional Care retainer.",
      },
    ],
    relatedEngineIds: ["acquisition", "activation"],
  },
  growth: {
    slug: "growth",
    hero: {
      label: "Growth & optimisations",
      lines: [
        { text: "Iterate from", variant: "default" },
        { text: "real usage", variant: "gradient" },
      ],
      subheading:
        "Post-launch releases, CRO, and maintenance - packaged by outcomes in Care, Growth, and Scale tiers.",
    },
    problem: {
      title: "Launch day is not product-market fit",
      body: "Products stall when nobody owns the next release cycle. We stay on as your studio partner - shipping improvements from analytics and user feedback, not gut feel.",
    },
    deliverables: [
      "Monthly release cycle (Growth tier)",
      "Bug fixes and security patches",
      "Conversion and funnel improvements",
      "Analytics review and recommendations",
      "Priority support channel",
    ],
    process: [
      {
        title: "Care",
        description: "Keep the product healthy - hosting, monitoring, minor tweaks.",
      },
      {
        title: "Growth",
        description: "Care plus one feature cycle per month and analytics review.",
      },
      {
        title: "Scale",
        description: "Roadmap partner with reserved capacity.",
      },
    ],
    relatedEngineIds: ["retention", "analytics"],
  },
  "in-app": {
    slug: "in-app",
    hero: {
      label: "In-app marketing",
      lines: [
        { text: "Activate inside", variant: "default" },
        { text: "the product", variant: "gradient" },
      ],
      subheading:
        "Email, push, SMS, and in-product loops that turn signups into retained users - instrumented from day one.",
    },
    problem: {
      title: "Acquisition without activation is a leaky bucket",
      body: "Paid traffic into a product that does not onboard users is burn. We design lifecycle comms and in-app prompts tied to your North Star metric.",
    },
    deliverables: [
      "Onboarding flow design",
      "Email and push automation setup",
      "Event taxonomy for lifecycle triggers",
      "Re-engagement campaigns",
      "Cohort reporting dashboard",
    ],
    process: [
      {
        title: "Audit",
        description: "Review current funnel and drop-off points.",
      },
      {
        title: "Implement",
        description: "Ship flows inside your stack (Brevo, PostHog, etc.).",
      },
      {
        title: "Optimize",
        description: "Iterate from cohort data monthly.",
      },
    ],
    relatedEngineIds: ["activation", "retention"],
  },
  social: {
    slug: "social",
    hero: {
      label: "Social marketing",
      lines: [
        { text: "Audience that", variant: "default" },
        { text: "feeds the product", variant: "gradient" },
      ],
      subheading:
        "Content, outreach, and paid when it fits - aligned to product launches and founder-led distribution.",
    },
    problem: {
      title: "Products die without distribution",
      body: "We help founders and creators turn audience into product demand - especially when co-build and rev-share models align incentives.",
    },
    deliverables: [
      "Content strategy tied to product milestones",
      "Launch campaign plan",
      "Founder-led LinkedIn and email plays",
      "Paid test budget framework (when ready)",
      "Creator co-build evaluation when audience is the moat",
    ],
    process: [
      {
        title: "Align",
        description: "Connect GTM to product roadmap and launch dates.",
      },
      {
        title: "Execute",
        description: "Ship campaigns in sprints - not endless retainer hours.",
      },
      {
        title: "Measure",
        description: "Track signups and revenue attribution back to channels.",
      },
    ],
    relatedEngineIds: ["acquisition", "analytics"],
    relatedLinks: [{ label: "Solutions for creators", href: "/solutions/creators" }],
  },
};

export function getServicePageContent(slug: string): ServicePageContent | null {
  return servicePageContent[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicePageContent);
}

/** Map service card id to page path. */
export function getServiceSlug(serviceId: string): string | null {
  return servicePageContent[serviceId] ? `/services/${serviceId}` : null;
}

export type { ServicePhase, ServiceIconId };
