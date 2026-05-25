import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { sambhalPillars, sambhalTiers } from "@/lib/content-sources/local";
import type { SambhalPillar, SambhalTier } from "@/lib/content-sources/local";
import { cn } from "@/lib/utils/cn";

/**
 * Sambhal — Post-care support (सम्भाल = "to look after").
 *
 * Warm counter-balance to Technology. Hero composition on the left
 * (product image inside a sharp frame, mango-leaf garland SVG draped at
 * the top corners, a deep madder wax-seal stamp tilted in the bottom-right,
 * a slim caption tag). Right column lists four aftercare pillars in a
 * vertical stack. Below: three subscription tiers (Monthly / Quarterly
 * featured / Annual) with perks + cancellation note.
 */
export function SambhalSection() {
  return (
    <Section tone="secondary" spacing="loose" id="sambhal">
      <Container width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn from="bottom">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              After the appointment
              <span aria-hidden="true" className="font-devanagari text-saffron">
                सम्भाल
              </span>
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
            </span>
            <Heading as="h2" size="h1" className="mt-5">
              Treatments are the spark.
              <br />
              <em className="font-editorial italic text-marigold">Sambhal</em> keeps the flame.
            </Heading>
            <Text size="lg" className="mt-5 text-ink/85">
              A treatment without a routine is a result with an expiry date. We&apos;ve never sold one alone. Every plan ships with a daily ritual, a nutritionist on speed dial, and a monthly box that lands at your door.
            </Text>
          </FadeIn>
        </div>

        <div className="mt-14 grid items-start gap-10 md:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Left — hero composition (narrower than the pillar column so
              the pillar list gets room to breathe and align cleanly). */}
          <div className="lg:col-span-5">
            <FadeIn from="bottom" delay={0.1}>
              <SambhalHero />
            </FadeIn>
          </div>

          {/* Right — pillars (wider column, more reading room). */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-walnut/15 border-y border-walnut/15">
              {sambhalPillars.map((pillar, index) => (
                <FadeIn key={pillar.number} from="bottom" delay={index * 0.06}>
                  <SambhalPillarItem pillar={pillar} />
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscription tiers */}
        <div className="mt-20">
          <FadeIn from="bottom">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-body text-micro uppercase tracking-widest text-walnut/65">
                <span aria-hidden="true" className="mr-1 text-saffron">
                  +
                </span>
                Subscribe · Renew · Pause any month
              </span>
              <Heading as="h3" size="h2" className="mt-3">
                Pick the rhythm that fits your year.
              </Heading>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {sambhalTiers.map((tier, index) => (
              <FadeIn key={tier.id} from="bottom" delay={0.05 + index * 0.05}>
                <TierCard tier={tier} />
              </FadeIn>
            ))}
          </div>

          <FadeIn from="bottom" delay={0.25}>
            <p className="mt-10 text-center font-body text-caption italic text-ink/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>{" "}
              No lock-in. No auto-renew traps. Pause, swap, or cancel from your dashboard or one WhatsApp message away.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

function SambhalHero() {
  return (
    <div className="relative overflow-visible">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sandalwood shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]">
        <Image
          src="/images/bento/dinner-citrus.jpg"
          alt="Curated arrangement of skincare and citrus tones from the Keynu Sambhal box"
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
        {/* Warm wash overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-saffron/15 via-transparent to-walnut/30"
        />
      </div>

      {/* Mango-leaf garland (top corners) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -top-2 left-0 right-0 h-12 w-full md:h-16"
      >
        <g opacity={0.92}>
          <path d="M 20 30 C 28 26, 30 38, 24 50 C 18 38, 14 28, 20 30 Z" fill="#3A4F3C" />
          <path d="M 60 26 C 70 22, 72 36, 64 48 C 56 36, 52 24, 60 26 Z" fill="#253327" />
          <path d="M 100 30 C 110 26, 112 40, 104 52 C 96 40, 92 28, 100 30 Z" fill="#3A4F3C" />
          <path d="M 140 22 C 150 18, 152 32, 144 44 C 136 32, 132 20, 140 22 Z" fill="#253327" />
          <path d="M 380 30 C 372 26, 370 38, 376 50 C 382 38, 386 28, 380 30 Z" fill="#3A4F3C" />
          <path d="M 340 26 C 330 22, 328 36, 336 48 C 344 36, 348 24, 340 26 Z" fill="#253327" />
          <path d="M 300 30 C 290 26, 288 40, 296 52 C 304 40, 308 28, 300 30 Z" fill="#3A4F3C" />
          <path d="M 260 22 C 250 18, 248 32, 256 44 C 264 32, 268 20, 260 22 Z" fill="#253327" />
        </g>
        {/* central marigold — coordinates rounded to 3 decimals so server
            and client serialise the trig outputs identically. */}
        <g transform="translate(200, 36)">
          {Array.from({ length: 12 }).map((_, k) => {
            const a = (k / 12) * Math.PI * 2;
            const px = Math.round(Math.cos(a) * 10000) / 1000;
            const py = Math.round(Math.sin(a) * 10000) / 1000;
            const deg = Math.round((a * 180000) / Math.PI) / 1000;
            return (
              <ellipse
                key={k}
                cx={px}
                cy={py}
                rx={9}
                ry={6}
                fill="#E87722"
                transform={`rotate(${deg}, ${px}, ${py})`}
                opacity={0.92}
              />
            );
          })}
          <circle cx={0} cy={0} r={5} fill="#9D3A2F" />
          <circle cx={0} cy={0} r={2} fill="#562E26" />
        </g>
      </svg>

      {/* Wax-seal stamp */}
      <div className="pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 rotate-[-8deg] md:-right-6 md:h-32 md:w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_8px_18px_rgba(86,46,38,0.35)]">
          <circle cx={60} cy={60} r={56} fill="#9D3A2F" />
          <circle cx={60} cy={60} r={50} fill="none" stroke="#FBB04C" strokeWidth={0.6} />
          <circle cx={60} cy={60} r={44} fill="none" stroke="#FBB04C" strokeWidth={0.4} opacity={0.6} />
          <text
            x={60}
            y={50}
            textAnchor="middle"
            fill="#FFFEF0"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 11,
              letterSpacing: "0.18em",
            }}
          >
            KEYNU
          </text>
          <text
            x={60}
            y={72}
            textAnchor="middle"
            fill="#FBB04C"
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            सम्भाल
          </text>
          <text
            x={60}
            y={88}
            textAnchor="middle"
            fill="#FFFEF0"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 6.5,
              letterSpacing: "0.32em",
            }}
          >
            POST · CARE
          </text>
        </svg>
      </div>

      {/* Caption tag */}
      <div className="absolute -bottom-3 left-6 inline-flex max-w-[68%] flex-col items-start gap-0.5 rounded-md bg-mogra px-3 py-2 shadow-md">
        <span className="font-body text-micro uppercase tracking-widest text-walnut">
          The Keynu Sambhal Box
        </span>
        <span className="font-editorial text-sm italic text-walnut/75">
          Curated monthly. Doctor-reviewed.
        </span>
      </div>
    </div>
  );
}

