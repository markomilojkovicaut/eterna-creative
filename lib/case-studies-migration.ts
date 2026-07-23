/**
 * Case study migration notes (Bubble → Next).
 *
 * ## Live Bubble inventory (audited Jul 2026)
 *
 * Index: https://www.eternacreative.com/case-studies
 * - Dark hero: "Case studies of winning apps"
 * - Filter chips: Application / Social network / Full-scale / AI powered / MVP / Business tool
 * - Cards:
 *   - ProSafeNet, FacelessStar, PublicLink, TapGroup → full title lines
 *   - Razmeni → "Marketplace · MVP + Growth" (+ device mockup)
 *   - Pets Pilots → "Booking · MVP" (+ device mockup)
 * - StretchWell is in sitemap but not shown as a card on the index dump
 *
 * Detail URLs with full content:
 * - /case-study/razmeni-parents-marketplace
 * - /case-study/pets-pilots-pet-transport-booking-app
 * - /case-study/stretchwell-application-for-stretching
 *
 * Short slugs (/case-study/publiclink, prosafenet, tap-group, facelessstar,
 * razmeni, pets-pilots, stretchwell) mostly render "Coming soon..." chrome only
 * (shared FAQs + Ready to start CTA). Prefer the long sitemap slugs for content.
 *
 * ## Bubble detail layout (Razmeni / Pets / StretchWell)
 * 1. Eyebrow: CASE STUDY
 * 2. Title + subtitle ("Case Study - …")
 * 3. Category / Subcategory
 * 4. Narrative body (challenge → build → ship)
 * 5. Result line + soft CTA ("Want to build…")
 * 6. Optional Visit website
 * 7. Service hashtags (#UI/UX Design, …)
 * 8. Shared FAQs + final Book CTA + footer PreTRACTION
 * 9. Product gallery images (screens / mockups)
 *
 * ## Next site (/portfolio)
 * - Index: outcome-forward CaseStudyCard grid (stronger than Bubble listing)
 * - Detail: breadcrumb, tags, title, outcome strip, cover + gallery,
 *   Challenge / What we built / How we shipped, Results, service chips, Book CTA
 * - Migrated: PublicLink, ProSafeNet, TapGroup, FacelessStar (enriched sections),
 *   Razmeni, Pets Pilots, StretchWell (full Bubble copy + images)
 * - Redirects: /case-studies → /portfolio, /case-study/:slug → /portfolio/:slug
 *
 * ## Improve further (optional next pass)
 * - Per-study founder quotes where available
 * - Filter chips on /portfolio matching Bubble categories
 * - Restore richer PublicLink/ProSafeNet/Tap/Faceless narrative from Bubble editor
 *   if those detail pages are republished (currently "Coming soon" on live)
 */

export const bubbleCaseStudySlugs = [
  "publiclink",
  "prosafenet",
  "tap-group",
  "facelessstar",
  "razmeni",
  "razmeni-parents-marketplace",
  "pets-pilots",
  "pets-pilots-pet-transport-booking-app",
  "stretchwell",
  "stretchwell-application-for-stretching",
] as const;
