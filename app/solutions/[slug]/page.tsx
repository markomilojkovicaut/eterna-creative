import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";
import {
  getAllSolutionSlugs,
  getSolutionPageContent,
} from "@/lib/solution-pages";
import { solutions } from "@/lib/solutions";
import { services } from "@/lib/services";
import { sectionBackdropPresets } from "@/lib/section-backdrops";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.id === slug);
  const page = getSolutionPageContent(slug);

  if (!solution || !page) return { title: "Solutions | Eterna" };

  return {
    title: `${solution.title} | Eterna`,
    description: page.hero.subheading,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.id === slug);
  const page = getSolutionPageContent(slug);

  if (!solution || !page) notFound();

  const relatedServices = services.filter((s) =>
    page.serviceSlugs.includes(s.id)
  );
  const relatedCaseStudies = page.caseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter(Boolean);

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.services} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <Link
              href="/#solutions"
              className="text-body-sm text-brand-purple-light hover:text-text-heading"
            >
              ← All solutions
            </Link>
            <div className="mt-8">
              <SectionHeading
                label="Solutions"
                lines={page.hero.lines}
                subheading={page.hero.subheading}
              />
              <CallToActionLink href="/book" className="mt-10">
                Book a strategy call
              </CallToActionLink>
            </div>
          </div>
        </div>
      </section>

      <Section background="surface" className="text-text-ink-sub">
        <h2 className="font-heading text-heading-lg font-bold text-text-ink">
          Common challenges
        </h2>
        <ul className="mt-6 flex flex-col gap-3">
          {page.challenges.map((item) => (
            <li key={item} className="flex gap-3 text-body-md">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-purple" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          label="Services"
          lines={[{ text: "How we help", variant: "default" }]}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="rounded-soft border border-border-dark bg-bg-card/30 p-5 no-underline transition-colors hover:border-border-strong"
            >
              <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                {service.title}
              </h3>
              <p className="mt-0 text-body-sm text-text-body">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {relatedCaseStudies.length > 0 && (
        <Section background="surface" className="text-text-ink-sub">
          <SectionHeading
            label="Proof"
            labelVariant="light"
            lines={[{ text: "Related work", variant: "default" }]}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedCaseStudies.map(
              (study) => study && <CaseStudyCard key={study.id} study={study} />
            )}
          </div>
        </Section>
      )}
    </main>
  );
}
