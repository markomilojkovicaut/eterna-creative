import type { DarkSectionBackdropProps } from "@/components/ui/DarkSectionBackdrop";

/**
 * Named DarkSectionBackdrop presets. Prefer these over one-off props.
 * Full usage table: DESIGN-SYSTEM.md § Backdrop presets
 */
export const sectionBackdropPresets = {
  /** Challenges, Case studies, Founder-led studio, Final CTA card */
  challenges: {
    objectPosition: "right",
    gradient: "section",
  },
  /** Investment top band, PreTRACTION newsletter, Eterna system panel */
  investment: {
    flip: true,
    objectPosition: "left",
    gradient: "panel",
  },
  /** Services, Solutions full-section backdrop */
  services: {
    flipVertical: true,
    objectPosition: "bottom-right",
    gradient: "section",
  },
} as const satisfies Record<string, DarkSectionBackdropProps>;

/** Investment-style top mesh band wrapper (60% height + bottom fade). */
export const investmentTopBandClass =
  "pointer-events-none absolute inset-x-0 top-0 z-0 h-[60%] overflow-hidden";

export const investmentTopBandFadeClass =
  "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg-base sm:h-32";
