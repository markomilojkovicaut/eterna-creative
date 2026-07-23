# Eterna Creative — Design System

Single source of truth for tokens, patterns, and scalability. Agent rule: `.cursor/rules/design-system.mdc`.

**Stack:** Next.js 15 App Router · TypeScript · Tailwind v4 · Plus Jakarta Sans · RSC-first.

---

## Architecture (scalable)

```
app/                    Routes + layout chrome (Header/Footer sitewide)
components/
  ui/                   Reusable primitives — import from @/components/ui
  layout/               Section, Header, Footer
  sections/             Page-specific compositions (thin — data + layout only)
  case-study/           Modular portfolio detail blocks (Hero, Split, Band, Media…)
  portfolio/            Portfolio index clients (filters)
lib/
  *.ts                  Content data (CMS-ready), shared style constants
  case-studies.ts       Case study content + productType helpers
  case-study-recipes.ts Recipe contracts per Application / Website / Automation
  layout-constants.ts   Content rail widths
  heading-styles.ts     Display + editorial typography
  surface-styles.ts     Light gradient surfaces
  section-backdrops.ts  Named DarkSectionBackdrop presets
  cta-styles.ts         CTA sizing
public/images/          Static assets (hero-bg, logos, team, reviews, tools)
```

### Case study pages

- One study = one `productType` (`application` | `website` | `automation`). Dual-product clients → two studies + `siblingSlug`.
- Compose via `CaseStudyView` recipes — never a single stacked column.
- Media slots accept null `src` and render labeled placeholders.
- Full-white impact band (`CaseStudyImpactLight`) is the contrast beat.
- Homepage browser-frame media when `productType === "website"` or services include Website.

**Adding a section (checklist)**

1. Add content to `lib/<name>.ts` (types + arrays).
2. Compose with existing `components/ui/*` primitives — no one-off styling.
3. Use `LAYOUT_OUTER_CLASS` / `LAYOUT_INNER_CLASS` or `Section` wrapper.
4. Pick backdrop preset from `lib/section-backdrops.ts` if dark mesh needed.
5. Wire in `app/page.tsx` (or route). Keep section file a Server Component unless interactivity required.
6. Document variant in this file if it introduces a new pattern.

**Performance defaults**

| Rule | Why |
|------|-----|
| Server Components for sections | Smaller client bundle |
| `"use client"` only for interactivity | Accordion, filters, carousel, newsletter form, header mobile |
| `next/image` everywhere | Auto optimization; `priority` + `sizes` on Hero only |
| `generateStaticParams` on `[slug]` routes | Pre-render listing detail pages |
| Content in `lib/*.ts` | Swap for CMS fetch without touching UI |
| CSS animations (`partner-marquee`, `approach-border-fill`) | No animation libraries |
| `next/font` subset + fixed weights | One font file, no layout shift |

**Client components (keep list short)**

`AutoAccordion`, `DarkAccordion`, `DarkFaqAccordion`, `Header`, `NewsletterSignup`, `PartnerLogoMarquee`, `ReviewCardsCarousel`, `ServiceFilterBar`, `ServiceCard`, `EngineCard`, `ClientStories`, `Services`.

---

## Layout

| Constant / token | Value | Usage |
|------------------|-------|--------|
| `LAYOUT_OUTER_CLASS` | `max-w-container` (1280px) | Outer shell |
| `LAYOUT_INNER_CLASS` | `max-w-content` (1216px) + `px-4 sm:px-6 lg:px-8` | Content rail |
| `HEADER_OFFSET_CLASS` | `pt-[48px]` | Non-overlay pages below fixed header |
| `py-section` / `mt-section` | 120px | Section vertical rhythm |
| `rounded-soft` | 8px | Cards, inputs, CTAs |
| `rounded-sharp` | 0px | Stat cards, step numbers |

```ts
import { LAYOUT_OUTER_CLASS, LAYOUT_INNER_CLASS } from "@/lib/layout-constants";
```

