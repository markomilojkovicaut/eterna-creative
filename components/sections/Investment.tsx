"use client";

import { useState } from "react";
import Link from "next/link";

import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { PricingCard } from "@/components/ui/PricingCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  engagementPathSteps,
  investmentAlsoAvailable,
  investmentCalculatorCta,
  investmentSubheading,
  pricingByProduct,
  pricingProductOptions,
  type PricingProductId,
} from "@/lib/investment";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import {
  investmentTopBandClass,
  investmentTopBandFadeClass,
  sectionBackdropPresets,
} from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export function Investment() {
  const [product, setProduct] = useState<PricingProductId>("application");
  const tiers = pricingByProduct[product];

  return (
    <section className="relative overflow-hidden bg-bg-base py-section">
      <div className={investmentTopBandClass} aria-hidden>
        <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
        <div className={investmentTopBandFadeClass} />
      </div>

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <SectionHeading
              split
              label="Investment"
              lines={[
                { text: "Transparent pricing.", variant: "default" },
                { text: "No surprises.", variant: "gradient" },
              ]}
              titleMaxWidth="max-w-[520px]"
              subheadingMaxWidth="max-w-[520px]"
              subheading={investmentSubheading}
            />
          </Reveal>

          <Reveal delay={60} className="mt-8 sm:mt-10">
            <div
              className="inline-flex flex-wrap gap-2 rounded-soft border border-border-dark bg-bg-card/40 p-1.5"
              role="tablist"
              aria-label="Pricing by product"
            >
              {pricingProductOptions.map((option) => {
                const selected = product === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setProduct(option.id)}
                    className={cn(
                      "rounded-soft px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors",
                      selected
                        ? "bg-text-heading text-bg-base"
                        : "text-text-sub hover:text-text-heading"
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-6 overflow-hidden rounded-soft border border-border-dark lg:mt-8"
          >
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {tiers.map((tier) => (
                <PricingCard key={`${product}-${tier.id}`} tier={tier} />
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-border-dark px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6">
              <p className="max-w-[640px] text-body-sm leading-relaxed text-text-sub sm:text-body-md">
                {investmentAlsoAvailable}
              </p>
              <Link
                href="/book"
                className={cn(
                  "inline-flex shrink-0 items-center justify-center gap-2 rounded-soft border border-border-dark",
                  "bg-bg-card/60 px-5 py-[10px] text-body-md font-medium text-text-heading",
                  "no-underline transition-colors hover:border-border-strong hover:bg-bg-card/80"
                )}
              >
                Book a strategy call
                <ArrowUpRight className="!text-brand-purple-light" />
              </Link>
            </div>

            <div className="flex flex-col gap-4 border-t border-border-dark bg-bg-card/30 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6">
              <p className="max-w-[640px] text-body-sm leading-relaxed text-text-sub sm:text-body-md">
                {investmentCalculatorCta.text}
              </p>
              <Link
                href={investmentCalculatorCta.href}
                className={cn(
                  "inline-flex shrink-0 items-center justify-center gap-2 rounded-soft border border-border-dark",
                  "bg-bg-card/60 px-5 py-[10px] text-body-md font-medium text-text-heading",
                  "no-underline transition-colors hover:border-border-strong hover:bg-bg-card/80"
                )}
              >
                {investmentCalculatorCta.label}
                <ArrowUpRight className="!text-brand-purple-light" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              How engagements start
            </p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3 lg:gap-4">
              {engagementPathSteps.map((step) => (
                <li
                  key={step.id}
                  className="flex flex-col rounded-soft border border-border-dark bg-bg-card/40 p-4 sm:p-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-heading text-heading-md font-bold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm leading-relaxed text-text-body">
                    {step.description}
                  </p>
                  {step.href && step.ctaLabel ? (
                    <Link
                      href={step.href}
                      className="mt-4 inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-brand-purple-light no-underline transition-colors hover:text-text-heading"
                    >
                      {step.ctaLabel}
                      <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple-light" />
                    </Link>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
