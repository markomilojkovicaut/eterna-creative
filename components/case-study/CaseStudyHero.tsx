import Link from "next/link";

import { CaseStudyMedia } from "@/components/case-study/CaseStudyMedia";
import { Badge } from "@/components/ui/Badge";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import {
  caseStudyProductLabels,
  getHeroMedia,
  type CaseStudy,
} from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

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

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const heroMedia = getHeroMedia(study);

  return (
    <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
      <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal immediate>
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
                <li className="text-text-sub">{study.client}</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <Reveal immediate delay={60}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                  Case study · {caseStudyProductLabels[study.productType]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="mt-5 font-heading text-display-md text-text-heading">
                  {study.title}
                </h1>
                <p className="mt-4 max-w-xl text-body-md text-text-body">
                  {study.description}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                  <MetaChip label="Client" value={study.client} />
                  <MetaChip label="Solution" value={study.solutionType} />
                  <MetaChip label="Time to launch" value={study.timeline} />
                </div>
              </Reveal>

              {study.outcomes.length > 0 ? (
                <Reveal immediate delay={140}>
                  <dl
                    className={cn(
                      "mt-10 grid gap-3",
                      study.outcomes.length >= 3
                        ? "grid-cols-3"
                        : study.outcomes.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-1 max-w-xs"
                    )}
                  >
                    {study.outcomes.map((outcome, i) => (
                      <div
                        key={`${outcome.value}-${outcome.label}`}
                        className="rounded-soft border border-border-dark bg-bg-card/40 px-3 py-3 sm:px-4 sm:py-4"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                          {outcome.label}
                        </dt>
                        <dd className="mt-1.5 font-heading text-heading-lg font-bold text-text-heading sm:text-display-md">
                          {outcome.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ) : null}
            </div>

            <Reveal immediate delay={180} className="min-w-0">
              <CaseStudyMedia
                media={heroMedia}
                aspectClass="aspect-[16/11]"
                priority
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
