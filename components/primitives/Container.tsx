import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum content width.
   *  - `default` (1280px) — most marketing sections
   *  - `narrow` (768px)   — long-form copy, articles
   *  - `wide` (1440px)    — galleries, hero with edge-to-edge feel
   */
  width?: "default" | "narrow" | "wide";
}

const widthClassByVariant = {
  default: "max-w-[1280px]",
  narrow: "max-w-[768px]",
  wide: "max-w-[1600px]",
} as const;

/**
 * Horizontally-centered, padded content container.
 * Wraps every page section's children to maintain consistent gutters.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ width = "default", className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widthClassByVariant[width], className)}
      {...rest}
    >
      {children}
    </div>
  ),
);

Container.displayName = "Container";
