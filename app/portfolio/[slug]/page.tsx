import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (item) {
    return {
      title: `${item.client} | Eterna Portfolio`,
      description: item.description,
    };
  }

  return {
    title: "Case Study | Eterna Portfolio",
    description: "Case studies from Eterna - products built for startup founders.",
  };
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        {label}
      </p>
      <p className="mt-1 text-body-sm font-medium text-text-heading">{value}</p>
    </div>
  );
}

function StoryBlock({
  eyebrow,
  title,
  body,
  bullets,
}: {
  eyebrow: string;
  title?: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-3 font-heading text-heading-lg font-bold text-text-heading">
          {title}
        </h2>
      ) : null}
      <p
        className={cn(
          "text-body-md leading-relaxed text-text-body",
          title ? "mt-4" : "mt-3"
        )}
      >
        {body}
      </p>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-5 space-y-2.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-body-md leading-relaxed text-text-body"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple-light"
                aria-hidden
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (!item) {
    notFound();
  }

  const gallery = item.gallery ?? [];

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-body-sm text-text-muted">
                <li>
                  <Link
                    href="/portfolio"
                    className="text-brand-purple-light transition-colors hover:text-text-heading"
                  >
                    Portfolio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-text-sub">{item.client}</li>
              </ol>
            </nav>

            <div className="mt-8 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                Case study
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="purple">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-5 font-heading text-display-md text-text-heading">
                {item.title}
              </h1>
              <p className="mt-4 max-w-2xl text-body-md text-text-body">
                {item.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                <MetaChip label="Client" value={item.client} />
                <MetaChip label="Solution" value={item.solutionType} />
                <MetaChip label="Time to launch" value={item.timeline} />
              </div>

              {item.liveUrl ? (
                <div className="mt-8">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm" type="button">
                      Visit website
                    </Button>
                  </a>
                </div>
              ) : null}
            </div>

            {item.outcomes.length > 0 ? (
              <dl
                className={cn(
                  "mt-12 grid gap-4 sm:gap-6",
                  item.outcomes.length >= 3
                    ? "grid-cols-2 sm:grid-cols-3"
                    : item.outcomes.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-1 sm:max-w-xs"
                )}
              >
                {item.outcomes.map((outcome) => (
                  <div
                    key={`${outcome.value}-${outcome.label}`}
                    className="rounded-soft border border-border-dark bg-bg-card/40 px-4 py-4"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                      {outcome.label}
                    </dt>
                    <dd className="mt-2 font-heading text-display-md font-bold text-text-heading">
                      {outcome.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-soft border border-border-dark">
              {item.coverImage ? (
                <Image
                  src={item.coverImage}
                  alt={`${item.client} case study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: item.imageGradient }}
                />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-scanlines opacity-30"
                aria-hidden
              />
            </div>

            {gallery.length > 0 ? (
              <div
                className={cn(
                  "mt-4 grid gap-4",
                  gallery.length === 1
                    ? "grid-cols-1"
                    : gallery.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {gallery.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] overflow-hidden rounded-soft border border-border-dark"
                  >
                    <Image
                      src={src}
                      alt={`${item.client} product screen`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-16">
          <StoryBlock
            eyebrow="Challenge"
            title={item.challenge.title}
            body={item.challenge.body}
            bullets={item.challenge.bullets}
          />
          <StoryBlock
            eyebrow="Overview"
            title={item.overview.title}
            body={item.overview.body}
          />

          <div className="grid grid-cols-2 gap-6 border-y border-border-dark py-8 sm:grid-cols-4">
            <MetaChip label="App category" value={item.category} />
            <MetaChip label="Location" value={item.location} />
            <MetaChip label="Year" value={item.year} />
            <MetaChip label="Client" value={item.client} />
          </div>

          <StoryBlock
            eyebrow="Solution"
            title={item.solution.title}
            body={item.solution.body}
          />

          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Features
            </p>
            <ul className="mt-6 space-y-6">
              {item.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-body-md leading-relaxed text-text-body">
                    {feature.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-soft border border-border-dark bg-bg-card/30 px-6 py-8 sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
              Free tool
            </p>
            <p className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
              Have an idea in mind? Try our App Cost calculator
            </p>
            <p className="mt-2 max-w-md text-body-sm text-text-sub">
              Instant results · 100% free · Takes ~3 minutes
            </p>
            <SecondaryCtaLink href="/calculator" className="mt-5">
              Open calculator
            </SecondaryCtaLink>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Services used
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.services.map((service) => (
                <li key={service}>
                  <DarkTagPill>{service}</DarkTagPill>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Impact
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {item.impact.map((line) => (
                <li
                  key={line}
                  className="rounded-soft border border-border-dark bg-bg-card/40 px-4 py-4 text-body-md font-medium text-text-heading"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-2xl">
            <h2 className="font-heading text-heading-lg font-bold text-text-heading">
              Results
            </h2>
            <p className="mt-4 text-body-md leading-relaxed text-text-body">
              {item.results}
            </p>
          </div>

          {item.closing ? (
            <div className="max-w-2xl border-t border-border-dark pt-12">
              <h2 className="font-heading text-heading-lg font-bold text-text-heading">
                {item.closing.title}
              </h2>
              <p className="mt-4 text-body-md leading-relaxed text-text-body">
                {item.closing.body}
              </p>
              <CallToActionLink href="/book" className="mt-6">
                Book a strategy call
              </CallToActionLink>
            </div>
          ) : (
            <div className="border-t border-border-dark pt-12">
              <p className="text-body-md text-text-sub">
                Building something similar?
              </p>
              <CallToActionLink href="/book" className="mt-4">
                Book a strategy call
              </CallToActionLink>
            </div>
          )}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Technologies
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <DarkTagPill>{tech}</DarkTagPill>
                </li>
              ))}
            </ul>
          </div>

          {item.quote ? (
            <figure className="relative overflow-hidden rounded-soft border border-border-dark bg-bg-card/25 px-6 py-8 sm:px-8 sm:py-10">
              <QuoteIcon className="mb-5" />
              <blockquote className="max-w-3xl font-heading text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02em] text-text-heading sm:text-[1.5rem]">
                &ldquo;{item.quote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <ReviewAvatar
                  name={item.quote.name}
                  src={item.quote.avatarSrc}
                  size="md"
                />
                <div>
                  <p className="font-heading text-body-sm font-bold text-text-heading">
                    {item.quote.name}
                  </p>
                  <p className="text-body-sm text-text-sub">{item.quote.role}</p>
                </div>
              </figcaption>
            </figure>
          ) : null}
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
