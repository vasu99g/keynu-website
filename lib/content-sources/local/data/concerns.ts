import type { Concern } from "@/lib/content/types";

/**
 * Patient concerns — the entry point for concern-led navigation on the
 * homepage ConcernDial. Each one maps to a multi-treatment protocol the
 * clinic has refined over time. Copy adapted from the brand design
 * handoff.
 */
export const concerns: Concern[] = [
  {
    id: "wedding",
    label: "Wedding Glow",
    title: "Wedding-ready, in your own skin.",
    lead:
      "A 4–6 month plan that lets your skin, hair and smile peak the morning of — not the morning after.",
    protocol: [
      "Bridal / Groom glow programme",
      "HydraFacial + skin polishing",
      "Laser hair reduction (full body)",
      "Smile whitening + polish",
      "Pigmentation lightening",
    ],
  },
  {
    id: "ageing",
    label: "Graceful Ageing",
    title: "Look like yourself, slowly.",
    lead:
      "Anti-ageing without the frozen face. Layered protocols that let your own features lead.",
    protocol: [
      "Botox — micro-doses, expression-preserving",
      "Liquid facelift (filler architecture)",
      "Polynucleotide skin boosters (PDRN)",
      "PDO thread lift",
      "Skin-quality lasers + RF",
    ],
  },
  {
    id: "acne",
    label: "Acne & Scars",
    title: "Calm the flare, fade the memory.",
    lead:
      "A medical-grade clear-skin protocol — supervised by our dermatology team. Not a facial menu.",
    protocol: [
      "Medical acne consultation",
      "Chemical peels (salicylic, retinoid)",
      "Microneedling RF for scars",
      "Q-Switch for post-acne pigmentation",
      "Custom at-home regimen",
    ],
  },
  {
    id: "hair-loss",
    label: "Hair Loss",
    title: "Hold the line. Then grow it back.",
    lead:
      "We diagnose the cause first — hormonal, nutritional, genetic — then build the right protocol.",
    protocol: [
      "Trichology consultation + scalp analysis",
      "GFC / PRP sessions",
      "Mesotherapy",
      "Hair transplant (FUE)",
      "Maintenance regimens",
    ],
  },
  {
    id: "unwanted-hair",
    label: "Unwanted Hair",
    title: "Permanent reduction, kind to skin.",
    lead:
      "Diode + Nd:YAG combination calibrated for South Asian skin. Less heat, fewer sessions, no dark patches.",
    protocol: [
      "Full-body laser hair reduction",
      "Face + underarm LHR",
      "Bikini / Brazilian LHR",
      "Beard-shape (for men)",
    ],
  },
  {
    id: "body-shape",
    label: "Body Shape",
    title: "Tone, contour, return.",
    lead:
      "Non-surgical body reshaping — Emerald, Artiqa, RF + cavitation, post-pregnancy recovery.",
    protocol: [
      "Emerald non-invasive fat loss",
      "Artiqa body contouring",
      "RF Modula + cavitation",
      "Post-natal toning",
    ],
  },
];
