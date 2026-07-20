import Link from "next/link";
import { notFound } from "next/navigation";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServicePageContent, getAllServiceSlugs } from "@/lib/service-pages";
import { services, servicePhaseLabels } from "@/lib/services";
import { eternaEngines } from "@/lib/eterna-engines";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePageContent(slug);
  const service = services.find((s) => s.id === slug);

  if (!page || !service) {
    return { title: "Service | Eterna" };
  }

  return {
    title: `${service.title} | Eterna`,
    description: page.hero.subheading,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePageContent(slug);
  const service = services.find((s) => s.id === slug);

  if (!page || !service) {
    notFound();
  }

  const relatedEngines = eternaEngines.filter((e) =>
    page.relatedEngineIds.includes(e.id)
  );

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.services} />

        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
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

            <div className="mt-10">
              <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
            </div>
          </div>
        </div>
      </section>

      <Section background="surface" className="text-text-ink-sub">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-heading-lg font-bold text-text-ink">
              {page.problem.title}
            </h2>
            <p className="mt-4 text-body-md leading-relaxed">{page.problem.body}</p>
          </div>
          <div>
            <h3 className="font-heading text-heading-md font-bold text-text-ink">
              What you get
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {page.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-body-md leading-relaxed"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-purple" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="Process"
          lines={[{ text: "How we work", variant: "default" }]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {page.process.map((step, index) => (
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

      {relatedEngines.length > 0 && (
        <Section background="surface" className="text-text-ink-sub">
          <SectionHeading
            label="Eterna system"
            labelVariant="light"
            lines={[{ text: "Related engines", variant: "default" }]}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEngines.map((engine) => (
              <div
                key={engine.id}
                className="rounded-soft border border-border-muted bg-bg-muted p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple">
                  Engine {engine.number}
                </p>
                <h3 className="mt-2 font-heading text-heading-sm font-bold text-text-ink">
                  {engine.title}
                </h3>
                <p className="mt-2 text-body-sm text-text-ink-sub">
                  {engine.subtitle}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <section className="relative bg-bg-base py-section">
        <div className={LAYOUT_OUTER_CLASS}>
          <div className={LAYOUT_INNER_CLASS}>
            <div
              className={cn(
                "flex flex-col items-center rounded-soft border border-border-dark px-6 py-16 text-center sm:px-10"
              )}
            >
              <h2 className="font-heading text-display-md font-bold text-text-heading">
                Ready to talk{" "}
                <span className="text-gradient-hero">{service.title.toLowerCase()}</span>?
              </h2>
              <p className="mt-4 max-w-lg text-body-md text-text-sub">
                Book a free 15-minute strategy call. We will scope fit and next
                steps - whether we work together or not.
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
          </div>
        </div>
      </section>
    </main>
  );
}
