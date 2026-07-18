export type FounderJourneyPhase = "neutral" | "challenge";

export interface FounderJourneyStep {
  period: string;
  title: string;
  description: string;
  phase: FounderJourneyPhase;
}

export const founderJourneySteps: FounderJourneyStep[] = [
  {
    period: "MONTH 0-1",
    title: "The idea. Everyone says it sounds great.",
    description:
      "Friends and family love it. LinkedIn, a few intros. Feels like validation. It isn't.",
    phase: "neutral",
  },
  {
    period: "MONTH 1-5",
    title: "Build starts - or a weekend AI demo feels like a product.",
    description:
      "Scope grows. Money goes out. No real user has touched a validated version.",
    phase: "neutral",
  },
  {
    period: "MONTH 6 - LAUNCH",
    title: "Goes live. 200 signups in week one.",
    description:
      "Exciting. But there's no audience system behind it. Week two: silence.",
    phase: "challenge",
  },
  {
    period: "MONTH 6 - 7",
    title: "Nobody comes back after the first session.",
    description:
      "Onboarding was never designed. Users sign up, get lost, and leave.",
    phase: "challenge",
  },
  {
    period: "MONTH 8 - 10",
    title: "Growth stalls. Money on ads. Nothing works.",
    description:
      "Acquisition spend leaks straight out because retention was never built.",
    phase: "challenge",
  },
  {
    period: "MONTH 12+",
    title: "Runway running out. No idea what to fix.",
    description:
      "No analytics, no North Star, no signal. Decisions made on gut. Too late.",
    phase: "challenge",
  },
];
