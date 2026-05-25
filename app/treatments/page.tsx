import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import {
  getAllTreatmentCategories,
  getTreatmentsByCategory,
} from "@/lib/content/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "All Keynu treatments across 11 categories — injectables, lasers, hair regrowth, body contouring, IV wellness and more. Calibrated for South Asian skin.",
};

/**
 * /treatments — index of every category we offer. Cards link to
 * /treatments/[category] which then lists the treatments inside.
 */
export default function TreatmentsIndex() {
  const categories = getAllTreatmentCategories();
  const totalTreatments = categories.reduce(
    (sum, c) => sum + getTreatmentsByCategory(c.slug).length,
    0,
  );

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Every treatment, by __HL__."
        highlight="category"
        lead="Doctor-led, written estimates upfront, calibrated for South Asian skin. We don't run a treatment without a consultation first."
        meta={`${totalTreatments} treatments · ${categories.length} categories`}
      />

      <Section spacing="loose">
        <Container width="wide">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const count = getTreatmentsByCategory(category.slug).length;
              return (
                <FadeIn key={category.slug} from="bottom" delay={index * 0.04}>
                  <li>
                    <Link
                      href={`/treatments/${category.slug}`}
                      className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-xl border border-walnut/12 bg-mogra p-6 transition-all duration-base ease-keynu hover:-translate-y-0.5 hover:border-walnut/35 hover:shadow-[0_24px_60px_-30px_rgba(86,46,38,0.35)] md:p-7"
                    >
                      <div>
                        <span className="font-body text-micro uppercase tracking-widest text-walnut/55">
                          {count} treatment{count === 1 ? "" : "s"}
                        </span>
                        <h2 className="mt-3 font-heading text-h3 leading-tight tracking-tight text-walnut">
                          {category.name}
                        </h2>
                        <p className="mt-3 font-body text-body leading-relaxed text-ink/80">
                          {category.summary}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm font-medium tracking-tight text-walnut">
                          Explore
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-walnut/15 text-walnut transition-colors duration-base ease-keynu group-hover:border-walnut group-hover:bg-walnut group-hover:text-mogra"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </Container>
      </Section>

      <PageCTA
        title="Not sure where to start?"
        lead="Use the concern dial on the homepage to map what's bothering you to a recommended plan — or just book a consultation."
      />
    </>
  );
}
