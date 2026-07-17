import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
import { PhaseLabel } from "@/components/ui/PhaseLabel";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-soft border border-border-dark bg-bg-card/30 transition-colors duration-300 hover:border-border-strong hover:bg-bg-card/50",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
        <PhaseLabel>{study.client}</PhaseLabel>

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

        <Link
          href={`/portfolio/${study.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-brand-pink transition-opacity hover:opacity-80"
        >
          Open
          <ArrowUpRight className="!h-4 !w-4" />
        </Link>
      </div>

      <div className="relative mt-auto aspect-[16/10] w-full overflow-hidden border-t border-border-dark">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: study.imageGradient }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-scanlines opacity-30"
          aria-hidden
        />
      </div>
    </article>
  );
}
