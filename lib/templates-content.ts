import type { Template } from "@/lib/types";

export const templates: Template[] = [
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
