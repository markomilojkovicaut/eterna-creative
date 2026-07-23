/**
 * Blog content lives in /content/blog/*.json (migrated from Bubble).
 * This module re-exports the CMS-ready API from lib/blog.ts.
 */
export {
  blogPosts,
  getAllBlogSlugs,
  getBlogCategories,
  getBlogIndex,
  getBlogPostBySlug,
  getOldPostRedirects,
  getRelatedPosts,
  type BlogCategory,
  type BlogPost,
  type BlogPostMeta,
  type BlogTocItem,
} from "@/lib/blog";
