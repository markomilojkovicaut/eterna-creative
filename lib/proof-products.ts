export interface ProofProduct {
  id: string;
  name: string;
  description: string;
  href: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  /** External product vs internal page (blog, etc.). */
  external?: boolean;
  kind?: "product" | "award";
}

export const proofAwardHref = "/blog/best-use-of-ai-award";

export const proofProducts: ProofProduct[] = [
  {
    id: "zonikai",
    name: "zonikai",
    description:
      "Enterprise AI agent for logistics - tracks and calls drivers so dispatch teams cut after-hours headcount.",
    href: "https://www.zonikai.com",
    screenshotSrc: "/images/proof/zonikai.png",
    screenshotAlt: "zonikai product screenshot",
    external: true,
    kind: "product",
  },
  {
    id: "testaimodels",
    name: "testaimodels",
    description:
      "LLM comparison for agencies and AI teams - speed, cost, and quality on the same prompt.",
    href: "https://www.testaimodels.com",
    screenshotSrc: "/images/proof/testaimodels.png",
    screenshotAlt: "testaimodels product screenshot",
    external: true,
    kind: "product",
  },
  {
    id: "best-use-of-ai",
    name: "Best Use of AI",
    description:
      "Award for an AI product we built and run ourselves - the same reliability bar we bring to client work.",
    href: proofAwardHref,
    external: false,
    kind: "award",
  },
];
