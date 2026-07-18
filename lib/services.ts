export type ServiceFilterId = "all" | "plan" | "build" | "grow";

export type ServicePhase = "plan" | "build" | "grow";

export type ServiceLayout =
  | "stack-top"
  | "icon-end"
  | "phase-bottom"
  | "tags-rail"
  | "centered"
  | "dense-corner";

export type ServiceReveal =
  | "rise"
  | "fade-blur"
  | "clip-up"
  | "slide-left"
  | "scale-soft";

export type ServiceIconId =
  | "research"
  | "strategy"
  | "application"
  | "automation"
  | "website"
  | "growth"
  | "in-app"
  | "social";

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: ServiceIconId;
  phase: ServicePhase;
  layout: ServiceLayout;
  reveal: ServiceReveal;
  filters: Exclude<ServiceFilterId, "all">[];
  iconHighlight?: boolean;
}

export const servicePhaseLabels: Record<ServicePhase, string> = {
  plan: "Plan",
  build: "Build",
  grow: "Grow",
};

export const serviceFilterOptions: {
  id: ServiceFilterId;
  label: string;
}[] = [
  { id: "all", label: "All services" },
  { id: "plan", label: "I'm planning" },
  { id: "build", label: "I'm building" },
  { id: "grow", label: "I'm growing" },
];

export const services: Service[] = [
  {
    id: "research",
    title: "Research & validation",
    description:
      "Test the idea with real users before you spend on build - ICP, interviews, and a clear go/no-go.",
    tags: ["Interviews", "Research", "Waitlist"],
    icon: "research",
    phase: "plan",
    layout: "stack-top",
    reveal: "rise",
    filters: ["plan"],
  },
  {
    id: "product-strategy",
    title: "Product strategy",
    description:
      "Lock vision, positioning, and GTM so the product has a path to revenue - not just a feature list.",
    tags: ["Vision", "Positioning", "GTM"],
    icon: "strategy",
    phase: "plan",
    layout: "icon-end",
    reveal: "slide-left",
    filters: ["plan"],
  },
  {
    id: "application",
    title: "Application",
    description:
      "Ship a product you own - AI-assisted custom by default, no-code when the stage calls for it.",
    tags: ["Custom", "AI-assisted", "No-code"],
    icon: "application",
    phase: "build",
    layout: "centered",
    reveal: "scale-soft",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "automation",
    title: "Automation AI",
    description:
      "Cut manual work with n8n workflows and AI agents that run reliably after you launch.",
    tags: ["n8n", "AI agents", "Workflows"],
    icon: "automation",
    phase: "build",
    layout: "dense-corner",
    reveal: "fade-blur",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "website",
    title: "Website",
    description:
      "Landing pages and product sites that convert - clear story, CMS, ready to grow traffic.",
    tags: ["Landing", "Product site", "CMS"],
    icon: "website",
    phase: "build",
    layout: "tags-rail",
    reveal: "clip-up",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "growth",
    title: "Growth & optimisations",
    description:
      "Iterate from real usage - maintenance, CRO, and the next release cycle after launch.",
    tags: ["Iterations", "Maintenance", "CRO"],
    icon: "growth",
    phase: "grow",
    layout: "phase-bottom",
    reveal: "rise",
    filters: ["grow"],
  },
  {
    id: "in-app",
    title: "In-app marketing",
    description:
      "Activate and retain users inside the product with email, push, SMS, and SEO loops.",
    tags: ["Email", "SMS", "Push", "SEO"],
    icon: "in-app",
    phase: "grow",
    layout: "icon-end",
    reveal: "fade-blur",
    filters: ["grow"],
  },
  {
    id: "social",
    title: "Social marketing",
    description:
      "Build audience and demand around the product - content, outreach, and paid when it fits.",
    tags: ["Content", "Outreach", "Ads"],
    icon: "social",
    phase: "grow",
    layout: "stack-top",
    reveal: "slide-left",
    filters: ["grow"],
  },
];

export function isServiceHighlighted(
  service: Service,
  filter: ServiceFilterId
): boolean {
  return filter === "all" || service.filters.includes(filter);
}
