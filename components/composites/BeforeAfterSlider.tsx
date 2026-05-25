"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Initial reveal position 0–100, defaults to 50. */
  initialPosition?: number;
  /** Aspect ratio for the frame. Defaults to "4/5" (portrait); pass "16/9" for landscape. */
  aspectRatio?: string;
  className?: string;
}

/**
 * Before / After image comparison slider.
 *
 * The "after" image sits beneath the "before" image. The before image is
 * clipped via `clip-path: inset(...)` so dragging the handle reveals more
 * of the after image. Supports mouse + touch + keyboard (arrow keys when
 * the handle is focused).
 *
 * Self-contained, no external slider lib. Keep the parent at a fixed
 * aspect-ratio so layout doesn't shift during interaction.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initialPosition = 50,
  aspectRatio = "4/5",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, ratio)));
  }, []);

  // Global pointermove + pointerup while dragging — feels less janky than
  // listening on the container alone (pointer can leave the box briefly).
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    setFromClientX(clientX);
  };

  const onKey = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - 4));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + 4));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ aspectRatio }}
      className={cn(
        "relative w-full overflow-hidden rounded-sm bg-sandalwood shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]",
        "select-none",
        className,
      )}
      onPointerDown={(e) => startDrag(e.clientX)}
    >
      {/* AFTER (bottom layer) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="pointer-events-none object-cover"
      />

      {/* BEFORE (top layer, clipped by position) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="pointer-events-none object-cover"
        />
      </div>

      {/* Labels */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-3 rounded-full bg-walnut/85 px-3 py-1 font-body text-micro uppercase tracking-widest text-mogra"
      >
        Before
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 rounded-full bg-marigold px-3 py-1 font-body text-micro uppercase tracking-widest text-mogra"
      >
        After
      </span>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-px bg-mogra/95 shadow-[0_0_0_1px_rgba(86,46,38,0.18)]"
        style={{ left: `${position}%` }}
      />
      <button
        type="button"
        role="slider"
        aria-label="Reveal slider — drag or use arrow keys"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKey}
        onPointerDown={(e) => {
          e.stopPropagation();
          startDrag(e.clientX);
        }}
        className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-mogra bg-marigold text-mogra shadow-[0_8px_20px_rgba(86,46,38,0.35)] transition-transform duration-base ease-keynu hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron"
        style={{ left: `${position}%` }}
      >
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 18 15 12 9 6" transform="translate(-6 0)" />
        </svg>
      </button>
    </div>
  );
}
