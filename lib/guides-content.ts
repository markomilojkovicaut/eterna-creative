import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "ultimate-startup-checklist",
    title: "Ultimate startup checklist",
    excerpt:
      "10 things to do before hiring an app developer - a must-have for founders who want to avoid expensive wrong turns.",
    content:
      "Before you hire: clarify the problem and ICP, validate demand with real conversations, map the MVP to one job-to-be-done, decide stack with eyes open, set a budget band and timeline, prepare content and brand basics, define success metrics, pick payment and legal basics, shortlist partners with proof, and walk into the strategy call knowing what you will not build yet.",
    publishedAt: "2025-06-01",
    difficulty: "Beginner",
    readTime: 8,
    category: "Startup",
  },
  {
    slug: "tech-stack-decision-matrix",
    title: "Tech stack decision matrix",
    excerpt:
      "No-code, hybrid, or full code? Use the decision matrix to choose the stack that fits stage, speed, and scale - without wasting months.",
    content:
      "Score your project on speed-to-MVP, expected complexity, team skills, budget, and 12-month scale needs. Prefer no-code when validating UX and demand fast. Prefer hybrid when data/integrations need a real backend. Prefer custom code when differentiation is in the product engine, multi-sided complexity, or you need full ownership from day one.",
    publishedAt: "2025-08-15",
    difficulty: "Intermediate",
    readTime: 12,
    category: "Architecture",
  },
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
