import type { QuoteBarAccent } from "@/components/ui/QuoteBar";

export interface ApproachCallout {
  id: string;
  accent: QuoteBarAccent;
  title: string;
  description: string;
}

export const approachCallouts: ApproachCallout[] = [
  {
    id: "no-code",
    accent: "purple",
    title: "No-code is not a shortcut - it's the architecture",
    description:
      "We use battle-tested no-code platforms to compress 12 months of traditional development into weeks. Not because we cut corners - because over-engineering at an early stage is the most expensive mistake founders make. Engineer to the level your stage demands.",
  },
  {
    id: "ai-native",
    accent: "pink",
    title: "AI-native from the start",
    description:
      "We've integrated LLMs into our own products and our build process. Bubble AI, custom automation layers, and AI-assisted design don't replace the craft - they amplify it. We only use AI where it adds real leverage, built on top of deep product knowledge.",
  },
  {
    id: "transition",
    accent: "black",
    title: "Built to transition when you're ready",
    description:
      "No-code takes you further than most founders expect. But when you hit 100K+ users and need custom infrastructure, we design your architecture to make that transition clean. You're never locked in - you're staged intelligently.",
  },
];
