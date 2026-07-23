import Image from "next/image";
import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

const sharePlatforms = [
  {
    id: "x",
    label: "Share on X",
    href: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: "linkedin",
    label: "Share on LinkedIn",
    href: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
] as const;

export function BlogShareLinks({
  url,
  title,
  className,
  vertical = false,
}: {
  url: string;
  title: string;
  className?: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-2",
        vertical ? "flex-col" : "flex-row flex-wrap",
        className
      )}
    >
      {sharePlatforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          className={cn(
            "inline-flex items-center justify-center rounded-soft border border-border-muted",
            "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-ink-sub no-underline",
            "transition-colors hover:border-border-strong hover:text-text-ink"
          )}
        >
          {platform.id === "x" ? "X" : "LinkedIn"}
        </a>
      ))}
      <Link
        href="/book"
        className={cn(
          "inline-flex items-center justify-center rounded-soft border border-border-muted",
          "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-purple no-underline",
          "transition-colors hover:border-brand-purple/40"
        )}
      >
        Book a call
      </Link>
    </div>
  );
}

/** Same card language as the blog list grid. */
export function BlogRelatedGrid({
  posts,
  className,
}: {
  posts: BlogPostMeta[];
  className?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section className={cn(className)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
        Similar articles
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col no-underline"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-soft border border-border-muted bg-bg-muted">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt || post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20" />
              )}
            </div>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
              {post.category}
            </p>
            <h3 className="mt-1.5 font-heading text-heading-sm font-bold leading-snug text-text-ink transition-colors group-hover:text-brand-purple">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-body-sm leading-relaxed text-text-ink-sub">
              {post.excerpt || post.subheading}
            </p>
            <p className="mt-3 text-[12px] text-text-ink-muted">
              {post.readTime} min read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
