/**
 * Domain types for Keynu content.
 *
 * These types are the contract every content source (local stub today, Sanity
 * tomorrow) must satisfy. Designed to mirror the planned Sanity schemas in
 * PLAN.md §5 so the migration is a drop-in.
 */

/** Foreign-key reference style — slug-based for stable URLs. */
export interface Slug {
  current: string;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataUrl?: string;
}

// ─── Site settings ──────────────────────────────────────────────────────────

export interface SiteSettings {
  brandName: string;
  tagline: string;
  description: string;
  contact: {
    addressLines: string[];
    city: string;
    pincode: string;
    country: string;
    phones: string[];
    email: string;
    whatsappNumber: string;
    mapUrl: string;
  };
  hours: { day: string; open: string; close: string }[];
  social: { platform: "instagram" | "facebook" | "linkedin" | "youtube"; handle: string; url: string }[];
  founded: number;
}

// ─── Treatments ─────────────────────────────────────────────────────────────

export type TreatmentCategorySlug =
  | "injectables"
  | "skin-tightening-and-lifting"
  | "skin-rejuvenation-and-facials"
  | "pigmentation-and-brightening"
  | "resurfacing"
  | "laser-hair-reduction"
  | "body-contouring-and-fat-loss"
  | "hair-regrowth"
  | "hair-transplant"
  | "iv-wellness"
  | "other";

export interface TreatmentCategory {
  slug: TreatmentCategorySlug;
  name: string;
  summary: string;
  order: number;
}

export interface AreaVariant {
  area: string;
  sessions: string;
  durationMinutes: number | string;
}

export interface Treatment {
  slug: string;
  name: string;
  categorySlug: TreatmentCategorySlug;
  shortDescription: string;
  longDescription?: string;
  machine?: string;
  areaVariants: AreaVariant[];
  faq?: { question: string; answer: string }[];
}

// ─── Doctors ────────────────────────────────────────────────────────────────

export interface Doctor {
  slug: string;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  isLead: boolean;
  order: number;
}

// ─── Testimonials ───────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  patientName: string;
  treatmentSlug?: string;
  rating?: number;
  order: number;
}

// ─── Pillars (Face / Skin / Hair / Body / Smile) ───────────────────────────

/**
 * The five high-level disciplines Keynu practises. These sit above the
 * detailed treatment hierarchy and act as the homepage gateway — they map
 * loosely to subsets of the treatment categories used in /treatments.
 */
export type PillarTone = "marigold" | "saffron" | "walnut" | "forest" | "madder";

export interface Pillar {
  id: "face" | "skin" | "hair" | "body" | "smile";
  number: string;
  name: string;
  blurb: string;
  imageSrc: string;
  href: string;
  /** Hover-state palette. Each pillar gets its own gradient + text color. */
  hoverTone: PillarTone;
}

// ─── Concerns (concern-led navigation) ─────────────────────────────────────

/**
 * A patient concern paired with the protocol Keynu has built for it.
 * Powers the ConcernDial — concern-first navigation, treatment-second.
 */
export interface Concern {
  id: string;
  label: string;
  title: string;
  lead: string;
  protocol: string[];
}
