import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import {
  BlogRelatedGrid,
  BlogShareLinks,
} from "@/components/blog/BlogShareLinks";
import { BlogSoftCta } from "@/components/blog/BlogSoftCta";
import { BlogStickyAside } from "@/components/blog/BlogStickyAside";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
  HEADER_OFFSET_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eternacreative.com";

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

  if (!post) {
    return { title: "Post | Eterna Blog" };
  }

  const description = post.seoDescription || post.excerpt || post.subheading;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Eterna Blog`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.coverAlt || post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const tocItems =
    post.toc.filter((item) => item.level <= 2).length > 0
      ? post.toc.filter((item) => item.level <= 2)
      : post.toc;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Marko Milojković",
    },
    publisher: {
      "@type": "Organization",
      name: "Eterna Creative",
      url: SITE_URL,
    },
    image: post.coverImage ? [`${SITE_URL}${post.coverImage}`] : undefined,
    mainEntityOfPage: pageUrl,
    wordCount: post.wordCount,
    articleSection: post.category,
  };

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogReadingProgress />

      {/* Dark header + heading section */}
      <section className="relative overflow-hidden bg-bg-base pb-12 pt-10 sm:pb-16 sm:pt-14">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <nav
              aria-label="Breadcrumb"
              className="text-body-sm text-text-muted"
            >
              <Link
                href="/"
                className="text-text-muted no-underline hover:text-text-heading"
              >
                Home
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link
                href="/blog"
                className="text-text-muted no-underline hover:text-text-heading"
              >
                Blog
              </Link>
            </nav>

            <div className="mt-8 w-full max-w-[80%] text-left">
              <h1 className="font-heading text-display-md font-bold leading-[1.1] text-text-heading sm:text-display-lg">
                {post.title}
              </h1>
              {post.subheading ? (
                <p className="mt-5 text-body-lg leading-relaxed text-text-sub">
                  {post.subheading}
                </p>
              ) : null}

              <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-body-sm text-text-muted">
                <span>
                  by{" "}
                  <span className="text-text-sub">Marko Milojković</span>
                </span>
                <span aria-hidden>·</span>
                <span>{post.readTime} min read</span>
                <span aria-hidden>·</span>
                <span>{post.category}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light reading column */}
      <section className="bg-bg-surface text-text-ink-sub">
        <div className={LAYOUT_OUTER_CLASS}>
          <div className={cn(LAYOUT_INNER_CLASS, "pb-16 pt-10 sm:pb-20 sm:pt-14")}>
            <article
              id="blog-article"
              className="mx-auto w-full max-w-[720px]"
            >
              {post.coverImage ? (
                <div className="relative aspect-[16/9] overflow-hidden rounded-soft border border-border-muted">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt || post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <BlogSoftCta className={post.coverImage ? "mt-10" : undefined} />

              {tocItems.length > 0 ? (
                <BlogTableOfContents items={tocItems} className="mt-8" />
              ) : null}

              <div
                className="blog-prose blog-prose-essay mt-10"
                dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
              />

              <div className="mt-14 border-t border-border-muted pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
                  Share
                </p>
                <BlogShareLinks
                  url={pageUrl}
                  title={post.title}
                  className="mt-3"
                />
              </div>
            </article>

            <div className="mx-auto mt-14 w-full max-w-[720px]">
              <BlogStickyAside />
            </div>

            {/* Similar articles on white — before the dark CTA */}
            {related.length > 0 ? (
              <div className="mx-auto mt-16 w-full max-w-[720px] border-t border-border-muted pt-12 sm:max-w-none">
                <BlogRelatedGrid posts={related} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-bg-base py-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={cn(LAYOUT_INNER_CLASS, "text-center")}>
            <h2 className="font-heading text-display-md font-bold text-text-heading sm:text-display-lg">
              Ready to <span className="text-gradient-hero">start?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-body-md text-text-sub">
              Book a free 15-min strategy call - we look at where you are, tell
              you honestly what makes sense, and give you a clear path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CallToActionLink href="/book">
                Book strategy session
              </CallToActionLink>
              <SecondaryCtaLink href="/calculator">
                Try product calculator
              </SecondaryCtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
