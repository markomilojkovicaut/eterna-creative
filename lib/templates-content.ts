import type { Template } from "@/lib/types";

export const templates: Template[] = [
  {
    slug: "razmeni-marketplace",
    title: "Razmeni.rs — marketplace app",
    description:
      "Full parent marketplace ready to rebrand and launch - listings, messaging, profiles, and flows proven in production. Sellable as a complete app template.",
    price: 10000,
    currency: "EUR",
    tags: ["Marketplace", "Full app", "Ready to roll"],
    previewImage: "/images/partners/razmeni.png",
    downloadUrl: "/book",
    isPaid: true,
    demoUrl: "https://www.eternacreative.com/version-live/www.razmeni.rs",
  },
  {
    slug: "animated-landing-page",
    title: "Animated landing page",
    description:
      "High-craft marketing landing template with scroll animations and CMS-ready sections. Free HTML starter you can customize in minutes.",
    price: 0,
    tags: ["Landing", "Marketing"],
    previewImage: "/images/resources/app-cost-calculator.png",
    downloadUrl: "/templates/animated-landing-page.html",
    isPaid: false,
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((template) => template.slug === slug);
}

export function getAllTemplateSlugs(): string[] {
  return templates.map((template) => template.slug);
}

export function formatTemplatePrice(template: Template): string {
  if (!template.isPaid || template.price <= 0) return "Free";
  const currency = template.currency ?? "EUR";
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(template.price);
}
