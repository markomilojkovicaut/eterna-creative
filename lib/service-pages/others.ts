import type { ServicePageContent } from "@/lib/service-page-types";

function corePage(
  partial: Omit<ServicePageContent, "included" | "finalCta"> & {
    deliverables: string[];
    finalTitle?: string;
    finalBody?: string;
  }
): ServicePageContent {
  const { deliverables, finalTitle, finalBody, ...rest } = partial;
  return {
    ...rest,
    included: {
      title: "What you get",
      items: deliverables.map((d) => ({ title: d, body: "" })),
    },
    finalCta: {
      title:
        finalTitle ??
        `Ready to talk ${rest.hero.label.toLowerCase()}?`,
      body:
        finalBody ??
        "Book a free 15-minute strategy call. We will scope fit and next steps - whether we work together or not.",
    },
  };
}

export const productStrategyPage = corePage({
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
  process: {
    title: "How we work",
    steps: [
      {
        title: "Scope Session",
        description:
          "Free Launch Plan covers high-level strategy for build-ready founders.",
      },
      {
        title: "Blueprint",
        description:
          "Paid tier adds investor-ready depth when fundraising or complexity demands it.",
      },
      {
        title: "Build alignment",
        description:
          "Strategy feeds directly into architecture and sprint planning.",
      },
    ],
  },
  relatedEngineIds: ["research", "acquisition"],
  relatedLinks: [{ label: "App Launch Blueprint", href: "/blueprint" }],
});

export const growthPage = corePage({
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
  process: {
    title: "How we work",
    steps: [
      {
        title: "Care",
        description: "Keep the product healthy - hosting, monitoring, minor tweaks.",
      },
      {
        title: "Growth",
        description:
          "Care plus one feature cycle per month and analytics review.",
      },
      {
        title: "Scale",
        description: "Roadmap partner with reserved capacity.",
      },
    ],
  },
  relatedEngineIds: ["retention", "analytics"],
});

export const inAppPage = corePage({
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
  process: {
    title: "How we work",
    steps: [
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
  },
  relatedEngineIds: ["activation", "retention"],
});

export const socialPage = corePage({
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
  process: {
    title: "How we work",
    steps: [
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
        description:
          "Track signups and revenue attribution back to channels.",
      },
    ],
  },
  relatedEngineIds: ["acquisition", "analytics"],
  relatedLinks: [
    { label: "Solutions for creators", href: "/solutions/creators" },
  ],
});
