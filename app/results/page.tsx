import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { ResultsAndTestimonialsSection } from "@/components/sections/home/ResultsAndTestimonialsSection";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real patient before/after results across hydrafacial, hair regrowth, pigmentation and more. Consented, clinically representative.",
};

/**
 * /results — full Results page. Reuses the homepage Results+Testimonials
 * combined section. A dedicated gallery view (filterable, paginated) can
 * replace this once we have a larger consented patient pool.
 */
export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results · Real clients"
        title="Real patients. Real __HL__."
        highlight="timelines"
        lead="Every image below is consented and clinically representative. Drag the handle on each slider to compare before and after."
      />
      <ResultsAndTestimonialsSection />
      <PageCTA
        title="See yourself in one of these timelines?"
        lead="Book a consultation and we'll draw up your plan. No commitment, no upsell."
      />
    </>
  );
}
