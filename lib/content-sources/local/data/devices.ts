export interface Device {
  id: string;
  name: string;
  tag: string;
  body: string;
  /** Lucide icon name — rendered via lucide-react. */
  icon: "zap" | "scan-line" | "droplets" | "grid-2x2" | "snowflake" | "sprout";
  cleared: string;
  downtime: string;
}

/**
 * The six core devices on the clinic floor. Drives the Technology
 * section's 3×2 medallion grid. Names + use-cases verified against the
 * live keynu.in equipment list (Triton InMode, Lumecca Spectra XT,
 * Emerald Laser, Artiqa T-Shock, Morpheus 8, HydraFacial). Copy
 * emphasises clearance, calibration cadence, and downtime — not
 * marketing-speak.
 */
export const devices: Device[] = [
  {
    id: "triton",
    name: "Triton (InMode)",
    tag: "Hair · Laser hair reduction",
    body: "Multi-wavelength diode + Nd:YAG laser calibrated for every hair-follicle type and South Asian skin tone. Six to eight sessions, four to six weeks apart, minimal heat at the surface.",
    icon: "zap",
    cleared: "USFDA · CDSCO",
    downtime: "0 days",
  },
  {
    id: "spectra",
    name: "Lumecca Spectra XT",
    tag: "Skin · Pigmentation & tone",
    body: "Q-Switched Nd:YAG paired with intense pulsed light. Fragments pigment clusters, lifts uneven tone and freckles, and resurfaces via the Hollywood / Carbon Peel protocol. No downtime.",
    icon: "scan-line",
    cleared: "USFDA · CDSCO",
    downtime: "0 days",
  },
  {
    id: "hydra",
    name: "HydraFacial MD",
    tag: "Skin · Deep cleanse & hydration",
    body: "Vortex extraction, antioxidant infusion, lymphatic drainage — one 45-minute appointment, immediate glow, zero downtime.",
    icon: "droplets",
    cleared: "USFDA",
    downtime: "0 days",
  },
  {
    id: "morpheus",
    name: "Morpheus 8 (InMode)",
    tag: "Face · RF microneedling",
    body: "Fractional radio-frequency microneedling for jawline definition, acne scars, open pores and skin tightening. Four sessions, monthly, brief recovery between.",
    icon: "grid-2x2",
    cleared: "USFDA · CDSCO",
    downtime: "1 day",
  },
  {
    id: "emerald",
    name: "Emerald Laser",
    tag: "Body · Non-invasive fat loss",
    body: "FDA-approved green cold laser for full-body fat reduction. Effective for patients up to BMI 40 — six sessions across two weeks, no incision, no downtime.",
    icon: "snowflake",
    cleared: "USFDA",
    downtime: "0 days",
  },
  {
    id: "artiqa",
    name: "Artiqa T-Shock",
    tag: "Body · Contouring & inch loss",
    body: "Thermal-shock body sculpting paired with electro-muscle stimulation. Targets stubborn inches, cellulite and skin firming over six sessions, without surgery.",
    icon: "sprout",
    cleared: "CDSCO",
    downtime: "0 days",
  },
];

export interface Accreditation {
  line1: string;
  line2: string;
}

export const accreditations: Accreditation[] = [
  { line1: "USFDA", line2: "Cleared devices" },
  { line1: "CDSCO", line2: "Indian regulator" },
  { line1: "ISO 9001", line2: "Quality systems" },
  { line1: "NABH", line2: "Patient safety" },
];
