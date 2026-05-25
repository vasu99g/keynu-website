"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface VideoTileProps {
  /** Public path to the MP4 (e.g. /videos/hero-reel.mp4). */
  src: string;
  /** Public path to the poster JPG shown before the video plays. */
  poster: string;
  /** Accessible alt text for the visual context. */
  alt: string;
  /** Optional className for outer container. */
  className?: string;
  /** If true, the video loops continuously. Default true. */
  loop?: boolean;
  /** If true, plays inline silently on first paint. Default true. */
  autoplay?: boolean;
}

/**
 * Self-contained autoplay-muted-loop video tile with an `IntersectionObserver`
 * pause/resume to keep off-screen videos from burning CPU. Falls back to the
 * poster image when the user prefers reduced motion or autoplay is denied.
 *
 * Renders the poster image as an immediate visual stand-in so there's never
 * an empty black box during video load.
 */
export function VideoTile({
  src,
  poster,
  alt,
  className,
  loop = true,
  autoplay = true,
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Pause when scrolled out of view, resume when back in — CPU-friendly.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoplay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked — leave the poster visible.
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoplay]);

  // Respect prefers-reduced-motion: never auto-start the video.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-sandalwood/30", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop={loop}
        playsInline
        preload="metadata"
        aria-label={alt}
        onCanPlay={() => setIsReady(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-slow ease-keynu",
          isReady ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Poster shown until the video is ready to avoid a black frame */}
      {!isReady && (
        <img
          src={poster}
          alt={alt}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
