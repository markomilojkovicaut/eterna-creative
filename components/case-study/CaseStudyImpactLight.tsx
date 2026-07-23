import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

/** Full-white impact band — highest contrast beat on the page. */
export function CaseStudyImpactLight({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white py-section text-text-ink">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Impact
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-heading-lg font-bold tracking-[-0.02em] text-text-ink sm:text-display-md">
              What changed after launch
            </h2>
            <ul
              className={cn(
                "mt-10 grid gap-4",
                study.outcomes.length >= 3
                  ? "sm:grid-cols-3"
                  : study.outcomes.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-1 sm:max-w-sm"
              )}
            >
              {study.outcomes.map((outcome) => (
                <li
                  key={`${outcome.value}-${outcome.label}`}
                  className="rounded-soft border border-black/10 bg-bg-surface/80 px-5 py-6"
                >
                  <p className="font-heading text-display-md font-bold text-text-ink">
                    {outcome.value}
                  </p>
                  <p className="mt-2 text-body-sm text-text-ink-sub">
                    {outcome.label}
                  </p>
                </li>
              ))}
            </ul>
            {study.impact.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {study.impact.map((line) => (
                  <li
                    key={line}
                    className="text-body-md font-medium text-text-ink-sub"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
