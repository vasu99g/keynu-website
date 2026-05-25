import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { getAllDoctors } from "@/lib/content/doctors";

export const metadata: Metadata = {
  title: "Our doctors",
  description:
    "Dr. Sonia Gupta leads Keynu's medical direction with a team of dermatologists. Kavya Gupta runs operations.",
};

/**
 * /doctors — leadership + clinical team. Image placeholders for the
 * additional dermatologists; user will swap real portraits via Sanity.
 */
export default function DoctorsPage() {
  const team = getAllDoctors();

  return (
    <>
      <PageHero
        eyebrow="The team"
        title="A doctor you trust, before you trust the __HL__."
        highlight="treatment"
        lead="Every patient at Keynu sees a doctor first — never just a product. Below is who you will meet."
      />

      <Section spacing="default">
        <Container width="wide">
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {team.map((doctor, index) => (
              <FadeIn key={doctor.slug} from="bottom" delay={index * 0.08}>
                <li className="flex flex-col gap-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sandalwood shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]">
                    {doctor.slug === "sonia-gupta" ? (
                      <Image
                        src="/images/doctors/dr-sonia.jpg"
                        alt={`Portrait of ${doctor.name}`}
                        fill
                        sizes="(min-width: 768px) 600px, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-sandalwood">
                        <span className="font-heading text-display text-walnut/30">
                          {doctor.name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="font-body text-micro uppercase tracking-widest text-walnut/55">
                      {doctor.role}
                    </span>
                    <h2 className="mt-2 font-heading text-h3 uppercase tracking-wide text-walnut">
                      {doctor.name}
                    </h2>
                    <p className="mt-3 font-body text-body leading-relaxed text-ink/85">
                      {doctor.bio}
                    </p>
                    {doctor.qualifications.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {doctor.qualifications.map((q) => (
                          <li
                            key={q}
                            className="rounded-full border border-walnut/15 px-3 py-1 font-body text-caption text-walnut/75"
                          >
                            {q}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="default" tone="secondary">
        <Container width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              The wider team
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Our consulting dermatologists.
            </Heading>
            <Text size="lg" className="mt-5 text-ink/85">
              Keynu works with a panel of board-certified dermatologists who consult, supervise protocols, and review every plan. Profiles being added — message us if you want to know who would be looking after your visit.
            </Text>
          </div>
        </Container>
      </Section>

      <PageCTA />
    </>
  );
}
