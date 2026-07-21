import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import {
  rescueVibecodeKeeps,
  rescueVibecodePageMeta,
  rescueVibecodeReasons,
  rescueVibecodeRebuilds,
  rescueVibecodeSteps,
} from "@/lib/rescue-vibecode";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";
import { sectionBackdropPresets } from "@/lib/section-backdrops";

export const metadata: Metadata = {
  title: rescueVibecodePageMeta.title,
  description: rescueVibecodePageMeta.description,
};

export default function RescueVibecodePage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <SectionHeading
              label="Rescue"
              lines={[
                { text: "Rescue vibecode", variant: "default" },
                { text: "into production", variant: "gradient" },
              ]}
              subheading={
                <>
                  Turn AI-generated prototypes into software you can ship,
                  maintain, and scale - without starting from zero or living in
                  demo debt.
                </>
              }
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
              <SecondaryCtaLink href="/services/application">
                Application service
              </SecondaryCtaLink>
            </div>
          </div>
        </div>
      </section>

      <Section background="surface" className="text-text-ink-sub">
        <SectionHeading
          label="Why rescue"
          labelVariant="light"
          lines={[{ text: "Common triggers", variant: "default" }]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rescueVibecodeReasons.map((item) => (
            <div
              key={item.id}
              className="rounded-soft border border-border-muted bg-bg-muted p-6"
            >
              <h3 className="font-heading text-heading-sm font-bold text-text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-body-md leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="Process"
          lines={[{ text: "How rescue works", variant: "default" }]}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rescueVibecodeSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-soft border border-border-dark bg-bg-card/30 p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface" className="text-text-ink-sub">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-heading-lg font-bold text-text-ink">
              What we keep
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {rescueVibecodeKeeps.map((item) => (
                <li key={item} className="flex gap-3 text-body-md">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-purple" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-heading-lg font-bold text-text-ink">
              What we rebuild
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {rescueVibecodeRebuilds.map((item) => (
                <li key={item} className="flex gap-3 text-body-md">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-bg-base py-section">
        <div className={LAYOUT_OUTER_CLASS}>
          <div className={cn(LAYOUT_INNER_CLASS, "text-center")}>
            <p className="text-body-md text-text-sub">
              Sitting on a vibecode prototype?{" "}
              <Link href="/book" className="text-brand-purple-light hover:text-text-heading">
                Book a strategy call
              </Link>{" "}
              and we will map what to keep, rebuild, and ship next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
