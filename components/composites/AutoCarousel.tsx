"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface AutoCarouselSlide {
  src: string;
  alt: string;
}

interface AutoCarouselProps {
  slides: AutoCarouselSlide[];
  /** Milliseconds each slide is held. Default 4500. */
  interval?: number;
  /** Fade transition duration in seconds. Default 1.2. */
  fadeSeconds?: number;
  className?: string;
  /** Aspect ratio for the frame (e.g. "4/5"). Default "4/5". */
  aspectRatio?: string;
}

/**
 * Auto-rotating photo carousel with fade crossfade between slides.
 *
 * - Cycles through `slides` on `interval` ms.
 * - Pauses while the tab is hidden (no point burning cycles off-screen).
 * - Honors `prefers-reduced-motion` — never rotates, shows only the first slide.
 * - Renders dot indicators under the frame (click to jump).
 *
 * Used by the StoryAndFoundersSection to let the photo column tell a small
 * visual story (interior → founder → patient → kinu motif) instead of
 * sitting on a single still.
 */
export function AutoCarousel({
  slides,
  interval = 4500,
  fadeSeconds = 1.2,
  className,
  aspectRatio = "4/5",
}: AutoCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1) return;

    let timerId: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % slides.length);
      }
      timerId = setTimeout(tick, interval);
    };

    timerId = setTimeout(tick, interval);
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [slides.length, interval, prefersReducedMotion]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative overflow-hidden rounded-sm bg-sandalwood shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]"
        style={{ aspectRatio }}
      >
        <AnimatePresence mode="sync">
          {slides.map((slide, i) =>
            i === index ? (
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : fadeSeconds, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Jump to slide ${i + 1}: ${slide.alt}`}
              aria-pressed={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-base ease-keynu",
                i === index ? "w-8 bg-marigold" : "w-1.5 bg-walnut/25 hover:bg-walnut/45",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
