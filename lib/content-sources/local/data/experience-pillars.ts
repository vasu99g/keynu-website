export interface ExperiencePillar {
  number: string;
  title: string;
  description: string;
}

/**
 * Five-pillar patient journey — the steps a Keynu visit actually flows
 * through. Copy intentionally plain-spoken, not the luxury-brand glossary
 * of the earlier draft.
 */
export const experiencePillars: ExperiencePillar[] = [
  {
    number: "01",
    title: "Welcome",
    description:
      "You'll smell mogra before you see anyone. Soft lighting, a welcome drink, a moment to settle.",
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "One-on-one with a doctor who actually listens. Your plan is built around what you came in for — never what we'd like to upsell.",
  },
  {
    number: "03",
    title: "Treatment",
    description:
      "Every step explained. Comfortable linens, comfortable language. You stay in control of what happens next.",
  },
  {
    number: "04",
    title: "Follow-up",
    description:
      "Aftercare kits and WhatsApp check-ins. We don't disappear the moment you walk out.",
  },
  {
    number: "05",
    title: "Small things",
    description:
      "A handwritten note. A birthday surprise. A treatment we already know you'll love. The small things land.",
  },
];
