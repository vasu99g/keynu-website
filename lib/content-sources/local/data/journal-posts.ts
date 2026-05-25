export interface JournalPost {
  slug: string;
  title: string;
  category: "Skin" | "Hair" | "Body" | "Wellness" | "Brand";
  excerpt: string;
  body: string[];
  author: string;
  publishedOn: string;
  readingMinutes: number;
  heroImage: string;
}

/**
 * Placeholder journal posts. The Journal page reads from here today;
 * swap to Sanity / MDX when real content is written.
 */
export const journalPosts: JournalPost[] = [
  {
    slug: "indian-skin-laser-hair-reduction",
    title: "Laser hair reduction for South Asian skin — what actually works",
    category: "Skin",
    excerpt:
      "Why we use Diode + Nd:YAG combination systems for South Asian skin tones, and what to expect across six sessions.",
    body: [
      "Most laser hair reduction protocols are written for lighter skin tones. South Asian skin has more melanin in the epidermis — the same energy can cause post-inflammatory pigmentation if the wavelength isn't right.",
      "At Keynu we use a Diode (810 nm) + Nd:YAG (1064 nm) combination calibrated by skin type. Lower fluences, longer pulse durations, and aggressive contact cooling reduce heat at the surface while still hitting the follicle.",
      "Expect 6–8 sessions, four to six weeks apart, with 70–90% permanent reduction by the end. The remaining hair is finer and slower-growing.",
    ],
    author: "Dr. Sonia Gupta",
    publishedOn: "2025-09-12",
    readingMinutes: 4,
    heroImage: "/images/bento/emerald-machine.jpg",
  },
  {
    slug: "honest-anti-ageing-plan",
    title: "An honest anti-ageing plan in your thirties",
    category: "Skin",
    excerpt:
      "What we actually recommend if you're in your thirties and want subtle anti-ageing without the frozen face.",
    body: [
      "The honest answer is not Botox first. The honest answer is sunscreen, retinoids, and one or two well-chosen treatments per year.",
      "When injectables enter the plan, micro-doses of Botox (4–8 units in select sites) and skin-quality boosters like polynucleotides (PDRN) do more than a heavy filler regimen.",
      "We sketch a 12-month plan in writing on visit one, and revise quarterly.",
    ],
    author: "Dr. Sonia Gupta",
    publishedOn: "2025-08-04",
    readingMinutes: 5,
    heroImage: "/images/bento/kinu-partition.jpg",
  },
  {
    slug: "why-we-named-it-kinnow",
    title: "Why we named the clinic after a fruit",
    category: "Brand",
    excerpt:
      "The kinnow is the everyday Delhi citrus — sweet, sharp, familiar. We wanted the clinic to feel like that.",
    body: [
      "Kinnow is the unsexy hero of a Delhi winter. Every house has a basket of it. Nobody Instagrams it. You eat it standing in the kitchen.",
      "That is the feeling we wanted in the clinic. Not luxury. Not aspiration. Familiar warmth, plain honesty, results that hold past Monday.",
      "The brand name is the promise.",
    ],
    author: "Kavya Gupta",
    publishedOn: "2025-07-20",
    readingMinutes: 3,
    heroImage: "/images/bento/dinner-citrus.jpg",
  },
];
