"use client";

import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
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
    <Link
      href={`/solutions/${solution.id}`}
      className={cn(
        "group relative flex h-full min-h-[300px] flex-col overflow-hidden p-6 outline-none sm:min-h-[320px] sm:p-7 lg:p-8",
        "no-underline focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110 motion-reduce:group-hover:scale-100">
            <SolutionIcon icon={solution.icon} />
          </div>

          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-soft border border-border-dark",
              "bg-bg-card/70 px-3 py-1.5 text-body-sm font-medium text-text-heading",
              "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100",
              "motion-reduce:opacity-100"
            )}
          >
            Explore
            <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple-light" />
          </span>
        </div>

        <h3 className="mt-5 font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm lg:mt-6">
          {solution.title}
        </h3>

        <div className="relative mt-2 min-h-[9rem] flex-1">
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
    </Link>
  );
}
