"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

interface MarqueeWord {
  text: string;
  /** Optional italic emphasis. */
  italic?: boolean;
  /** "lg" lands at display size, "md" at h2, "sm" at h3. */
  size?: "sm" | "md" | "lg";
}

const words: MarqueeWord[] = [
  { text: "Beyond", size: "lg", italic: true },
  { text: "Beauty.", size: "lg" },
  { text: "Est. 1996", size: "sm" },
  { text: "Care that listens", size: "md" },
  { text: "Doctor-led", size: "sm" },
  { text: "Boutique Aesthetics", size: "md", italic: true },
  { text: "New Delhi", size: "sm" },
];

const sizeClass = {
  sm: "text-h3",
  md: "text-h1",
  lg: "text-display",
} as const;

/**
 * Editorial-scale marquee — large mixed-weight type drifting horizontally
 * across the page. Section break between the bento wall and the doctor
 * section, designed to feel like a magazine spine running through the page.
 *
 * Includes the kinu emblem motif as a punctuation between phrases.
 */
export function EditorialMarquee() {
  const prefersReducedMotion = useReducedMotion();

  const Track = (
    <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16">
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`} className="flex items-center gap-12 md:gap-16">
          <span
            className={[
              "whitespace-nowrap font-heading leading-none tracking-tight text-walnut",
              sizeClass[word.size ?? "md"],
              word.italic ? "italic" : "",
            ].join(" ")}
          >
            {word.text}
          </span>
          <Logo variant="emblem" size="md" className="text-saffron" label="" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Brand marquee"
      className="overflow-hidden border-y border-walnut/10 bg-mogra py-10 md:py-14"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: prefersReducedMotion ? 0 : ["0%", "-50%"] }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      >
        {Track}
        {Track}
      </motion.div>
    </section>
  );
}
