"use client";

import Image from "next/image";
import Link from "next/link";

import type { Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";

export type PartnerLogoTone = "ink" | "white";

const caseStudyTagClassesByTone: Record<PartnerLogoTone, string> = {
  ink: "inline-flex rounded-full border border-border-muted bg-bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-ink-muted transition-colors duration-300 group-hover/case:border-border-strong group-hover/case:bg-bg-surface group-hover/case:text-text-ink",
  white:
    "inline-flex rounded-full border border-border-dark bg-bg-card/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-sub transition-colors duration-300 group-hover/case:border-border-strong group-hover/case:bg-bg-card group-hover/case:text-text-heading",
};

const logoFilterByTone: Record<PartnerLogoTone, string> = {
  /** Black logos for light surfaces (existing Partners section). */
  ink: "brightness-0",
  /**
   * White logos for dark surfaces (Hero).
   * Invert turns dark marks white and white JPEG backgrounds black;
   * screen blend then drops those black backgrounds on the dark hero.
   */
  white: "invert mix-blend-screen",
};

function PartnerLogoCell({
  partner,
  tone,
}: {
  partner: Partner;
  tone: PartnerLogoTone;
}) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-1">
      <Image
        src={partner.logoSrc}
        alt={partner.name}
        width={160}
        height={48}
        className={cn(
          "h-auto max-h-8 w-auto max-w-[130px] object-contain object-center",
          logoFilterByTone[tone]
        )}
      />
      {partner.caseStudySlug && (
        <span className={caseStudyTagClassesByTone[tone]}>Case study</span>
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
  tone = "ink",
}: {
  partners: Partner[];
  className?: string;
  /** `ink` = black logos (light bg). `white` = white logos (dark bg). */
  tone?: PartnerLogoTone;
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
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}
