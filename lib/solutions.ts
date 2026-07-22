export type SolutionIconId = "rocket" | "sparkles" | "hexagon";

export interface Solution {
  id: string;
  icon: SolutionIconId;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    id: "founders",
    icon: "rocket",
    title: "Founders & Startups",
    description:
      "You have a validated problem or early traction and need to move fast - without over-building or burning runway. We take you from idea to a fundable product you actually own: validated first, engineered to scale, launched in weeks.",
  },
  {
    id: "businesses",
    icon: "hexagon",
    title: "Businesses & SMBs",
    description:
      "You need to replace a tool that's holding you back, digitize a workflow, or ship a customer-facing product - without hiring a full engineering team. We build reliable custom software you own, plus the AI automations that cut the manual work.",
  },
  {
    id: "creators",
    icon: "sparkles",
    title: "Creators & Experts",
    description:
      "You've built an audience and their trust. We turn it into a product you own - a platform, community, or app engineered to convert followers into recurring revenue. For the right fit, we co-build and share the upside, so we win when you do.",
  },
];
