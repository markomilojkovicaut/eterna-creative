import type { Template } from "@/lib/types";

const BUBBLE_ANIMATED_LP =
  "https://bubble.io/template/animated-landing-page-2025-1733218584038x289046916713414660";

export const templates: Template[] = [
  {
    slug: "animated-landing-page",
    title: "Animated Landing Page 2025",
    subtitle: "Bubble template for startups and product launches",
    description:
      "A premium, responsive landing page with pixel-perfect UX/UI, conversion-focused sections, and dynamic animations — ready to rebrand and launch.",
    price: 14,
    currency: "USD",
    tags: ["Landing", "Bubble", "Animated"],
    previewImage: "/images/templates/animated-landing-page.png",
    downloadUrl: BUBBLE_ANIMATED_LP,
    orderUrl: BUBBLE_ANIMATED_LP,
    orderLabel: "Order",
    demoUrl: BUBBLE_ANIMATED_LP,
    isPaid: true,
    platform: "Bubble",
    features: [
      {
        title: "Pixel-perfect UX/UI",
        body: "A sleek, professional look that establishes trust and credibility.",
      },
      {
        title: "Interactive animations",
        body: "A dynamic, modern feel — motion that supports the story, not noise.",
      },
      {
        title: "Conversion-focused design",
        body: "Tested CTAs to drive action and boost engagement.",
      },
      {
        title: "15+ pre-built sections",
        body: "Pricing, testimonials, product features, CTAs — all ready to edit.",
      },
      {
        title: "Mobile-responsive",
        body: "Designed to look sharp on every device.",
      },
      {
        title: "Reusable elements",
        body: "Easily update and scale your Bubble app over time.",
      },
    ],
    note: "Extended pack in progress: 4 additional animated pages for a fuller site experience. Early access available on request — we’ll prioritize your build before the official launch.",
    notePrice: "€49 when released",
  },
  {
    slug: "razmeni-marketplace",
    title: "Razmeni — marketplace app",
    subtitle: "Production marketplace ready to rebrand and launch",
    description:
      "Full parent marketplace with listings, messaging, profiles, and flows proven in production. Sellable as a complete Bubble app template.",
    price: 10000,
    currency: "EUR",
    tags: ["Marketplace", "Full app", "Bubble"],
    previewImage: "/images/partners/razmeni.png",
    downloadUrl: "/book",
    orderUrl: "/book",
    orderLabel: "Order",
    demoUrl: "https://www.eternacreative.com/version-live/www.razmeni.rs",
    isPaid: true,
    platform: "Bubble",
    features: [
      {
        title: "Listings & discovery",
        body: "Proven browse and list flows from a live marketplace.",
      },
      {
        title: "Messaging & profiles",
        body: "Trust-building communication between buyers and sellers.",
      },
      {
        title: "Ready to rebrand",
        body: "Take production architecture and adapt it to your niche.",
      },
      {
        title: "Customization available",
        body: "Order includes a strategy call to scope your rebrand and launch.",
      },
    ],
    note: "High-ticket app template — we walk you through fit, scope, and handover on a call.",
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
  const fractionDigits = currency === "USD" && template.price < 100 ? 0 : 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: fractionDigits,
  }).format(template.price);
}

export function getTemplateOrderHref(template: Template): string {
  return template.orderUrl || template.downloadUrl || "/book";
}

export function isExternalTemplateHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
