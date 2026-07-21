export const rescueVibecodePageMeta = {
  title: "Rescue vibecode | Eterna",
  description:
    "Turn AI-generated prototypes into production software you can ship, maintain, and scale.",
};

export const rescueVibecodeReasons = [
  {
    id: "fragile",
    title: "It works until it does not",
    description:
      "Demo-ready vibecode often breaks under real users, edge cases, or the next feature request - and nobody owns the architecture.",
  },
  {
    id: "debt",
    title: "Hidden debt compounds fast",
    description:
      "Generated glue, unclear ownership, and missing tests make every change slower and riskier than starting from a real foundation.",
  },
  {
    id: "ship",
    title: "You need to ship for real",
    description:
      "Investors, customers, and ops need reliability, auth, data integrity, and a team that can iterate without rebuilding from chat history.",
  },
];

export const rescueVibecodeSteps = [
  {
    title: "Audit the prototype",
    description:
      "Map what works, what is fragile, and what must be kept vs rewritten - flows, data, auth, and integrations.",
  },
  {
    title: "Stabilize the core",
    description:
      "Lock a production architecture, clean the critical paths, and define a flat-priced rescue scope.",
  },
  {
    title: "Rebuild what matters",
    description:
      "Replace brittle generated layers with owned code, tests, and observability where it counts.",
  },
  {
    title: "Ship + Care",
    description:
      "Launch with monitoring, then optional retainer for features, hardening, and growth.",
  },
];

export const rescueVibecodeKeeps = [
  "Product intent and validated user flows",
  "Brand, UX patterns, and working screens that already convert",
  "Domain knowledge and business rules already encoded in the prototype",
  "Integrations worth keeping (re-scoped to reliable APIs)",
];

export const rescueVibecodeRebuilds = [
  "Fragile generated scaffolding replaced with owned architecture",
  "Auth, data model, and permissions made production-safe",
  "Missing tests, logging, and deploy discipline added",
  "AI features governed for cost, eval, and failure modes",
];
