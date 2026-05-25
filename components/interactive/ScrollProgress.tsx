"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim saffron progress bar pinned to the very top of the viewport.
 * Width tracks the user's scroll position through the document — quiet
 * indicator of how far you've come, common in editorial sites.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[55] h-[3px] bg-saffron"
    />
  );
}
