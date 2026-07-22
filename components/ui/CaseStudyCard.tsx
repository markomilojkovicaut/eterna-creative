import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

/** White CTA — hover / focus only. */
function OpenCaseStudyButton({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-soft bg-white px-3 py-1.5 text-body-sm font-medium text-bg-base shadow-sm",
        className
      )}
    >
      Open case study
      <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple" />
    </span>
  );
}

/**
 * Idle — client + outcome metrics
 * Hover — tags + title + Open CTA
 */
export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  const visibleOutcomes = study.outcomes.slice(0, 3);

  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-soft border border-border-dark bg-bg-card/30 no-underline transition-colors duration-300 hover:border-border-strong",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 transition-[transform,filter] duration-500 ease-out",
            "group-hover:scale-[1.03] group-hover:blur-[2px] group-hover:brightness-[0.4]",
            "group-focus-within:scale-[1.03] group-focus-within:blur-[2px] group-focus-within:brightness-[0.4]",
            "motion-reduce:group-hover:scale-100 motion-reduce:group-hover:blur-none"
          )}
          style={{ backgroundImage: study.imageGradient }}
          aria-hidden
        />

        <div
          className={cn(
            "absolute inset-x-0 top-0 z-[6] flex flex-col gap-2 p-6 transition-opacity duration-300 lg:p-8",
            "group-hover:opacity-0 group-focus-within:opacity-0"
          )}
        >
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
            <span
              className="h-3.5 w-[3px] shrink-0 rounded-full bg-brand-purple-light"
              aria-hidden
            />
            Case study
          </span>
          <p className="font-heading text-heading-lg font-bold text-text-heading lg:text-display-md">
            {study.client}
          </p>
        </div>

        {/* Outcome metrics — always visible on idle (hidden on hover) */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-[6] p-6 transition-opacity duration-300 lg:p-8",
            "group-hover:opacity-0 group-focus-within:opacity-0"
          )}
        >
          <dl
            className={cn(
              "grid gap-3",
              visibleOutcomes.length >= 3
                ? "grid-cols-3"
                : visibleOutcomes.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            )}
          >
            {visibleOutcomes.map((outcome) => (
              <div key={`${outcome.value}-${outcome.label}`} className="min-w-0">
                <dt className="sr-only">{outcome.label}</dt>
                <dd className="font-heading text-heading-md font-bold leading-none text-text-heading sm:text-heading-lg">
                  {outcome.value}
                </dd>
                <p className="mt-1.5 text-[11px] leading-snug text-text-sub sm:text-body-sm">
                  {outcome.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col gap-4 p-6 lg:p-8",
            "bg-bg-base/25 transition-opacity duration-300 ease-out",
            "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
            "pointer-events-none",
            "motion-reduce:transition-none"
          )}
        >
          <ul
            className={cn(
              "flex flex-wrap gap-2",
              "translate-y-[-8px] transition-transform duration-300 ease-out",
              "group-hover:translate-y-0 group-focus-within:translate-y-0",
              "motion-reduce:translate-y-0"
            )}
          >
            {study.tags.map((tag) => (
              <li key={tag}>
                <DarkTagPill>{tag}</DarkTagPill>
              </li>
            ))}
          </ul>

          <h3
            className={cn(
              "font-heading text-heading-md font-bold leading-snug text-text-heading lg:text-heading-lg",
              "translate-y-[-8px] transition-transform delay-75 duration-300 ease-out",
              "group-hover:translate-y-0 group-focus-within:translate-y-0",
              "motion-reduce:translate-y-0 motion-reduce:delay-0"
            )}
          >
            {study.title}
          </h3>

          <OpenCaseStudyButton
            className={cn(
              "mt-auto",
              "translate-y-[-8px] transition-transform delay-100 duration-300 ease-out",
              "group-hover:translate-y-0 group-focus-within:translate-y-0",
              "motion-reduce:translate-y-0 motion-reduce:delay-0"
            )}
          />
        </div>
      </div>
      <span className="sr-only">
        {study.client} case study
        {visibleOutcomes
          .map((o) => `${o.value} ${o.label}`)
          .join(", ")}
      </span>
    </Link>
  );
}
