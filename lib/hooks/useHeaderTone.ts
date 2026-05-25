"use client";

import { useEffect, useState } from "react";

export type HeaderTone = "light" | "dark";

/**
 * Observes elements that have opted in to changing the site header's tone
 * via `data-header-tone="dark"`. When any of them intersects the very top
 * of the viewport (i.e. they're sitting under the sticky header), this
 * returns `"dark"`; otherwise `"light"`.
 *
 * Use this in the SiteHeader to swap its background, text, and border
 * treatments so it stays legible above any tonal section beneath it.
 */
export function useHeaderTone(): HeaderTone {
  const [tone, setTone] = useState<HeaderTone>("light");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-header-tone="dark"]');
    if (elements.length === 0) return;

    // Track each element's intersection state independently so the tone
    // remains "dark" while ANY dark section overlaps the header zone.
    const intersectingMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap.set(entry.target, entry.isIntersecting);
        });
        const anyDark = Array.from(intersectingMap.values()).some(Boolean);
        setTone(anyDark ? "dark" : "light");
      },
      {
        // Only consider intersection within the top header strip (~96px tall).
        // The bottom margin of -100% + 96px collapses the intersection zone
        // to that thin band.
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      },
    );

    // Workaround: rootMargin "-100%" collapses the area to a line. We use
    // a positive top + negative bottom rootMargin to make it a strip.
    // Recreate with explicit strip.
    observer.disconnect();
    const stripObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap.set(entry.target, entry.isIntersecting);
        });
        const anyDark = Array.from(intersectingMap.values()).some(Boolean);
        setTone(anyDark ? "dark" : "light");
      },
      {
        // Intersection zone = top 96px of the viewport. The header sits here.
        rootMargin: `0px 0px ${-(typeof window === "undefined" ? 800 : window.innerHeight - 96)}px 0px`,
        threshold: 0,
      },
    );

    elements.forEach((element) => stripObserver.observe(element));
    return () => stripObserver.disconnect();
  }, []);

  return tone;
}
