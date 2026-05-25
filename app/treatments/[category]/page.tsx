import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import {
  getAllTreatmentCategories,
  getTreatmentCategoryBySlug,
  getTreatmentsByCategory,
} from "@/lib/content/treatments";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllTreatmentCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getTreatmentCategoryBySlug(slug);
  if (!category) return { title: "Treatments" };
  return {
    title: category.name,
    description: category.summary,
  };
}

/**
 * /treatments/[category] — every treatment inside one category.
 */
export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getTreatmentCategoryBySlug(slug);
  if (!category) notFound();

  const treatments = getTreatmentsByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow={
          <>
            <Link href="/treatments" className="underline-offset-4 hover:underline">
              Treatments
            </Link>{" "}
            · {String(category.order).padStart(2, "0")} / 11
          </>
        }
        title={category.name}
        lead={category.summary}
        meta={`${treatments.length} treatment${treatments.length === 1 ? "" : "s"}`}
      />

      <Section spacing="loose">
        <Container width="wide">
          <ul className="divide-y divide-walnut/12 border-y border-walnut/12">
            {treatments.map((treatment, index) => (
              <FadeIn key={treatment.slug} from="bottom" delay={index * 0.04}>
                <li>
                  <Link
                    href={`/treatments/${category.slug}/${treatment.slug}`}
                    className="group grid items-start gap-6 py-8 transition-colors duration-base ease-keynu hover:bg-sandalwood/30 md:grid-cols-[3rem_1fr_auto] md:gap-8 md:py-10"
                  >
                    <span className="font-body text-micro uppercase tracking-widest text-walnut/55 md:pt-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="md:max-w-2xl">
                      <h2 className="font-heading text-h3 leading-tight tracking-tight text-walnut">
                        {treatment.name}
                      </h2>
                      <p className="mt-3 font-body text-body-lg leading-relaxed text-ink/85">
                        {treatment.shortDescription}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 font-body text-caption text-walnut/65">
                        {treatment.machine && <span>Device: {treatment.machine}</span>}
                        <span>
                          {treatment.areaVariants.length} area
                          {treatment.areaVariants.length === 1 ? "" : "s"}
                        </span>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="hidden h-12 w-12 items-center justify-center self-start rounded-full border border-walnut/15 text-walnut transition-colors duration-base ease-keynu group-hover:border-walnut group-hover:bg-walnut group-hover:text-mogra md:flex"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCTA />
    </>
  );
}
