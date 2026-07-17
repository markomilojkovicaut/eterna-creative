/** Tight display typography shared by SectionHeading H2, Hero H1, and light editorial statements. */
export const displayHeadingTypeClasses =
  "font-heading font-black leading-[1.05] tracking-[-2px]";

export const heroH1LineClasses =
  "block overflow-visible text-display-lg sm:text-display-xl";

/**
 * Light-surface editorial display — 48px, 104% line-height, -2px tracking.
 * Used by Our approach, The process, What drives us.
 */
export const lightEditorialDisplayClasses =
  "font-heading font-normal tracking-[-2px] text-text-ink text-[48px] leading-[1.04] sm:text-[48px] lg:text-[48px]";

/** Stacked line 1 in a two-line light editorial heading. */
export const lightEditorialLineClasses = "block";

/** Stacked line 2 — bold, tight gap below line 1 (`mt-0.5`). */
export const lightEditorialAccentLineClasses = "mt-0.5 block font-bold";
