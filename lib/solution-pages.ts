import type { SolutionIconId } from "@/lib/solutions";

export interface SolutionPageContent {
  slug: string;
  hero: {
    lines: { text: string; variant?: "default" | "gradient" }[];
    subheading: string;
  };
  challenges: string[];
  serviceSlugs: string[];
  caseStudySlugs: string[];
}

export const solutionPageContent: Record<string, SolutionPageContent> = {
  founders: {
    slug: "founders",
    hero: {
      lines: [
        { text: "For founders", variant: "default" },
        { text: "and startups", variant: "gradient" },
      ],
      subheading:
        "Validated problem or early traction - move fast without over-building or burning runway. Your technical co-founder, minus the equity ask.",
    },
    challenges: [
      "Limited runway and pressure to ship before PMF",
      "DIY tools that do not scale to real users",
      "Investors asking for owned tech and clear scope",
    ],
    serviceSlugs: ["research", "product-strategy", "application"],
    caseStudySlugs: ["publiclink", "facelessstar"],
  },
  creators: {
    slug: "creators",
    hero: {
      lines: [
        { text: "For creators", variant: "default" },
        { text: "and experts", variant: "gradient" },
      ],
      subheading:
        "Turn audience and trust into a product you own - platform, community, or app engineered to convert followers into recurring revenue.",
    },
    challenges: [
      "Audience without a product to monetize",
      "Generic tools that do not match your brand",
      "Need for co-build models when distribution is the moat",
    ],
    serviceSlugs: ["application", "social", "in-app"],
    caseStudySlugs: ["facelessstar"],
  },
  businesses: {
    slug: "businesses",
    hero: {
      lines: [
        { text: "For businesses", variant: "default" },
        { text: "and SMBs", variant: "gradient" },
      ],
      subheading:
        "Replace the tool holding you back, digitize workflows, or ship customer-facing software - without hiring a full engineering team.",
    },
    challenges: [
      "Manual processes eating margin",
      "SaaS stack that almost fits but never quite does",
      "Need for AI automations that run reliably",
    ],
    serviceSlugs: ["automation", "application", "website"],
    caseStudySlugs: ["tap-group", "prosafenet"],
  },
};

export function getSolutionPageContent(slug: string): SolutionPageContent | null {
  return solutionPageContent[slug] ?? null;
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutionPageContent);
}

export type { SolutionIconId };
