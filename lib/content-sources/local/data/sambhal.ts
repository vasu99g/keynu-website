export interface SambhalPillar {
  number: string;
  name: string;
  body: string;
  /** Lucide icon name. */
  icon: "sun" | "leaf" | "message-circle" | "package";
}

export interface SambhalTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  per: string;
  note: string;
  perks: string[];
  featured?: boolean;
}

/**
 * Four pillars of after-care that come standard with every Keynu plan.
 * The Sambhal (सम्भाल — "to look after") section frames these as the
 * counterbalance to Technology: treatments are the spark, post-care is
 * how the flame stays alive.
 */
export const sambhalPillars: SambhalPillar[] = [
  {
    number: "01",
    name: "Your daily routine",
    body: "A curated AM/PM regimen — cleanser, treatment serums, sunscreen — drawn from cosmeceutical lines we trust (SkinCeuticals, ISDIN, Bioderma) and tuned to your plan, never to a kickback.",
    icon: "sun",
  },
  {
    number: "02",
    name: "A nutritionist on staff",
    body: "Pooja Sharma, MSc, sees every aesthetic patient at least once. Hormones, gut, sleep, hydration — addressed first, not as an afterthought to the chair.",
    icon: "leaf",
  },
  {
    number: "03",
    name: "WhatsApp guidance",
    body: "Same-evening regimen, 48-hour check-in, two-week review. A real doctor on the other side — not a chatbot, not a coordinator reading a script.",
    icon: "message-circle",
  },
  {
    number: "04",
    name: "Monthly refills",
    body: "Your products arrive at your door before they run out, in unmarked linen-wrapped boxes. Pause, swap or cancel any month — no lock-in, no fine print.",
    icon: "package",
  },
];

/**
 * Three subscription tiers. The quarterly tier is the featured one — it's
 * the most picked + the best honest value.
 */
export const sambhalTiers: SambhalTier[] = [
  {
    id: "month",
    name: "Monthly",
    subtitle: "Sambhal · Starter",
    price: "₹4,800",
    per: "per month",
    note: "Cancel any time.",
    perks: [
      "Curated AM/PM routine",
      "WhatsApp regimen",
      "One nutritionist visit / year",
    ],
  },
  {
    id: "quarter",
    name: "Quarterly",
    subtitle: "Sambhal · Most chosen",
    price: "₹13,200",
    per: "every three months",
    note: "Save ₹1,200 + a free seasonal consult.",
    perks: [
      "Everything in Monthly",
      "Quarterly skin review (in-clinic)",
      "Two nutritionist visits / year",
    ],
    featured: true,
  },
  {
    id: "year",
    name: "Annual",
    subtitle: "Sambhal · For the long view",
    price: "₹48,000",
    per: "per year",
    note: "Save ₹9,600 + a founders' visit with Dr. Sonia.",
    perks: [
      "Everything in Quarterly",
      "Founders' annual review",
      "Four nutritionist visits / year",
      "Priority booking",
    ],
  },
];
