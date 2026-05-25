import type { Pillar } from "@/lib/content/types";

/**
 * Keynu's five disciplines — Face, Skin, Hair, Body, Smile.
 *
 * Each blurb names a few of the headline treatments plus the one thing
 * that sets Keynu's approach apart in that discipline. Short, concrete,
 * and a clear contrast to typical clinic boilerplate.
 *
 * `hoverTone` paints each card a different brand color on hover so the
 * row comes alive as the visitor explores it.
 */
export const pillars: Pillar[] = [
  {
    id: "face",
    number: "01",
    name: "Face",
    blurb: "Subtle Botox, fillers and threads. No frozen face.",
    imageSrc: "/images/bento/gloved-portrait.jpg",
    href: "/treatments/injectables",
    hoverTone: "marigold",
  },
  {
    id: "skin",
    number: "02",
    name: "Skin",
    blurb: "Acne, pigmentation, scars. Dermatologist-led plans.",
    imageSrc: "/images/bento/kinu-partition.jpg",
    href: "/treatments/skin-rejuvenation-and-facials",
    hoverTone: "madder",
  },
  {
    id: "hair",
    number: "03",
    name: "Hair",
    blurb: "Laser reduction, GFC, PRP, FUE. Tuned for Indian skin.",
    imageSrc: "/images/doctors/dr-sonia.jpg",
    href: "/treatments/hair-regrowth",
    hoverTone: "walnut",
  },
  {
    id: "body",
    number: "04",
    name: "Body",
    blurb: "Inch loss and contouring — no surgery, no scalpel.",
    imageSrc: "/images/bento/consult-room.jpg",
    href: "/treatments/body-contouring-and-fat-loss",
    hoverTone: "forest",
  },
  {
    id: "smile",
    number: "05",
    name: "Smile",
    blurb: "Aligners, whitening, smile design — the founders are dentists.",
    imageSrc: "/images/bento/reception-detail.jpg",
    href: "/treatments",
    hoverTone: "saffron",
  },
];
