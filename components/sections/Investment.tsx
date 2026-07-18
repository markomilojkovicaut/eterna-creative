import Link from "next/link";

import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { PricingCard } from "@/components/ui/PricingCard";
import {
  investmentAlsoAvailable,
  investmentCalculatorCta,
  investmentSubheading,
  pricingTiers,
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
  return (
    <section className="relative overflow-hidden bg-bg-base py-section">
      <div className={investmentTopBandClass} aria-hidden>
        <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
        <div className={investmentTopBandFadeClass} />
      </div>

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
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

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
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
                Book a call
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
          </div>
        </div>
      </div>
    </section>
  );
}