### `Section` wrapper

```tsx
<Section background="surface" className="text-text-ink-sub">…</Section>
```

| `background` | Class |
|--------------|-------|
| `base` | `bg-bg-base` (default) |
| `surface` | `bg-bg-surface text-text-ink-sub` |
| `purple-dark` | `bg-brand-purple-dark` |
| `none` | transparent |

---

## Colors & surfaces

### Dark

| Token | Value | Use |
|-------|-------|-----|
| `bg-bg-base` | `#000` | Page, dark sections |
| `bg-bg-card` | `#0a0a0a` | Wells, panels |
| `border-border-dark` | purple-light 14% | Dark borders, dividers |
| `border-border-strong` | purple 35% | Pills, active states |
| `text-text-heading` | white | Headings |
| `text-text-sub` | `#d1d1eb` | Subcopy |
| `text-text-body` | `#8585a0` | Body on dark |

### Light

| Token | Use |
|-------|-----|
| `bg-bg-surface` | White sections |
| `bg-bg-muted` | `#F7F8F8` gray cards |
| `border-border-muted` | `#DEE1E2` |
| `text-text-ink` | Headings |
| `text-text-ink-sub` | Body |

### Brand

| Token | Use |
|-------|-----|
| `brand-purple-light` | **Default icon color** |
| `brand-pink` / `brand-pink-light` | Gradients, opt-in highlights |
| `brand-danger` | Challenge timeline |
| `brand-purple-dark` | Footer gradient, featured review base |
| `text-gradient-hero` | Hero + accent words (`globals.css`) |

### Shared surface style

```ts
import { lightResourceGradientClasses } from "@/lib/surface-styles";
// border-border-muted bg-gradient-to-br from-brand-purple/10 via-bg-surface to-brand-pink/10
```

Used on: Guide/Blog gradient tiles, featured review cards, **20+ products shipped** stat, Build process step panel.

---

## Backdrop presets

All use `/images/hero-bg.png` + scanlines via `DarkSectionBackdrop`.

```ts
import { sectionBackdropPresets, investmentTopBandClass } from "@/lib/section-backdrops";
```

| Preset | Props | Used in |
|--------|-------|---------|
| `challenges` | `right` + `section` | Founder journey, Case studies, Founder-led studio, Final CTA card |
| `investment` | `flip` + `left` + `panel` | Investment top band, PreTRACTION newsletter |
| `services` | `flipVertical` + `bottom-right` + `section` | Services, Solutions |

**Investment top band pattern** (60% height mesh + fade):

```tsx
<div className={investmentTopBandClass}>
  <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
  <div className={investmentTopBandFadeClass} />
</div>
```

**Hero** uses inline flipped `hero-bg` (not `DarkSectionBackdrop`). Bottom accent: `h-1 bg-hero-gradient`.

---

## Typography

| Export / class | Size | Use |
|----------------|------|-----|
| `displayHeadingTypeClasses` + `heroH1LineClasses` | 3–4rem | Hero H1 |
| `displayHeadingTypeClasses` + `text-display-lg sm:text-display-xl` | 3–4rem bold | Final CTA H2 |
| `displayHeadingTypeClasses` | 2.25–3rem | `SectionHeading` H2 |
| `lightEditorialDisplayClasses` | 48px / 104% LH | Light editorial blocks |
| `lightEditorialLineClasses` + `lightEditorialAccentLineClasses` | — | Two-line light headings |
| `text-body-md` | 1rem | Body |
| `SectionLabel` / `LabelPill` | 10px uppercase | Section labels |

```ts
import {
  displayHeadingTypeClasses,
  heroH1LineClasses,
  lightEditorialDisplayClasses,
} from "@/lib/heading-styles";
```

---

## Icons & accents

**Rule: stroke icons default to `text-brand-purple-light`.** Pink only via explicit data flags.

