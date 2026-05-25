"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface MagneticProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /** How strongly the element follows the pointer. 0.25 = subtle, 0.5 = lively. */
  strength?: number;
  children: ReactNode;
}

/**
 * Wraps any inline element with a subtle "magnetic" effect — when the user's
 * pointer enters the bounding box, the element drifts toward the pointer.
 * On exit it springs back to rest. Disabled for reduced-motion users.
 *
 * Best used around buttons and CTAs to make them feel alive on hover.
 */
export function Magnetic({ strength = 0.3, children, className, ...rest }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={cn("inline-flex", className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-flex", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
