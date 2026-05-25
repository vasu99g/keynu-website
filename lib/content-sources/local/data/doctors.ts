import type { Doctor } from "@/lib/content/types";

/**
 * Stub leadership data. Dr. Sonia Gupta is the primary face of the brand
 * (per brand FAQ doc) and always renders first; Kavya Gupta (CEO) anchors
 * the operations + experience side.
 *
 * Bios are placeholder/draft — the user will refine these in Sanity post-launch.
 */
export const doctors: Doctor[] = [
  {
    slug: "sonia-gupta",
    name: "Dr. Sonia Gupta",
    role: "Co-founder & Medical Director",
    qualifications: ["BDS", "MDS"],
    bio: "Co-founder and the face of Keynu. Leads the clinic's medical direction, treatment protocols, and patient experience with a team of world-class dermatologists. One principle: treat every person like family.",
    isLead: true,
    order: 1,
  },
  {
    slug: "kavya-gupta",
    name: "Kavya Gupta",
    role: "Chief Executive Officer",
    qualifications: [],
    bio: "Runs the clinic's operations, patient experience, and brand. Trained in business, embedded in the family practice.",
    isLead: false,
    order: 2,
  },
];
