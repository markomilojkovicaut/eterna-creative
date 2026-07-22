import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides-content";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (guide) {
    return {
      title: `${guide.title} | Eterna Guides`,
      description: guide.excerpt,
    };
  }

  return {
    title: "Guide | Eterna Guides",
    description: "How-to guides for building and launching products.",
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <Link
          href="/guides"
          className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
        >
          ← Back to Guides
        </Link>
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="purple">{guide.category}</Badge>
            <Badge variant="muted">{guide.difficulty}</Badge>
          </div>
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {guide.title}
          </h1>
          <p className="mt-4 text-body-md text-text-muted">
            {guide.readTime} min read
          </p>
        </div>
        <article className="mt-12 max-w-2xl text-body-md leading-relaxed text-text-body">
          <p>{guide.content}</p>
        </article>
      </Section>
    </main>
  );
}
