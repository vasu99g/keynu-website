"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type HTMLAttributes, type ReactNode } from "react";

interface FadeInProps extends Omit<HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  /** Direction the content drifts in from. */
  from?: "bottom" | "top" | "left" | "right" | "none";
  /** Animation distance in pixels. Capped low to feel premium, not flashy. */
  distance?: number;
  /** Stagger delay in seconds. Use small values (0.05–0.2). */
  delay?: number;
  /** Whether to animate when scrolled into view (default) or on mount. */
  trigger?: "in-view" | "mount";
  /** Custom duration in seconds. Defaults align with brand motion language. */
  duration?: number;
  children: ReactNode;
}

const directionOffset = {
  bottom: { y: 1, x: 0 },
  top: { y: -1, x: 0 },
  left: { y: 0, x: -1 },
  right: { y: 0, x: 1 },
  none: { y: 0, x: 0 },
} as const;

/**
 * Wraps children with a gentle, accessible fade-and-drift reveal.
 *
 * - Defaults are intentionally subtle (16px drift, 700ms duration) so
 *   the motion reads as warmth rather than animation.
 * - Honors `prefers-reduced-motion` automatically — collapses to an
 *   instant render when the user opts out.
 * - Use `from="none"` when you only want the opacity fade without movement.
 */
export function FadeIn({
  from = "bottom",
  distance = 16,
  delay = 0,
  trigger = "in-view",
  duration = 0.7,
  children,
  ...rest
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset[from];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x * distance,
      y: offset.y * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={trigger === "mount" ? "visible" : undefined}
      whileInView={trigger === "in-view" ? "visible" : undefined}
      viewport={trigger === "in-view" ? { once: true, margin: "-80px" } : undefined}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
