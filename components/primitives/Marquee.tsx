"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface MarqueeProps {
  /** Items to scroll. Each child is wrapped and duplicated for seamless loop. */
  children: ReactNode;
  /** Seconds for one complete pass. Higher = slower. Default 40s reads "drift". */
  durationSeconds?: number;
  /** Scroll direction. */
  direction?: "left" | "right";
  /** Optional className for the outer wrapper (e.g. tone, padding). */
  className?: string;
  /** Gap between repeated items (Tailwind class). */
  itemGapClassName?: string;
  /** Mask fade-out edges for a softer entry/exit. */
  fadeEdges?: boolean;
}

/**
 * Edge-to-edge marquee with seamless looping. Duplicates its children once
 * and animates the translation across exactly one child-track-width so the
 * second copy lands where the first started — zero visible seam.
 *
 * Pauses on hover for legibility, and collapses to a static row when the
 * viewer prefers reduced motion.
 */
export function Marquee({
  children,
  durationSeconds = 40,
  direction = "left",
  className,
  itemGapClassName = "gap-12",
  fadeEdges = true,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = Children.toArray(children);

  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className={cn("flex flex-wrap items-center justify-center", itemGapClassName)}>
          {items}
        </div>
      </div>
    );
  }

  const animationDistance = direction === "left" ? "-50%" : "50%";

  return (
    <div
      className={cn(
        "group overflow-hidden",
        fadeEdges &&
          "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
      role="marquee"
      aria-label="Continuously scrolling content"
    >
      <motion.div
        className={cn("flex w-max items-center", itemGapClassName)}
        animate={{ x: [direction === "left" ? "0%" : animationDistance, animationDistance] }}
        transition={{
          duration: durationSeconds,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((child, index) => (
          <div key={index} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
