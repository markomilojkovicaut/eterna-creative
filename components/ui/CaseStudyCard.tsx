import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

/** White CTA — idle covers never show this; hover overlay only. */
function OpenCaseStudyButton({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-soft border border-white/30 bg-white px-3 py-1.5 text-body-sm font-medium text-bg-base",
        className
      )}
    >
      Open case study
      <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple" />
    </span>
  );
}

/**
 * Cover art may include a baked-in CTA — masked on idle.
 * Hover overlays tags + headline + white Open case study button (no layout shift).
 */
export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-soft border border-border-dark bg-bg-card/30 no-underline transition-colors duration-300 hover:border-border-strong",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {study.coverImage ? (
          <Image
            src={study.coverImage}
            alt={`${study.client} case study`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              "object-cover transition-[transform,filter] duration-500 ease-out",
              "group-hover:scale-[1.03] group-hover:blur-[2px] group-hover:brightness-[0.45]",
              "group-focus-within:scale-[1.03] group-focus-within:blur-[2px] group-focus-within:brightness-[0.45]",
              "motion-reduce:group-hover:scale-100 motion-reduce:group-hover:blur-none"
            )}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-end gap-3 p-6 transition-[transform,filter] duration-500 ease-out lg:p-8",
              "group-hover:scale-[1.03] group-hover:blur-[2px] group-hover:brightness-[0.45]",
              "group-focus-within:scale-[1.03] group-focus-within:blur-[2px] group-focus-within:brightness-[0.45]"
            )}
            style={{ backgroundImage: study.imageGradient }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              Case study
            </p>
            <p className="font-heading text-heading-lg font-bold text-text-heading lg:text-display-md">
              {study.client}
            </p>
          </div>
        )}

        {/* Mask baked-in cover CTA on idle */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[22%] bg-gradient-to-t from-[#08060f] via-[#08060f]/90 to-transparent",
            "transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
          )}
          aria-hidden
        />

        {/* Hover overlay — absolute, no height change */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col gap-4 p-6 lg:p-8",
            "bg-bg-base/20 transition-opacity duration-300 ease-out",
            "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
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
    </Link>
  );
}
