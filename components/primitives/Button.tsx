"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * When true, the component renders its child as the underlying element
   * (via Radix Slot), allowing semantic anchors / Next.js Links to inherit
   * button styles without nesting <a> in <button>.
   */
  asChild?: boolean;
}

const baseClass =
  "inline-flex items-center justify-center gap-2 font-body font-medium tracking-tight transition-colors duration-base ease-keynu focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-walnut text-mogra hover:bg-walnut/90",
  secondary: "bg-saffron text-walnut hover:bg-saffron/90",
  ghost: "bg-transparent text-walnut hover:bg-walnut/5",
  link: "bg-transparent text-walnut underline-offset-4 hover:underline px-0 py-0",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 rounded-full px-4 text-sm",
  default: "h-11 rounded-full px-6 text-base",
  lg: "h-13 rounded-full px-8 text-base md:h-14 md:text-lg",
};

/**
 * Pill-shaped button primitive — the brand's primary call-to-action element.
 * Pair with `asChild` to render as a Next.js Link without losing semantics.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(baseClass, variantClass[variant], variant !== "link" && sizeClass[size], className)}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";
