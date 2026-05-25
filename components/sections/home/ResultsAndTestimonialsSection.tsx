"use client";

import { useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { BeforeAfterSlider } from "@/components/composites/BeforeAfterSlider";
import { TestimonialCard } from "@/components/composites/TestimonialCard";
import { results } from "@/lib/content-sources/local";
import { getAllTestimonials } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils/cn";

/**
 * Results + Testimonials, combined into one section.
 *
 * Top: a wide horizontal-frame before/after slider with the active result's
 * details overlaid below it. Programme chips sit below the slider for
 * navigation. Bottom: a row of patient testimonials so visual proof and
 * voice-of-customer land in the same beat.
 */
export function ResultsAndTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getAllTestimonials().slice(0, 3);
  const active = results[activeIndex] ?? results[0];
  if (!active) return null;

  return (
    <Section spacing="loose" id="results">
      <Watermark
        symbol="lotus"
        position="bottom-left"
        size={360}
        opacity={0.08}
        rotation={10}
        tone="dark"
      />
      <Container width="wide">
        {/* Section header */}
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <FadeIn from="bottom">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              Results · Real clients
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Slide to see.
            </Heading>
          </FadeIn>
          <FadeIn from="bottom" delay={0.1}>
            <Text size="lg" className="text-ink/85">
              Drag the handle to compare the before and after of each plan.
              Every image is consented and clinically representative — never
              airbrushed.
            </Text>
          </FadeIn>
        </div>

        {/* Wide horizontal slider */}
        <FadeIn from="bottom" delay={0.15}>
          <div className="mt-12 md:mt-16">
            <BeforeAfterSlider
              key={active.id}
              beforeSrc={active.beforeSrc}
              afterSrc={active.afterSrc}
              beforeAlt={active.beforeAlt}
              afterAlt={active.afterAlt}
              aspectRatio="16/9"
            />
          </div>
        </FadeIn>

        {/* Active result details */}
        <FadeIn from="bottom" delay={0.2}>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div>
              <p className="font-body text-micro uppercase tracking-widest text-walnut/65">
                Programme {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(results.length).padStart(2, "0")}
              </p>
              <Heading as="h3" size="h3" className="mt-2">
                {active.treatment}
              </Heading>
            </div>
            <dl className="flex gap-6 rounded-lg border border-walnut/12 bg-mogra/40 px-5 py-4">
              <div>
                <dt className="font-body text-micro uppercase tracking-widest text-walnut/60">
                  Timeframe
                </dt>
                <dd className="mt-1 font-heading text-h4 leading-none text-walnut">
                  {active.timeframe}
                </dd>
              </div>
              <div>
                <dt className="font-body text-micro uppercase tracking-widest text-walnut/60">
                  Patient
                </dt>
                <dd className="mt-1 font-heading text-h4 leading-none text-walnut">
                  {active.patient}
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        {/* Programme chips below the slider */}
        <FadeIn from="bottom" delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {results.map((r, idx) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show result: ${r.treatment}`}
                aria-pressed={idx === activeIndex}
                className={cn(
                  "rounded-full border px-4 py-2 font-body text-caption tracking-tight transition-colors duration-base ease-keynu",
                  idx === activeIndex
                    ? "border-marigold bg-marigold text-mogra"
                    : "border-walnut/20 bg-mogra text-walnut hover:border-walnut/50",
                )}
              >
                {r.treatment}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials row */}
        <div className="mt-20 md:mt-28">
          <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
            <FadeIn from="bottom">
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                In their words
              </span>
              <Heading as="h2" size="h2" className="mt-4">
                Patients who came once, and stayed.
              </Heading>
            </FadeIn>
            <FadeIn from="bottom" delay={0.1}>
              <Text size="default" className="text-ink/75">
                4.9 on Google · 1,800+ reviews.
              </Text>
            </FadeIn>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} from="bottom" delay={index * 0.08}>
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
