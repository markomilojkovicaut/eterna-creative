export const blueprintPageMeta = {
  title: "App Launch Blueprint | Eterna",
  description:
    "Free Launch Plan or paid Validation Sprint / App Launch Blueprint - spec first, flat price, built to scale.",
};

export interface BlueprintTier {
  id: string;
  name: string;
  priceLabel: string;
  tagline: string;
  includes: string[];
  cta: string;
  highlight?: boolean;
}

export const blueprintTiers: BlueprintTier[] = [
  {
    id: "launch-plan",
    name: "Launch Plan",
    priceLabel: "Free",
    tagline: "Scope Session deliverable - your CAC, our qualification filter.",
    includes: [
      "1-hour deep-dive / discovery session",
      "App/page map and feature list (rough MoSCoW)",
      "Hero-screen design preview",
      "Flat project price, payment plan, and timeline",
      "Honest go/no-go recommendation",
    ],
    cta: "Book a strategy call",
  },
  {
    id: "validation-sprint",
    name: "Validation Sprint",
    priceLabel: "Paid - flat price",
    tagline: "For founders who need signal before build commitment.",
    includes: [
      "Market and competitive deep-dive",
      "ICP refinement and validation plan",
      "Value proposition and success metrics",
      "Go/no-go with recommended next step",
    ],
    cta: "Book a strategy call",
    highlight: true,
  },
  {
    id: "app-blueprint",
    name: "App Launch Blueprint",
    priceLabel: "Paid - flat price",
    tagline: "Build-ready plan that locks scope for a firm fixed-price build.",
    includes: [
      "2-hour deep-dive session + design moodboard",
      "Full user-flow maps and architecture",
      "Data model and integration plan",
      "Investor-ready Blueprint document",
      "Post-launch optimization roadmap",
    ],
    cta: "Book a strategy call",
  },
];

export const blueprintNotes = [
  "Paid tiers are real work - not credited to build (that would give away the judgment layer twice).",
  "Flat price, not an hourly menu - never exposed to clients.",
  "Optional by default; effectively required for complex, enterprise, or vague scope - because that is how we commit to a firm fixed price safely.",
  "Budget qualifier: projects typically start from EUR 4,000+ for custom build.",
];
