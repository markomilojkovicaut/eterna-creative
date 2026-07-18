export interface ProofProduct {
  id: string;
  name: string;
  description: string;
  href: string;
}

export const proofProducts: ProofProduct[] = [
  {
    id: "zonikai",
    name: "zonikai",
    description:
      "Enterprise AI agent for logistics - tracks and calls drivers so dispatch teams cut after-hours headcount.",
    href: "https://www.zonikai.com",
  },
  {
    id: "testaimodels",
    name: "testaimodels",
    description:
      "LLM comparison for agencies and AI teams - speed, cost, and quality on the same prompt.",
    href: "https://www.testaimodels.com",
  },
];
