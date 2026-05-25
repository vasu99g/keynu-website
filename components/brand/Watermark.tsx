import { cn } from "@/lib/utils/cn";

type WatermarkSymbol =
  | "lotus"
  | "hibiscus"
  | "mountain"
  | "swan"
  | "dove"
  | "tree"
  | "emblem"; // the kinu emblem itself

type WatermarkPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

interface WatermarkProps {
  /**
   * Which decorative motif to render. Six Hindu / Indian mythological symbols
   * (lotus, hibiscus, mountain, swan, dove, tree) borrowed from the brand
   * design refresh, plus the kinu emblem.
   */
  symbol: WatermarkSymbol;
  /** Where to anchor the watermark inside its positioned parent. */
  position?: WatermarkPosition;
  /** Pixel size of the longest edge. Default 320. */
  size?: number;
  /** Opacity 0–1. Defaults read as a true "watermark" (15%). */
  opacity?: number;
  /**
   * Rotation in degrees. Adds character — try 8–18° for organic placement.
   */
  rotation?: number;
  /**
   * Tone the watermark adopts.
   *  - `default` keeps the asset's native warm tone
   *  - `dark` shifts toward Walnut (use on light surfaces)
   *  - `light` shifts toward Mogra (use on Forest / Madder bands)
   */
  tone?: "default" | "dark" | "light";
}

const fileByVariant: Record<WatermarkSymbol, string> = {
  lotus: "/brand/symbols/lotus.png",
  hibiscus: "/brand/symbols/hibiscus.png",
  mountain: "/brand/symbols/mountain.png",
  swan: "/brand/symbols/swan.png",
  dove: "/brand/symbols/dove.png",
  tree: "/brand/symbols/tree.png",
  emblem: "/brand/keynu-emblem.svg",
};

const positionClass: Record<WatermarkPosition, string> = {
  "top-left": "left-[-4%] top-[-6%]",
  "top-right": "right-[-4%] top-[-6%]",
  "bottom-left": "bottom-[-6%] left-[-4%]",
  "bottom-right": "bottom-[-6%] right-[-4%]",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

const toneFilter: Record<NonNullable<WatermarkProps["tone"]>, string> = {
  default: "",
  dark: "[filter:sepia(0.3)_saturate(2)_hue-rotate(345deg)_brightness(0.55)]",
  light: "[filter:brightness(2.4)_invert(0.85)_sepia(0.15)]",
};

/**
 * Decorative section-background watermark.
 *
 * Renders an Indian motif or the kinu emblem at low opacity in a section's
 * corner, signing the section the way a printer's ornament would. Always
 * `aria-hidden` and pointer-events-none — purely cosmetic.
 *
 * Place inside a section that has `position: relative` + `overflow: hidden`
 * so the watermark doesn't bleed into neighbouring content.
 */
export function Watermark({
  symbol,
  position = "top-right",
  size = 320,
  opacity = 0.15,
  rotation = 0,
  tone = "default",
}: WatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-0 block select-none",
        positionClass[position],
      )}
      style={{
        width: size,
        height: size,
        opacity,
        transform:
          position === "center"
            ? `translate(-50%, -50%) rotate(${rotation}deg)`
            : `rotate(${rotation}deg)`,
      }}
    >
      {/* Plain <img>: these are static decorative assets — Next/Image's
          optimization pipeline isn't worth the overhead for backgrounds. */}
      <img
        src={fileByVariant[symbol]}
        alt=""
        width={size}
        height={size}
        className={cn("h-full w-full object-contain", toneFilter[tone])}
      />
    </span>
  );
}
