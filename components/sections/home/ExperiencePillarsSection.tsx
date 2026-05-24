import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { getExperiencePillars } from "@/lib/content/experience";

/**
 * The five-pillar patient journey from the brand guidelines.
 * Rendered as a numbered, two-column reveal on desktop, single-column on mobile.
 */
export function ExperiencePillarsSection() {
  const pillars = getExperiencePillars();

  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <FadeIn from="bottom" distance={12}>
            <span className="font-body text-micro uppercase tracking-widest text-walnut/60">
              + The experience
            </span>
            <Heading as="h2" size="h1" className="mt-4">
              Every visit, considered a ritual.
            </Heading>
            <Text size="lg" className="mt-5 text-walnut/70">
              From the moment you step in to the WhatsApp check-in the week after, five quiet
              principles shape every appointment.
            </Text>
          </FadeIn>
        </div>

        <ol className="mt-14 grid gap-x-12 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-y-16">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.number} from="bottom" delay={index * 0.07}>
              <li className="relative flex gap-6 border-l border-walnut/15 pl-6">
                <div>
                  <span className="font-heading text-3xl italic text-saffron">{pillar.number}</span>
                  <h3 className="mt-3 font-heading text-h3 tracking-tight text-walnut">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body text-body text-walnut/70">{pillar.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
