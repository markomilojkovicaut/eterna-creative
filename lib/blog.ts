import { readFileSync } from "fs";
import path from "path";

export type BlogCategory =
  | "Validation"
  | "MVP"
  | "Growth"
  | "Startup"
  | "News";

export interface BlogPostMeta {
  slug: string;
  title: string;
  subheading: string;
  excerpt: string;
  seoDescription: string;
  category: BlogCategory | string;
  tags: string[];
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  views: number;
  oldPath: string;
  readTime: number;
  wordCount: number;
}

export interface BlogTocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost extends BlogPostMeta {
  toc: BlogTocItem[];
  bodyHtml: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function readJson<T>(filePath: string): T {
  return JSON.parse(readFileSync(filePath, "utf8")) as T;
}

export function getBlogIndex(): BlogPostMeta[] {
  return readJson<BlogPostMeta[]>(path.join(CONTENT_DIR, "index.json"));
}

function isInlineTocHeading(text: string): boolean {
  const t = text.trim().toLowerCase();
  return t === "table of contents" || t.includes("table of contents");
}

/** Strip Bubble-era inline TOC blocks — the UI TOC component replaces them. */
export function stripInlineTableOfContents(html: string): string {
  let next = html.replace(
    /<h2[^>]*>\s*(?:<strong>)?\s*Table of contents\s*(?:<\/strong>)?\s*<\/h2>\s*(?:<(?:ol|ul)[\s\S]*?<\/(?:ol|ul)>\s*)?/gi,
    ""
  );
  next = next.replace(
    /(<h2[^>]*>)([\s\S]*?Table of contents[\s\S]*?)(<\/h2>)/gi,
    (_m, open: string, inner: string, close: string) => {
      const cleaned = inner
        .replace(/\s*<em>\s*\(?\s*Table of contents\s*\)?\s*<\/em>\s*/gi, " ")
        .replace(/\s*\(\s*Table of contents\s*\)\s*/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
      return `${open}${cleaned}${close}`;
    }
  );
  return next;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  try {
    const post = readJson<BlogPost>(filePath);
    return {
      ...post,
      bodyHtml: stripInlineTableOfContents(post.bodyHtml),
      toc: post.toc.filter(
        (item) =>
          !isInlineTocHeading(item.text) &&
          !item.id.includes("table-of-contents")
      ),
    };
  } catch {
    return undefined;
  }
}

export function getAllBlogSlugs(): string[] {
  return getBlogIndex().map((post) => post.slug);
}

export function getBlogCategories(): string[] {
  const set = new Set(getBlogIndex().map((p) => p.category));
  const order = ["Validation", "MVP", "Growth", "Startup", "News"];
  return [
    ...order.filter((c) => set.has(c)),
    ...[...set].filter((c) => !order.includes(c)).sort(),
  ];
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const index = getBlogIndex();
  const current = index.find((p) => p.slug === slug);
  if (!current) return index.filter((p) => p.slug !== slug).slice(0, limit);

  const sameCategory = index.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = index.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getOldPostRedirects(): { source: string; destination: string }[] {
  return getBlogIndex().map((post) => ({
    source: post.oldPath,
    destination: `/blog/${post.slug}`,
  }));
}

/** @deprecated Use getBlogIndex — kept for any leftover imports during migration. */
export const blogPosts = getBlogIndex();
