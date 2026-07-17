"use client";

import { useCallback, useEffect, useState } from "react";

import { FounderPrincipleIcon } from "@/components/ui/FounderPrincipleIcon";
import type { FounderPrinciple } from "@/lib/founder-studio";
import { cn } from "@/lib/utils";

export interface DarkAccordionProps {
  items: FounderPrinciple[];
  intervalMs?: number;
  className?: string;
  defaultActiveIndex?: number;
}

export function DarkAccordion({
  items,
  intervalMs = 9000,
  className,
  defaultActiveIndex = 0,
}: DarkAccordionProps) {
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
        "overflow-hidden rounded-soft border border-border-dark bg-bg-card/40",
        className
      )}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.id}
            className={cn(
              "relative flex",
              !isLast && "border-b border-border-dark"
            )}
          >
            <div
              className="relative w-1 shrink-0 bg-brand-purple-light/15"
              aria-hidden
            >
              {isActive && (
                <div
                  key={progressCycle}
                  className="absolute inset-x-0 top-0 h-full origin-top animate-approach-border-fill bg-brand-purple-light"
                  style={{ animationDuration: `${intervalMs}ms` }}
                />
              )}
            </div>

            <div
              className={cn(
                "flex min-w-0 flex-1 gap-4 py-4 pl-4 pr-5 transition-opacity duration-300 sm:gap-5 sm:py-5 sm:pl-5 sm:pr-6",
                !isActive && "opacity-70 hover:opacity-100"
              )}
            >
              <FounderPrincipleIcon id={item.id} />

              <div className="min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => selectIndex(index)}
                  className="block w-full text-left font-heading text-body-md font-bold text-text-heading sm:text-heading-sm"
                  aria-expanded={isActive}
                >
                  {item.title}
                </button>
                {isActive && (
                  <p className="mt-2 text-body-md leading-relaxed text-text-body">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
