"use client";

import { PricingIcon } from "@/components/ui/PricingIcon";
import type { PricingTier } from "@/lib/investment";
import { cn } from "@/lib/utils";

/** Pricing section motion: fade + price lift (shared by every pricing card). */
const descHidden = "translate-y-2 opacity-0 motion-reduce:translate-y-0";
const descShown =
  "group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

export function PricingCard({
  tier,
  className,
}: {
  tier: PricingTier;
  className?: string;
}) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative flex h-full min-h-[280px] flex-col overflow-hidden p-6 outline-none sm:min-h-[300px] sm:p-7 lg:p-8",
        "focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col gap-5 lg:gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="transition-transform duration-300 group-hover:-rotate-3 group-focus-within:-rotate-3 motion-reduce:group-hover:rotate-0">
            <PricingIcon icon={tier.icon} />
          </div>
          {tier.popular && (
            <span className="rounded-soft border border-border-strong bg-brand-purple/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-purple-light">
              Popular
            </span>
          )}
        </div>

        <h3 className="font-heading text-heading-lg font-bold text-text-heading sm:text-[1.375rem]">
          {tier.title}
        </h3>

        <div className="relative min-h-[5.5rem] flex-1">
          <p
            className={cn(
              "absolute inset-x-0 top-0 text-body-md leading-relaxed text-text-body",
              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
              descHidden,
              descShown,
              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
            )}
          >
            {tier.description}
          </p>
        </div>

        <div className="mt-auto transition-transform duration-300 group-hover:-translate-y-1 group-focus-within:-translate-y-1 motion-reduce:group-hover:translate-y-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted">
            Starting from
          </p>
          <p
            className={cn(
              "mt-1 font-heading text-[1.75rem] font-bold leading-none sm:text-[2rem]",
              tier.popular ? "text-brand-purple-light" : "text-text-heading"
            )}
          >
            {tier.price}
          </p>
        </div>
      </div>
    </article>
  );
}
