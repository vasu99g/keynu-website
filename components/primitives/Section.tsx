import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Vertical rhythm preset. Most sections use `default`; use `tight` for
   * stacked sections that need to read as one group, or `loose` for hero /
   * landmark sections that deserve breathing room.
   */
  spacing?: "tight" | "default" | "loose" | "none";
  /**
   * Surface tone. Defaults to the page canvas (Mogra). Use `secondary` for
   * alternating bands (Sandalwood) or `accent` for high-contrast bands
   * (Forest with light type).
   */
  tone?: "canvas" | "secondary" | "accent";
}

const spacingClassByVariant = {
  tight: "py-12 md:py-16",
  default: "py-16 md:py-24",
  loose: "py-24 md:py-32",
  none: "py-0",
} as const;

const toneClassByVariant = {
  canvas: "bg-mogra text-walnut",
  secondary: "bg-sandalwood text-walnut",
  accent: "bg-forest text-mogra",
} as const;

/**
 * Page-level section wrapper providing consistent vertical rhythm and
 * tonal surfaces. Always wraps children in semantic <section>.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ spacing = "default", tone = "canvas", className, children, ...rest }, ref) => (
    <section
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden",
        spacingClassByVariant[spacing],
        toneClassByVariant[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  ),
);

Section.displayName = "Section";
