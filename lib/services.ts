export type ServiceFilterId = "all" | "plan" | "build" | "grow";

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
  tags: string[];
  icon: ServiceIconId;
  filters: Exclude<ServiceFilterId, "all">[];
  iconHighlight?: boolean;
}

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
    tags: ["Interviews", "Research", "Waitlist"],
    icon: "research",
    filters: ["plan"],
  },
  {
    id: "product-strategy",
    title: "Product strategy",
    tags: ["Vision", "Positioning", "GTM"],
    icon: "strategy",
    filters: ["plan"],
  },
  {
    id: "application",
    title: "Application",
    tags: ["Custom", "AI-assisted", "No-code"],
    icon: "application",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "automation",
    title: "Automation AI",
    tags: ["n8n", "AI agents", "Workflows"],
    icon: "automation",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "website",
    title: "Website",
    tags: ["Landing", "Product site", "CMS"],
    icon: "website",
    filters: ["build"],
    iconHighlight: true,
  },
  {
    id: "growth",
    title: "Growth & optimisations",
    tags: ["Iterations", "Maintenance", "CRO"],
    icon: "growth",
    filters: ["grow"],
  },
  {
    id: "in-app",
    title: "In-app marketing",
    tags: ["Email", "SMS", "Push", "SEO"],
    icon: "in-app",
    filters: ["grow"],
  },
  {
    id: "social",
    title: "Social marketing",
    tags: ["Content", "Outreach", "Ads"],
    icon: "social",
    filters: ["grow"],
  },
];

export function isServiceHighlighted(
  service: Service,
  filter: ServiceFilterId
): boolean {
  return filter === "all" || service.filters.includes(filter);
}
