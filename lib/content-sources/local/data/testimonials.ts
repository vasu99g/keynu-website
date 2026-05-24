import type { Testimonial } from "@/lib/content/types";

/**
 * Placeholder testimonials — to be replaced with real patient quotes via CMS.
 * Names are intentionally generic until the user provides authentic ones with
 * consent.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Walking into Keynu felt unlike any clinic I'd been to in Delhi. Dr. Sonia and her team took the time to actually listen before recommending anything.",
    patientName: "A. Sharma",
    treatmentSlug: "hydrafacial",
    rating: 5,
    order: 1,
  },
  {
    id: "t2",
    quote:
      "I came in worried about my hair loss for years. Six months into their GFC plan, the change is visible — and they're with me at every step.",
    patientName: "R. Kapoor",
    treatmentSlug: "gfc-hair-therapy",
    rating: 5,
    order: 2,
  },
  {
    id: "t3",
    quote:
      "Honest, unhurried, and quietly luxurious. Exactly the kind of place I want to bring my mother and my daughter to.",
    patientName: "M. Bedi",
    rating: 5,
    order: 3,
  },
];
