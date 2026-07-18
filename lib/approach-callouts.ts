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
    id: "owned",
    accent: "black",
    title: "Owned code, no lock-in",
    description:
      "You own what we build. If you're already on Bubble and hitting its ceiling, we migrate you cleanly to custom. If you're starting fresh, we build custom from day one so you never have to rebuild.",
  },
];
