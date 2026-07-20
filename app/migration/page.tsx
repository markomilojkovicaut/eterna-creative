import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import {
  migrationKeeps,
  migrationPageMeta,
  migrationReasons,
  migrationRebuilds,
  migrationSteps,
} from "@/lib/migration";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";

export const metadata: Metadata = {
  title: migrationPageMeta.title,
  description: migrationPageMeta.description,
};

export default function MigrationPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

        <div className="relative z-10 mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-content">
            <SectionHeading
              label="Migration"
              lines={[
                { text: "Outgrow Bubble", variant: "default" },
                { text: "without chaos", variant: "gradient" },
              ]}
              subheading={
                <>
                  Migrate to custom code you own - cleanly phased, flat priced,
                  with data and users carried over where it matters.
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
          label="Why migrate"
          labelVariant="light"
          lines={[{ text: "Common triggers", variant: "default" }]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {migrationReasons.map((item) => (
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
          lines={[{ text: "How migration works", variant: "default" }]}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {migrationSteps.map((step, index) => (
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
              {migrationKeeps.map((item) => (
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
              {migrationRebuilds.map((item) => (
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
        <div className="mx-auto w-full max-w-container px-4 text-center sm:px-6 lg:px-8">
          <p className="text-body-md text-text-sub">
            Already on Bubble?{" "}
            <Link href="/book" className="text-brand-purple-light hover:text-text-heading">
              Book a strategy call
            </Link>{" "}
            and we will audit whether migration is the right move.
          </p>
        </div>
      </section>
    </main>
  );
}
