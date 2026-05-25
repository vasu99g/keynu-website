"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useBackgroundAudio } from "./BackgroundAudio";
import { cn } from "@/lib/utils/cn";

interface AudioToggleProps {
  className?: string;
}

/**
 * Header-mounted toggle for the ambient background loop.
 *
 * Visual states:
 *  - Off (default)  → muted icon, faint pulse hint
 *  - On             → unmuted icon, soft glow ring in saffron
 *
 * Accessibility: full keyboard support, descriptive aria-label that
 * changes with state, focus ring uses the brand saffron.
 */
export function AudioToggle({ className }: AudioToggleProps) {
  const { isPlaying, toggle } = useBackgroundAudio();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Mute ambient tampura drone" : "Play ambient tampura drone"}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-current transition-all duration-base ease-keynu",
        "hover:border-current/50 hover:bg-current/5",
        isPlaying && "bg-current/5 ring-2 ring-saffron/40",
        className,
      )}
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      ) : (
        <VolumeX className="h-4 w-4 opacity-70" aria-hidden="true" />
      )}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full bg-saffron/0 transition-colors duration-slow",
          isPlaying && "animate-pulse bg-saffron/10",
        )}
      />
    </button>
  );
}
