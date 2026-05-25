"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { faqs } from "@/lib/content-sources/local";
import { cn } from "@/lib/utils/cn";

/**
 * Frequently asked questions — accordion list.
 *
 * Each item is a `<button>` that expands its answer; only one can be open
 * at a time so the section stays compact. Plain-spoken Q + A, no marketing
 * boilerplate. Plus the WhatsApp escape hatch at the bottom for anything
 * else.
 */
export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section spacing="loose" id="faq">
      <Watermark
        symbol="mountain"
        position="top-right"
        size={360}
        opacity={0.08}
        rotation={-8}
        tone="dark"
      />
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <FadeIn from="bottom">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              Frequently asked
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              The things people ask before they walk in.
            </Heading>
          </FadeIn>
          <FadeIn from="bottom" delay={0.1}>
            <Text size="lg" className="text-ink/85">
              Quick, honest answers. If something is missing, our front desk
              is on WhatsApp — usually within ten minutes during clinic hours.
            </Text>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-16">
          <ul className="divide-y divide-walnut/12 border-y border-walnut/12">
            {faqs.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-base ease-keynu hover:bg-sandalwood/30 md:py-6"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-body text-micro uppercase tracking-widest text-walnut/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-h4 leading-snug tracking-tight text-walnut md:text-h3">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-walnut/55 transition-transform duration-base ease-keynu",
                        isOpen && "rotate-180 text-marigold",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-base ease-keynu",
                      isOpen ? "grid-rows-[1fr] pb-6 md:pb-8" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pl-12 font-body text-body-lg leading-relaxed text-ink/85">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
