export type PricingIconId = "rocket" | "sparkles" | "zap";

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
  "Start small, then commit. Every custom product quote comes after a free strategy call and Launch Plan - so you know exactly what you're paying for before you build.";

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
      "Free Scope Session deliverable: app map, hero preview, flat price, timeline. Deeper Validation Sprint or Blueprint when the project needs it.",
    href: "/blueprint",
    ctaLabel: "See Blueprint",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "You approve the plan, then we ship with the Eterna Method - owned code, senior team, full visibility. No surprises after kickoff.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "mvp",
    icon: "rocket",
    title: "MVP build",
    description:
      "For validating an idea with real users. Core product, flat price, owned code - no extras, still powerhouse.",
    price: "$4.000",
  },
  {
    id: "growth",
    icon: "sparkles",
    title: "Full product",
    description:
      "Validated scope, competitive features, ready to acquire users - engineered to scale.",
    price: "$8.000",
    popular: true,
  },
  {
    id: "enterprise",
    icon: "zap",
    title: "Enterprise platform",
    description:
      "For businesses and founders building multi-sided platforms, AI-native tools, or enterprise-grade products.",
    price: "$15.000",
  },
];

export const investmentAlsoAvailable =
  "Also available: websites, AI automations, validation, growth, and all services - scoped on the strategy call. You don't need a full product build to start.";

export const investmentCalculatorCta = {
  text: "Want to see how much you need to invest in your app - before even booking a call?",
  href: "/tools/app-cost-calculator",
  label: "Try app calculator",
};
