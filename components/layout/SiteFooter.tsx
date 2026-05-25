import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";
import { Logo } from "@/components/brand/Logo";
import { getSiteSettings } from "@/lib/content/site";

const browseLinks = [
  { href: "/treatments", label: "Treatments" },
  { href: "/story", label: "Our story" },
  { href: "/doctors", label: "Our doctors" },
  { href: "/results", label: "Results" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Medical disclaimer" },
];

/**
 * Combined "Visit us" CTA + site footer.
 *
 * Replaces the previous two-section closing pattern (VisitCTASection +
 * SiteFooter) where address, phone, email and hours all appeared twice.
 * Now a single forest band that opens with the booking CTA, surfaces the
 * essential contact + visit info exactly once, and closes with
 * nav + legal + brand line.
 */
export function SiteFooter() {
  const { brandName, contact, hours, social } = getSiteSettings();
  const currentYear = new Date().getFullYear();
  const todayHours = hours[new Date().getDay() === 0 ? hours.length - 1 : new Date().getDay() - 1] ?? hours[0];

  return (
    <footer data-header-tone="dark" className="relative isolate overflow-hidden bg-forest text-mogra">
      {/* Decorative kinu emblem watermark — fixed inside the section so it
          never appears clipped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 z-0 h-[420px] w-[360px] opacity-[0.07] md:-right-24 md:-bottom-32 md:h-[520px] md:w-[440px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 55%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 55%, transparent 85%)",
        }}
      >
        <Logo variant="emblem" size="2xl" className="h-full w-full text-mogra" label="" />
      </div>

      <Container>
        {/* ── CTA row ──────────────────────────────────────────── */}
        <div className="relative grid gap-10 pt-20 lg:grid-cols-12 lg:gap-16 lg:pt-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-mogra/65">
              <span aria-hidden="true" className="text-saffron">
                +
              </span>
              Visit us
            </span>
            <Heading as="h2" size="h1" className="mt-5 text-mogra">
              Step in. We&apos;ll handle the rest.
            </Heading>
            <p className="mt-5 max-w-lg font-body text-body-lg leading-relaxed text-mogra/80">
              Booking takes a minute. Whether you know exactly what you want
              or want guidance, a doctor will sit with you first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">Book a consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-mogra hover:bg-mogra/10"
              >
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-mogra/20 p-6 md:p-8">
              <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                Clinic
              </p>
              <address className="mt-3 not-italic">
                <p className="font-heading text-h4 leading-snug text-mogra">
                  {contact.addressLines.join(", ")}
                </p>
                <p className="mt-1 font-body text-body text-mogra/75">
                  {contact.city} {contact.pincode} · {contact.country}
                </p>
              </address>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-body text-micro uppercase tracking-widest text-mogra/60">
                  Open today
                </span>
                <span className="font-heading text-h4 leading-none text-mogra">
                  {todayHours?.open} — {todayHours?.close}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-mogra/15 pt-5">
                <div>
                  <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                    Call
                  </p>
                  <a
                    href={`tel:${contact.phones[0]?.replace(/\s/g, "")}`}
                    className="mt-1 block font-body text-body text-mogra/85 transition-colors hover:text-mogra"
                  >
                    {contact.phones[0]}
                  </a>
                </div>
                <div>
                  <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block font-body text-body text-mogra/85 transition-colors hover:text-mogra"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer row ───────────────────────────────────────── */}
        <div className="relative mt-20 border-t border-mogra/20 pt-10 md:mt-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Link
                href="/"
                aria-label={`${brandName} — return to homepage`}
                className="inline-block text-mogra"
              >
                <Logo variant="lockup" size="lg" />
              </Link>
              <p className="mt-4 max-w-xs font-body text-caption leading-relaxed text-mogra/65">
                An aesthetics &amp; wellness clinic in Paschim Vihar — a unit of BDC.
              </p>
            </div>

            <nav aria-label="Footer" className="md:col-span-4">
              <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                Browse
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                {browseLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-mogra/80 transition-colors hover:text-mogra"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-3">
              <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                Follow
              </p>
              <ul className="mt-3 space-y-2">
                {social.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm capitalize text-mogra/80 transition-colors hover:text-mogra"
                    >
                      {s.platform} · {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-mogra/15 pt-6 text-mogra/60 md:flex-row md:items-center">
            <p className="font-body text-caption">
              © {currentYear} {brandName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-caption transition-colors hover:text-mogra"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
