# Keynu Website — Design & Implementation Plan

> Living document. Updated as we build. Last revised: 2026-05-24.

---

## 1. Goals

Build a production-grade, long-term-maintainable website for **Keynu** — a premium aesthetics + wellness clinic in Paschim Vihar, New Delhi (Est. 1996, family-run).

**Brand essence:** quietly luxurious, medically credible, warm Indian hospitality. The site should read like an expert clinic, not a beauty brand trying to impress.

**Success criteria:**
- Non-technical clinic staff can edit copy, photos, testimonials, treatments, careers without a developer
- Premium aesthetic on par with reference sites (dhunwellness, dermato.framer.website, amaterasu.ai-grade interactions)
- Mobile + desktop optimized, Core Web Vitals green
- Native booking flow that feels on-brand (not a third-party iframe)
- SEO foundation strong enough to rank for Delhi aesthetic-clinic searches and persona-driven queries
- Codebase that a future engineer can pick up without prior context

---

## 2. Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15** (App Router, RSC) | Best-in-class for content sites; ISR for CMS-driven pages |
| Language | **TypeScript** (strict mode) | Type safety end-to-end |
| Styling | **Tailwind CSS** + CSS variables for design tokens | Design system tokens via CSS vars; utility speed |
| Animation | **Framer Motion** | Premium feel, declarative |
| CMS | **Sanity** (Studio embedded at `/studio`) | Best non-tech editor; powerful schemas; free tier generous |
| Forms / email | **Resend** + **React Email** | Modern, well-typed, simple |
| Hosting | **Vercel** | Native Next.js, preview branches per push |
| Analytics | **GA4 + Meta Pixel + Microsoft Clarity** | Coverage + heatmaps |
| Booking sync | **Native flow → Sanity + email/WhatsApp notification to clinic** | KiviHealth has no public API; clinic syncs manually until they confirm API access |
| Linting / format | **ESLint** + **Prettier** + **TypeScript strict** | Enforced via Vercel build |
| Testing | **Vitest** (unit) + **Playwright** (E2E for booking flow) | Critical paths only — pragmatic, not 100% coverage |

---

## 3. Brand & Design System

### 3.1 Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-saffron` | `#FBB04C` | Primary (hero accent, CTAs) |
| `--color-mogra` | `#FFFEF0` | Background (default canvas) |
| `--color-sandalwood` | `#EADBB7` | Secondary surface |
| `--color-walnut` | `#562E26` | Body text, headings on light surfaces |
| `--color-forest` | `#253327` | Accent text, footer, contrast surfaces |

Walnut + Forest are accent-only per brand guidelines. Saffron + Mogra are hero pairings.

### 3.2 Typography

| Role | Font | Notes |
|---|---|---|
| Wordmark / logo | **Beaufort Pro Light** | Subtly modified; only on logo lockup |
| Body | **Avenir** | Locked in by brand. Self-hosted via Adobe Fonts or NextFont with local file fallback. Min 16px digital. |
| Headings | **TBD — 3 options to be proposed in homepage prototype** | Candidates: Aumiller Serif (warm serif), Canela (premium serif), Söhne Breit (modern grotesk) |

Type scale (Tailwind config):
- Display: 56/64/72px (mobile/tablet/desktop)
- H1: 40/48/56
- H2: 32/36/40
- H3: 24/28/32
- H4: 20/22/24
- Body Lg: 18, Body: 16, Caption: 14
- Line-height: 1.25 headings, 1.5 body
- Letter-spacing: -0.01em headings, 0 body

### 3.3 Spacing & layout

- 12-column grid on desktop, 6-column on tablet, 4-column on mobile
- Container max-widths: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1440`
- Section vertical rhythm: 96px desktop / 64px mobile (with options for tighter 64/48 and looser 128/96)
- Generous white space per brand guideline ("clean, airy, luxurious")

### 3.4 Motion principles

- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` (gentle ease-out)
- Default duration: 400ms
- Page transitions: fade + subtle Y-translate (8px)
- Image reveals: blur-to-sharp on scroll-in
- Respect `prefers-reduced-motion` — disable all non-essential motion
- Hover states subtle (scale 1.02, opacity, color shift) — never garish

