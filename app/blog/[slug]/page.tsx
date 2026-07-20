import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog-posts";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (post) {
    return {
      title: `${post.title} | Eterna Blog`,
      description: post.excerpt,
    };
  }

  return {
    title: "Post | Eterna Blog",
    description: "Insights for startup founders building products.",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <Link
          href="/blog"
          className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
        >
          ← Back to Blog
        </Link>
        <div className="mt-8">
          <Badge variant="purple">{post.category}</Badge>
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {post.title}
          </h1>
          <p className="mt-4 text-body-md text-text-muted">
            {post.readTime} min read
          </p>
        </div>
        <article className="prose-invert mt-12 max-w-2xl text-body-md leading-relaxed text-text-body">
          <p>{post.content}</p>
        </article>
      </Section>
    </main>
  );
}
