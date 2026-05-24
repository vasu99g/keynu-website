import type { TreatmentCategory } from "@/lib/content/types";

/**
 * Treatment categories — matches the grouping confirmed with the user and
 * documented in /memory/project_keynu_treatments.md. Order drives display
 * order on the /treatments index.
 */
export const treatmentCategories: TreatmentCategory[] = [
  {
    slug: "injectables",
    name: "Injectables",
    summary:
      "Doctor-led Botox and hyaluronic-acid fillers for natural softening, contouring, and lift — never overdone.",
    order: 1,
  },
  {
    slug: "skin-tightening-and-lifting",
    name: "Skin Tightening & Lifting",
    summary:
      "Non-surgical lifting and firming using HIFU, radiofrequency microneedling, and thread protocols.",
    order: 2,
  },
  {
    slug: "skin-rejuvenation-and-facials",
    name: "Skin Rejuvenation & Facials",
    summary:
      "Medical-grade facials that resurface, hydrate, and rebuild the skin barrier for a quiet, lit-from-within glow.",
    order: 3,
  },
  {
    slug: "pigmentation-and-brightening",
    name: "Pigmentation & Brightening",
    summary:
      "Targeted laser, peel, and depigmentation programs for melasma, sun damage, and uneven tone — designed for Indian skin.",
    order: 4,
  },
  {
    slug: "resurfacing",
    name: "Resurfacing",
    summary:
      "Fractional CO₂ and plasma protocols for acne scars, surgical scars, and full-face resurfacing.",
    order: 5,
  },
  {
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    summary:
      "Permanent hair reduction with diode laser — calibrated for Indian skin tones across face, body, and intimate areas.",
    order: 6,
  },
  {
    slug: "body-contouring-and-fat-loss",
    name: "Body Contouring & Fat Loss",
    summary:
      "Non-invasive inch loss, cellulite smoothing, and skin firming using Emerald, Artiqa, and RF-cavitation systems.",
    order: 7,
  },
  {
    slug: "hair-regrowth",
    name: "Hair Regrowth",
    summary:
      "Evidence-based hair regrowth protocols — GFC, PRP, QR678, mesotherapy, and exosome therapy for density and strength.",
    order: 8,
  },
  {
    slug: "hair-transplant",
    name: "Hair Transplant (FUE)",
    summary:
      "Surgical hair restoration using the Follicular Unit Extraction technique for scalp, eyebrows, beard, and mustache.",
    order: 9,
  },
  {
    slug: "iv-wellness",
    name: "IV Wellness",
    summary:
      "Intravenous nutritional therapies for detox, skin brightening, energy, and cellular repair — Gluta Vive, NAD+ and more.",
    order: 10,
  },
  {
    slug: "other",
    name: "Specialty",
    summary: "Targeted doctor-led procedures including Xanthelasma removal.",
    order: 11,
  },
];