| Pink exceptions | Flag |
|-----------------|------|
| Engine 02 | `highlight: true` |
| Services: Application, Automation AI, Website | `iconHighlight: true` |
| Process step numbers + `PhaseLabel highlight` | always pink |

CTA arrows: short straight `ArrowUpRight` (not diagonal). Pink on white CTAs; purple-light on dark outlined links.

---

## CTAs

```ts
import { ctaSizeClasses } from "@/lib/cta-styles";
```

| Component | Surface | Style |
|-----------|---------|--------|
| `CallToActionLink` | Dark | White pill → `/book` |
| `SecondaryCtaLink` | Dark | Outlined pill + `→` |
| `LightCtaLink` | Light | Black pill + pink arrow |

Sizing: `min-h-[40px]`, `px-6 py-[8px]`, `text-body-md`.

---

## UI primitives (by domain)

Import barrel: `import { … } from "@/components/ui"`.

### Dark layout

| Component | Purpose |
|-----------|---------|
| `DarkSectionBackdrop` | Mesh background |
| `BorderedDarkPanel` | Bordered dark box (Eterna system) |
| `SectionHeading` | Label + multi-line H2 + optional split subheading |
| `TimelineRail` / `TimelineMarker` | Founder journey only |
| `DarkAccordion` | Auto-rotate principles (Founder-led studio) |
| `DarkFaqAccordion` | Click-only FAQ (no animation) |

### Light layout

| Component | Purpose |
|-----------|---------|
| `SectionLabel` / `LabelPill` | 10px labels (`tone`: light/dark) |
| `LightEditorialDisplay` | 48px editorial type |
| `AutoAccordion` | Reusable rotating accordion |
| `ProcessStepCard` | Process steps; `gradientBackground` + `showTopBorder` |
| `StatCard` | `variant`: `default` (gray) \| `gradient` |
| `QuoteBar` | Callout with corner accents |
| `PartnerLogoMarquee` | Logo strip, 40px below hero |

### Cards & grids

| Component | Data file |
|-----------|-----------|
| `EngineCard` | `lib/eterna-engines.ts` |
| `ServiceCard` + `ServiceFilterBar` | `lib/services.ts` |
| `CaseStudyCard` | `lib/case-studies.ts` |
| `SolutionCard` | `lib/solutions.ts` |
| `ResourceBentoCard` | `lib/resources.ts` |
| `PricingCard` | `lib/investment.ts` |
| `FeaturedReviewCard` / `ReviewCard` | `lib/client-stories.ts` |
| `TeamMemberCard` | `lib/founder-studio.ts` |

### Chrome

| Component | Notes |
|-----------|-------|
| `Header` | Fixed; client for mobile |
| `Footer` | `border-t border-white/10`; ETERNA watermark `absolute bottom-0`, `[clip-path:inset(0_0_40%_0)]` |
| `NewsletterSignup` | Client form; Investment backdrop; no backend yet |

### `ResourceBentoCard` variants

| Variant | Background |
|---------|------------|
| `default` | `bg-bg-muted` |
| `gradient` / `gradient-purple` | Light purple tint |
| `dark` | `bg-bg-base` + mesh preview + scanlines |

Grid placement via `gridClass` on each `ResourceItem` (4-col bento).

---

## Homepage map (14 sections)

| # | Section | File | Surface / backdrop |
|---|---------|------|-------------------|
| 1 | Hero | `Hero.tsx` | Full viewport; flipped hero-bg |
| 2 | Partners + What drives us | `HomeLightChapter.tsx` | Surface; logos `pt-10` (40px), no heading |
| 3 | Challenges | `FounderJourney.tsx` | `challenges` |
| 4 | Eterna system | `EternaSystem.tsx` | `BorderedDarkPanel` + `investment` |
| 5 | Services | `Services.tsx` | `services` + filter grid |
| 6 | Our approach + Process | `HomeApproachChapter.tsx` | Surface; spread columns |
| 7 | Case studies | `CaseStudies.tsx` | `challenges` |
| 8 | Solutions | `Solutions.tsx` | `services` |
| 9 | Client stories | `HomeClientStoriesChapter.tsx` | Surface |
| 10 | Founder-led studio | `FounderLedStudio.tsx` | `challenges` |
| 11 | Resources | `HomeResourcesChapter.tsx` | Surface bento |
| 12 | Investment | `Investment.tsx` | Investment top band |
| 13 | FAQ | `Faq.tsx` | Plain `bg-bg-base`, no mesh |
| 14 | Final CTA | `FinalCta.tsx` | Card + `challenges`; `py-[160px]` |

