import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";
import type { BlogPost } from "@/lib/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  void slug;
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (post) {
    return {
      title: `${post.title} | Eterna Blog`,
      description: post.excerpt,
    };
  }

  return {
    title: `Post | Eterna Blog`,
    description:
      "Insights for startup founders building MVPs on Bubble.io.",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
        <article className="mt-12 text-body-md text-text-body">
          Content from CMS
        </article>
      </Section>
    </main>
  );
}
