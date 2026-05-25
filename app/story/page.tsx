import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";
import { PageHero } from "@/components/sections/page/PageHero";
import { PageCTA } from "@/components/sections/page/PageCTA";
import { AutoCarousel } from "@/components/composites/AutoCarousel";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Keynu started — named after the kinnow, built on family-run dentistry, opened in 2021 as the aesthetics arm of BDC.",
};

const chapters = [
  {
    eyebrow: "The name",
    title: "Why kinnow?",
    body: [
      "Kinnow is the everyday Delhi citrus — sweet, sharp, comforting. Familiar in every home, never trying too hard.",
      "That's the feeling we want you to leave with. Not a luxury moment that fades by Monday. A quiet confidence that holds through every season.",
    ],
  },
  {
    eyebrow: "The roots",
    title: "Built on family-run dentistry.",
    body: [
      "BDC — our parent practice — has run a family-led dental clinic in Paschim Vihar since the late nineties. The same families came back for decades because care was personal and honest.",
      "Keynu is the aesthetics arm of that practice, founded in 2021 by Dr. Sonia Gupta. The principle did not change: treat every person like family.",
    ],
  },
  {
    eyebrow: "How we work",
    title: "We start with the concern, not the treatment.",
    body: [
      "Every patient begins with a 30-minute consultation. We examine, we listen, we take a brief history. You leave with a written plan and a written estimate — not a sales pitch.",
      "We will not start a treatment on the first visit unless it is medically clear and you have asked for it. The plan happens before the chair.",
    ],
  },
];

export default function StoryPage() {
  const slides = [
    { src: "/images/bento/reception-detail.jpg", alt: "Reception interior" },
    { src: "/images/doctors/dr-sonia.jpg", alt: "Dr. Sonia Gupta" },
    { src: "/images/bento/kinu-partition.jpg", alt: "Etched kinu motif partition" },
    { src: "/images/bento/consult-room.jpg", alt: "Consultation room" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Named after the __HL__ — the fruit every Delhi home knows."
        highlight="kinnow"
        lead="A unit of BDC, founded in 2021. The aesthetics arm of a family-run dental practice that has cared for the same Delhi families for decades."
      />

      <Section spacing="default">
        <Container width="wide">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn from="bottom">
                <AutoCarousel slides={slides} interval={5000} aspectRatio="4/5" />
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-walnut/15 border-y border-walnut/15">
                {chapters.map((c, index) => (
                  <FadeIn key={c.title} from="bottom" delay={index * 0.06}>
                    <li className="py-8 md:py-10">
                      <span className="font-body text-micro uppercase tracking-widest text-walnut/55">
                        {c.eyebrow}
                      </span>
                      <h2 className="mt-3 font-heading text-h3 uppercase leading-tight tracking-wide text-walnut">
                        {c.title}
                      </h2>
                      <div className="mt-4 space-y-3 font-body text-body leading-relaxed text-ink/85">
                        {c.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="secondary" className="relative">
        <Watermark symbol="hibiscus" position="top-right" size={420} opacity={0.12} rotation={-12} tone="dark" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              One principle
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Treat every person{" "}
              <em className="font-editorial italic text-marigold">like family.</em>
            </Heading>
            <Text size="lg" className="mt-5 text-ink/85">
              It is the sentence we trained on. The one Dr. Sonia heard at home growing up, and the one we keep coming back to when a hard call has to be made.
            </Text>
          </div>
        </Container>
      </Section>

      <PageCTA
        title="Meet the team behind the practice."
        lead="The doctors and operators who run the clinic day to day."
      />
    </>
  );
}
