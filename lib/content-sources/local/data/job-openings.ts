export interface JobOpening {
  slug: string;
  title: string;
  team: "Clinical" | "Operations" | "Brand" | "Front desk";
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

/**
 * Placeholder open roles for the Careers page. Replace via CMS when
 * hiring is active.
 */
export const jobOpenings: JobOpening[] = [
  {
    slug: "senior-dermatologist",
    title: "Senior Dermatologist",
    team: "Clinical",
    type: "Full-time",
    location: "Paschim Vihar, New Delhi",
    summary:
      "Lead clinical decisions across skin, hair, and laser protocols alongside Dr. Sonia. Direct patient care + protocol review.",
    responsibilities: [
      "Consult and treat aesthetic dermatology patients",
      "Co-author and review treatment protocols quarterly",
      "Supervise junior dermatologists and technicians",
    ],
    requirements: [
      "MD / DNB Dermatology, 4+ years post-residency",
      "Hands-on with energy-based devices (laser, RF, HIFU)",
      "Comfort with patient communication in English + Hindi",
    ],
  },
  {
    slug: "senior-laser-technician",
    title: "Senior Laser Technician",
    team: "Clinical",
    type: "Full-time",
    location: "Paschim Vihar, New Delhi",
    summary:
      "Run our diode + Nd:YAG hair reduction and Q-Switch / Spectra pigmentation programmes under doctor supervision.",
    responsibilities: [
      "Operate laser and energy-based devices to protocol",
      "Maintain calibration and consumables log",
      "Educate patients on home-care and follow-up cadence",
    ],
    requirements: [
      "Diploma / BSc in cosmetology, 3+ years on lasers",
      "Demonstrable protocol discipline and patient empathy",
    ],
  },
  {
    slug: "patient-experience-lead",
    title: "Patient Experience Lead",
    team: "Front desk",
    type: "Full-time",
    location: "Paschim Vihar, New Delhi",
    summary:
      "Own the patient journey from WhatsApp to wrap-up. Hospitality background welcomed.",
    responsibilities: [
      "First point of contact on WhatsApp + reception",
      "Schedule, confirm and follow up on every appointment",
      "Coordinate consultations, payments and aftercare check-ins",
    ],
    requirements: [
      "2+ years in hospitality, aviation or premium retail",
      "Warm, organised, and unfazed by busy days",
    ],
  },
];
