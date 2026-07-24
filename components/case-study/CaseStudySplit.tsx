import { CaseStudyRoles } from "@/components/case-study/CaseStudyExtras";
import { CaseStudyMedia } from "@/components/case-study/CaseStudyMedia";
import { Button } from "@/components/ui/Button";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { Reveal } from "@/components/ui/Reveal";
import {
  caseStudyProductLabels,
  getHomepageMedia,
  studyShowsHomepage,
  type CaseStudy,
  type CaseStudyBulletBlock,
} from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

function StoryBlock({
  eyebrow,
  block,
}: {
  eyebrow: string;
  block: CaseStudyBulletBlock;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
        {eyebrow}
      </p>
      {block.title ? (
        <h2 className="mt-3 font-heading text-heading-lg font-bold text-text-heading">
          {block.title}
        </h2>
      ) : null}
      <p
        className={cn(
          "text-body-md leading-relaxed text-text-body",
          block.title ? "mt-4" : "mt-3"
        )}
      >
        {block.body}
      </p>
      {block.bullets && block.bullets.length > 0 ? (
        <ul className="mt-5 space-y-2.5">
          {block.bullets.map((bullet) => (
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

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border-dark py-3 last:border-0">
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
        {label}
      </span>
      <span className="text-right text-body-sm font-medium text-text-heading">
        {value}
      </span>
    </div>
  );
}

export function CaseStudySplit({
  study,
  overviewLabel = "Overview",
  challengeLabel = "Challenge",
}: {
  study: CaseStudy;
  overviewLabel?: string;
  challengeLabel?: string;
}) {
  const showHomepage = studyShowsHomepage(study);
  const companyUrl = study.companyUrl || study.liveUrl;
  const linkedinUrl = study.linkedinUrl;

  return (
    <section className="bg-bg-base pb-section pt-0">
      <div className={LAYOUT_OUTER_CLASS}>
        <div
          className={cn(
            LAYOUT_INNER_CLASS,
            "grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-12"
          )}
        >
          <Reveal className="w-full max-w-[320px] lg:sticky lg:top-24">
            <aside className="rounded-soft border border-border-dark bg-bg-card/35 p-5 sm:p-6">
              <MetaRow
                label="Product"
                value={caseStudyProductLabels[study.productType]}
              />
              <MetaRow label="Category" value={study.category} />
              <MetaRow label="Location" value={study.location} />
              <MetaRow label="Year" value={study.year} />

              {(companyUrl || linkedinUrl) && (
                <div className="mt-5 flex flex-col gap-2">
                  {companyUrl ? (
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        type="button"
                        className="w-full"
                      >
                        Open company site
                      </Button>
                    </a>
                  ) : null}
                  {linkedinUrl ? (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-soft border border-border-dark px-4 py-2 text-body-sm font-semibold text-brand-purple-light transition-colors hover:border-border-strong hover:text-text-heading"
                    >
                      Company LinkedIn
                    </a>
                  ) : null}
                </div>
              )}

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  Services used
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <li key={service}>
                      <DarkTagPill>{service}</DarkTagPill>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={80} className="min-w-0 space-y-12">
            <StoryBlock eyebrow={overviewLabel} block={study.overview} />
            <StoryBlock eyebrow={challengeLabel} block={study.challenge} />
            {study.roles ? (
              <CaseStudyRoles
                weOwned={study.roles.weOwned}
                clientOwned={study.roles.clientOwned}
              />
            ) : null}
            {showHomepage ? (
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                  Homepage
                </p>
                <CaseStudyMedia
                  media={getHomepageMedia(study)}
                  browserFrame
                  aspectClass="aspect-[16/10]"
                />
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
