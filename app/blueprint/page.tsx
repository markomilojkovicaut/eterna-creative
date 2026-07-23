import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import {
  blueprintNotes,
  blueprintPageMeta,
  blueprintTiers,
} from "@/lib/blueprint";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import {
  sectionBackdropPresets,
  investmentTopBandClass,
  investmentTopBandFadeClass,
} from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: blueprintPageMeta.title,
  description: blueprintPageMeta.description,
};

export default function BlueprintPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <div className={investmentTopBandClass} aria-hidden>
          <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
          <div className={investmentTopBandFadeClass} />
        </div>

        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <SectionHeading
              label="Start here"
              lines={[
                { text: "Free Launch", variant: "default" },
                { text: "Plan", variant: "gradient" },
              ]}
              subheading={
                <>
                  Book a strategy call. If there&apos;s a fit, you get a Launch
                  Plan for your application, automation, or website - scope,
                  preview, flat price, timeline - before any build commitment.
                  Paid Blueprint stays an upsell for complex builds.
                </>
              }
            />
            <CallToActionLink href="/book" className="mt-8 w-fit">
              Book a strategy call
            </CallToActionLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-soft border border-border-dark">
          <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {blueprintTiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col p-6 sm:p-8",
                  tier.highlight && "bg-bg-card/40",
                  tier.upsell && "opacity-95"
                )}
              >
                {tier.highlight ? (
                  <span className="absolute right-4 top-4 rounded-soft border border-border-strong bg-bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-pink">
                    Early path
                  </span>
                ) : null}
                {tier.upsell ? (
                  <span className="absolute right-4 top-4 rounded-soft border border-border-dark bg-bg-base/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                    Upsell if needed
                  </span>
                ) : null}
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                  {tier.priceLabel}
                </p>
                <h2 className="mt-2 font-heading text-heading-md font-bold text-text-heading">
                  {tier.name}
                </h2>
                <p className="mt-3 text-body-sm text-text-sub">{tier.tagline}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-body-sm leading-relaxed text-text-body"
                    >
                      <span className="text-brand-purple-light">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <CallToActionLink href="/book" className="mt-8 w-fit">
                  {tier.cta}
                </CallToActionLink>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface" className="text-text-ink-sub">
        <SectionHeading
          label="How it works"
          labelVariant="light"
          lines={[{ text: "Rules of the model", variant: "default" }]}
        />
        <ul className="mt-8 flex max-w-3xl flex-col gap-4">
          {blueprintNotes.map((note) => (
            <li
              key={note}
              className="rounded-soft border border-border-muted bg-bg-muted px-5 py-4 text-body-md leading-relaxed"
            >
              {note}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