Footer: `layout/Footer.tsx` (all pages).

---

## Key section specs

### HomeLightChapter

- Single `Section background="surface"` with `!pt-10` (40px after hero).
- `Partners`: marquee only, edge fades `from-bg-surface`.
- `WhatDrivesUs`: editorial left + stats right; only **products shipped** stat uses `variant="gradient"`.

### Approach chapter

- Left: `lg:sticky lg:top-6`, `max-w-[400px]`.
- Right: `max-w-[480px]`.
- Process list: per-step `border-t` (not `divide-y`); **no borders** around Build step (`gradientBackground` step).
- Build step (04): `lightResourceGradientClasses` panel.

### Client stories

- Featured card: purple bottom-up gradient, 3-line quote, `max-w-[400px]`.
- Carousel: 3 visible, one-by-one slide, nav below.
- Select review cards: `lightResourceGradientClasses`.

### Investment

- No outer panel border; top 60% `investment` mesh band.
- Pricing grid: inner `border-border-dark`; Popular badge on middle tier.
- Calculator CTA bar at grid bottom.

### FAQ

- Plain dark background (no backdrop).
- `DarkFaqAccordion`: click toggle only.
- Questions: `text-body-sm` / `text-body-md`.

### Final CTA

- Bordered card; `challenges` backdrop.
- Heading: bold, H1 scale (`text-display-lg sm:text-display-xl`).
- `py-[160px]` vertical padding.

### Footer

- Top: `border-white/10`.
- Grid: logo/tagline/copyright left; newsletter + links right.
- Links: `grid-cols-3 w-full` matching newsletter width.
- Newsletter: `investment` backdrop preset.
- Watermark: absolute bottom, 40% clipped.

---

## Content data index

| File | Content |
|------|---------|
| `lib/founder-journey.ts` | Timeline steps |
| `lib/eterna-engines.ts` | Six engines |
| `lib/services.ts` | Services + filters |
| `lib/approach-callouts.ts` | Approach accordion |
| `lib/tool-stack.ts` | Tool grid |
| `lib/process-steps.ts` | Six process steps |
| `lib/case-studies.ts` | Portfolio cards |
| `lib/solutions.ts` | Solution cards |
| `lib/partners.ts` | Logo marquee |
| `lib/client-stories.ts` | Reviews |
| `lib/founder-studio.ts` | Team + principles |
| `lib/resources.ts` | Bento tiles |
| `lib/investment.ts` | Pricing tiers |
| `lib/faq.ts` | FAQ items |
| `lib/footer.ts` | Footer copy + links |

**CMS migration:** replace array exports with async fetchers; keep TypeScript interfaces in `lib/types.ts`.

---

## Copy

- No em dash in user-facing copy (use `-`).
- See `.cursor/rules/copy-style.mdc`.

---

## Assets checklist

| Path | Asset |
|------|-------|
| `/images/hero-bg.png` | Dark mesh (shared backdrop) |
| `/images/hero-phones.png` | Hero mockups |
| `/images/eterna-logo.png` | Header + footer |
| `/images/tools/*.png` | Tool stack (white on black circle) |
| `/images/team/*.jpg` | Team photos |
| `/images/reviews/*.jpg` | Client avatars |
| `/images/resources/app-cost-calculator.png` | Featured resource (when ready) |

Use `next/image` with explicit `width`/`height` or `fill` + `sizes`.
