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
    "hero", // 120px below main image to next section
    "split", // aside max 320px; roles + company/LinkedIn
    "solutionFeaturesSticky", // solution + vertical features | sticky image; gallery +40px, no divider
    "beforeAfter?",
    "productVideo?",
    "pullQuote?", // quote.pullQuote — must differ from full quote
    "softCta",
    "impactLight",
    "results", // square tech logos
    "closing", // includes sibling card when set
    "quote",
    "finalCta",
  ],
  website: [
    "hero",
    "splitBriefGoals",
    "strategyBandHomepage",
    "pagesGallery",
    "seoCro",
    "productVideo?",
    "pullQuote?",
    "softCta",
    "impactLight",
    "results",
    "closing", // includes sibling
    "quote",
    "finalCta",
  ],
  automation: [
    "hero",
    "splitOps",
    "workflowBand",
    "beforeAfter",
    "stack",
    "productVideo?",
    "pullQuote?",
    "softCta",
    "impactLight",
    "results",
    "closing",
    "quote",
    "finalCta",
  ],
} as const;
