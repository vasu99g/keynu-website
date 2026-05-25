"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Site-wide custom cursor — a small saffron dot that follows the pointer and
 * grows into a soft pill when hovering over interactive elements (links,
 * buttons, anything tagged with `data-cursor="hover"`).
 *
 * Disabled for:
 *  - touch devices (where there's no cursor to enhance)
 *  - users who prefer reduced motion (we keep the native cursor visible)
 *
 * Renders behind the user's actual cursor as an accent — we never `cursor: none`
 * the page, so a user with assistive needs always has the real cursor too.
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring-smoothed coordinates give the cursor its "follow with weight" feel.
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isCoarse);
    if (isCoarse) return;

    const onMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], [data-cursor='hover'], input, textarea, select",
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [cursorX, cursorY]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-multiply"
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 14,
          height: isHovering ? 48 : 14,
          opacity: isHovering ? 0.5 : 0.85,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron"
      />
    </motion.div>
  );
}
