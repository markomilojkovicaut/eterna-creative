/**
 * Case study system (modular, product-typed).
 *
 * Recipes: lib/case-study-recipes.ts
 * Renderer: components/case-study/CaseStudyView.tsx
 * Content: lib/case-studies.ts (productType + media helpers)
 *
 * application: hero → split → solutionBand → features → softCta → impactLight → …
 * website:     hero → split → strategy+homepage → pages → seo → softCta → impactLight → …
 * automation:  hero → split → workflow → beforeAfter → stack → softCta → impactLight → …
 */

export { caseStudyRecipes } from "@/lib/case-study-recipes";

export const bubbleCaseStudySlugs = [
  "publiclink",
  "publiclink-eu-public-sector-network-case-study",
  "prosafenet",
  "prosafenet-global-safety-network-case-study",
  "tap-group",
  "tapgroup-inventory-management-system-case-study",
  "facelessstar",
  "facelessstar-ai-tools-conversion-case-study",
  "razmeni",
  "razmeni-parents-marketplace",
  "pets-pilots",
  "pets-pilots-pet-transport-booking-app",
  "stretchwell",
  "stretchwell-application-for-stretching",
] as const;
