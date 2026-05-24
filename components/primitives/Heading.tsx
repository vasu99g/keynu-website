import { createElement, forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic element rendered. Defaults to `h2`. */
  as?: HeadingLevel;
  /**
   * Visual size, decoupled from semantic level. A page can have one `h1`
   * styled `display` and several `h2`s styled `h2` — accessibility wins both
   * ways.
   */
  size?: HeadingSize;
}

const sizeClassByVariant: Record<HeadingSize, string> = {
  display:
    "font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight",
  h1: "font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight",
  h2: "font-heading text-[clamp(1.625rem,3vw,2.25rem)] leading-[1.15] tracking-tight",
  h3: "font-heading text-[clamp(1.375rem,2vw,1.75rem)] leading-tight",
  h4: "font-heading text-xl leading-snug md:text-2xl",
};

/**
 * Typographic heading primitive. Visual `size` is independent of semantic
 * `as` so designers can pick the right tag for the document outline without
 * being forced into a specific look.
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", size = "h2", className, children, ...rest }, ref) =>
    createElement(
      as,
      { ref, className: cn(sizeClassByVariant[size], className), ...rest },
      children,
    ),
);

Heading.displayName = "Heading";
