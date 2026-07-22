export interface AiPractice {
  id: string;
  title: string;
  description: string;
}

/** How we use AI inside the studio - shown under AI expertise. */
export const aiPractices: AiPractice[] = [
  {
    id: "build",
    title: "AI in how we build",
    description:
      "Claude and Cursor accelerate engineering - with senior review on every critical path. Speed without sacrificing architecture.",
  },
  {
    id: "products",
    title: "AI products we run",
    description:
      "zonikai and testaimodels keep us honest. We only sell AI patterns we already operate in production.",
  },
  {
    id: "client",
    title: "AI in your product",
    description:
      "Agents, workflows, and model choice with eval, cost control, and failure modes designed in - not bolted on as a demo.",
  },
  {
    id: "ops",
    title: "AI in delivery ops",
    description:
      "Research synthesis, scope drafts, and QA assist - so more of your budget goes into the product, not busywork.",
  },
];
