"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { MarigoldToran } from "@/components/composites/MarigoldToran";
import { ArchPortal } from "@/components/composites/ArchPortal";
import { rituals } from "@/lib/content-sources/local";
import type { Ritual, RitualSymbol } from "@/lib/content-sources/local";
import { cn } from "@/lib/utils/cn";

const symbolToFile: Record<RitualSymbol, string> = {
  dove: "/brand/symbols/dove.png",
  swan: "/brand/symbols/swan.png",
  tree: "/brand/symbols/tree.png",
  lotus: "/brand/symbols/lotus.png",
  hibiscus: "/brand/symbols/hibiscus.png",
  mountain: "/brand/symbols/mountain.png",
  emblem: "/brand/keynu-emblem.svg",
};

/**
 * Six Rituals (षट् · संस्कार) — horizontal scroll-snap deck telling the
 * brand's six considered moments. Each card pairs a jharokha-arch portal
 * with editorial copy, Roman + Devanagari numerals, and one of six
 * mythological emblems. A marigold toran garland frames the section top
 * and bottom.
 *
 * Bottom bar acts as a chapter navigator: counter (current/total), dot
 * indicators (clickable), prev/next arrows, and a "Begin your visit" CTA.
 *
 * The signature heritage section of the homepage — meant to land emotionally.
 */
