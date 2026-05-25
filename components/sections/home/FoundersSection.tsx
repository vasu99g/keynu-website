import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { getAllDoctors } from "@/lib/content/doctors";

/**
 * Founders section — the human anchor of the brand. Spotlights Dr. Sonia
 * with a real editorial portrait + a short, plain-spoken intro. Dr. Rajeev
 * is acknowledged below as the second founder. Renamed from the earlier
 * "Doctor Intro" to use the founder framing the brand actually uses.
 */
export function FoundersSection() {
  const doctors = getAllDoctors();
  const sonia = doctors.find((d) => d.slug === "sonia-gupta");
  const rajeev = doctors.find((d) => d.slug === "rajeev-gupta");
  if (!sonia) return null;

  return (
    <Section spacing="loose" id="founders">
      <Watermark symbol="dove" position="top-right" size={380} opacity={0.1} rotation={14} tone="dark" />
      <Container width="wide">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-6">
            <FadeIn from="bottom">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(86,46,38,0.35)]">
                <Image
                  src="/images/doctors/dr-sonia.jpg"
                  alt={`Portrait of ${sonia.name}, ${sonia.role}`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority={false}
                />
                {/* Quiet bottom gradient for the name plate */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-walnut/55 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="font-body text-micro uppercase tracking-widest text-mogra/75">
                      Co-founder · Medical Director
                    </span>
                    <p className="mt-1 font-heading text-h3 leading-none text-mogra">
                      {sonia.name}
                    </p>
                  </div>
                  <span className="font-body text-micro uppercase tracking-widest text-mogra/70">
                    Since 1996
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <FadeIn from="bottom" delay={0.1}>
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                The face of Keynu
              </span>
              <Heading as="h2" size="h1" className="mt-5">
                A doctor you trust, before you trust the treatment.
              </Heading>

              <div className="mt-6 space-y-5 font-body text-body-lg leading-relaxed text-ink">
                <p>
                  Every patient at Keynu sees a doctor first — never just a
                  product. Dr. Sonia leads the practice, the protocols, and
                  the team.
                </p>
                <p>
                  She trained as a dentist, ran the clinic with her husband Dr.
                  Rajeev for twenty-five years, and built Keynu&apos;s
                  aesthetics arm on the same principle that kept their dental
                  patients coming back: treat every person like family.
                </p>
              </div>

              {rajeev && (
                <FadeIn from="bottom" delay={0.2}>
                  <div className="mt-8 flex items-center gap-4 rounded-lg border border-walnut/12 bg-sandalwood/30 px-5 py-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/20 font-heading text-h4 text-walnut"
                    >
                      RG
                    </span>
                    <div className="flex-1">
                      <p className="font-body text-sm font-medium tracking-tight text-walnut">
                        {rajeev.name}
                      </p>
                      <p className="font-body text-caption text-walnut/70">
                        {rajeev.role} · Implantology, 25+ years
                      </p>
                    </div>
                    <Link
                      href="/doctors"
                      className="font-body text-caption uppercase tracking-widest text-walnut/70 underline-offset-4 hover:underline"
                    >
                      Meet the team →
                    </Link>
                  </div>
                </FadeIn>
              )}

              <FadeIn from="bottom" delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild variant="primary">
                    <Link href="/doctors">Meet the team</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/story">Read our story →</Link>
                  </Button>
                </div>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
