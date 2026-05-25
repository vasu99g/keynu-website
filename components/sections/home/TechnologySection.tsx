"use client";

import {
  Droplets,
  Grid2X2,
  ScanLine,
  Snowflake,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { devices, accreditations } from "@/lib/content-sources/local";
import type { Device } from "@/lib/content-sources/local";

const iconByName: Record<Device["icon"], LucideIcon> = {
  zap: Zap,
  "scan-line": ScanLine,
  droplets: Droplets,
  "grid-2x2": Grid2X2,
  snowflake: Snowflake,
  sprout: Sprout,
};

/**
 * Technology — "The Equipment · सटीकता (precision)".
 *
 * Dark Ink section that positions Keynu as science-led. A top strip of
 * accreditation stamps establishes the regulatory floor; below it, six
 * device cards in a 3x2 grid each carry a circular saffron medallion
 * (notched ring + icon), tag, name, body copy, and a two-column spec
 * strip (cleared / downtime).
 */
export function TechnologySection() {
  return (
    <Section spacing="loose" id="technology" data-header-tone="dark" className="bg-ink text-mogra">
      <Container width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn from="bottom">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-mogra/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              The equipment
              <span aria-hidden="true" className="font-devanagari text-saffron">
                सटीकता
              </span>
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
            </span>
            <Heading as="h2" size="h1" className="mt-5 text-mogra">
              Science-led,{" "}
              <em className="font-editorial italic text-saffron">devotion-built.</em>
            </Heading>
            <Text size="lg" className="mt-5 text-mogra/80">
              Every laser, probe, and implanter on our floor is FDA- or CDSCO-cleared, calibrated weekly, and operated only by senior staff with at least two hundred hours on the device. We replace equipment on a four-year cycle — long before it goes dim.
            </Text>
          </FadeIn>

          <FadeIn from="bottom" delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
              {accreditations.map((acc) => (
                <div
                  key={acc.line1}
                  className="flex items-center gap-3 rounded-lg border border-mogra/15 bg-mogra/[0.04] p-3 text-left"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-saffron/40 text-saffron"
                  >
                    +
                  </span>
                  <div>
                    <p className="font-heading text-sm uppercase tracking-widest text-mogra">
                      {acc.line1}
                    </p>
                    <p className="font-body text-micro text-mogra/60">{acc.line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {devices.map((device, index) => (
            <FadeIn key={device.id} from="bottom" delay={index * 0.05}>
              <DeviceCard device={device} index={index} />
            </FadeIn>
          ))}
        </div>

        <FadeIn from="bottom" delay={0.2}>
          <p className="mt-12 flex items-start gap-3 text-center font-body text-caption italic text-mogra/65 md:mx-auto md:max-w-2xl">
            <span aria-hidden="true" className="text-saffron">
              +
            </span>
            We&apos;re happy to walk you through any device before you sit on the chair. Ask — we&apos;ll show you the spec sheet and the calibration log.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}

function DeviceCard({ device, index }: { device: Device; index: number }) {
  const Icon = iconByName[device.icon];

  return (
    <article className="group flex h-full flex-col rounded-xl border border-mogra/12 bg-mogra/[0.03] p-6 transition-colors duration-base ease-keynu hover:bg-mogra/[0.06] md:p-7">
      <div className="flex items-start justify-between">
        <Medallion>
          <Icon className="h-6 w-6 text-saffron" strokeWidth={1.5} aria-hidden="true" />
        </Medallion>
        <span className="font-body text-micro uppercase tracking-widest text-mogra/45">
          {String(index + 1).padStart(2, "0")} / 06
        </span>
      </div>

      <p className="mt-6 font-body text-micro uppercase tracking-widest text-saffron/85">
        {device.tag}
      </p>
      <h3 className="mt-2 font-heading text-h4 uppercase tracking-tight text-mogra">
        {device.name}
      </h3>
      <p className="mt-3 font-body text-body leading-relaxed text-mogra/75">{device.body}</p>

      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-mogra/10">
        <div className="bg-walnut/40 p-3">
          <p className="font-body text-micro uppercase tracking-widest text-mogra/55">
            Cleared by
          </p>
          <p className="mt-1 font-body text-caption text-mogra">{device.cleared}</p>
        </div>
        <div className="bg-walnut/40 p-3">
          <p className="font-body text-micro uppercase tracking-widest text-mogra/55">
            Downtime
          </p>
          <p className="mt-1 font-body text-caption text-mogra">{device.downtime}</p>
        </div>
      </div>
    </article>
  );
}

/**
 * Decorative medallion frame around the device icon — circular ring with
 * twelve notch ticks at each clock position. Pure SVG.
 */
function Medallion({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <circle cx={50} cy={50} r={46} fill="none" stroke="#FBB04C" strokeWidth={0.6} opacity={0.7} />
        <circle cx={50} cy={50} r={40} fill="none" stroke="#FBB04C" strokeWidth={0.4} opacity={0.4} />
        {Array.from({ length: 12 }).map((_, k) => {
          const a = (k / 12) * Math.PI * 2;
          // Round to 3 decimals so server + client serialise identically
          // (otherwise React's hydration check flags 1-ulp trig drift).
          const x1 = Math.round((50 + Math.cos(a) * 46) * 1000) / 1000;
          const y1 = Math.round((50 + Math.sin(a) * 46) * 1000) / 1000;
          const x2 = Math.round((50 + Math.cos(a) * 49) * 1000) / 1000;
          const y2 = Math.round((50 + Math.sin(a) * 49) * 1000) / 1000;
          return (
            <line
              key={k}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FBB04C"
              strokeWidth={0.6}
              opacity={0.6}
            />
          );
        })}
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
