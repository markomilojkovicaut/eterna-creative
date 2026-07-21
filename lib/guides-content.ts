import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "feature-prioritization-matrix",
    title: "Feature prioritization matrix",
    excerpt:
      "Score ideas by impact and effort so you ship what matters first - before scope creep eats your runway.",
    content:
      "Plot features on impact (revenue, retention, risk reduction) vs effort (build time, integration complexity). Ship top-left quadrants first. Defer nice-to-haves until post-launch cohorts tell you what users actually use.",
    publishedAt: "2026-01-10",
    difficulty: "Intermediate",
    readTime: 10,
    category: "Product",
  },
  {
    slug: "mvp-launch-checklist",
    title: "MVP launch checklist",
    excerpt:
      "Pre-launch checks for analytics, onboarding, billing, and support - so day one is not firefighting.",
    content:
      "Before launch: North Star metric defined, core events tracked, error monitoring live, onboarding tested on mobile, payment flow tested end-to-end, support channel ready, and rollback plan documented.",
    publishedAt: "2026-01-25",
    difficulty: "Beginner",
    readTime: 7,
    category: "Launch",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((guide) => guide.slug);
}
