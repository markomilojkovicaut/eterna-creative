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
      "You have a validated problem or early traction. Move from idea to revenue fast, without over-engineering. We act as your technical co-founder - no equity required.",
  },
  {
    id: "creators",
    icon: "sparkles",
    title: "Creators & Brands",
    description:
      "You have an audience and need a product to monetize it - a course, community, or SaaS tool. We build the infrastructure that turns followers into revenue.",
  },
  {
    id: "businesses",
    icon: "hexagon",
    title: "Businesses & SMB",
    description:
      "You need to build or rebuild a client-facing product, automate internal workflows, or launch a new line of business. Product thinking, not just execution.",
  },
];