### 3.5 Imagery direction

Per brand guideline: natural light, soft/diffused, shallow depth of field for portraits, deeper focus for environments. All photography at the clinic. Wardrobe in soft/earthy tones. Dewy clean skin, minimal makeup. **All hero/section imagery should reinforce: warmth, calm, Indian heritage, clinical credibility.**

---

## 4. Repository Structure

```
keynu-website/
├── app/
│   ├── (site)/                    # Public site route group
│   │   ├── layout.tsx             # Site shell (header, footer)
│   │   ├── page.tsx               # Home
│   │   ├── treatments/
│   │   │   ├── page.tsx           # Index (all categories)
│   │   │   └── [category]/
│   │   │       ├── page.tsx       # Category page
│   │   │       └── [treatment]/
│   │   │           └── page.tsx   # Treatment detail
│   │   ├── story/page.tsx
│   │   ├── doctors/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── results/page.tsx
│   │   ├── journal/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   └── book/page.tsx
│   ├── (legal)/                   # Privacy, terms, disclaimers
│   ├── studio/[[...tool]]/        # Embedded Sanity Studio
│   ├── api/
│   │   ├── booking/route.ts
│   │   └── careers/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx                 # Root (fonts, analytics, theme)
├── components/
│   ├── primitives/                # Button, Input, Container, etc.
│   ├── composites/                # TreatmentCard, BeforeAfter, etc.
│   ├── sections/                  # Page-level sections (Hero, etc.)
│   └── layout/                    # SiteHeader, SiteFooter, etc.
├── sanity/
│   ├── schemas/                   # Document + object schemas
│   ├── lib/
│   │   ├── client.ts              # Sanity client config
│   │   ├── image.ts               # Image URL builder
│   │   └── queries.ts             # GROQ queries (typed)
│   ├── types/                     # Generated types from schema
│   └── config.ts
├── lib/
│   ├── analytics.ts               # GA4, Meta Pixel, Clarity wrappers
│   ├── whatsapp.ts                # wa.me URL builder + context
│   ├── email/                     # React Email templates
│   ├── seo/                       # Metadata + JSON-LD helpers
│   └── utils/                     # Pure utilities
├── styles/
│   ├── globals.css                # Tailwind + design tokens
│   └── fonts.ts                   # next/font config
├── public/
│   ├── fonts/                     # Self-hosted Avenir + heading font
│   └── images/                    # Static brand assets only
├── content/                       # Static content if any (legal pages)
├── tests/
│   ├── e2e/                       # Playwright (booking flow critical path)
│   └── unit/                      # Vitest (utils, formatters)
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── README.md                      # Dev setup
├── CMS_GUIDE.md                   # Non-tech editor guide (final deliverable)
└── PLAN.md                        # This file
```

---

## 5. Sanity CMS Schemas

### Document types

| Schema | Fields (key) | Notes |
|---|---|---|
| `siteSettings` | brand info, contact, hours, social, WhatsApp number, default OG image | Singleton |
| `treatmentCategory` | name, slug, summary, hero image, order | 11 categories |
| `treatment` | name, slug, category (ref), description, machine, doctor (ref), areaVariants[], faq[], related[], gallery, seoMeta | 37 entries |
| `areaVariant` (object) | area, sessions, durationMinutes | Embedded array in treatment |
| `doctor` | name, role, bio, qualifications, image, isLead | Dr. Sonia = lead |
| `testimonial` | quote, patient name (or initials), treatment (ref), rating, image (optional), order | |
| `result` | beforeImage, afterImage, treatment (ref), patient initials, durationOfPlan, notes | Filterable gallery |
| `journalPost` | title, slug, excerpt, body (Portable Text), author (ref to doctor), category, hero image, publishedAt, seoMeta | |
| `jobOpening` | title, slug, department, location, type, summary, responsibilities, requirements, isActive | |
| `bookingSubmission` | timestamp, treatment, doctor, preferred dates[], contact, concerns, status | Created via API, read-only in studio |
| `careerSubmission` | timestamp, opening (ref), name, email, phone, resume (file), coverNote, status | Created via API |
| `faqItem` (object) | question, answer | Reusable inside treatment + page sections |

