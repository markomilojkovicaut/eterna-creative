# Eterna Creative

Marketing site for **Eterna** — digital product studio (no-code, AI, Bubble.io MVPs).

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 (`tailwind.config.ts`)
- Plus Jakarta Sans via `next/font`
- RSC-first; client components only where interactive

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production (Turbopack)
npm run lint
```

## Project structure

```
app/                 Routes + layout (Header/Footer global)
components/ui/       Design system primitives — barrel @/components/ui
components/sections/ Homepage sections (compose ui + lib data)
components/layout/   Section, Header, Footer
lib/                 Content data, style constants (CMS-ready)
public/images/       Static assets
```

## Design system

**[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** — tokens, backdrop presets, all 14 homepage sections, performance rules, new-section checklist.

Agent rules: `.cursor/rules/design-system.mdc`

### Shared constants

| File | Purpose |
|------|---------|
| `lib/layout-constants.ts` | Content rail widths |
| `lib/heading-styles.ts` | Display typography |
| `lib/surface-styles.ts` | Light gradient surfaces |
| `lib/section-backdrops.ts` | Named mesh presets |
| `lib/cta-styles.ts` | CTA sizing |

### Adding content

1. Edit or add `lib/<topic>.ts`
2. Compose section with existing `components/ui/*`
3. Wire route in `app/`

`[slug]` routes include `generateStaticParams` stubs — connect CMS fetchers when ready.
