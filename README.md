# Keynu Website

Premium aesthetics & wellness clinic — Paschim Vihar, New Delhi. Est. 1996.

## Stack

- **Next.js 15** (App Router, React 19, RSC) — `package.json`
- **TypeScript** strict — `tsconfig.json`
- **Tailwind CSS** + CSS-variable design tokens — `tailwind.config.ts`, `styles/tokens.css`
- **Framer Motion** for accent animations
- **Sanity CMS** *(stubbed locally for now — see [Content sources](#content-sources))*
- **Resend** for email *(stubbed locally for now)*
- **Vercel** target for hosting *(running locally for now)*

See `PLAN.md` at the repo root for the full design & implementation plan and phase tracker.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at <http://localhost:3000>.

## Project structure

```
app/                     Next.js App Router routes + layouts
components/
  primitives/            Low-level UI atoms (Button, Container, Heading, …)
  layout/                Site shell (SiteHeader, SiteFooter)
  composites/            (added in Phase 3) — TreatmentCard, BeforeAfter, …
  sections/              (added in Phase 4) — page-level sections
lib/
  content/               Content abstraction (source-agnostic API)
  content-sources/
    local/               TypeScript-typed stub content (used during dev)
    sanity/              (added when Sanity is wired up)
  utils/                 Pure helpers
sanity/                  (added when Sanity is wired up) — schemas + studio
styles/
  globals.css            Tailwind base + global resets
  tokens.css             CSS custom properties for brand tokens
  fonts.ts               next/font declarations
public/                  Static assets (fonts, brand images)
```

## Content sources

Content is read through `lib/content/*` so pages never import the source directly. Today this returns data from `lib/content-sources/local/data/*`. When Sanity is added, only the content layer changes — page components stay identical.

To add/edit data during the local-stub phase, edit the TS modules under `lib/content-sources/local/data/`. Re-running `npm run dev` is not needed (HMR picks it up).

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | TypeScript strict check (no emit) |

## Design system

Brand tokens (palette, typography, motion) live in `styles/tokens.css` and are exposed through Tailwind in `tailwind.config.ts`. Color and font variables are CSS custom properties so they're inspectable in dev tools.

| Token | Use |
|---|---|
| `bg-mogra` `text-walnut` | Default page surface + body type |
| `bg-sandalwood` | Alternating section bands |
| `bg-forest text-mogra` | Footer + high-contrast bands |
| `text-saffron` / `bg-saffron` | Accent — CTAs, eyebrow highlights |
| `font-heading` | Fraunces serif (default; user to confirm final heading font) |
| `font-body` | Nunito Sans (stand-in until licensed Avenir files are added) |

## Conventions

- **Server components by default.** Add `"use client"` only when interactive state, refs, or browser APIs are needed.
- **Strict TypeScript.** No `any`. Use `unknown` + narrowing when boundaries are loose.
- **Component naming.** PascalCase files, single responsibility, props typed inline.
- **Class merging.** Use the `cn()` helper from `lib/utils/cn` for any component that accepts a `className` override.
- **Accessibility.** Always include `alt`, label icon-only buttons, preserve focus rings, respect `prefers-reduced-motion`.

## Live services

All three external services are currently stubbed; switch them on by setting env vars in `.env.local`. See `.env.example` for the full list.
