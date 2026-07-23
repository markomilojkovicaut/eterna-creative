export type PricingIconId = "rocket" | "sparkles" | "zap";
export type PricingProductId = "application" | "website" | "automation";

export interface PricingTier {
  id: string;
  icon: PricingIconId;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
}

/** How engagements start - Wave C start-small path. */
export interface EngagementPathStep {
  id: string;
  number: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
}

export const investmentSubheading =
  "Flat starting points for Application, Website, and Automation. Exact scope and price land in your free Launch Plan after a strategy call.";

export const engagementPathSteps: EngagementPathStep[] = [
  {
    id: "call",
    number: "01",
    title: "Strategy call",
    description:
      "Free 15 minutes with Marko. Fit, ambition, timeline, budget - or an honest redirect if we're not the right studio.",
    href: "/book",
    ctaLabel: "Book a call",
  },
  {
    id: "plan",
    number: "02",
    title: "Launch Plan",
    description:
      "Free Scope Session deliverable shaped to your product - map, preview, flat price, timeline. Websites and smaller automations can often scope on the call alone.",
    href: "/book",
    ctaLabel: "Book a call",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "You approve the Launch Plan, then we ship - owned code, senior team, full visibility. No surprises after kickoff.",
  },
];

export const pricingProductOptions: {
  id: PricingProductId;
  label: string;
}[] = [
  { id: "application", label: "Application" },
  { id: "website", label: "Website" },
  { id: "automation", label: "Automation" },
];

export const pricingByProduct: Record<PricingProductId, PricingTier[]> = {
  application: [
    {
      id: "mvp",
      icon: "rocket",
      title: "MVP build",
      description:
        "For validating an idea with real users. Core product, flat price, owned code - no extras, still powerhouse.",
      price: "€4.000",
    },
    {
      id: "growth",
      icon: "sparkles",
      title: "Full product",
      description:
        "Validated scope, competitive features, ready to acquire users - engineered to scale.",
      price: "€8.000",
      popular: true,
    },
    {
      id: "enterprise",
      icon: "zap",
      title: "Enterprise platform",
      description:
        "For businesses and founders building multi-sided platforms, AI-native tools, or enterprise-grade products.",
      price: "€15.000",
    },
  ],
  website: [
    {
      id: "marketing",
      icon: "rocket",
      title: "Marketing site",
      description:
        "Conversion-focused marketing site - clear story, fast pages, ready to launch.",
      price: "€2.000",
    },
    {
      id: "product-site",
      icon: "sparkles",
      title: "Product website",
      description:
        "Product narrative, waitlist/signup, and content system - built to convert.",
      price: "€4.000",
      popular: true,
    },
    {
      id: "hybrid-site",
      icon: "zap",
      title: "Hybrid site",
      description:
        "Marketing + product surfaces with deeper integrations and CMS.",
      price: "€6.000",
    },
  ],
  automation: [
    {
      id: "single",
      icon: "rocket",
      title: "Single workflow",
      description:
        "One high-leverage automation live and monitored - n8n or equivalent.",
      price: "€800",
    },
    {
      id: "ops",
      icon: "sparkles",
      title: "Ops suite",
      description:
        "Multi-step workflows across your stack - ops that run without babysitting.",
      price: "€2.500",
      popular: true,
    },
    {
      id: "agentic",
      icon: "zap",
      title: "Agentic system",
      description:
        "AI agents + workflows for ongoing operations with guardrails.",
      price: "€5.000",
    },
  ],
};

/** @deprecated Prefer pricingByProduct.application */
export const pricingTiers = pricingByProduct.application;

export const investmentAlsoAvailable =
  "Prices are starting bands. Exact scope lands in your Launch Plan - or on the strategy call for smaller website and automation projects.";

export const investmentCalculatorCta = {
  text: "Want a ballpark for your product before the call?",
  href: "/calculator",
  label: "Try product calculator",
};
