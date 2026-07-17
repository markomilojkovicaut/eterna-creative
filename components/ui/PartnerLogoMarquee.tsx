"use client";

import Image from "next/image";
import Link from "next/link";

import type { Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";

const caseStudyTagClasses =
  "inline-flex rounded-full border border-border-muted bg-bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-ink-muted transition-colors duration-300";

function PartnerLogoCell({ partner }: { partner: Partner }) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-1">
      <Image
        src={partner.logoSrc}
        alt={partner.name}
        width={160}
        height={48}
        className="h-auto max-h-8 w-auto max-w-[130px] object-contain object-center brightness-0"
      />
      {partner.caseStudySlug && (
        <span
          className={cn(
            caseStudyTagClasses,
            "group-hover/case:border-border-strong group-hover/case:bg-bg-surface group-hover/case:text-text-ink"
          )}
        >
          Case study
        </span>
      )}
    </div>
  );

  const cellClassName =
    "relative flex h-[100px] w-[170px] shrink-0 items-center justify-center px-5 transition-opacity duration-300 sm:w-[190px]";

  if (partner.caseStudySlug) {
    return (
      <Link
        href={`/portfolio/${partner.caseStudySlug}`}
        className={cn(cellClassName, "group/case opacity-100")}
      >
        {content}
      </Link>
    );
  }

  return <div className={cellClassName}>{content}</div>;
}

export function PartnerLogoMarquee({
  partners,
  className,
}: {
  partners: Partner[];
  className?: string;
}) {
  const track = [...partners, ...partners];

  return (
    <div
      className={cn("group/marquee overflow-hidden", className)}
      aria-label="Partner logos"
    >
      <div
        className={cn(
          "flex w-max animate-partner-marquee transition-opacity duration-300",
          "group-hover/marquee:[animation-play-state:paused]",
          "[&:has(a:hover)>a:not(:hover)]:opacity-35",
          "[&:has(a:hover)>div]:opacity-35"
        )}
      >
        {track.map((partner, index) => (
          <PartnerLogoCell
            key={`${partner.id}-${index}`}
            partner={partner}
          />
        ))}
      </div>
    </div>
  );
}
