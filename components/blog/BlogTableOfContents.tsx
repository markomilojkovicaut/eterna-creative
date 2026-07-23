"use client";

import { useEffect, useId, useState } from "react";

import type { BlogTocItem } from "@/lib/blog";
import { cn } from "@/lib/utils";

/**
 * Sticky collapsed TOC — closed by default, expands to jump sections.
 */
export function BlogTableOfContents({
  items,
  className,
}: {
  items: BlogTocItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const panelId = useId();

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

  const activeLabel =
    items.find((item) => item.id === activeId)?.text ?? "On this page";

  return (
    <div
      className={cn(
        "sticky z-40 border-b border-border-muted bg-bg-surface/95 backdrop-blur-md",
        className
      )}
      style={{ top: "var(--blog-header-offset, 48px)" }}
    >
      <div className="mx-auto w-full max-w-[720px]">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex w-full items-center justify-between gap-3 py-3 text-left",
            "text-body-sm transition-colors hover:text-brand-purple"
          )}
        >
          <span className="min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
              Table of contents
            </span>
            <span className="mt-0.5 block truncate font-medium text-text-ink">
              {open ? "Jump to a section" : activeLabel}
            </span>
          </span>
          <span
            className={cn(
              "inline-flex size-8 shrink-0 items-center justify-center rounded-soft border border-border-muted text-text-ink-muted transition-transform",
              open && "rotate-180"
            )}
            aria-hidden
          >
            ▾
          </span>
        </button>

        <div
          id={panelId}
          hidden={!open}
          className="border-t border-border-muted pb-4 pt-3"
        >
          <ol className="max-h-[min(50vh,360px)] space-y-2 overflow-y-auto pr-1">
            {items.map((item, index) => (
              <li key={item.id} className={cn(item.level >= 3 && "pl-3")}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex gap-3 text-body-sm leading-snug no-underline transition-colors",
                    activeId === item.id
                      ? "font-semibold text-brand-purple"
                      : "text-text-ink-sub hover:text-text-ink"
                  )}
                >
                  <span className="w-6 shrink-0 tabular-nums text-text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
