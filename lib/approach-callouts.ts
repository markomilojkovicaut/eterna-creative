import type { QuoteBarAccent } from "@/components/ui/QuoteBar";

export interface ApproachCallout {
  id: string;
  accent: QuoteBarAccent;
  title: string;
  description: string;
}

export const approachCallouts: ApproachCallout[] = [
  {
    id: "custom-first",
    accent: "purple",
    title: "Custom when it matters - no-code when it fits",
    description:
      "We default to AI-assisted custom code you own. No-code stays a lane for the right stage and existing Bubble work - never the identity. Engineer to the level your stage demands.",
  },
  {
    id: "ai-native",
    accent: "pink",
    title: "AI-native from the start",
    description:
      "We use Claude Code and Cursor in our build process, and we've shipped AI into our own products. AI doesn't replace craft - it amplifies it. We only use it where it adds real leverage, on top of deep product judgment.",
  },
  {
    id: "stage-right",
    accent: "black",
    title: "Architecture for your stage",
    description:
      "Pick the stack that matches where you are - and leave a clean path to the next one. Bubble when speed wins. Custom when you need ownership and scale. Either way: documented, handoff-ready, and never a dead end.",
  },
  {
    id: "reliability",
    accent: "purple",
    title: "Reliable enough to run the business",
    description:
      "Demos are easy. Production is the bar. We design for edge cases, evals, monitoring, and failure modes - so the product keeps working when real users and real money show up.",
  },
];
