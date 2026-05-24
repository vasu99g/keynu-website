export interface ExperiencePillar {
  number: string;
  title: string;
  description: string;
}

/**
 * Five-pillar patient journey defined in the Keynu brand guidelines
 * (Brand Activation → Customer Experience). These anchor the home page
 * "Experience" section and the full /experience page.
 */
export const experiencePillars: ExperiencePillar[] = [
  {
    number: "01",
    title: "Welcome & first impression",
    description:
      "The journey begins the moment you step through the door — a warm greeting, soft lighting, the scent of mogra or sandalwood, and a signature welcome drink to settle in.",
  },
  {
    number: "02",
    title: "Consultation & customisation",
    description:
      "One-on-one time with a specialist who listens deeply to your concerns and goals — the foundation for a plan designed to uplift, not just treat.",
  },
  {
    number: "03",
    title: "Treatment ritual",
    description:
      "Every treatment is considered a ritual. From the texture of our linens to the language we use, each step is explained so you feel informed, in control, and at ease.",
  },
  {
    number: "04",
    title: "Post-treatment care & follow-up",
    description:
      "Our care continues well after the session ends. Thoughtful aftercare kits, personalised WhatsApp check-ins, and gentle reminders for the next step.",
  },
  {
    number: "05",
    title: "Moments of delight",
    description:
      "Small gestures with lasting impression — a handwritten note, a seasonal gift, a birthday surprise. Each visit is designed to feel meaningful and memorable.",
  },
];
