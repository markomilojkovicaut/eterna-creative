"use client";

import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type DarkRotateAccordionAccent = "purple" | "danger";

export interface DarkRotateAccordionItem {
  id: string;
  title: string;
  description: string;
  eyebrow?: string;
  accent?: DarkRotateAccordionAccent;
}

export interface DarkRotateAccordionProps {
  items: DarkRotateAccordionItem[];
  intervalMs?: number;
  className?: string;
  defaultActiveIndex?: number;
  /** Dark surfaces (default) or light/white chapters. */
  variant?: "dark" | "light";
}

/**
 * Auto-accordion: one open panel, left border fill, auto-advance.
 * Dark: Challenges (legacy), How we use AI. Light: Challenges on white.
 */
export function DarkRotateAccordion({
  items,
  intervalMs = 8000,
  className,
  defaultActiveIndex = 0,
  variant = "dark",
}: DarkRotateAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [progressCycle, setProgressCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const isLight = variant === "light";

  const selectIndex = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressCycle((cycle) => cycle + 1);
  }, []);

  useEffect(() => {
    if (items.length <= 1 || paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
      setProgressCycle((cycle) => cycle + 1);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [progressCycle, items.length, intervalMs, paused]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-soft border",
        isLight
          ? "border-border-muted bg-bg-muted"
          : "border-border-dark bg-bg-card/40",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const isLast = index === items.length - 1;
        const accent = item.accent ?? "purple";
        const isDanger = accent === "danger";

        return (
          <div
            key={item.id}
            className={cn(
              "relative flex",
              !isLast &&
                (isLight ? "border-b border-border-muted" : "border-b border-border-dark")
            )}
          >
            <div
              className={cn(
                "relative w-1 shrink-0",
                isDanger
                  ? "bg-brand-danger/20"
                  : isLight
                    ? "bg-brand-purple/20"
                    : "bg-brand-purple-light/15"
              )}
              aria-hidden
            >
              {isActive ? (
                <div
                  key={progressCycle}
                  className={cn(
                    "absolute inset-x-0 top-0 h-full origin-top animate-approach-border-fill",
                    isDanger
                      ? "bg-brand-danger"
                      : isLight
                        ? "bg-brand-purple"
                        : "bg-brand-purple-light"
                  )}
                  style={{
                    animationDuration: `${intervalMs}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              ) : null}
            </div>

            <div
              className={cn(
                "min-w-0 flex-1 py-4 pl-5 pr-6 transition-opacity duration-300 sm:py-5 sm:pl-6 sm:pr-7",
                !isActive && "opacity-70 hover:opacity-100"
              )}
            >
              <button
                type="button"
                onClick={() => selectIndex(index)}
                className="block w-full text-left"
                aria-expanded={isActive}
              >
                {item.eyebrow ? (
                  <span
                    className={cn(
                      "block text-[11px] font-semibold uppercase tracking-[0.12em]",
                      isDanger
                        ? "text-brand-danger"
                        : isLight
                          ? "text-brand-purple"
                          : "text-brand-purple-light"
                    )}
                  >
                    {item.eyebrow}
                  </span>
                ) : null}
                <span
                  className={cn(
                    "block font-heading text-body-md font-bold leading-snug sm:text-heading-sm",
                    isLight ? "text-text-ink" : "text-text-heading",
                    item.eyebrow && "mt-1.5"
                  )}
                >
                  {item.title}
                </span>
              </button>
              {isActive ? (
                <p
                  className={cn(
                    "mt-2 max-w-[560px] text-body-md leading-relaxed",
                    isLight ? "text-text-ink-sub" : "text-text-body"
                  )}
                >
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
