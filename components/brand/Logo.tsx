import { cn } from "@/lib/utils/cn";

type LogoVariant = "wordmark" | "emblem" | "lockup";
type LogoSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface LogoProps {
  /**
   * Which derivative of the brand mark to render.
   *  - `wordmark` — KEYNU letters only (best for headers, primary nav)
   *  - `emblem`   — the oval kinu mark alone (a recurring decorative motif)
   *  - `lockup`   — emblem stacked above KEYNU (best for footers, splash)
   */
  variant?: LogoVariant;
  size?: LogoSize;
  label?: string;
  className?: string;
}

const sizeClass: Record<LogoSize, string> = {
  sm: "h-6",
  md: "h-10",
  lg: "h-14",
  xl: "h-20",
  "2xl": "h-28",
};

// Source SVG viewBoxes — keep in sync with .scratch/split-logo.mjs
const aspectClass: Record<LogoVariant, string> = {
  wordmark: "aspect-[445/95]",
  emblem: "aspect-[200/235]",
  lockup: "aspect-[460/360]",
};

const fileByVariant: Record<LogoVariant, string> = {
  wordmark: "/brand/keynu-wordmark.svg",
  emblem: "/brand/keynu-emblem.svg",
  lockup: "/brand/keynu-lockup.svg",
};

/**
 * Renders the Keynu brand mark in one of three derivatives.
 *
 * Color follows `currentColor` via CSS mask-image — so on Mogra surfaces the
 * mark paints in Walnut, on Forest surfaces it paints in Mogra, with no asset
 * swap or runtime config required.
 */
export function Logo({ variant = "wordmark", size = "md", label = "Keynu", className }: LogoProps) {
  const file = fileByVariant[variant];
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        WebkitMaskImage: `url('${file}')`,
        maskImage: `url('${file}')`,
      }}
      className={cn(
        "inline-block shrink-0 bg-current",
        "[mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
        "[-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]",
        aspectClass[variant],
        sizeClass[size],
        className,
      )}
    />
  );
}
