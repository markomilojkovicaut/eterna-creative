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

export function BlogRelatedGrid({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-section">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
        Similar articles
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group no-underline"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              {post.category}
            </p>
            <h3 className="mt-2 font-heading text-body-md font-bold leading-snug text-text-heading transition-colors group-hover:text-brand-purple-light">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-body-sm text-text-body">
              {post.excerpt || post.subheading}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
