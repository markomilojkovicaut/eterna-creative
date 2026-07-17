"use client";

import { EngineIcon } from "@/components/ui/EngineIcon";
import type { EternaEngine } from "@/lib/eterna-engines";
import { cn } from "@/lib/utils";

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
      className={cn(
        "group relative flex min-h-[240px] flex-col p-4 sm:min-h-[280px] lg:p-6",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-5">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.12em]",
            highlight ? "text-brand-pink" : "text-brand-purple-light"
          )}
        >
          Engine {engine.number}
        </p>

        <EngineIcon icon={engine.icon} highlight={highlight} />

        <div className="flex flex-col gap-2">
          <h3
            className={cn(
              "font-heading text-heading-md font-bold",
              highlight ? "text-brand-pink" : "text-text-heading"
            )}
          >
            {engine.title}
          </h3>
          <p className="min-h-[2.8em] text-body-sm font-medium leading-[1.4] text-text-sub">
            {engine.subtitle}
          </p>
        </div>

        <p className="mt-auto text-body-sm leading-relaxed text-text-body">
          {engine.description}
        </p>
      </div>
    </article>
  );
}
