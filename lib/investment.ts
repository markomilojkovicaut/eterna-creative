export type PricingIconId = "rocket" | "sparkles" | "zap";

export interface PricingTier {
  id: string;
  icon: PricingIconId;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
}

export const investmentSubheading =
  "We price by complexity and value delivered. Every custom product quote comes after your free Launch Plan - so you know exactly what you're paying for before you commit.";

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
  "Also available: websites, AI automations, validation, growth, and all services - scoped on the strategy call.";

export const investmentCalculatorCta = {
  text: "Want to see how much you need to invest in your app - before even booking a call?",
  href: "/tools/app-cost-calculator",
  label: "Try app calculator",
};
