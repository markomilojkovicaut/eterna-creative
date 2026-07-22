"use client";

import { useCallback, useEffect, useState } from "react";

import type { FounderJourneyStep } from "@/lib/founder-journey";
import { cn } from "@/lib/utils";

export interface ChallengeAccordionProps {
  items: FounderJourneyStep[];
  intervalMs?: number;
  className?: string;
  defaultActiveIndex?: number;
}

/**
 * Dark auto-accordion for the Challenges journey — same interaction model as
 * Approach / Founder principles: one open panel, border fill, auto-advance.
 */
export function ChallengeAccordion({
  items,
  intervalMs = 8000,
  className,
  defaultActiveIndex = 0,
}: ChallengeAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [progressCycle, setProgressCycle] = useState(0);
  const [paused, setPaused] = useState(false);

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
        "overflow-hidden rounded-soft border border-border-dark bg-bg-card/40",
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
        const isChallenge = item.phase === "challenge";

        return (
          <div
            key={`${item.period}-${item.title}`}
            className={cn(
              "relative flex",
              !isLast && "border-b border-border-dark"
            )}
          >
            <div
              className={cn(
                "relative w-1 shrink-0",
                isChallenge
                  ? "bg-brand-danger/20"
                  : "bg-brand-purple-light/15"
              )}
              aria-hidden
            >
              {isActive ? (
                <div
                  key={progressCycle}
                  className={cn(
                    "absolute inset-x-0 top-0 h-full origin-top animate-approach-border-fill",
                    isChallenge ? "bg-brand-danger" : "bg-brand-purple-light"
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
                <span
                  className={cn(
                    "block text-[11px] font-semibold uppercase tracking-[0.12em]",
                    isChallenge ? "text-brand-danger" : "text-brand-purple-light"
                  )}
                >
                  {item.period}
                </span>
                <span className="mt-1.5 block font-heading text-body-md font-bold leading-snug text-text-heading sm:text-heading-sm">
                  {item.title}
                </span>
              </button>
              {isActive ? (
                <p className="mt-2 max-w-[560px] text-body-md leading-relaxed text-text-body">
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
