/** Matches hero section outer width cap (1280px). */
export const LAYOUT_OUTER_CLASS = "mx-auto w-full max-w-container";

/**
 * Content rail: 1216px max + horizontal padding matching header/footer.
 * Non-mobile padding is 32px (`lg:px-8`).
 */
export const LAYOUT_INNER_CLASS =
  "mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8";

/** Fixed header bar height (py-2 + 32px CTA). Use on non-overlay pages. */
export const HEADER_OFFSET_CLASS = "pt-[48px]";

/** Light chapter spread: sticky editorial aside + right content column. */
export const LIGHT_SPREAD_LAYOUT_CLASS =
  "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16";

export const LIGHT_STICKY_ASIDE_CLASS =
  "lg:sticky lg:top-6 lg:w-full lg:max-w-[400px] lg:shrink-0 lg:self-start";

export const LIGHT_RIGHT_COLUMN_CLASS =
  "flex w-full min-w-0 max-w-[480px] flex-col lg:shrink-0";
