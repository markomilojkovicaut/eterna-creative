/**
 * Case study template (Bubble → Next) — aligned Jul 2026.
 *
 * Canonical layout = NEW Bubble studies (PublicLink, ProSafeNet, FacelessStar, TapGroup).
 * Razmeni / Pets Pilots / StretchWell content is reshaped into the same skeleton.
 *
 * Page zones:
 * 1. Dark hero — eyebrow, title, description, Client/Solution/Timeline, outcomes, cover + gallery
 * 2. Challenge → Overview → fact row (category/location/year)
 * 3. Solution → Features
 * 4. Soft calculator CTA
 * 5. Services used → Impact → Results
 * 6. Closing + Book CTA
 * 7. Technologies → founder quote
 * 8. FinalCta (sitewide)
 *
 * Redirects: /case-studies → /portfolio; long + short Bubble slugs → /portfolio/:slug
 */

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