All slugs auto-generated with manual override. All images use Sanity's image pipeline (hotspot, alt text required).

---

## 6. Pages

| # | Route | Status | Notes |
|---|---|---|---|
| 1 | `/` | Pending | Homepage prototype — first reviewable |
| 2 | `/treatments` | Pending | Categories grid |
| 3 | `/treatments/[category]` | Pending | Category index |
| 4 | `/treatments/[category]/[treatment]` | Pending | Full detail |
| 5 | `/story` | Pending | Brand story (kinnow + 1996) |
| 6 | `/doctors` | Pending | Dr. Sonia + team |
| 7 | `/experience` | Pending | 5-pillar patient journey |
| 8 | `/results` | Pending | Before/after gallery |
| 9 | `/journal` + `/journal/[slug]` | Pending | Blog |
| 10 | `/careers` | Pending | Openings + application form |
| 11 | `/contact` | Pending | Location, hours, WhatsApp |
| 12 | `/book` | Pending | Native booking flow |
| - | `/privacy`, `/terms`, `/disclaimer` | Pending | Legal |
| - | `/studio` | Pending | Embedded Sanity Studio |

---

## 7. Integrations

| Integration | Approach | Status |
|---|---|---|
| **WhatsApp** | Floating click-to-chat (`wa.me` URL builder) with page-context-aware message. Upgrade path: AiSensy / Wati WhatsApp Business API later. | Pending |
| **Booking** | Native multi-step form → POST `/api/booking` → save to Sanity + email clinic via Resend + WhatsApp notify clinic team. KiviHealth API drop-in ready if/when they confirm access. | Pending |
| **Email** | Resend with React Email templates (booking confirmation, career receipt, internal notifications) | Pending |
| **Analytics** | GA4 (page + custom events), Meta Pixel (ads readiness), Microsoft Clarity (heatmaps/recordings). Loaded via `next/script` with `strategy="afterInteractive"`. | Pending |
| **Maps** | Static Google Map embed on Contact page; lazy-loaded iframe | Pending |
| **SEO** | Next.js Metadata API per route; sitemap.xml + robots.txt; JSON-LD: LocalBusiness, MedicalProcedure (per treatment), Person (per doctor), Article (per journal post), FAQPage | Pending |
| **Image CDN** | Sanity image pipeline + `next/image` (AVIF/WebP, responsive sizes, blur placeholder) | Pending |

---

## 8. Quality Standards

### Code

- TypeScript strict, no `any` (use `unknown` + narrowing)
- No magic strings — extract to typed enums or const objects
- Components colocated with their tests + stories (if added later)
- Server components by default; client components only when needed (`'use client'` justified)
- Pure functions in `/lib`; side effects isolated
- Tailwind classes ordered by Prettier plugin
- Prettier + ESLint enforced in CI

### Accessibility

- WCAG 2.1 AA target
- Semantic HTML first, ARIA only as escape hatch
- Keyboard navigation across all interactive elements
- Visible focus states (custom-styled, not removed)
- Color contrast checked against palette (Saffron text on Mogra is borderline — must check)
- `alt` text required on all images (enforced via Sanity schema)
- `prefers-reduced-motion` respected
- Forms: associated labels, error announcements, autocomplete attributes

### Performance

- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Static generation by default; ISR for CMS pages (revalidate on Sanity webhook)
- Fonts: `font-display: swap`, preload critical, subset Latin
- Images: AVIF/WebP, responsive `sizes`, `priority` only on above-fold
- Third-party scripts deferred; analytics non-blocking
- Bundle budget: <200kb initial JS gzipped (RSC keeps this easy)

### SEO

- Per-route metadata (title, description, OG, Twitter, canonical)
- Structured data for medical practice
- Sitemap regenerated on build
- Friendly URLs (no IDs, no query strings)
- Local SEO: NAP consistency, LocalBusiness JSON-LD, embedded map

