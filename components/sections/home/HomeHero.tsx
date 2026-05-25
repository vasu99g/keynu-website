"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Magnetic } from "@/components/interactive/MagneticButton";
import { VideoTile } from "@/components/composites/VideoTile";

/**
 * Home hero — tightened composition per user feedback.
 *
 * Layout: warm two-radial gradient backdrop on Mogra. A large lotus motif
 * sits behind the type as a watermark that drifts down + rotates slowly on
 * scroll. Soft radial mask fades the lotus edges so it never reads as a
 * hard-cropped image.
 *
 * Top: topline (location + Google rating). Middle: short intro line in
 * Cormorant italic, the massive BEYOND / BEAUTY. headline, and the single
 * "Find my treatment" CTA all stacked tightly so the section breathes
 * without dead space. Right column: sharp-cornered (4px) vertical video
 * with slow ken-burns zoom.
 */
export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const motionDuration = prefersReducedMotion ? 0 : 0.9;
  const ease = [0.16, 1, 0.3, 1] as const;

  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 1000], [0, 220]);
  const watermarkRotate = useTransform(scrollY, [0, 1000], [0, 30]);

  return (
    <section
      className="relative isolate flex min-h-[84svh] flex-col justify-start overflow-hidden pb-20 pt-8 md:min-h-[88svh] md:pb-24 md:pt-10"
      style={{
        background: [
          "radial-gradient(60% 80% at 88% 18%, rgba(251, 176, 76, 0.32) 0%, transparent 60%)",
          "radial-gradient(50% 70% at 8% 92%, rgba(234, 219, 183, 0.7) 0%, transparent 65%)",
          "var(--color-mogra)",
        ].join(", "),
      }}
    >
      {/* Moving lotus watermark — sits behind the BEYOND BEAUTY headline.
          The outer wrapper handles positioning + centering (so the Tailwind
          translate-utilities aren't clobbered by Framer Motion's transform
          values), and the inner motion.div applies the scroll-tied y/rotate. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[36%] lg:top-[58%]"
      >
        <motion.div
          style={{
            y: prefersReducedMotion ? 0 : watermarkY,
            rotate: prefersReducedMotion ? 0 : watermarkRotate,
            maskImage:
              "radial-gradient(circle at center, black 55%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 55%, transparent 82%)",
          }}
          className="h-[520px] w-[520px] opacity-[0.28] md:h-[720px] md:w-[720px] lg:h-[860px] lg:w-[860px]"
        >
          <img
            src="/brand/symbols/lotus.png"
            alt=""
            width={860}
            height={860}
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>

      <Container width="wide" className="relative flex flex-col gap-8 md:gap-12">
        {/* Topline — location + Google rating */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDuration * 0.7, ease }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-body text-micro uppercase tracking-widest text-walnut/70"
        >
          <span className="flex items-center gap-3">
            A unit of BDC
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-saffron shadow-[0_0_12px_rgba(251,176,76,0.85)]"
            />
            Paschim Vihar, New Delhi
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="text-saffron">
              ★★★★★
            </span>
            4.9 on Google · 1,800+ reviews
          </span>
        </motion.div>

        {/* Main body — headline + intro + CTA on left, video on right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {/* Brief, plain-spoken intro */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration * 0.8, delay: 0.1, ease }}
              className="max-w-[34ch] font-editorial text-[clamp(1.125rem,1.6vw,1.5rem)] italic leading-snug text-walnut/85"
            >
              Welcome. We&apos;re an aesthetics clinic in Paschim Vihar — face, skin, hair, body and smile, all under one roof.
            </motion.p>

            {/* Headline */}
            <h1 className="mt-6 font-heading uppercase leading-[0.86] tracking-[-0.01em] text-walnut">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionDuration, delay: 0.2, ease }}
                className="block text-[clamp(3.5rem,11.5vw,9.5rem)]"
              >
                Beyond
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionDuration, delay: 0.35, ease }}
                className="block text-[clamp(3.5rem,11.5vw,9.5rem)] text-marigold"
              >
                Beauty.
              </motion.span>
            </h1>

            {/* CTA sits inline under the headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration * 0.8, delay: 0.6, ease }}
              className="mt-8"
            >
              <Magnetic strength={0.22}>
                <Button asChild size="lg" variant="primary">
                  <Link href="#concerns">Find my treatment →</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Video — sharp-cornered vertical strip with ken-burns zoom */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionDuration, delay: 0.5, ease }}
            className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-sm shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)] lg:col-span-4 lg:ml-auto lg:max-w-none"
          >
            <div className={prefersReducedMotion ? "h-full w-full" : "h-full w-full animate-hero-zoom"}>
              <VideoTile
                src="/videos/hero-reel.mp4"
                poster="/videos/hero-reel.jpg"
                alt="A treatment moment at Keynu"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
