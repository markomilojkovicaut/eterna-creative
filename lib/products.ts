/**
 * Three custom products we sell. Modules listed as pills on the homepage;
 * dedicated module pages can be added later under each product.
 */

export type ProductId = "application" | "website" | "automation";

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

export const productOffers: ProductOffer[] = [
  {
    id: "application",
    number: "01",
    title: "Application",
    description:
      "Custom products you own - validated, designed, engineered, and set to grow.",
    href: "/services/application",
    modules: [
      { id: "validation", label: "Validation" },
      { id: "strategy", label: "Strategy" },
      { id: "ui-ux", label: "UI/UX" },
      { id: "architecture", label: "Architecture" },
      { id: "engineering", label: "Engineering" },
      { id: "qa", label: "QA" },
      { id: "maintenance", label: "Maintenance" },
      { id: "optimisations", label: "Optimisations" },
      { id: "gtm", label: "GTM" },
      { id: "in-app", label: "In-app marketing" },
      { id: "social", label: "Social marketing" },
    ],
  },
  {
    id: "website",
    number: "02",
    title: "Website",
    description:
      "Sites that convert - clear story, strong craft, ready to rank and grow traffic.",
    href: "/services/website",
    modules: [
      { id: "strategy", label: "Strategy" },
      { id: "ui-ux", label: "UI/UX" },
      { id: "development", label: "Development" },
      { id: "cro", label: "CRO" },
      { id: "content", label: "Content" },
      { id: "seo-aeo", label: "SEO / AEO" },
      { id: "social", label: "Social marketing" },
    ],
  },
  {
    id: "automation",
    number: "03",
    title: "Automations",
    description:
      "AI workflows and agents that cut manual work and run reliably in production.",
    href: "/services/automation",
    modules: [
      { id: "audit", label: "Audit" },
      { id: "strategy", label: "Strategy" },
      { id: "process", label: "Process optimisations" },
      { id: "workflows", label: "Workflow automations" },
      { id: "n8n", label: "n8n agents" },
      { id: "digitalisation", label: "Company digitalisation" },
      { id: "ai-impl", label: "AI implementation" },
    ],
  },
];
