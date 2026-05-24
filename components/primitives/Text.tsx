import { createElement, forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TextSize = "lg" | "default" | "sm" | "micro";
type TextElement = "p" | "span" | "div";

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  /** Mute the color one step (72%) for secondary copy. */
  muted?: boolean;
}

const sizeClassByVariant: Record<TextSize, string> = {
  lg: "text-body-lg leading-relaxed",
  default: "text-body leading-relaxed",
  sm: "text-caption leading-normal",
  micro: "text-micro uppercase tracking-widest",
};

/**
 * Body-copy primitive. Pairs with `Heading` for consistent typography.
 * Use `size="micro"` for eyebrow labels above headings.
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", size = "default", muted, className, children, ...rest }, ref) =>
    createElement(
      as,
      {
        ref,
        className: cn(
          "font-body",
          sizeClassByVariant[size],
          muted && "text-walnut/70",
          className,
        ),
        ...rest,
      },
      children,
    ),
);

Text.displayName = "Text";
