import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ScrollingBanner } from "@/components/sections/home/ScrollingBanner";
import { PillarsSection } from "@/components/sections/home/PillarsSection";
import { StoryAndFoundersSection } from "@/components/sections/home/StoryAndFoundersSection";
import { ConcernDial } from "@/components/sections/home/ConcernDial";
import { SixRituals } from "@/components/sections/home/SixRituals";
import { TechnologySection } from "@/components/sections/home/TechnologySection";
import { ResultsAndTestimonialsSection } from "@/components/sections/home/ResultsAndTestimonialsSection";
import { SambhalSection } from "@/components/sections/home/SambhalSection";
import { FAQSection } from "@/components/sections/home/FAQSection";

export const metadata: Metadata = {
  title: "Keynu — Beyond beauty",
  description:
    "An aesthetics and wellness clinic in Paschim Vihar, New Delhi. Doctor-led care across face, skin, hair, body and smile. A unit of BDC.",
};

/**
 * Home page composition.
 *
 * Final order: hero → banner (credentials) → pillars (what we do) →
 * story + founders (who we are) → concern dial (what concerns you?) →
 * seven rituals (how a visit feels) → technology (the science) →
 * results + testimonials (proof) → sambhal (after-care) → FAQ.
 * Closing CTA + footer combined into the SiteFooter component (rendered
 * by the root layout).
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ScrollingBanner />
      <PillarsSection />
      <StoryAndFoundersSection />
      <ConcernDial />
      <SixRituals />
      <TechnologySection />
      <ResultsAndTestimonialsSection />
      <SambhalSection />
      <FAQSection />
    </>
  );
}