export function SixRituals() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Watch which card is most-visible inside the horizontal track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-ritual-card]"));
    const intersectionMap = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectionMap.set(entry.target, entry.intersectionRatio);
        });
        let bestIdx = activeIndex;
        let bestRatio = 0;
        cards.forEach((card, idx) => {
          const ratio = intersectionMap.get(card) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        });
        if (bestIdx !== activeIndex) setActiveIndex(bestIdx);
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
    // activeIndex purposely excluded — we only set up the observer once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToCard = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>("[data-ritual-card]")[idx];
    if (!card) return;
    const padLeft = parseFloat(getComputedStyle(track).paddingLeft || "0");
    track.scrollTo({ left: card.offsetLeft - padLeft, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (delta: -1 | 1) => {
      const next = Math.max(0, Math.min(rituals.length - 1, activeIndex + delta));
      scrollToCard(next);
    },
    [activeIndex, scrollToCard],
  );

  const active = rituals[activeIndex] ?? rituals[0];
  if (!active) return null;

  return (
    <Section spacing="loose" id="experience" className="relative overflow-hidden">
      {/* Toran top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0">
        <MarigoldToran className="h-24 md:h-28" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="mx-auto max-w-3xl pt-16 text-center md:pt-20">
          <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
            <span aria-hidden="true" className="text-saffron">
              +
            </span>
            The Keynu Experience
            <span aria-hidden="true" className="text-saffron">
              +
            </span>
          </span>
          <p className="mt-4 font-devanagari text-lg text-marigold md:text-xl">
            षट् · संस्कार
          </p>
          <Heading as="h2" size="h1" className="mt-3">
            A clinic visit, written like a{" "}
            <em className="font-editorial italic text-marigold">ritual.</em>
          </Heading>
          <Text size="lg" className="mt-5 text-ink/85">
            Six considered moments — from your first hello to the long view — each one shaped by the hospitality we grew up with.
          </Text>
        </div>
      </Container>

      {/* Horizontal scroll-snap track */}
      <div
        ref={trackRef}
        className="relative z-10 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] md:mt-16 md:gap-10 md:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {rituals.map((ritual, index) => (
          <RitualCard key={ritual.id} ritual={ritual} index={index} isActive={index === activeIndex} />
        ))}
        {/* Trailing spacer so the last card can snap to the left edge */}
        <div className="shrink-0 snap-none" aria-hidden="true" style={{ width: 1 }} />
      </div>

      {/* Bottom chapter navigator */}
      <Container width="wide" className="relative z-10 mt-8 md:mt-12">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-walnut/15 pt-6 md:flex-row">
          {/* Counter */}
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-h3 leading-none text-walnut">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-h4 leading-none text-walnut/40">/</span>
            <span className="font-heading text-h4 leading-none text-walnut/40">
              {String(rituals.length).padStart(2, "0")}
            </span>
            <span className="ml-3 font-body text-micro uppercase tracking-widest text-walnut/70">
              {active.label}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {rituals.map((ritual, idx) => (
              <button
                key={ritual.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Jump to chapter ${idx + 1}: ${ritual.label}`}
                aria-pressed={idx === activeIndex}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-base ease-keynu",
                  idx === activeIndex ? "w-8 bg-marigold" : "w-1.5 bg-walnut/25 hover:bg-walnut/45",
                )}
              />
            ))}
          </div>

          {/* Prev / Next + CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-walnut px-5 py-3 font-body text-micro uppercase tracking-widest text-mogra transition-colors duration-base ease-keynu hover:bg-ink"
            >
              Begin your visit
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous chapter"
              disabled={activeIndex === 0}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-walnut/20 text-walnut transition-colors duration-base ease-keynu hover:border-walnut hover:bg-walnut/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next chapter"
              disabled={activeIndex === rituals.length - 1}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-walnut/20 text-walnut transition-colors duration-base ease-keynu hover:border-walnut hover:bg-walnut/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Toran bottom — mirrored */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 -scale-y-100">
        <MarigoldToran className="h-24 md:h-28" />
      </div>
    </Section>
  );
}

interface RitualCardProps {
  ritual: Ritual;
  index: number;
  isActive: boolean;
}

function RitualCard({ ritual, index, isActive }: RitualCardProps) {
  return (
    <article
      data-ritual-card
      aria-current={isActive}
      className="relative flex w-[min(1080px,90vw)] shrink-0 snap-start flex-col gap-6 rounded-xl border border-walnut/12 bg-mogra p-6 transition-shadow duration-base ease-keynu md:flex-row md:gap-10 md:p-8 lg:p-10"
      style={{
        boxShadow: isActive ? "0 30px 60px -30px rgba(86,46,38,0.32)" : "0 0 0 transparent",
      }}
    >
      {/* Portal column */}
      <div className="relative flex shrink-0 items-center justify-center md:w-[44%]">
        {/* Giant Roman numeral breaking out top-left */}
        <span
          aria-hidden="true"
          className="absolute -left-3 -top-6 z-10 font-heading text-[4rem] leading-none text-walnut/15 md:-left-6 md:-top-10 md:text-[6rem]"
        >
          {ritual.roman}
        </span>
        <div className="relative w-full max-w-[360px]">
          <ArchPortal imageSrc={ritual.imageSrc} alt={ritual.label} />
          {/* Floating mythological emblem at top-right of portal */}
          <span
            aria-hidden="true"
            className="absolute -right-4 top-6 z-10 h-16 w-16 opacity-80 md:-right-8 md:top-8 md:h-20 md:w-20"
          >
            <img
              src={symbolToFile[ritual.symbol]}
              alt=""
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </span>
        </div>
        {/* Devanagari cartouche bottom-right */}
        <span
          aria-hidden="true"
          className="absolute -bottom-2 right-2 z-10 font-devanagari text-3xl text-marigold md:right-6 md:text-4xl"
        >
          {ritual.devanagari}
        </span>
      </div>

      {/* Copy column */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/55">
          <span className="font-heading text-base text-walnut">{ritual.roman}</span>
          <span className="font-devanagari text-marigold">{ritual.devanagari}</span>
          <span aria-hidden="true" className="h-px w-8 bg-walnut/25" />
          <span>{String(index + 1).padStart(2, "0")} / 06</span>
        </div>
        <p className="mt-5 font-body text-micro uppercase tracking-widest text-walnut/65">
          {ritual.label}
        </p>
        <Heading as="h3" size="h2" className="mt-3">
          {ritual.title}
        </Heading>
        <p className="mt-4 font-body text-body-lg leading-relaxed text-ink/85">{ritual.body}</p>
        <div className="mt-6 inline-flex max-w-fit items-center gap-2 rounded-full border border-walnut/15 bg-sandalwood/40 px-4 py-2 font-body text-caption text-walnut">
          <span aria-hidden="true" className="text-saffron">
            +
          </span>
          {ritual.mood}
        </div>
        <p className="mt-5 font-body text-caption italic text-walnut/55">
          {ritual.symbolMeaning}
        </p>
      </div>
    </article>
  );
}
