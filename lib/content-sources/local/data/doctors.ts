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
    bio: '"The name Keynu comes from kinnow — a fruit that has always been part of our lives. For me, it symbolises nourishment and heritage." Dr. Sonia leads the practice with a team of dermatologists, skin therapists and staff she has personally selected. Every clinical decision is doctor-led; every team member is held to one principle — treat every client like family.',
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
