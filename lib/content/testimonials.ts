import { testimonials } from "@/lib/content-sources/local";
import type { Testimonial } from "./types";

export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort((a, b) => a.order - b.order);
}

export function getTestimonialsForTreatment(treatmentSlug: string): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.treatmentSlug === treatmentSlug);
}
