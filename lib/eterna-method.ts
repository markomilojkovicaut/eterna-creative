/**
 * Eterna Method — named delivery system (Wave B).
 * Four human-gated steps; six engines run inside the loop.
 */

export interface EternaMethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
  /** What the client decides / owns at this gate. */
  humanGate: string;
  /** Engine ids from libera/eterna-engines that live under this step. */
  engineIds: string[];
}

export const eternaMethodName = "Eterna Method";

export const eternaMethodSteps: EternaMethodStep[] = [
  {
    id: "validate",
    number: "01",
    title: "Validate",
    description:
      "Strategy, ICP, and real-user signal before a line of code. Walk away cheap if it is not real.",
    humanGate: "You approve go / no-go before build spend.",
    engineIds: ["research"],
  },
  {
    id: "spec",
    number: "02",
    title: "Spec",
    description:
      "Stage-right architecture, UX, and scope locked to the path to revenue - not a kitchen-sink backlog.",
    humanGate: "You approve the plan, stack, and milestones.",
    engineIds: ["architecture"],
  },
  {
    id: "ship",
    number: "03",
    title: "Ship",
    description:
      "Design and engineering in parallel with full visibility. Production-ready, not demo-ready.",
    humanGate: "Weekly reviews - you stay in control of scope.",
    engineIds: [],
  },
  {
    id: "compound",
    number: "04",
    title: "Compound",
    description:
      "Acquisition, activation, retention, and analytics as one loop - so launch is the start, not the finish.",
    humanGate: "North Star and next bets are agreed together.",
    engineIds: ["acquisition", "activation", "retention", "analytics"],
  },
];

/** Compact contrast for the method section (SoluteLabs-style). */
export const eternaMethodContrast = {
  traditional: [
    "Weeks of discovery decks before anything usable",
    "Ship a demo, then discover the product does not retain",
    "Acquisition spend into a leaky bucket",
    "Analytics bolted on after launch",
  ],
  eterna: [
    "Working signal and a go / no-go in days, not months",
    "Production path from day one - owned code, real users",
    "Fix retention before you scale spend",
    "North Star and events live with the build",
  ],
} as const;
