import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { TreatmentCategoryCard } from "@/components/composites/TreatmentCategoryCard";
import { getAllTreatmentCategories, getTreatmentsByCategory } from "@/lib/content/treatments";

/**
 * Home page treatments grid — all 11 categories shown as cards with a stagger
 * reveal. Doubles as the gateway into the deeper /treatments hierarchy.
 */
export function TreatmentCategoriesSection() {
  const categories = getAllTreatmentCategories();

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <FadeIn from="bottom" distance={12}>
              <span className="font-body text-micro uppercase tracking-widest text-walnut/60">
                + What we do
              </span>
              <Heading as="h2" size="h1" className="mt-4">
                Care that meets you exactly where you are.
              </Heading>
            </FadeIn>
            <FadeIn from="bottom" delay={0.1}>
              <Text size="lg" className="mt-5 text-walnut/70">
                From doctor-led injectables and laser to deeper concerns like hair loss and skin
                resurfacing — every treatment we offer is chosen for results we can stand behind.
              </Text>
            </FadeIn>
          </div>
          <FadeIn from="bottom" delay={0.15}>
            <Link
              href="/treatments"
              className="font-body text-sm font-medium tracking-tight text-walnut underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              View all 37 treatments →
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {categories.map((category, index) => (
            <FadeIn key={category.slug} from="bottom" delay={index * 0.05}>
              <TreatmentCategoryCard
                category={category}
                treatmentCount={getTreatmentsByCategory(category.slug).length}
                tone={index % 2 === 0 ? "default" : "muted"}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
