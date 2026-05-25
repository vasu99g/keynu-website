import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { jobOpenings } from "@/lib/content-sources/local";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Keynu — senior dermatologists, laser technicians, and patient experience leads.",
};

const principles = [
  {
    title: "Patient first, always",
    body: "Every decision — clinical or operational — is judged by whether it makes a patient's visit better or worse.",
  },
  {
    title: "Doctor-led",
    body: "Clinical calls are made by clinicians. Operations supports the chair, never the other way around.",
  },
  {
    title: "Honest, written, plain",
    body: "We say what we mean. Estimates are written. We don't oversell, we don't hide costs.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us run the kind of clinic we want to be __HL__ of."
        highlight="patients"
        lead="Small, deliberate team. Long-tenured. We hire for warmth and clinical discipline in equal measure."
      />

      {/* Open roles */}
      <Section spacing="default">
        <Container width="wide">
          <div className="flex items-end justify-between gap-6 border-b border-walnut/12 pb-6">
            <Heading as="h2" size="h2">
              Open roles
            </Heading>
            <p className="font-body text-caption text-walnut/55">
              {jobOpenings.length} live · last updated this month
            </p>
          </div>
          <ul className="divide-y divide-walnut/12">
            {jobOpenings.map((job, index) => (
              <FadeIn key={job.slug} from="bottom" delay={index * 0.05}>
                <li className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:gap-12 md:py-10">
                  <div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-body text-micro uppercase tracking-widest text-walnut/55">
                      <span>{job.team}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.location}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-h3 uppercase tracking-wide text-walnut">
                      {job.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-body leading-relaxed text-ink/85">
                      {job.summary}
                    </p>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                          You will
                        </p>
                        <ul className="mt-2 space-y-1 font-body text-body text-ink/85">
                          {job.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-2">
                              <span aria-hidden="true" className="mt-1 text-saffron">
                                +
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-body text-micro uppercase tracking-widest text-walnut/55">
                          We&apos;re looking for
                        </p>
                        <ul className="mt-2 space-y-1 font-body text-body text-ink/85">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2">
                              <span aria-hidden="true" className="mt-1 text-saffron">
                                +
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-start">
                    <Button asChild variant="primary">
                      <a
                        href={`mailto:careers@keynu.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                      >
                        Apply →
                      </a>
                    </Button>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Principles */}
      <Section spacing="default" tone="secondary">
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              How we work
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Three principles we hire for.
            </Heading>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {principles.map((p, index) => (
              <FadeIn key={p.title} from="bottom" delay={index * 0.06}>
                <li className="rounded-xl border border-walnut/12 bg-mogra p-6">
                  <span className="font-heading text-h3 text-marigold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-h4 uppercase tracking-wide text-walnut">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-body leading-relaxed text-ink/85">{p.body}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCTA
        title="Don't see a fit but think you'd belong here?"
        lead="We hire on character first. Write to us anyway."
      />
    </>
  );
}
