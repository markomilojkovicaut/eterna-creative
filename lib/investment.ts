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
  "We price by project complexity and value delivered. Every custom quote comes after the App Launch Blueprint - so you know exactly what you're paying for before you commit.";

export const pricingTiers: PricingTier[] = [
  {
    id: "mvp",
    icon: "rocket",
    title: "MVP build",
    description:
      "For founders validating an idea fast with real users. Core functionality, no extras, still powerhouse.",
    price: "$4.000",
  },
  {
    id: "growth",
    icon: "sparkles",
    title: "Full product",
    description:
      "For founders who need a full-fledged product - validated scope, competitive features, ready to acquire users.",
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

export const investmentCalculatorCta = {
  text: "Want to see how much you need to invest in your app - before even booking a call?",
  href: "/tools/app-cost-calculator",
  label: "Try app calculator",
};
