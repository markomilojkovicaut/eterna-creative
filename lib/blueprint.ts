export const blueprintPageMeta = {
  title: "Free Launch Plan | Eterna",
  description:
    "Free Launch Plan for applications, automations, and websites - scope, preview, flat price, and timeline before you commit. Blueprint available later for complex builds.",
};

export interface BlueprintTier {
  id: string;
  name: string;
  priceLabel: string;
  tagline: string;
  includes: string[];
  cta: string;
  highlight?: boolean;
  /** When true, render as secondary / upsell (not the early-funnel offer). */
  upsell?: boolean;
}

export const blueprintTiers: BlueprintTier[] = [
  {
    id: "launch-plan",
    name: "Launch Plan",
    priceLabel: "Free",
    tagline:
      "After a short strategy call - your clear next step for an app, automation, or website.",
    includes: [
      "1-hour Scope Session (fit projects)",
      "Product map: app screens, workflow map, or site IA",
      "Hero / key-screen preview when it helps the yes",
      "Flat investment options and realistic timeline",
      "Honest go/no-go - including if a smaller scope is enough",
    ],
    cta: "Book a strategy call",
    highlight: true,
  },
  {
    id: "validation-sprint",
    name: "Validation Sprint",
    priceLabel: "Paid - flat price",
    tagline: "Upsell when you need market signal before a build commitment.",
    includes: [
      "Market and competitive deep-dive",
      "ICP refinement and validation plan",
      "Value proposition and success metrics",
      "Go/no-go with recommended next step",
    ],
    cta: "Book a strategy call",
    upsell: true,
  },
  {
    id: "blueprint",
    name: "Blueprint",
    priceLabel: "Paid - flat price",
    tagline:
      "Upsell on the sales call for complex applications - locks scope so fixed-price build is safe.",
    includes: [
      "2-hour deep-dive + design moodboard",
      "Full user-flow maps and architecture",
      "Data model and integration plan",
      "Investor-ready Blueprint document",
      "Post-launch optimization roadmap",
    ],
    cta: "Book a strategy call",
    upsell: true,
  },
];

export const blueprintNotes = [
  "Early funnel is Call → Launch Plan. Validation Sprint and Blueprint are offered when the project needs them - not pushed before fit is clear.",
  "Websites and smaller automations often scope on the strategy call alone - no full Launch Plan required.",
  "Blueprint is real judgment work for complex apps - flat price, not credited to build.",
  "Budget qualifier for custom application builds typically starts from EUR 4,000+.",
];
