import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { getAllPillars } from "@/lib/content/pillars";
import type { Pillar } from "@/lib/content/types";

/**
 * The five disciplines — Face, Skin, Hair, Body, Smile.
 *
 * Each card hovers into a unique brand gradient (Face → marigold, Skin →
 * saffron, Hair → walnut, Body → forest, Smile → madder). The colors live
 * in `app/globals.css` under `.pillar-card[data-tone=...]:hover` because
 * Tailwind's JIT can't pick up classes built from a dynamic key.
 *
 * Sits as the second visible section directly after the hero + scrolling
 * banner so visitors meet the brand's scope before its story.
 */
export function PillarsSection() {
  const pillars = getAllPillars();

  return (
    <Section spacing="loose">
      <Watermark symbol="tree" position="bottom-left" size={400} opacity={0.1} rotation={6} tone="dark" />
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn from="bottom">
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                What we do · Five disciplines
              </span>
              <Heading as="h2" size="h1" className="mt-5">
                A complete{" "}
                <em className="font-heading italic text-marigold">practice</em>
                , under one warm roof.
              </Heading>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn from="bottom" delay={0.1}>
              <Text size="lg" className="text-ink/85">
                Five disciplines, one coordinated plan. So you don&apos;t end up running between clinics.
              </Text>
            </FadeIn>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-4">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.id} from="bottom" delay={index * 0.06}>
              <PillarCard pillar={pillar} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Link
      href={pillar.href}
      data-tone={pillar.hoverTone}
      aria-label={`See our ${pillar.name} treatments`}
      className="pillar-card group relative flex aspect-[3/4] flex-col overflow-hidden rounded-xl border border-walnut/10 bg-mogra p-5 text-walnut md:p-6"
    >
      {/* Image sits faintly behind type in default state; the hover
          gradient overlays it once color takes over. */}
      <Image
        src={pillar.imageSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0 lg:opacity-[0.18]"
      />

      {/* Top row — number + arrow */}
      <div className="relative flex items-start justify-between">
        <span className="font-body text-micro uppercase tracking-widest opacity-70">
          {pillar.number} / 05
        </span>
        <ArrowUpRight
          className="h-4 w-4 opacity-50 transition-opacity duration-base group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* Bottom row pinned to card bottom via mt-auto. Blurb uses
          line-clamp + min-height so every card's title sits at the same
          vertical position regardless of blurb length. Children use
          text-current so the hover color cascade reaches them. */}
      <div className="relative mt-auto">
        <h3 className="font-heading text-h3 uppercase leading-none tracking-tight text-current">
          {pillar.name}
        </h3>
        <p className="mt-3 line-clamp-2 min-h-[2.75rem] font-body text-caption leading-relaxed text-current opacity-85">
          {pillar.blurb}
        </p>
      </div>
    </Link>
  );
}
