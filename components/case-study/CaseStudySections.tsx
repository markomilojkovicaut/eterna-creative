import { CaseStudyBand } from "@/components/case-study/CaseStudyBand";
import { CaseStudyMedia } from "@/components/case-study/CaseStudyMedia";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { Reveal } from "@/components/ui/Reveal";
import {
  getGalleryMedia,
  getResultsMedia,
  getSolutionMedia,
  type CaseStudy,
} from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function CaseStudySolutionBand({ study }: { study: CaseStudy }) {
  const media = getSolutionMedia(study);

  return (
    <CaseStudyBand tone="elevated">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
            Solution
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
        <CaseStudyMedia media={media} aspectClass="aspect-[16/11]" />
      </div>
    </CaseStudyBand>
  );
}

export function CaseStudyFeatures({ study }: { study: CaseStudy }) {
  const gallery = getGalleryMedia(study);

  return (
    <section className="bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Features
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {study.features.map((feature) => (
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
          </Reveal>

          <Reveal delay={100}>
            <div
              className={cn(
                "mt-12 grid gap-4",
                gallery.length === 1
                  ? "grid-cols-1"
                  : gallery.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {gallery.slice(0, 3).map((media) => (
                <CaseStudyMedia
                  key={`${media.alt}-${media.src ?? media.label}`}
                  media={media}
                  aspectClass="aspect-[16/10]"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyResults({ study }: { study: CaseStudy }) {
  const resultsMedia = getResultsMedia(study);

  return (
    <section className="bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-heading text-heading-lg font-bold text-text-heading">
                Results
              </h2>
              <p className="mt-4 text-body-md leading-relaxed text-text-body">
                {study.results}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {resultsMedia.map((media) => (
                <CaseStudyMedia
                  key={`${media.alt}-${media.label}`}
                  media={media}
                  aspectClass="aspect-[16/10]"
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                Technologies
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <li key={tech}>
                    <DarkTagPill>{tech}</DarkTagPill>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Website-specific middle: pages + SEO/CRO */
export function CaseStudyWebsiteMiddle({ study }: { study: CaseStudy }) {
  const pages = study.pages ?? [];
  const seo = study.seoCro;

  return (
    <section className="bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Key pages
            </p>
            {pages.length > 0 ? (
              <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                {pages.map((page) => (
                  <li key={page.title} className="space-y-4">
                    <div>
                      <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                        {page.title}
                      </h3>
                      <p className="mt-2 text-body-md text-text-body">
                        {page.body}
                      </p>
                    </div>
                    {page.media ? (
                      <CaseStudyMedia
                        media={page.media}
                        browserFrame
                        aspectClass="aspect-[16/11]"
                      />
                    ) : (
                      <CaseStudyMedia
                        media={{
                          src: null,
                          alt: page.title,
                          label: page.title,
                          kind: "homepage",
                        }}
                        browserFrame
                        aspectClass="aspect-[16/11]"
                      />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Home", "Pricing", "About", "Contact"].map((label) => (
                  <CaseStudyMedia
                    key={label}
                    media={{
                      src: null,
                      alt: label,
                      label,
                      kind: "homepage",
                    }}
                    browserFrame
                    aspectClass="aspect-[16/11]"
                  />
                ))}
              </div>
            )}
          </Reveal>

          {seo ? (
            <Reveal delay={80} className="mt-16 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                SEO / CRO
              </p>
              {seo.title ? (
                <h3 className="mt-3 font-heading text-heading-sm font-bold text-text-heading">
                  {seo.title}
                </h3>
              ) : null}
              <p className="mt-3 text-body-md text-text-body">{seo.body}</p>
              {seo.bullets ? (
                <ul className="mt-4 space-y-2">
                  {seo.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-body-md text-text-body">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple-light" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Automation-specific middle: workflow + before/after */
export function CaseStudyAutomationMiddle({ study }: { study: CaseStudy }) {
  const steps = study.workflowSteps ?? [];

  return (
    <section className="bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Workflow
            </p>
            {steps.length > 0 ? (
              <ol className="mt-8 space-y-6">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-soft border border-border-dark font-heading text-body-sm font-bold text-brand-purple-light">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-body-md text-text-body">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                {study.features.map((f) => (
                  <li key={f.title}>
                    <h3 className="font-heading text-heading-sm font-bold text-text-heading">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-body-md text-text-body">{f.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          {study.beforeAfter ? (
            <Reveal delay={80} className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-soft border border-border-dark bg-bg-card/30 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Before
                </p>
                <p className="mt-3 text-body-md text-text-body">
                  {study.beforeAfter.before}
                </p>
              </div>
              <div className="rounded-soft border border-border-dark bg-bg-card/30 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  After
                </p>
                <p className="mt-3 text-body-md text-text-body">
                  {study.beforeAfter.after}
                </p>
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={100}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {getGalleryMedia(study)
                .slice(0, 3)
                .map((media) => (
                  <CaseStudyMedia
                    key={`${media.alt}-${media.label}`}
                    media={media}
                  />
                ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
