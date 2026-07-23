import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyClosing } from "@/components/case-study/CaseStudyClosing";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyImpactLight } from "@/components/case-study/CaseStudyImpactLight";
import { CaseStudyPullQuote } from "@/components/case-study/CaseStudyPullQuote";
import { CaseStudyQuote } from "@/components/case-study/CaseStudyQuote";
import {
  CaseStudyBeforeAfter,
  CaseStudyVideo,
} from "@/components/case-study/CaseStudyExtras";
import {
  CaseStudyAutomationMiddle,
  CaseStudyResults,
  CaseStudySolutionBand,
  CaseStudyWebsiteMiddle,
} from "@/components/case-study/CaseStudySections";
import { CaseStudySoftCta } from "@/components/case-study/CaseStudySoftCta";
import { CaseStudySplit } from "@/components/case-study/CaseStudySplit";
import { CaseStudyBand } from "@/components/case-study/CaseStudyBand";
import { CaseStudyMedia } from "@/components/case-study/CaseStudyMedia";
import {
  getHomepageMedia,
  type CaseStudy,
} from "@/lib/case-studies";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";

/**
 * Recipe renderer by productType.
 * Shared DNA: hero → split → solution/features → … → closing (+ sibling) → quote → FinalCta
 */
export function CaseStudyView({ study }: { study: CaseStudy }) {
  const pullText = study.quote?.pullQuote?.trim();
  const showPullQuote = Boolean(
    pullText && pullText !== study.quote?.quote.trim()
  );

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <CaseStudyHero study={study} />

      {study.productType === "website" ? (
        <CaseStudySplit
          study={study}
          overviewLabel="Brief"
          challengeLabel="Goals"
        />
      ) : study.productType === "automation" ? (
        <CaseStudySplit
          study={study}
          overviewLabel="Context"
          challengeLabel="Ops problem"
        />
      ) : (
        <CaseStudySplit study={study} />
      )}

      {study.productType === "website" ? (
        <CaseStudyBand tone="elevated">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                Strategy
              </p>
              {study.solution.title ? (
                <h2 className="mt-3 font-heading text-heading-lg font-bold text-text-heading">
                  {study.solution.title}
                </h2>
              ) : null}
              <p className="mt-4 text-body-md leading-relaxed text-text-body">
                {study.solution.body}
              </p>
            </div>
            <CaseStudyMedia
              media={getHomepageMedia(study)}
              browserFrame
              aspectClass="aspect-[16/11]"
            />
          </div>
        </CaseStudyBand>
      ) : study.productType === "automation" ? (
        <CaseStudyBand tone="elevated">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Automation design
            </p>
            {study.solution.title ? (
              <h2 className="mt-3 font-heading text-heading-lg font-bold text-text-heading">
                {study.solution.title}
              </h2>
            ) : null}
            <p className="mt-4 text-body-md leading-relaxed text-text-body">
              {study.solution.body}
            </p>
          </div>
        </CaseStudyBand>
      ) : (
        <CaseStudySolutionBand study={study} />
      )}

      {study.productType === "website" ? (
        <CaseStudyWebsiteMiddle study={study} />
      ) : study.productType === "automation" ? (
        <CaseStudyAutomationMiddle study={study} />
      ) : null}

      {study.beforeAfter && study.productType !== "automation" ? (
        <CaseStudyBeforeAfter
          before={study.beforeAfter.before}
          after={study.beforeAfter.after}
        />
      ) : null}

      {study.productVideoUrl ? (
        <CaseStudyVideo url={study.productVideoUrl} />
      ) : null}

      {showPullQuote && study.quote ? (
        <CaseStudyPullQuote quote={study.quote} />
      ) : null}

      <CaseStudySoftCta />
      <CaseStudyImpactLight study={study} />
      <CaseStudyResults study={study} />
      <CaseStudyClosing study={study} />
      {study.quote ? <CaseStudyQuote quote={study.quote} /> : null}
      <FinalCta />
    </main>
  );
}
