import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { DoctorCard } from "@/components/composites/DoctorCard";
import { getLeadDoctor } from "@/lib/content/doctors";
import Link from "next/link";

/**
 * Spotlight on the lead doctor (Dr. Sonia per brand guidelines).
 * Sits on the Sandalwood band to create vertical contrast against the
 * surrounding default-Mogra sections.
 */
export function DoctorIntroSection() {
  const leadDoctor = getLeadDoctor();
  if (!leadDoctor) return null;

  return (
    <Section tone="secondary">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn from="bottom">
              <span className="font-body text-micro uppercase tracking-widest text-walnut/60">
                + The face of Keynu
              </span>
              <Heading as="h2" size="h1" className="mt-4">
                A doctor you trust, before you trust the treatment.
              </Heading>
              <Text size="lg" className="mt-5 text-walnut/70">
                Every patient at Keynu is seen by a doctor first — never just a product. Our care is
                rooted in 30 years of family-led medical practice, not the latest aesthetic trend.
              </Text>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="primary">
                  <Link href="/doctors">Meet the team</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/story">Our story →</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn from="bottom" delay={0.1}>
              <DoctorCard
                doctor={leadDoctor}
                variant="hero"
                imageSrc="/images/doctors/dr-sonia.jpg"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
