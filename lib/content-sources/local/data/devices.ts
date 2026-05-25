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
 * section's 3×2 medallion grid. Copy emphasises clearance, calibration
 * cadence, and downtime — not marketing-speak.
 */
export const devices: Device[] = [
  {
    id: "qsw",
    name: "Q-Switched Nd:YAG",
    tag: "Skin · Pigmentation",
    body: "Sub-nanosecond pulses fragment pigment clusters without injuring surrounding skin. Six to eight sessions, monthly, no downtime.",
    icon: "zap",
    cleared: "USFDA · CDSCO",
    downtime: "0 days",
  },
  {
    id: "co2",
    name: "Fractional CO₂ Laser",
    tag: "Skin · Resurfacing & scars",
    body: "Micro-columns of resurfacing for acne scars, stretch marks and uneven texture. Three sessions, eight weeks apart.",
    icon: "scan-line",
    cleared: "USFDA · CDSCO",
    downtime: "4–5 days",
  },
  {
    id: "hydra",
    name: "HydraFacial MD",
    tag: "Skin · Deep cleanse",
    body: "Vortex extraction, antioxidant infusion, lymphatic drainage — one 90-minute appointment, immediate glow, zero downtime.",
    icon: "droplets",
    cleared: "USFDA",
    downtime: "0 days",
  },
  {
    id: "rf",
    name: "RF Microneedling",
    tag: "Skin · Tightening",
    body: "Insulated micro-needles deliver radio-frequency energy deep into the dermis. Lifts, tightens, refines pores. Three monthly sessions.",
    icon: "grid-2x2",
    cleared: "USFDA · CDSCO",
    downtime: "1 day",
  },
  {
    id: "cryo",
    name: "Cryolipolysis",
    tag: "Body · Fat reduction",
    body: "Controlled cooling crystallises stubborn fat cells, which clear over twelve weeks. One to three centimetres lost per cycle, no incision.",
    icon: "snowflake",
    cleared: "USFDA",
    downtime: "0 days",
  },
  {
    id: "fue",
    name: "Sapphire FUE + GFC",
    tag: "Hair · Restoration",
    body: "Sapphire-blade follicular extraction paired with growth-factor concentrate. Performed personally by Dr. Rajeev, eight to ten hour sessions.",
    icon: "sprout",
    cleared: "CDSCO",
    downtime: "2 days",
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
