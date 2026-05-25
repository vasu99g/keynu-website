import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import {
  getAllTreatments,
  getTreatmentBySlug,
  getTreatmentCategoryBySlug,
  getTreatmentsByCategory,
} from "@/lib/content/treatments";

interface PageProps {
  params: Promise<{ category: string; treatment: string }>;
}

export async function generateStaticParams() {
  return getAllTreatments().map((t) => ({
    category: t.categorySlug,
    treatment: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { treatment: slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment" };
  return {
    title: treatment.name,
    description: treatment.shortDescription,
  };
}

/**
 * /treatments/[category]/[treatment] — full detail page for a single
 * treatment. Hero with name + summary, an area-variants table (each row
 * shows area + sessions + duration), machine info, FAQ if present, and
 * a few related treatments from the same category.
 */
export default async function TreatmentPage({ params }: PageProps) {
  const { category: categorySlug, treatment: treatmentSlug } = await params;
  const treatment = getTreatmentBySlug(treatmentSlug);
  const category = getTreatmentCategoryBySlug(categorySlug);
  if (!treatment || !category || treatment.categorySlug !== category.slug) notFound();

  const related = getTreatmentsByCategory(category.slug)
    .filter((t) => t.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${category.name} · Treatment`}
        title={treatment.name}
        lead={treatment.shortDescription}
      />

      <Section spacing="default">
        <Container width="wide">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Area variants */}
            <div className="lg:col-span-8">
              <FadeIn from="bottom">
                <span className="font-body text-micro uppercase tracking-widest text-walnut/65">
                  Areas &amp; sessions
                </span>
                <Heading as="h2" size="h2" className="mt-3">
                  How this treatment runs.
                </Heading>
              </FadeIn>

              <div className="mt-8 overflow-hidden rounded-lg border border-walnut/12">
                <table className="w-full">
                  <thead className="bg-sandalwood/40">
                    <tr>
                      <th className="px-5 py-3 text-left font-body text-micro uppercase tracking-widest text-walnut/65">
                        Area
                      </th>
                      <th className="px-5 py-3 text-left font-body text-micro uppercase tracking-widest text-walnut/65">
                        Sessions
                      </th>
                      <th className="px-5 py-3 text-left font-body text-micro uppercase tracking-widest text-walnut/65">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-walnut/10 bg-mogra">
                    {treatment.areaVariants.map((variant) => (
                      <tr key={variant.area}>
                        <td className="px-5 py-4 font-body text-body text-walnut">{variant.area}</td>
                        <td className="px-5 py-4 font-body text-body text-walnut/85">
                          {variant.sessions}
                        </td>
                        <td className="px-5 py-4 font-body text-body text-walnut/85">
                          {typeof variant.durationMinutes === "number"
                            ? `${variant.durationMinutes} min`
                            : variant.durationMinutes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {treatment.faq && treatment.faq.length > 0 && (
                <div className="mt-12">
                  <Heading as="h2" size="h3">
                    Common questions
                  </Heading>
                  <dl className="mt-6 divide-y divide-walnut/12 border-y border-walnut/12">
                    {treatment.faq.map((q) => (
                      <div key={q.question} className="py-5">
                        <dt className="font-heading text-h4 text-walnut">{q.question}</dt>
                        <dd className="mt-2 font-body text-body leading-relaxed text-ink/85">
                          {q.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* Sidebar — machine, CTA, related */}
            <aside className="lg:col-span-4">
              <FadeIn from="bottom" delay={0.1}>
                <div className="rounded-xl border border-walnut/12 bg-sandalwood/30 p-6">
                  {treatment.machine && (
                    <>
                      <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                        Device
                      </p>
                      <p className="mt-1 font-heading text-h4 text-walnut">{treatment.machine}</p>
                      <hr className="my-5 border-walnut/12" />
                    </>
                  )}
                  <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                    Category
                  </p>
                  <Link
                    href={`/treatments/${category.slug}`}
                    className="mt-1 inline-block font-heading text-h4 text-walnut underline-offset-4 hover:underline"
                  >
                    {category.name}
                  </Link>

                  <div className="mt-6 space-y-3">
                    <Button asChild variant="primary" className="w-full justify-center">
                      <Link href="/book">Book this treatment</Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-center">
                      <Link href="/contact">Ask a question →</Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section spacing="default" tone="secondary">
          <Container width="wide">
            <div className="flex items-end justify-between gap-6">
              <Heading as="h2" size="h2">
                Other {category.name.toLowerCase()} treatments
              </Heading>
              <Link
                href={`/treatments/${category.slug}`}
                className="font-body text-sm text-walnut underline-offset-4 hover:underline"
              >
                See all →
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${category.slug}/${t.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-xl border border-walnut/12 bg-mogra p-5 transition-colors duration-base ease-keynu hover:border-walnut/30"
                  >
                    <h3 className="font-heading text-h4 text-walnut">{t.name}</h3>
                    <p className="font-body text-caption text-ink/80">{t.shortDescription}</p>
                    <span className="mt-auto font-body text-micro uppercase tracking-widest text-walnut/55">
                      Read →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <PageCTA />
    </>
  );
}
