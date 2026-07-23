import type { NextConfig } from "next";

/**
 * Preserve Bubble SEO equity: old /post/:slug URLs redirect to /blog/:slug.
 * Full slug map is also emitted in sitemap via content/blog/index.json.
 */
const bubblePostSlugs = [
  "how-i-validated-my-startup-idea-before-spending-a-single-euro-without-writing-a-single-line-of-code",
  "contra-top-mobile-designer-serbia-2025",
  "startup-lifecycle-idea-to-scale-guide",
  "guest-appearance-how-i-made-bubbleio-agency-from-0-live-on-no-code-balkan-podcast",
  "no-code-vs-traditional-development-startup-guide",
  "single-feature-mvp",
  "60-days-application-timeline-no-code-bubble",
  "mvp-to-growing-business-post-launch-strategy",
  "mvp-build-options-bubble-freelancer-agency-comparison",
  "top-rated-upwork-no-code-agency-strategy",
  "complete-startup-research-guide-2026-framework",
  "startup-research-vs-validation-difference",
  "eterna-creative-becomes-bubble-bronze-partner",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...bubblePostSlugs.map((slug) => ({
        source: `/post/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
      {
        source: "/post/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/book-a-call",
        destination: "/book",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
