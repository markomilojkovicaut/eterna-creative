"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogIndexClient({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
            Articles
          </p>
          <p className="mt-1 text-body-sm text-text-ink-sub">
            {filtered.length} {filtered.length === 1 ? "post" : "posts"}
            {active !== "All" ? ` in ${active}` : ""}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          {["All", ...categories].map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-soft px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors",
                  selected
                    ? "bg-text-ink text-bg-surface"
                    : "bg-bg-muted text-text-ink-muted hover:bg-border-muted hover:text-text-ink"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((post) => (
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
            <h2 className="mt-1.5 font-heading text-heading-sm font-bold leading-snug text-text-ink transition-colors group-hover:text-brand-purple">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-body-sm leading-relaxed text-text-ink-sub">
              {post.excerpt || post.subheading}
            </p>
            <p className="mt-3 text-[12px] text-text-ink-muted">
              {post.readTime} min read
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
