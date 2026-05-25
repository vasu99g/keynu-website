import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { TestimonialCard } from "@/components/composites/TestimonialCard";
import { getAllTestimonials } from "@/lib/content/testimonials";

/**
 * Patient testimonials — three-up grid on desktop, single-column on mobile.
 * Pulled from the testimonials content source and trimmed to the first
 * three.
 */
export function TestimonialsSection() {
  const testimonials = getAllTestimonials().slice(0, 3);

  return (
    <Section tone="secondary" spacing="loose">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-xl">
            <FadeIn from="bottom" distance={12}>
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                In their words
              </span>
              <Heading as="h2" size="h1" className="mt-5">
                Patients who came once, and stayed.
              </Heading>
              <Text size="default" className="mt-4 text-ink/75">
                4.9 on Google · 1,800+ reviews.
              </Text>
            </FadeIn>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} from="bottom" delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
