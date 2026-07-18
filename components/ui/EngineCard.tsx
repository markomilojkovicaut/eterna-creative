"use client";

import { EngineIcon } from "@/components/ui/EngineIcon";
import type { EternaEngine } from "@/lib/eterna-engines";
import { cn } from "@/lib/utils";

/** Engines section motion: rise reveal (shared by every engine card). */
const descHidden = "translate-y-2 opacity-0 motion-reduce:translate-y-0";
const descShown =
  "group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

export function EngineCard({
  engine,
  className,
}: {
  engine: EternaEngine;
  className?: string;
}) {
  const highlight = engine.highlight ?? false;

  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative flex min-h-[240px] flex-col overflow-hidden p-4 outline-none sm:min-h-[280px] lg:p-6",
        "focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.12em]",
            highlight ? "text-brand-pink" : "text-brand-purple-light"
          )}
        >
          Engine {engine.number}
        </p>

        <div className="transition-transform duration-300 group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5 motion-reduce:group-hover:translate-y-0">
          <EngineIcon icon={engine.icon} highlight={highlight} />
        </div>

        <h3
          className={cn(
            "font-heading text-heading-md font-bold",
            highlight ? "text-brand-pink" : "text-text-heading"
          )}
        >
          {engine.title}
        </h3>

        {/* Subtitle + description share one slot so they never overlap */}
        <div className="relative mt-auto min-h-[5.5rem]">
          <p
            className={cn(
              "absolute inset-x-0 top-0 text-body-sm font-medium leading-[1.4] text-text-sub",
              "transition-all duration-300 ease-out",
              "group-hover:-translate-y-1 group-hover:opacity-0 group-focus-within:-translate-y-1 group-focus-within:opacity-0",
              "motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-within:translate-y-0"
            )}
          >
            {engine.subtitle}
          </p>
          <p
            className={cn(
              "absolute inset-x-0 top-0 text-body-sm leading-relaxed text-text-body",
              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
              descHidden,
              descShown,
              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
            )}
          >
            {engine.description}
          </p>
        </div>
      </div>
    </article>
  );
}
