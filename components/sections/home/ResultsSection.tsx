"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { BeforeAfterSlider } from "@/components/composites/BeforeAfterSlider";
import { results } from "@/lib/content-sources/local";
import { cn } from "@/lib/utils/cn";

/**
 * Real-client results — a before/after slider with thumbnail navigation.
 *
 * One active result at a time. Visitor drags the handle to reveal more
 * of the "after" image. Below the slider: a thumbnail row + prev/next
 * arrows + counter. Placeholder photos in `data/results.ts` should be
 * swapped for real consented patient pairs via the CMS once available.
 */
export function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = results[activeIndex] ?? results[0];
  if (!active) return null;

  const step = (delta: -1 | 1) => {
    setActiveIndex((idx) => {
      const next = idx + delta;
      if (next < 0) return results.length - 1;
      if (next >= results.length) return 0;
      return next;
    });
  };

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
              Real patients, real timelines. Drag the handle to compare the
              before and after of each plan. Every image is consented and
              clinically representative — never airbrushed.
            </Text>
          </FadeIn>
        </div>

        <div className="mt-14 grid items-center gap-10 md:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Slider */}
          <div className="lg:col-span-7">
            <FadeIn from="bottom" delay={0.1}>
              <BeforeAfterSlider
                key={active.id}
                beforeSrc={active.beforeSrc}
                afterSrc={active.afterSrc}
                beforeAlt={active.beforeAlt}
                afterAlt={active.afterAlt}
              />
            </FadeIn>
          </div>

          {/* Active result details */}
          <div className="lg:col-span-5">
            <FadeIn from="bottom" delay={0.15}>
              <p className="font-body text-micro uppercase tracking-widest text-walnut/65">
                Programme {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(results.length).padStart(2, "0")}
              </p>
              <Heading as="h3" size="h2" className="mt-3">
                {active.treatment}
              </Heading>
              <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-walnut/12 bg-mogra/40 p-5">
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

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous result"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-walnut/20 text-walnut transition-colors duration-base ease-keynu hover:border-walnut hover:bg-walnut/5"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next result"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-walnut/20 text-walnut transition-colors duration-base ease-keynu hover:border-walnut hover:bg-walnut/5"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="ml-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                  Use arrows or click thumbnails below
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Thumbnail strip */}
        <FadeIn from="bottom" delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
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
      </Container>
    </Section>
  );
}
