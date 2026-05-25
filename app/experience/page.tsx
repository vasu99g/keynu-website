import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { SixRituals } from "@/components/sections/home/SixRituals";

export const metadata: Metadata = {
  title: "The experience",
  description:
    "Seven steps that shape every Keynu visit — booking, welcome, consultation, before pictures, treatment, after pictures, prescription.",
};

/**
 * /experience — the long form of the seven rituals. Reuses the homepage
 * SixRituals component (which already renders all seven steps) with a
 * dedicated page hero on top so the section gets its own URL + meta.
 */
export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="What a visit feels like"
        title="A clinic visit, written like a __HL__."
        highlight="ritual"
        lead="Seven considered moments — from your first hello to the close — each one shaped by the hospitality we grew up with."
      />
      <SixRituals />
      <PageCTA />
    </>
  );
}
