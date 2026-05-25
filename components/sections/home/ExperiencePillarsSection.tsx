import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { getExperiencePillars } from "@/lib/content/experience";

/**
 * Five-step patient journey — Welcome → Small things. Plain-spoken, no
 * luxury-brand glossary. Each step gets a saffron-italic number and a
 * short, human paragraph.
 */
export function ExperiencePillarsSection() {
  const pillars = getExperiencePillars();

  return (
    <Section spacing="loose">
      <Watermark symbol="swan" position="bottom-right" size={360} opacity={0.1} rotation={-10} tone="dark" />
      <Container>
        <div className="max-w-2xl">
          <FadeIn from="bottom" distance={12}>
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              What a visit feels like
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Five small things, every time.
            </Heading>
            <Text size="lg" className="mt-5 text-ink/85">
              From the door to the WhatsApp check-in the week after, this is
              what we&apos;ve worked out for every appointment.
            </Text>
          </FadeIn>
        </div>

        <ol className="mt-14 grid gap-x-12 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-y-16">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.number} from="bottom" delay={index * 0.07}>
              <li className="relative flex gap-6 border-l border-walnut/15 pl-6">
                <div>
                  <span className="font-heading text-3xl italic text-saffron">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-heading text-h3 tracking-tight text-walnut">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body text-body text-ink/85">
                    {pillar.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
