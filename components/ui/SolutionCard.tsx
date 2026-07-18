"use client";

import { SolutionIcon } from "@/components/ui/SolutionIcon";
import type { Solution } from "@/lib/solutions";
import { cn } from "@/lib/utils";

/** Solutions section motion: fade-blur reveal (shared by every solution card). */
const descHidden = "opacity-0 blur-sm motion-reduce:blur-none";
const descShown =
  "group-hover:opacity-100 group-hover:blur-none group-focus-within:opacity-100 group-focus-within:blur-none";

export function SolutionCard({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative flex h-full min-h-[260px] flex-col overflow-hidden p-6 outline-none sm:min-h-[280px] sm:p-7 lg:p-8",
        "focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col gap-5 lg:gap-6">
        <div className="transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110 motion-reduce:group-hover:scale-100">
          <SolutionIcon icon={solution.icon} />
        </div>

        <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
          {solution.title}
        </h3>

        <div className="relative mt-auto min-h-[8.5rem]">
          <p
            className={cn(
              "absolute inset-x-0 top-0 text-body-md leading-relaxed text-text-body",
              "transition-[opacity,filter] duration-300 ease-out motion-reduce:transition-none",
              descHidden,
              descShown,
              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
            )}
          >
            {solution.description}
          </p>
        </div>
      </div>
    </article>
  );
}
