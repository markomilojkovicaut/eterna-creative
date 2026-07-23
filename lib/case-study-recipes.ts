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
    "split", // roles + company/LinkedIn CTAs when set
    "solutionBand",
    "features",
    "beforeAfter?", // when set (ops-heavy apps)
    "productVideo?", // when productVideoUrl set
    "pullQuote?",
    "softCta",
    "impactLight",
    "results", // tech stack logos
    "closing",
    "quote", // reviewSource link when set
    "sibling?", // sister website/app study
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
    "closing",
    "quote",
    "sibling?",
    "finalCta",
  ],
  automation: [
    "hero",
    "splitOps",
    "workflowBand",
    "beforeAfter", // in automation middle when set
    "stack",
    "productVideo?",
    "pullQuote?",
    "softCta",
    "impactLight",
    "results",
    "closing",
    "quote",
    "sibling?",
    "finalCta",
  ],
} as const;
