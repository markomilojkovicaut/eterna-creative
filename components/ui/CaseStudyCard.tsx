import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

/**
 * Cover art already includes CASE STUDY + client + CTA.
 * Hover expands tags + headline above the image (no duplicate overlay text).
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
        "group relative flex flex-col overflow-hidden rounded-soft border border-border-dark bg-bg-card/30 no-underline transition-colors duration-300 hover:border-border-strong hover:bg-bg-card/50",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4 overflow-hidden px-6 transition-[max-height,opacity,padding] duration-300 ease-out lg:px-8",
          "max-h-0 opacity-0 py-0",
          "group-hover:max-h-[420px] group-hover:opacity-100 group-hover:py-6 group-hover:lg:py-8",
          "group-focus-within:max-h-[420px] group-focus-within:opacity-100 group-focus-within:py-6 group-focus-within:lg:py-8",
          "motion-reduce:transition-none"
        )}
      >
        <ul className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <li key={tag}>
              <DarkTagPill>{tag}</DarkTagPill>
            </li>
          ))}
        </ul>

        <h3 className="font-heading text-heading-md font-bold leading-snug text-text-heading lg:text-heading-lg">
          {study.title}
        </h3>

        <span className="inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-brand-pink">
          Open
          <ArrowUpRight className="!h-4 !w-4" />
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {study.coverImage ? (
          <Image
            src={study.coverImage}
            alt={`${study.client} case study`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col justify-end gap-3 bg-bg-card p-6 transition-transform duration-500 group-hover:scale-[1.02] lg:p-8"
            style={{ backgroundImage: study.imageGradient }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              Case study
            </p>
            <p className="font-heading text-heading-lg font-bold text-text-heading lg:text-display-md">
              {study.client}
            </p>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-soft border border-border-dark bg-bg-card/70 px-3 py-1.5 text-body-sm font-medium text-text-heading backdrop-blur-sm">
              Open case study
              <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple-light" />
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
