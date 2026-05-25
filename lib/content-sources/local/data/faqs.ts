export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Frequently asked questions for the homepage FAQ section.
 * Copy adapted from the brand design refresh. Plain-spoken, fact-led.
 */
export const faqs: FAQItem[] = [
  {
    id: "location",
    question: "Where is the clinic located?",
    answer:
      "B-2/11, Basement, Paschim Vihar, New Delhi 110063 — five minutes from Paschim Vihar metro. Valet parking available.",
  },
  {
    id: "consultation",
    question: "Do I need a consultation before any treatment?",
    answer:
      "Yes. Every patient meets one of our specialists for a 30-minute consultation so we can examine your concern, take a history and build the right plan. We never start a treatment on the first visit unless it's medically clear and you've asked for it.",
  },
  {
    id: "credentials",
    question: "Are the doctors board-certified?",
    answer:
      "Our team includes board-certified dermatologists, our founders Dr. Sonia and Dr. Rajeev Gupta (implantologists with 25+ years), and licensed therapists. Every clinical decision is doctor-led.",
  },
  {
    id: "pricing",
    question: "What does a typical session cost?",
    answer:
      "Costs are quoted plainly after consultation — they vary widely based on skin type, area, and sessions needed. We share a written estimate before any treatment begins. No hidden add-ons, ever.",
  },
  {
    id: "indian-skin",
    question: "Is laser hair reduction safe for Indian skin?",
    answer:
      "Yes — we use Diode and Nd:YAG combination systems specifically suited to South Asian skin tones. Our protocols are calibrated to minimise heat and post-treatment pigmentation.",
  },
  {
    id: "cancellation",
    question: "How do I cancel or reschedule?",
    answer:
      "Just message us on WhatsApp at least 4 hours in advance. No cancellation charge for one reschedule per appointment.",
  },
  {
    id: "financing",
    question: "Do you offer financing options?",
    answer:
      "Yes — we partner with no-cost EMI providers for treatments above ₹25,000. The front-desk team can walk you through the options.",
  },
];