function SambhalPillarItem({ pillar }: { pillar: SambhalPillar }) {
  return (
    <li className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 py-6 md:grid-cols-[4rem_1fr] md:gap-x-6 md:py-8">
      {/* Numeral — large serif in marigold, sits in its own column so all
          four titles align on the same baseline, body indented past it. */}
      <span
        aria-hidden="true"
        className="font-heading text-h3 leading-none text-marigold md:text-h2"
      >
        {pillar.number}
      </span>
      <h3 className="self-end font-heading text-h4 uppercase leading-tight tracking-wide text-walnut md:text-h3">
        {pillar.name}
      </h3>

      {/* Body sits under the title, indented past the numeral column. */}
      <span className="col-start-2 font-body text-body leading-relaxed text-ink/85">
        {pillar.body}
      </span>
    </li>
  );
}

function TierCard({ tier }: { tier: SambhalTier }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-xl border bg-mogra p-6 transition-colors duration-base ease-keynu md:p-7",
        tier.featured
          ? "border-marigold shadow-[0_24px_50px_-20px_rgba(232,119,34,0.4)]"
          : "border-walnut/12 hover:border-walnut/30",
      )}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-marigold px-3 py-1 font-body text-micro uppercase tracking-widest text-mogra">
          Most chosen
        </span>
      )}
      <p className="font-heading text-h3 uppercase tracking-tight text-walnut">{tier.name}</p>
      <p className="mt-1 font-body text-micro uppercase tracking-widest text-walnut/60">
        {tier.subtitle}
      </p>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-heading text-h2 text-walnut">{tier.price}</span>
        <span className="font-body text-caption text-walnut/70">{tier.per}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 font-body text-body text-ink/85">
            <span aria-hidden="true" className="mt-1 text-saffron">
              +
            </span>
            {perk}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-body text-caption italic text-walnut/70">{tier.note}</p>
      <Link
        href="/book"
        className={cn(
          "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-caption uppercase tracking-widest transition-colors duration-base ease-keynu",
          tier.featured
            ? "bg-marigold text-mogra hover:bg-marigold/90"
            : "bg-walnut text-mogra hover:bg-ink",
        )}
      >
        Start Sambhal →
      </Link>
    </div>
  );
}
