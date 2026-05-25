"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { Logo } from "@/components/brand/Logo";
import { getAllConcerns } from "@/lib/content/concerns";
import { getSiteSettings } from "@/lib/content/site";
import { cn } from "@/lib/utils/cn";

/**
 * Interactive concern-to-protocol dial.
 *
 * Sits on a warm Walnut band (distinct from Technology's Ink). A glowing
 * kinnow-orange orb sits at the center of the wheel — the brand's visual
 * anchor — with the active concern label arched above it. Chips rotate
 * around the perimeter; click any chip to spin it to top.
 */
export function ConcernDial() {
  const concerns = getAllConcerns();
  const site = getSiteSettings();
  const [activeIndex, setActiveIndex] = useState(0);

  // Pre-compute each chip's angle relative to the active one. Active sits
  // at -90° (top); others spread evenly around the rest of the circle.
  const chipAngles = useMemo(() => {
    const step = 360 / concerns.length;
    return concerns.map((_, i) => ((i - activeIndex) * step - 90 + 360) % 360);
  }, [activeIndex, concerns]);

  const active = concerns[activeIndex];
  if (!active) return null;

  return (
    <Section
      spacing="loose"
      data-header-tone="dark"
      id="concerns"
      className="relative isolate overflow-hidden bg-walnut text-mogra"
    >
      {/* Soft marigold orb echoing the wheel's center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(232,119,34,0.16),transparent_70%)] blur-2xl"
      />
      <Container width="wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-mogra/70">
            <span aria-hidden="true" className="text-marigold">
              +
            </span>
            Tell us what brings you here
          </span>
          <Heading as="h2" size="h1" className="mt-5 text-mogra">
            We start with the{" "}
            <em className="font-editorial italic text-marigold">concern</em>. Not
            the treatment.
          </Heading>
          <Text size="lg" className="mt-5 text-mogra/75">
            Spin the dial. Each concern shows you the matching plan.
          </Text>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* ── Wheel ────────────────────────────────────────────── */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px] lg:col-span-6 lg:max-w-[520px]">
            {/* Decorative concentric rings */}
            <div className="absolute inset-0 rounded-full border border-mogra/15" />
            <div className="absolute inset-[10%] rounded-full border border-mogra/12" />
            <div className="absolute inset-[22%] rounded-full border border-mogra/9" />

            {/* Center kinnow — orange body unchanged from the version the
                user approved. Only the leaf is enhanced for realism and
                attachment. */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
                {/* Glow halo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,119,34,0.55),transparent_70%)] blur-2xl"
                />
                {/* The orange itself */}
                <div
                  className="relative flex h-full w-full items-center justify-center rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #FBB04C 0%, #E87722 50%, #C25A14 100%)",
                    boxShadow:
                      "inset -16px -20px 36px rgba(86,46,38,0.45), 0 24px 48px -16px rgba(232,119,34,0.5)",
                  }}
                >
                  <Logo variant="emblem" size="xl" className="text-walnut opacity-65" label="" />
                </div>

              </div>
            </div>

            {/* Active concern label arched above the orange */}
            <div className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 text-center">
              <span className="block font-body text-micro uppercase tracking-widest text-mogra/55">
                Concern
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-1 block font-heading text-h4 uppercase leading-tight tracking-wide text-mogra"
                >
                  {active.label}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Chips around the perimeter */}
            {concerns.map((concern, i) => {
              const angle = chipAngles[i] ?? 0;
              const radians = (angle * Math.PI) / 180;
              const radius = 48; // % of wheel half-width
              const left = 50 + radius * Math.cos(radians);
              const top = 50 + radius * Math.sin(radians);
              const isActive = i === activeIndex;

              return (
                <button
                  key={concern.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  aria-label={`Show protocol for ${concern.label}`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transitionProperty: "left, top, background-color, color, transform",
                  }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-4 py-2 font-body text-caption tracking-tight transition-all duration-slow ease-keynu",
                    isActive
                      ? "scale-110 border-marigold bg-marigold text-mogra shadow-[0_18px_40px_-12px_rgba(232,119,34,0.55)]"
                      : "border-mogra/25 bg-walnut/40 text-mogra/80 hover:border-mogra/55 hover:text-mogra",
                  )}
                >
                  {concern.label}
                </button>
              );
            })}
          </div>

          {/* ── Protocol panel ──────────────────────────────────── */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-mogra/65">
                  <span aria-hidden="true" className="text-marigold">
                    +
                  </span>
                  Protocol · {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(concerns.length).padStart(2, "0")}
                </span>
                <Heading as="h3" size="h2" className="mt-4 text-mogra">
                  {active.title}
                </Heading>
                <Text size="lg" className="mt-4 text-mogra/75">
                  {active.lead}
                </Text>

                <ul className="mt-7 grid gap-px overflow-hidden rounded-lg border border-mogra/10 bg-mogra/5">
                  {active.protocol.map((item) => (
                    <li key={item}>
                      <Link
                        href="/book"
                        className="flex items-center justify-between gap-4 bg-walnut/60 px-5 py-4 font-body text-body text-mogra transition-colors duration-base ease-keynu hover:bg-mogra/10"
                      >
                        <span>{item}</span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 opacity-60"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    variant="primary"
                    className="bg-marigold text-mogra hover:bg-marigold/90"
                  >
                    <Link href="/book">Book this plan</Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-mogra hover:bg-mogra/10"
                  >
                    <a
                      href={`https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(`Hi Keynu, I'd like to know more about ${active.label}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask on WhatsApp →
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
