import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { Watermark } from "@/components/brand/Watermark";

/**
 * Story section — sandalwood editorial panel telling the kinnow origin
 * story in human, unrehearsed copy. Acts as the brand's "why us" beat
 * between hero and the disciplines grid.
 */
export function StorySection() {
  return (
    <Section tone="secondary" spacing="loose">
      <Watermark symbol="hibiscus" position="top-right" size={420} opacity={0.12} rotation={-12} tone="dark" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeIn from="bottom" distance={12}>
              <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="text-saffron">
                  +
                </span>
                The Keynu story · Beyond beauty
              </span>
              <Heading as="h2" size="h1" className="mt-5">
                Named after the{" "}
                <em className="font-heading italic text-marigold">kinnow</em>
                <br className="hidden sm:block" /> — the fruit every Delhi
                home knows.
              </Heading>
            </FadeIn>

            <FadeIn from="bottom" delay={0.1}>
              <div className="mt-6 space-y-5 font-body text-body-lg leading-relaxed text-ink">
                <p>
                  Simple, familiar, full of comfort. That&apos;s the feeling we
                  want you to leave with — not a luxury moment that fades by
                  Monday, but a quiet confidence that holds through every
                  season.
                </p>
                <p>
                  We&apos;re not a beauty brand trying to impress. We&apos;re
                  an expert clinic that understands why you came, what
                  you&apos;re worried about, and how to guide you clearly.
                </p>
              </div>
            </FadeIn>

            <FadeIn from="bottom" delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild variant="primary">
                  <Link href="#founders">Meet the founders</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contact">Visit the clinic →</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn from="bottom" delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(86,46,38,0.35)]">
                <Image
                  src="/images/bento/reception-detail.jpg"
                  alt="The Keynu clinic interior — warm wood, soft lighting, considered details"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                {/* Editorial badge bottom-right */}
                <div className="absolute bottom-4 right-4 flex max-w-[180px] flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-mogra/95 px-4 py-3 font-body text-micro uppercase tracking-widest text-walnut shadow-lg backdrop-blur">
                  <span>Honest care</span>
                  <span aria-hidden="true" className="text-saffron">
                    +
                  </span>
                  <span>Est. 1996</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
