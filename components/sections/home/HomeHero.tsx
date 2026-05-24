"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";

const eyebrowText = "A boutique aesthetics clinic · Paschim Vihar · Est. 1996";
const heroWords = ["Beauty,", "as", "you", "already", "are."];

/**
 * Home hero — split editorial layout.
 *
 * Left column carries the brand promise: eyebrow, animated word-by-word
 * headline, supporting line, and two CTAs. Right column carries a real
 * clinic photograph framed by a soft saffron-orb glow that bleeds beyond
 * the image edge (the kinnow nod) and a small kinu emblem floating in the
 * upper-right margin.
 *
 * On mobile the columns stack (photo first, then text) so the imagery
 * carries the page even before scroll.
 */
export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const motionDuration = prefersReducedMotion ? 0 : 0.9;
  const staggerStep = prefersReducedMotion ? 0 : 0.08;

  return (
    <section className="relative overflow-hidden bg-mogra">
      <Container width="wide" className="relative">
        <div className="grid items-center gap-10 py-12 md:gap-16 md:py-20 lg:grid-cols-12 lg:py-24">
          {/* Text column */}
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration * 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/70"
            >
              <span className="block h-px w-6 bg-walnut/40" aria-hidden="true" />
              {eyebrowText}
            </motion.span>

            <h1 className="mt-6 font-heading text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] tracking-tight text-walnut">
              {heroWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: motionDuration,
                    delay: 0.15 + index * staggerStep,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {index === heroWords.length - 1 ? <em className="italic">{word}</em> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionDuration * 0.85,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 max-w-xl font-body text-body-lg leading-relaxed text-walnut/75"
            >
              A premium aesthetics &amp; wellness clinic in New Delhi — quietly luxurious, deeply expert, and rooted in three decades of family-led care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionDuration * 0.85,
                delay: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" variant="primary">
                <Link href="/book">Book a consultation</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/treatments">Explore treatments →</Link>
              </Button>
            </motion.div>
          </div>

          {/* Photo column */}
          <div className="relative order-1 lg:order-2 lg:col-span-6">
            {/* Soft kinnow orb glow that bleeds beyond the image edge */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(251,176,76,0.45),rgba(251,176,76,0)_70%)] blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionDuration,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-sandalwood/40 shadow-[0_40px_80px_-40px_rgba(86,46,38,0.4)] md:aspect-[5/6] lg:aspect-[5/6]"
            >
              <Image
                src="/images/hero/reception.jpg"
                alt="The Keynu reception — warm wood, golden ambient light, and the illuminated KEYNU signage"
                fill
                priority
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
                style={{ objectPosition: "30% center" }}
              />
              {/* Subtle vignette to deepen edges */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(86,46,38,0.18)_100%)]"
              />
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
