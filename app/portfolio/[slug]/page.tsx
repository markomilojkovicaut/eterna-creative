import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";
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

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (!item) {
    notFound();
  }

  const gallery = item.gallery ?? [];

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
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
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {item.title}
          </h1>
          {item.subtitle ? (
            <p className="mt-3 max-w-2xl text-body-lg text-text-sub">
              {item.subtitle}
            </p>
          ) : (
            <p className="mt-2 text-body-md text-text-sub">{item.client}</p>
          )}
          <p className="mt-4 max-w-2xl text-body-md text-text-body">
            {item.description}
          </p>
          {item.liveUrl ? (
            <div className="mt-6">
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
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
              "mt-10 grid gap-4 sm:gap-6",
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

        {item.sections && item.sections.length > 0 ? (
          <div className="mt-16 grid gap-12 max-w-2xl">
            {item.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-heading-lg text-text-heading">
                  {section.heading}
                </h2>
                <p className="mt-4 text-body-md leading-relaxed text-text-body">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-16 max-w-2xl">
          <h2 className="font-heading text-heading-lg text-text-heading">
            Results
          </h2>
          <p className="mt-4 text-body-md leading-relaxed text-text-body">
            {item.results}
          </p>
        </div>

        {item.services && item.services.length > 0 ? (
          <ul className="mt-10 flex flex-wrap gap-2">
            {item.services.map((service) => (
              <li key={service}>
                <DarkTagPill>{service}</DarkTagPill>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-16 border-t border-border-dark pt-12">
          <p className="text-body-md text-text-sub">
            Building something similar?
          </p>
          <CallToActionLink href="/book" className="mt-4">
            Book a strategy call
          </CallToActionLink>
        </div>
      </Section>
    </main>
  );
}
