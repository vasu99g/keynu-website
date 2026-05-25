"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";

/**
 * Banner items — factual, practical credentials only. No taglines, no
 * philosophy; the hero already carries the brand voice. This band is
 * here to tell a visitor what we actually do, what we use, and what
 * to expect operationally.
 */
const items = [
  "Doctor-only consultations",
  "FDA-approved devices · Calibrated for South Asian skin",
  "Medically tested, visibly proven",
  "Face · Skin · Hair · Body · Smile",
  "Botox · Fillers · HIFU · Threads",
  "Lasers · GFC · PRP · FUE",
  "HydraFacial · Q-Switch · Peels · CO₂",
  "30-minute consultation on the first visit",
  "Written estimates before any treatment",
];

/**
 * Floating credentials banner — sits directly under the hero on the walnut
 * accent band. Loops a wide-tracked, ✦-punctuated stream of brand
 * credentials. Acts as both a tonal section break and quiet social proof
 * before the visitor drops into the story.
 *
 * Implementation: render the items twice on a single flex track and animate
 * the track from 0 → -50% so the second copy slides exactly into the first
 * copy's starting position — zero visible seam, infinite loop.
 */
export function ScrollingBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Keynu credentials"
      data-header-tone="dark"
      className="relative isolate overflow-hidden border-y border-walnut/15 bg-walnut py-5 text-mogra md:py-6"
    >
      <motion.div
        className="flex w-max items-center gap-12 md:gap-16"
        animate={{ x: prefersReducedMotion ? 0 : ["0%", "-50%"] }}
        transition={{
          duration: 42,
          ease: "linear",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      >
        {/* Two copies for the seamless loop */}
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex shrink-0 items-center gap-4 font-body text-caption uppercase tracking-widest text-mogra md:text-sm"
              >
                <span aria-hidden="true" className="text-saffron">
                  ✦
                </span>
                {item}
              </span>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
