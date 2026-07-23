import type { MetadataRoute } from "next";

import { getBlogIndex } from "@/lib/blog";
import { getAllCaseStudySlugs } from "@/lib/case-studies";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eternacreative.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/portfolio",
    "/book",
    "/blueprint",
    "/services",
    "/services/application",
    "/services/automation",
    "/services/website",
    "/about",
    "/resources",
    "/guides",
    "/templates",
    "/tools/app-cost-calculator",
    "/migration",
    "/careers",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = getBlogIndex().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cases = getAllCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts, ...cases];
}
