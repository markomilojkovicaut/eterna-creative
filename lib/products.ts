/**
 * Three products we sell. Modules listed as pills; module pages later.
 * Order: Application → Automation → Website.
 */

export type ProductId = "application" | "automation" | "website";

export interface ProductModule {
  id: string;
  label: string;
}

export interface ProductOffer {
  id: ProductId;
  number: string;
  title: string;
  description: string;
  href: string;
  modules: ProductModule[];
}

/** Short names for hero product rail. */
export const heroProductRail = [
  { id: "application", label: "Application", href: "/services/application" },
  { id: "automation", label: "Automation", href: "/services/automation" },
  { id: "website", label: "Website", href: "/services/website" },
] as const;

export const productOffers: ProductOffer[] = [
  {
    id: "application",
    number: "01",
    title: "Application",
    description:
      "Digital products that scale - validated, designed, engineered, and ready to grow.",
    href: "/services/application",
    modules: [
      { id: "discovery", label: "Discovery" },
      { id: "strategy", label: "Strategy" },
      { id: "ux-ui", label: "UX/UI" },
      { id: "architecture", label: "Architecture" },
      { id: "build", label: "Build" },
      { id: "qa-launch", label: "QA & launch" },
      { id: "optimise", label: "Optimise" },
      { id: "marketing", label: "Marketing" },
    ],
  },
  {
    id: "automation",
    number: "02",
    title: "Automation",
    description:
      "AI workflows and agents that cut manual work and run reliably in production.",
    href: "/services/automation",
    modules: [
      { id: "audit", label: "Audit" },
      { id: "strategy", label: "Automation strategy" },
      { id: "process", label: "Process design" },
      { id: "workflows", label: "Workflows" },
      { id: "agents", label: "AI agents" },
      { id: "integration", label: "Systems integration" },
    ],
  },
  {
    id: "website",
    number: "03",
    title: "Website",
    description:
      "Sites that convert - clear story, strong craft, ready to rank and grow traffic.",
    href: "/services/website",
    modules: [
      { id: "strategy", label: "Strategy" },
      { id: "ux-ui", label: "UX/UI" },
      { id: "build", label: "Build" },
      { id: "copy", label: "Copy" },
      { id: "cro", label: "CRO" },
      { id: "seo-aeo", label: "SEO/AEO" },
      { id: "marketing", label: "Marketing" },
    ],
  },
];
