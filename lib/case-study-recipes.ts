import type { CaseStudyProductType } from "@/lib/case-studies";

/**
 * Documented recipe order per product type.
 * Runtime composition lives in CaseStudyView — this file is the contract.
 */
export const caseStudyRecipes: Record<
  CaseStudyProductType,
  readonly string[]
> = {
  application: [
    "hero",
    "split",
    "solutionBand",
    "features",
    "softCta",
    "impactLight",
    "results",
    "closing",
    "quote",
    "sibling",
    "finalCta",
  ],
  website: [
    "hero",
    "splitBriefGoals",
    "strategyBandHomepage",
    "pagesGallery",
    "seoCro",
    "softCta",
    "impactLight",
    "results",
    "closing",
    "quote",
    "sibling",
    "finalCta",
  ],
  automation: [
    "hero",
    "splitOps",
    "workflowBand",
    "beforeAfter",
    "stack",
    "softCta",
    "impactLight",
    "results",
    "closing",
    "quote",
    "sibling",
    "finalCta",
  ],
} as const;
