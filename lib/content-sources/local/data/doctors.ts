import type { Doctor } from "@/lib/content/types";

/**
 * Stub doctor data. Dr. Sonia Gupta is the primary face of the brand
 * (per brand FAQ doc) and must always render first.
 *
 * Bios are placeholder/draft — the user will refine these in Sanity post-launch.
 */
export const doctors: Doctor[] = [
  {
    slug: "sonia-gupta",
    name: "Dr. Sonia Gupta",
    role: "Co-founder & Medical Director",
    qualifications: ["BDS", "MDS"],
    bio: "Co-founder and the face of Keynu. Practicing healthcare since 1996, Dr. Sonia leads the clinic's medical direction, treatment protocols, and patient experience — built on the belief that every patient is treated like family.",
    isLead: true,
    order: 1,
  },
  {
    slug: "rajeev-gupta",
    name: "Dr. Rajeev Gupta",
    role: "Co-founder & Implantologist",
    qualifications: ["BDS", "MDS — Implantology"],
    bio: "Co-founder of Keynu with over 25 years of clinical practice. Known for his precision and integrity, Dr. Rajeev anchors the clinic's heritage of family-led, long-term patient care.",
    isLead: false,
    order: 2,
  },
];
