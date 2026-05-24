import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { TreatmentCategoriesSection } from "@/components/sections/home/TreatmentCategoriesSection";
import { BentoPhotoWall } from "@/components/sections/home/BentoPhotoWall";
import { DoctorIntroSection } from "@/components/sections/home/DoctorIntroSection";
import { ExperiencePillarsSection } from "@/components/sections/home/ExperiencePillarsSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { VisitCTASection } from "@/components/sections/home/VisitCTASection";

export const metadata: Metadata = {
  title: "Keynu — Beyond beauty",
  description:
    "A boutique aesthetics & wellness clinic in Paschim Vihar, New Delhi. Doctor-led care, premium technology, and a 30-year family legacy of treating every patient like family.",
};

/**
 * Home page — composes the eight home sections in order. Each section is its
 * own self-contained server component for clarity and easy reordering.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <TreatmentCategoriesSection />
      <BentoPhotoWall />
      <DoctorIntroSection />
      <ExperiencePillarsSection />
      <TestimonialsSection />
      <VisitCTASection />
    </>
  );
}