---

## 9. Implementation Phases

| Phase | Deliverable | Status |
|---|---|---|
| 0 | This plan | ✅ Done |
| 1 | Repo scaffold, design tokens, Tailwind config, fonts, layout shell | ✅ Done |
| 2 | Sanity Studio + all schemas, GROQ queries, types | ⏸ Deferred — content stubbed locally; schema-shape preserved for drop-in |
| 3 | Component library (primitives + composites) | ✅ Done |
| 4 | Homepage prototype (first review) — 3 heading font options | ✅ Done |
| 5 | Treatments system (index, category, detail) | Pending |
| 6 | Story / Doctors / Experience pages | Pending |
| 7 | Results, Journal, Careers pages | Pending |
| 8 | Contact page + booking flow + email/WhatsApp notifications | Pending |
| 9 | Analytics, SEO, structured data, sitemap | Pending |
| 10 | Performance + accessibility audit | Pending |
| 11 | Vercel deploy + non-tech handover docs (CMS_GUIDE.md) | Pending |

---

## 10. Open Decisions / Waiting On User

1. **Sanity project setup** — needs the user to either (a) create a free Sanity account at sanity.io and share project ID, or (b) authorize me to create one under a placeholder org.
2. **Vercel project** — same as above. Or push to GitHub and let user import.
3. **Resend account** — needed for transactional email. Free tier covers initial volume.
4. **Heading font** — to be decided after seeing 3 options on homepage prototype.
5. **WhatsApp Business number** — confirm which number receives booking notifications. Default to `+91 9311041404` unless told otherwise.
6. **KiviHealth API** — user to ask `info@kivihealth.com` about API/webhook access. Booking arch built to drop in later.
7. **Photography / videography** — user to provide once homepage prototype is signed off. Use tasteful placeholder imagery until then (kinnow stills, neutral interiors).
8. **Legal copy** — Privacy Policy, Terms, Medical Disclaimer. Recommend the user supply these or hire a healthcare-savvy lawyer; I can provide a starting template.
9. **Domain** — `keynu.in` per business cards. Confirm registrar + DNS access for Vercel pointing.

---

## 10b. Live Feature Notes

### Ambient background audio
- Off by default; opt-in via `AudioToggle` in header (sound icon)
- Drop an MP3 at `/public/audio/ambient.mp3` (see `/public/audio/README.md`)
- Volume defaults to 18% (low ambient); auto-pauses when tab is hidden
- User preference persists across sessions via localStorage
- Brand intent: soft Indian instrumental (sitar / tampura / bansuri)

### Heading font picker (dev-only)
- Floating control bottom-right of every page
- Cycles Fraunces / Cormorant Garamond / Instrument Serif
- Updates `--font-heading` CSS variable at runtime
- Remove `HeadingFontSwitcher` from `app/layout.tsx` once a font is chosen
- Drop the two unused fonts from `styles/fonts.ts` after selection

## 11. Reference Sites (for design direction)

- https://dhunwellness.com — pacing, story-led
- https://dermato-wbs.framer.website
- https://kosmetisk.framer.website
- https://amaterasu.ai — interactive ambition target
- https://www.epitheliaclinic.com
- Dribbble: https://dribbble.com/shots/26591979-Dermatology-Clinic-Website

---

## 12. Change Log

