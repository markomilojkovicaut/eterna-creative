export interface ProofProduct {
  id: string;
  name: string;
  description: string;
  href: string;
  /**
   * Optional product screenshot path under /public.
   * Expected: /images/proof/zonikai.png, /images/proof/testaimodels.png
   */
  screenshotSrc?: string;
  screenshotAlt?: string;
}

export const proofProducts: ProofProduct[] = [
  {
    id: "zonikai",
    name: "zonikai",
    description:
      "Enterprise AI agent for logistics - tracks and calls drivers so dispatch teams cut after-hours headcount.",
    href: "https://www.zonikai.com",
    screenshotAlt: "zonikai product screenshot",
    // screenshotSrc: "/images/proof/zonikai.png",
  },
  {
    id: "testaimodels",
    name: "testaimodels",
    description:
      "LLM comparison for agencies and AI teams - speed, cost, and quality on the same prompt.",
    href: "https://www.testaimodels.com",
    screenshotAlt: "testaimodels product screenshot",
    // screenshotSrc: "/images/proof/testaimodels.png",
  },
];
