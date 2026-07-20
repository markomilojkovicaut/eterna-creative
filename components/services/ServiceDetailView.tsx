import Link from "next/link";

import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkFaqAccordion } from "@/components/ui/DarkFaqAccordion";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import type { ServicePageContent } from "@/lib/service-page-types";
import { eternaEngines } from "@/lib/eterna-engines";
import { servicePhaseLabels, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

function Rail({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
      <div className={cn(LAYOUT_INNER_CLASS, className)}>{children}</div>
    </div>
  );
}

export function ServiceDetailView({
  page,
  service,
}: {
  page: ServicePageContent;
  service: Service;
}) {
  const relatedEngines = eternaEngines.filter((e) =>
    page.relatedEngineIds.includes(e.id)
  );
  const includedIsList = page.included.items.every((i) => !i.body);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-base pb-section pt-[calc(48px+theme(spacing.section))]">
        <DarkSectionBackdrop {...sectionBackdropPresets.services} />
        <Rail>
          <Link
            href="/services"
            className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
          >
            ← All services
          </Link>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <SectionHeading
              label={page.hero.label}
              lines={page.hero.lines}
              subheading={page.hero.subheading}
              titleMaxWidth="max-w-[640px]"
            />
            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                {servicePhaseLabels[service.phase]}
              </p>
              <ServiceIcon
                icon={service.icon}
                highlight={service.iconHighlight}
                className="scale-125"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
            {page.hero.secondaryCta ? (
              <SecondaryCtaLink href={page.hero.secondaryCta.href}>
                {page.hero.secondaryCta.label}
              </SecondaryCtaLink>
            ) : null}
          </div>

          {page.hero.stats && page.hero.stats.length > 0 ? (
            <div className="mt-12 overflow-hidden rounded-soft border border-border-dark bg-bg-card/40">
              <div className="grid divide-y divide-border-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {page.hero.stats.map((stat) => (
                  <div key={stat.label} className="px-6 py-5 text-center sm:px-8">
                    <p className="font-heading text-heading-lg font-bold text-text-heading">
                      {stat.num}
                    </p>
                    <p className="mt-1 text-body-sm text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Rail>
      </section>

      {/* Problem */}
      <section className="relative overflow-hidden bg-bg-base pb-section">
        <Rail>
          <SectionHeading
            label="The problem"
            lines={[{ text: page.problem.title, variant: "default" }]}
            subheading={page.problem.body}
            titleMaxWidth="max-w-[720px]"
            subheadingMaxWidth="max-w-[560px]"
          />
          {page.problem.cards && page.problem.cards.length > 0 ? (
            <div
              className={cn(
                "mt-10 grid gap-4",
                page.problem.cards.length >= 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {page.problem.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-soft border border-border-dark bg-bg-card/30 p-6"
                >
                  <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </Rail>
      </section>

      {/* Included */}
      <section className="relative overflow-hidden bg-bg-base pb-section">
        <DarkSectionBackdrop
          flipVertical
          objectPosition="bottom-right"
          gradient="section"
        />
        <Rail>
          <SectionHeading
            label="What's included"
            lines={[{ text: page.included.title, variant: "gradient" }]}
            subheading={page.included.description}
            titleMaxWidth="max-w-[640px]"
          />
          {includedIsList ? (
            <ul className="mt-10 flex max-w-xl flex-col gap-3">
              {page.included.items.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 text-body-md leading-relaxed text-text-body"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-purple" />
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.included.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-soft border border-border-dark bg-bg-card/40 p-6"
                >
                  <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                    {item.body}
                  </p>
                  {item.tags && item.tags.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <li key={tag}>
                          <DarkTagPill>{tag}</DarkTagPill>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </Rail>
      </section>

      {/* Differentiator */}
      {page.differentiator ? (
        <section className="relative overflow-hidden bg-bg-base pb-section">
          <Rail>
            <SectionHeading
              label="Why Eterna"
              lines={[{ text: page.differentiator.title, variant: "default" }]}
              subheading={page.differentiator.body}
              titleMaxWidth="max-w-[640px]"
            />

            {page.differentiator.comparison &&
            page.differentiator.comparison.length > 0 ? (
              <div className="mt-10 overflow-hidden rounded-soft border border-border-dark">
                <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border-dark bg-bg-card/50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted sm:px-6">
                  <span />
                  <span className="text-center text-brand-purple-light">
                    {page.differentiator.comparisonLabels?.us ?? "Eterna"}
                  </span>
                  <span className="text-center">
                    {page.differentiator.comparisonLabels?.them ?? "Traditional"}
                  </span>
                </div>
                {page.differentiator.comparison.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border-dark px-4 py-3 last:border-b-0 sm:px-6"
                  >
                    <span className="text-body-sm text-text-body">{row.label}</span>
                    <span className="text-center text-body-sm font-semibold text-text-heading">
                      {row.us}
                    </span>
                    <span className="text-center text-body-sm text-text-muted">
                      {row.them}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {page.differentiator.items && page.differentiator.items.length > 0 ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.differentiator.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-soft border border-border-dark bg-bg-card/30 p-6"
                  >
                    <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </Rail>
        </section>
      ) : null}

      {/* Process */}
      <section className="relative overflow-hidden bg-bg-base pb-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <Rail>
          <SectionHeading
            label="Process"
            lines={[{ text: page.process.title, variant: "gradient" }]}
            subheading={page.process.description}
            titleMaxWidth="max-w-[640px]"
          />
          <ol className="mt-10 flex flex-col divide-y divide-border-dark overflow-hidden rounded-soft border border-border-dark">
            {page.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 bg-bg-card/20 px-6 py-6 sm:grid-cols-[72px_1fr] sm:gap-6 sm:px-8"
              >
                <div className="flex size-11 items-center justify-center rounded-full border border-border-dark bg-bg-card text-body-sm font-bold text-brand-purple-light">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-text-body">
                    {step.description}
                  </p>
                  {step.outcome ? (
                    <p className="mt-3 text-body-sm font-semibold text-brand-purple-light">
                      → {step.outcome}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Rail>
      </section>

      {/* Packages */}
      {page.packages ? (
        <section
          id="packages"
          className="relative scroll-mt-24 overflow-hidden bg-bg-base pb-section"
        >
          <Rail>
            <SectionHeading
              label="Packages"
              lines={[{ text: page.packages.title, variant: "default" }]}
              subheading={page.packages.description}
              titleMaxWidth="max-w-[640px]"
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {page.packages.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative flex flex-col rounded-soft border p-6 sm:p-8",
                    tier.featured
                      ? "border-brand-purple bg-brand-purple/10"
                      : "border-border-dark bg-bg-card/30"
                  )}
                >
                  {tier.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      Most popular
                    </span>
                  ) : null}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                    {tier.name}
                  </p>
                  <p className="mt-2 font-heading text-display-md font-bold text-text-heading">
                    {tier.price}
                  </p>
                  <p className="mt-3 min-h-[3rem] text-body-sm leading-relaxed text-text-body">
                    {tier.tagline}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border-dark pt-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-body-sm text-text-body"
                      >
                        <span className="text-brand-purple-light">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <CallToActionLink href="/book" className="mt-8 w-full justify-center">
                    Book a strategy call
                  </CallToActionLink>
                </div>
              ))}
            </div>
          </Rail>
        </section>
      ) : null}

      {/* FAQ */}
      {page.faq && page.faq.items.length > 0 ? (
        <section className="relative overflow-hidden bg-bg-base pb-section">
          <Rail>
            <SectionHeading
              label="FAQ"
              lines={[{ text: page.faq.title, variant: "default" }]}
            />
            <div className="mt-10">
              <DarkFaqAccordion
                items={page.faq.items.map((item, i) => ({
                  id: `${page.slug}-faq-${i}`,
                  question: item.q,
                  answer: item.a,
                }))}
              />
            </div>
          </Rail>
        </section>
      ) : null}

      {/* Related engines */}
      {relatedEngines.length > 0 ? (
        <section className="relative overflow-hidden bg-bg-base pb-section">
          <Rail>
            <SectionHeading
              label="Eterna system"
              lines={[{ text: "Related engines", variant: "default" }]}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEngines.map((engine) => (
                <div
                  key={engine.id}
                  className="rounded-soft border border-border-dark bg-bg-card/30 p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                    Engine {engine.number}
                  </p>
                  <h3 className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
                    {engine.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-text-body">
                    {engine.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </Rail>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="relative bg-bg-base pb-section">
        <Rail>
          <div className="flex flex-col items-center rounded-soft border border-border-dark px-6 py-16 text-center sm:px-10">
            <h2 className="max-w-2xl font-heading text-display-md font-bold text-text-heading">
              {page.finalCta.title}
            </h2>
            <p className="mt-4 max-w-lg text-body-md text-text-sub">
              {page.finalCta.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
              {page.relatedLinks?.map((link) => (
                <SecondaryCtaLink key={link.href} href={link.href}>
                  {link.label}
                </SecondaryCtaLink>
              ))}
            </div>
          </div>
        </Rail>
      </section>
    </main>
  );
}
