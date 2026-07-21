export const migrationPageMeta = {
  title: "Bubble to custom migration | Eterna",
  description:
    "Migrate your Bubble app to owned custom code - cleanly, without rebuild chaos.",
};

export const migrationReasons = [
  {
    id: "limits",
    title: "You hit platform limits",
    description:
      "Performance, complex logic, or integrations Bubble was not built for - and workarounds are slowing every release.",
  },
  {
    id: "own",
    title: "You need code you own",
    description:
      "Investors, enterprise buyers, or acquirers want an asset on your balance sheet - not a rental on someone else's platform.",
  },
  {
    id: "ai",
    title: "AI needs reliability",
    description:
      "Production AI agents need eval, guardrails, and cost control - easier to govern in code you control.",
  },
];

export const migrationSteps = [
  {
    title: "Audit",
    description:
      "Map your Bubble app: data model, workflows, plugins, and what must carry over vs retire.",
  },
  {
    title: "Migration plan",
    description:
      "Phased cutover plan with flat price, timeline, and honest scope - included in your Launch Plan.",
  },
  {
    title: "Build + migrate data",
    description:
      "Replicate core flows in custom stack, migrate users and records, parallel run where needed.",
  },
  {
    title: "Cutover + Care",
    description:
      "Go live with monitoring, then optional retainer for iterations and new features.",
  },
];

export const migrationKeeps = [
  "Product logic and user flows (rebuilt cleaner)",
  "User accounts and core data (migrated)",
  "Brand and UX patterns (elevated, not copied pixel-for-pixel)",
  "Integrations (re-scoped to reliable APIs)",
];

export const migrationRebuilds = [
  "Bubble-specific plugins replaced with owned integrations",
  "Performance bottlenecks addressed in architecture",
  "Design system aligned to current brand and scale",
];
