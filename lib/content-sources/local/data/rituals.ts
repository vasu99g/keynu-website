export type RitualSymbol =
  | "dove"
  | "swan"
  | "tree"
  | "lotus"
  | "hibiscus"
  | "mountain"
  | "emblem";

export interface Ritual {
  id: string;
  roman: string;
  devanagari: string;
  label: string;
  title: string;
  body: string;
  mood: string;
  imageSrc: string;
  symbol: RitualSymbol;
  symbolMeaning: string;
}

/**
 * The seven steps of a Keynu visit (सप्त संस्कार) — told as a horizontal
 * editorial deck. Maps the exact patient journey the user defined:
 * booking → welcome → consult → before+consent → treatment →
 * after+post-care → prescription+invoice.
 */
export const rituals: Ritual[] = [
  {
    id: "booking",
    roman: "I",
    devanagari: "एक",
    label: "Booking",
    title: "Hassle-free appointment scheduling.",
    body: "Book online or on WhatsApp. A real person on our front desk replies — usually within ten minutes during clinic hours. No bots, no scripts, no chasing.",
    mood: "Online · WhatsApp · in minutes",
    imageSrc: "/images/hero/reception.jpg",
    symbol: "dove",
    symbolMeaning: "Dove — for peace",
  },
  {
    id: "welcome",
    roman: "II",
    devanagari: "दो",
    label: "Welcome",
    title: "Tea, coffee, a moment to settle.",
    body: "You'll be greeted at the door, offered a drink and a snack, and walked through check-in and registration. The first ten minutes are yours.",
    mood: "Tea or coffee · Quick check-in",
    imageSrc: "/images/bento/reception-detail.jpg",
    symbol: "swan",
    symbolMeaning: "Swan — for grace",
  },
  {
    id: "consult",
    roman: "III",
    devanagari: "तीन",
    label: "Consultation",
    title: "Unhurried, honest, transparent.",
    body: "A doctor examines, listens, and takes a brief history. You leave with a written plan, written pricing, and zero surprises. We won't start a treatment on visit one unless it's medically clear and you've asked.",
    mood: "30 min · Written plan · Written estimate",
    imageSrc: "/images/bento/consult-room.jpg",
    symbol: "tree",
    symbolMeaning: "Tree — for growth",
  },
  {
    id: "before",
    roman: "IV",
    devanagari: "चार",
    label: "Before pictures",
    title: "Documented, with your consent.",
    body: "Standardised lighting, standardised angles, full consent before any photograph. The baseline that lets you see the progress later.",
    mood: "Consent first · Standardised setup",
    imageSrc: "/images/bento/kinu-partition.jpg",
    symbol: "lotus",
    symbolMeaning: "Lotus — for purity",
  },
  {
    id: "treatment",
    roman: "V",
    devanagari: "पाँच",
    label: "The treatment",
    title: "Quiet rooms. Senior hands.",
    body: "Your slot is yours — we don't double-book. Therapists are senior, technicians are senior, a doctor checks on every patient. You will not meet a fresher in our clinic.",
    mood: "Private rooms · Senior staff",
    imageSrc: "/images/bento/emerald-machine.jpg",
    symbol: "hibiscus",
    symbolMeaning: "Hibiscus — for beauty",
  },
  {
    id: "after",
    roman: "VI",
    devanagari: "छह",
    label: "After pictures",
    title: "Documented again. Recovery explained.",
    body: "Matching after photos for the file. A clear walkthrough of what to expect over the next 48 hours, two weeks, three months — everything written so nothing is missed.",
    mood: "Matched photos · Recovery, written",
    imageSrc: "/images/bento/gloved-portrait.jpg",
    symbol: "mountain",
    symbolMeaning: "Mountain — for strength",
  },
  {
    id: "wrap",
    roman: "VII",
    devanagari: "सात",
    label: "Wrap-up",
    title: "Prescription, products, plain invoice.",
    body: "A printed prescription, the products you need on hand, a short feedback form, and an itemised invoice. No hidden line items. WhatsApp check-ins follow.",
    mood: "Prescription · Products · Itemised bill",
    imageSrc: "/images/bento/dinner-citrus.jpg",
    symbol: "emblem",
    symbolMeaning: "The kinu mark — the close",
  },
];
