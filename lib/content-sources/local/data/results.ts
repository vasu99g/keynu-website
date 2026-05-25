export interface BeforeAfterResult {
  id: string;
  /** Treatment programme — e.g. "Hydrafacial + Pigmentation Lightening". */
  treatment: string;
  /** Patient timeframe — e.g. "3 months". */
  timeframe: string;
  /** Patient initials or first name. */
  patient: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

/**
 * Before/after results powering the homepage Results section.
 *
 * Photo pairs are placeholders sourced from the existing photoshoot —
 * swap each `beforeSrc` and `afterSrc` for real consented patient images
 * via Sanity (or this file) when available. Real before/after content is
 * a strong conversion driver but must be consented + privacy-cleared.
 */
export const results: BeforeAfterResult[] = [
  {
    id: "glow",
    treatment: "HydraFacial · Pigmentation Lightening",
    timeframe: "3 months",
    patient: "A. Sharma",
    beforeSrc: "/images/bento/gloved-portrait.jpg",
    afterSrc: "/images/bento/kinu-partition.jpg",
    beforeAlt: "Before — patient with concerns on face",
    afterAlt: "After — patient with even, lit-from-within skin",
  },
  {
    id: "hair",
    treatment: "GFC + PRP Hair Therapy",
    timeframe: "6 months",
    patient: "R. Kapoor",
    beforeSrc: "/images/bento/doctor-detail.jpg",
    afterSrc: "/images/doctors/dr-sonia.jpg",
    beforeAlt: "Before — early signs of hair thinning",
    afterAlt: "After — restored density and visible regrowth",
  },
  {
    id: "tone",
    treatment: "Q-Switch + Chemical Peels",
    timeframe: "4 months",
    patient: "M. Bedi",
    beforeSrc: "/images/bento/consult-room.jpg",
    afterSrc: "/images/bento/dinner-citrus.jpg",
    beforeAlt: "Before — uneven skin tone",
    afterAlt: "After — calm, even tone with reduced pigmentation",
  },
];
