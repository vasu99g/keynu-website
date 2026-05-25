import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { AutoCarousel } from "@/components/composites/AutoCarousel";
import { getAllDoctors } from "@/lib/content/doctors";

/**
 * Story + Founders, condensed into one spread.
 *
 * Single sandalwood band: left column tells the kinnow origin in two
 * tight paragraphs and surfaces both founders as inline badges; right
 * column auto-rotates through four brand photos.
 *
 * Founder is Dr. Sonia + Kavya Gupta (CEO).
 */
export function StoryAndFoundersSection() {
  const doctors = getAllDoctors();
  const sonia = doctors.find((d) => d.slug === "sonia-gupta");
  const kavya = doctors.find((d) => d.slug === "kavya-gupta");

  const slides = [
    {
      src: "/images/bento/reception-detail.jpg",
      alt: "The Keynu reception — warm wood, golden light",
    },
    {
      src: "/images/doctors/dr-sonia.jpg",
      alt: "Dr. Sonia Gupta, co-founder and medical director",
    },
    {
      src: "/images/bento/kinu-partition.jpg",
      alt: "A patient in front of the etched kinu motif partition",
    },
    {
      src: "/images/bento/consult-room.jpg",
      alt: "An unhurried consultation moment in the clinic",
    },
  ];

  return (
    <Section tone="secondary" spacing="loose" id="story">
      <Watermark
        symbol="hibiscus"
        position="top-right"
        size={420}
        opacity={0.12}
        rotation={-12}
        tone="dark"
      />
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-7">
            <FadeIn from="bottom" distance={12}>
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                Our story · The face of Keynu
              </span>
              <Heading as="h2" size="h1" className="mt-5">
                Named after the{" "}
                <em className="font-editorial italic text-marigold">kinnow</em>
                <br className="hidden sm:block" /> — the fruit every Delhi
                home knows.
              </Heading>
            </FadeIn>

            <FadeIn from="bottom" delay={0.1}>
              <div className="mt-6 space-y-4 font-body text-body-lg leading-relaxed text-ink">
                <p>
                  Simple, familiar, full of comfort. That&apos;s the feeling
                  we want you to leave with.
                </p>
                <p>
                  Dr. Sonia leads the practice with a team of world-class
                  dermatologists.
                </p>
              </div>

              <figure className="mt-6 border-l-2 border-marigold pl-5 md:pl-6">
                <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                  One principle
                </p>
                <blockquote className="mt-2 font-editorial text-[clamp(1.5rem,3vw,2.25rem)] italic leading-snug text-walnut">
                  Treat every person{" "}
                  <span className="text-marigold">like family.</span>
                </blockquote>
              </figure>
            </FadeIn>

            {sonia && kavya && (
              <FadeIn from="bottom" delay={0.18}>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <FounderBadge
                    initials="SG"
                    name={sonia.name}
                    role="Co-founder · Medical Director"
                  />
                  <FounderBadge
                    initials="KG"
                    name={kavya.name}
                    role="Chief Executive Officer"
                  />
                </div>
              </FadeIn>
            )}

            <FadeIn from="bottom" delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="primary">
                  <Link href="/doctors">Meet the team</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/story">Read the full story →</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Auto-rotating photo */}
          <div className="lg:col-span-5">
            <FadeIn from="bottom" delay={0.15}>
              <AutoCarousel slides={slides} interval={5000} fadeSeconds={1.3} aspectRatio="4/5" />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FounderBadge({ initials, name, role }: { initials: string; name: string; role: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-walnut/12 bg-mogra px-4 py-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron/20 font-heading text-base text-walnut"
      >
        {initials}
      </span>
      <div className="min-w-0">
        <p className="truncate font-body text-sm font-medium tracking-tight text-walnut">{name}</p>
        <p className="truncate font-body text-caption text-walnut/65">{role}</p>
      </div>
    </div>
  );
}
