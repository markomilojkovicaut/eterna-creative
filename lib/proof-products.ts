export interface ProofProduct {
  id: string;
  name: string;
  description: string;
  href: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  /** Optional recognition badge shown on the card. */
  awardLabel?: string;
}

export const proofAward = {
  label: "Best Use of AI",
  detail: "Award won with our own AI testing product",
};

export const proofProducts: ProofProduct[] = [
  {
    id: "zonikai",
    name: "zonikai",
    description:
      "Enterprise AI agent for logistics - tracks and calls drivers so dispatch teams cut after-hours headcount.",
    href: "https://www.zonikai.com",
    screenshotSrc: "/images/proof/zonikai.png",
    screenshotAlt: "zonikai product screenshot",
  },
  {
    id: "testaimodels",
    name: "testaimodels",
    description:
      "LLM comparison for agencies and AI teams - speed, cost, and quality on the same prompt.",
    href: "https://www.testaimodels.com",
    screenshotSrc: "/images/proof/testaimodels.png",
    screenshotAlt: "testaimodels product screenshot",
    awardLabel: "Best Use of AI",
  },
];
