"use client";

import { useEffect, useState } from "react";

import type { BlogTocItem } from "@/lib/blog";
import { cn } from "@/lib/utils";

/** Numbered in-flow TOC (Adeel-style). */
export function BlogTableOfContents({
  items,
  className,
  variant = "panel",
}: {
  items: BlogTocItem[];
  className?: string;
  variant?: "panel" | "inline";
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const list = (
    <ol
      className={cn(
        variant === "inline" ? "mt-4 space-y-2.5" : "mt-3 space-y-2"
      )}
    >
      {items.map((item, index) => (
        <li key={item.id} className={cn(item.level >= 3 && "pl-3")}>
          <a
            href={`#${item.id}`}
            className={cn(
              "group flex gap-3 text-body-sm leading-snug no-underline transition-colors",
              activeId === item.id
                ? "font-semibold text-brand-purple"
                : "text-text-ink-sub hover:text-text-ink"
            )}
          >
            <span
              className={cn(
                "w-6 shrink-0 tabular-nums",
                activeId === item.id
                  ? "text-brand-purple"
                  : "text-text-ink-muted"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.text}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  if (variant === "inline") {
    return (
      <nav aria-label="Table of contents" className={cn("my-10", className)}>
        <p className="font-heading text-heading-sm font-bold text-text-ink">
          Table of contents
        </p>
        {list}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-soft border border-border-muted bg-bg-muted/60 p-4",
        className
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
        On this page
      </p>
      {list}
    </nav>
  );
}
