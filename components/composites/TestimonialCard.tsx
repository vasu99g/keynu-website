import type { Testimonial } from "@/lib/content/types";
import { cn } from "@/lib/utils/cn";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Single testimonial card — quote-led, with patient initials. Designed to
 * sit in a 3-column responsive grid on desktop and a 1-column on mobile.
 *
 * Quotes appear in heading font for warmth; attribution stays in body.
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between gap-8 rounded-3xl border border-walnut/10 bg-mogra p-6 md:p-8",
        className,
      )}
    >
      <blockquote className="font-heading text-h4 leading-snug text-walnut">
        <span aria-hidden="true" className="mb-3 block text-3xl leading-none text-saffron">
          “
        </span>
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-sandalwood/60 font-body text-sm tracking-wide text-walnut"
        >
          {testimonial.patientName
            .split(/[\s.]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </span>
        <div>
          <p className="font-body text-sm font-medium tracking-tight text-walnut">
            {testimonial.patientName}
          </p>
          <p className="font-body text-caption text-walnut/60">Verified patient</p>
        </div>
      </figcaption>
    </figure>
  );
}