- **2026-05-24** — Plan created. 12 pages confirmed. Stack: Next.js 15 + Sanity + Vercel. Booking: native flow (KiviHealth has no public API).
- **2026-05-24** — User opted to stub Sanity / Vercel / Resend for now and develop locally. Local content source in `lib/content-sources/local/` mirrors the planned Sanity schema shape so the swap stays a one-line change at the abstraction boundary.
- **2026-05-24** — **Phase 1 complete.** Next.js 15 + React 19 scaffolded. TypeScript strict, Tailwind tokens, brand palette (Saffron/Mogra/Sandalwood/Walnut/Forest), Fraunces heading + Nunito Sans body fonts, layout primitives (Container, Section, Heading, Text, Button), SiteHeader (sticky, primary nav, mobile-collapsed), SiteFooter (4-column with contact/hours/social), content abstraction layer (typed + source-agnostic), all 37 treatments + 11 categories transcribed into local stub. Build, typecheck, and lint all green. Dev server running at <http://localhost:3000>.
- **2026-05-24** — **Cool factor v1 shipped.** Five photoshoot reels compressed via ffmpeg from 2160×3840 source down to 720×1280 H.264 + matching poster JPGs (~6 MB total). New `VideoTile` component handles autoplay-muted-loop with IntersectionObserver pause/resume so off-screen videos don't burn CPU. Hero replaced with vertical video reel + giant editorial headline (`clamp(3.25rem,9.5vw,8rem)` four-line stacked stagger). Bento wall now mixes 4 photos + 3 silent video tiles. New `CustomCursor` saffron dot that grows on interactive elements (`mix-blend-multiply` for tonal weight; disabled for touch + reduced-motion). New `Magnetic` wrapper for CTA buttons (spring-smoothed cursor-pull on hover). New `ScrollProgress` thin saffron bar at the top tracking scroll position. New `EditorialMarquee` between bento + doctor sections — giant mixed-size Fraunces with the kinu-emblem motif as section punctuation. Build green, 165kb first-load JS, full a11y respected.

- **2026-05-24** — **Homepage refinement complete.** User locked Fraunces as heading font (Cormorant + Instrument Serif + dev font switcher removed). Source brand SVG split into three derivative assets (`keynu-emblem.svg`, `keynu-wordmark.svg`, `keynu-lockup.svg`) via `.scratch/split-logo.mjs`; tagline ("FACE | SKIN | HAIR | BODY") dropped per user. New `Logo` component renders any of the three variants with `currentColor` theming via CSS mask. Header now shows the wordmark at a readable size; footer shows the full lockup. Added responsive `MobileMenu` drawer (Framer Motion right-side, body-scroll lock, ESC close). Wider container caps (1600px wide variant). Synthesised **tampura drone** ambient audio via Web Audio API (lib/audio/tampura.ts — no external file needed; lazy-mounted Web Audio context, slow fade in/out, breath LFO, three chorused sine notes Pa-Sa-sa). Real clinic photography integrated: reception in hero (split editorial layout, photo right + text left), Dr. Sonia portrait against the Pattachitra-art backdrop in the doctor section, photo marquee replacing text-only trust strip, and a new `BentoPhotoWall` section (asymmetric 12-column bento grid with 7 stills mixing clinic interiors + editorial patient shots + the kinu-partition signature). Saffron orb + drifting kinu-emblem motif accents the hero corner. All photos optimised (hero 1920w, doctor 1200w, bento 1000w, marquee 600w; ~3MB total). Build green, 162kb first-load JS.

- **2026-05-24** — **Phases 3 + 4 complete.** Motion primitives (FadeIn, Marquee) on Framer Motion with full `prefers-reduced-motion` support. Ambient background-audio architecture (BackgroundAudioProvider context, AudioToggle in header, off-by-default with localStorage persistence, lazy-mounted to comply with autoplay policies, auto-pause on tab hidden). Dev-only HeadingFontSwitcher cycles between Fraunces / Cormorant Garamond / Instrument Serif at runtime via CSS variable. Composite cards: TreatmentCategoryCard, DoctorCard (with stylized placeholder portrait), TestimonialCard. Full homepage assembled from 7 sections: Hero (word-by-word reveal + saffron kinnow orb + drifting sandalwood glow), TrustStrip (marquee with heritage + tech credentials), TreatmentCategoriesSection (all 11 categories with stagger reveal), DoctorIntroSection (Dr. Sonia spotlight on sandalwood band), ExperiencePillarsSection (5-pillar journey), TestimonialsSection, VisitCTASection (forest band with full clinic card). Build: 156kb first-load JS for homepage (Framer Motion included). All sections responsive, accessibility-friendly, motion-reduced-honoring.
