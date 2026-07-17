"use client";

import { useCallback, useEffect, useState } from "react";

import type { QuoteBarAccent } from "@/components/ui/QuoteBar";
import { cn } from "@/lib/utils";

export type AutoAccordionAccent = QuoteBarAccent;

export interface AutoAccordionItem {
  id: string;
  title: string;
  description: string;
  accent?: AutoAccordionAccent;
}

export interface AutoAccordionProps {
  items: AutoAccordionItem[];
  /** Auto-advance interval in ms. Default 9000 (9s). */
  intervalMs?: number;
  className?: string;
  defaultActiveIndex?: number;
}

const accentFillClasses: Record<AutoAccordionAccent, string> = {
  purple: "bg-brand-purple-light",
  pink: "bg-brand-pink",
  black: "bg-text-ink",
};

/**
 * Unified accordion: one open panel at a time, left-border fill animation,
 * auto-rotates on an interval. Click a title to switch panels.
 */
export function AutoAccordion({
  items,
  intervalMs = 9000,
  className,
  defaultActiveIndex = 0,
}: AutoAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [progressCycle, setProgressCycle] = useState(0);

  const selectIndex = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressCycle((cycle) => cycle + 1);
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
      setProgressCycle((cycle) => cycle + 1);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [progressCycle, items.length, intervalMs]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-soft border border-border-muted bg-bg-muted",
        className
      )}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const isLast = index === items.length - 1;
        const accent = item.accent ?? "purple";

        return (
          <div
            key={item.id}
            className={cn(
              "relative flex",
              !isLast && "border-b border-border-muted"
            )}
          >
            <div
              className="relative w-1 shrink-0 bg-brand-purple-light/20"
              aria-hidden
            >
              {isActive && (
                <div
                  key={progressCycle}
                  className={cn(
                    "absolute inset-x-0 top-0 h-full origin-top animate-approach-border-fill",
                    accentFillClasses[accent]
                  )}
                  style={{ animationDuration: `${intervalMs}ms` }}
                />
              )}
            </div>

            <div
              className={cn(
                "min-w-0 flex-1 py-4 pl-5 pr-6 text-body-lg text-text-ink transition-opacity duration-300",
                !isActive && "opacity-75 hover:opacity-100"
              )}
            >
              <button
                type="button"
                onClick={() => selectIndex(index)}
                className="block w-full text-left font-bold"
                aria-expanded={isActive}
              >
                {item.title}
              </button>
              {isActive && (
                <span className="mt-2 block text-body-md font-normal leading-relaxed text-text-ink-sub">
                  {item.description}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
