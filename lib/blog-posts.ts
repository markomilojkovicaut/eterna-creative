import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-use-of-ai-award",
    title: "How we won Best Use of AI",
    excerpt:
      "We did not win for a demo. We won for an AI product we run ourselves - and what that taught us about shipping reliable AI for clients.",
    content:
      "Most AI awards go to slide decks. Ours went to testaimodels - an LLM comparison product we built and operate for agencies and AI teams. The lesson we bring to every client engagement: AI only counts when it is reliable in production, measurable on cost and quality, and owned by a team that uses it daily. That is the bar we apply when we put AI inside your application, website, or automation.",
    publishedAt: "2026-06-01",
    readTime: 5,
    category: "AI",
    coverImage: "",
  },
  {
    slug: "no-code-mvp-timeline",
    title: "MVP timeline: idea to launch",
    excerpt:
      "A realistic week-by-week plan from first call to live product - including validation and Launch Plan.",
    content:
      "Most founders underestimate discovery and overestimate build speed. A typical MVP path: Week 1 strategy call and Scope Session, Week 2 Launch Plan delivery, Weeks 3-8 build and launch. Complex platforms add scope, not just calendar time.",
    publishedAt: "2026-01-15",
    readTime: 6,
    category: "Launch",
    coverImage: "",
  },
  {
    slug: "no-code-vs-full-code",
    title: "Custom vs no-code: when each wins",
    excerpt:
      "We default to custom code you own - but no-code still wins when stage, speed, or an existing Bubble app makes it smarter.",
    content:
      "Choose custom when you need owned IP, complex logic, AI reliability, or investor diligence. Choose no-code when validating fast on Bubble or extending an app that still fits the platform. The craft layer stays the same.",
    publishedAt: "2026-02-01",
    readTime: 8,
    category: "Strategy",
    coverImage: "",
  },
  {
    slug: "when-to-hire-dev-agency",
    title: "When to hire a dev agency",
    excerpt:
      "Signals that DIY, freelancers, or offshore teams are costing you more than a focused studio engagement.",
    content:
      "Hire a studio when scope keeps shifting, quality bar matters for fundraising, or you need one accountable team from validation through launch. Skip agencies when you only need a landing page and have a clear spec.",
    publishedAt: "2026-02-20",
    readTime: 5,
    category: "Founders",
    coverImage: "",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
