import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { DarkFaqAccordion } from "@/components/ui/DarkFaqAccordion";
import { bookCalendlyUrl, bookExpectations, bookPageMeta } from "@/lib/book";
import { faqItems } from "@/lib/faq";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";

export const metadata: Metadata = {
  title: bookPageMeta.title,
  description: bookPageMeta.description,
};

const bookFaqItems = faqItems.filter((item) =>
  ["launch-plan", "website-automation", "timeline"].includes(item.id)
);

export default function BookPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

        <div className="relative z-10 mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-content">
            <SectionHeading
              label="Book a call"
              lines={[
                { text: "Free 15-min", variant: "default" },
                { text: "strategy call", variant: "gradient" },
              ]}
              subheading={
                <>
                  Low friction, high signal. We qualify fit, map your next
                  step, and tell you honestly if we are not the right match.
                </>
              }
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="overflow-hidden rounded-soft border border-border-dark bg-bg-card/30">
                <div className="border-b border-border-dark px-6 py-5 sm:px-8">
                  <h2 className="font-heading text-heading-md font-bold text-text-heading">
                    Pick a time
                  </h2>
                  <p className="mt-2 text-body-sm text-text-body">
                    Choose a slot that works. No prep deck required - just come
                    ready to talk about what you are building.
                  </p>
                </div>
                <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 px-6 py-10 sm:px-8">
                  <p className="max-w-sm text-center text-body-md text-text-sub">
                    Calendly embed goes here. Until then, use the button below
                    to open scheduling in a new tab.
                  </p>
                  <a
                    href={bookCalendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-soft bg-text-heading px-6 py-2 font-semibold text-bg-base no-underline transition-opacity hover:opacity-90"
                  >
                    Open scheduling
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-heading-md font-bold text-text-heading">
                  What to expect
                </h2>
                <ol className="flex flex-col gap-4">
                  {bookExpectations.map((item, index) => (
                    <li
                      key={item.id}
                      className="rounded-soft border border-border-dark bg-bg-card/30 p-5 sm:p-6"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="text-body-sm text-text-muted">
                  Prefer email first?{" "}
                  <Link
                    href="mailto:hello@eterna.dev"
                    className="text-brand-purple-light hover:text-text-heading"
                  >
                    hello@eterna.dev
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section background="surface" className="text-text-ink-sub">
        <SectionHeading
          label="FAQ"
          labelVariant="light"
          lines={[{ text: "Before you book", variant: "default" }]}
          subheading="Quick answers on what happens on the call and what comes next."
        />
        <div className="mt-10 max-w-3xl">
          <DarkFaqAccordion items={bookFaqItems} className="border-border-muted bg-bg-muted" />
        </div>
      </Section>
    </main>
  );
}
