import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Logo } from "@/components/brand/Logo";
import { getSiteSettings } from "@/lib/content/site";

const treatmentLinks = [
  { href: "/treatments/injectables", label: "Injectables" },
  { href: "/treatments/skin-tightening-and-lifting", label: "Skin Tightening" },
  { href: "/treatments/laser-hair-reduction", label: "Laser Hair Reduction" },
  { href: "/treatments/hair-regrowth", label: "Hair Regrowth" },
  { href: "/treatments/body-contouring-and-fat-loss", label: "Body Contouring" },
];

const aboutLinks = [
  { href: "/story", label: "Our Story" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/experience", label: "The Experience" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Medical Disclaimer" },
];

/**
 * Site-wide footer. Reads its content from the active content source
 * (local stub today, Sanity later) so non-tech editors update phone /
 * address / hours / socials in one place.
 */
export function SiteFooter() {
  const { brandName, tagline, contact, hours, social, founded } = getSiteSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-mogra">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block text-mogra transition-opacity hover:opacity-80"
              aria-label={`${brandName} — return to homepage`}
            >
              <Logo variant="lockup" size="xl" />
            </Link>
            <Text size="sm" className="mt-5 max-w-xs text-mogra/70">
              {tagline}. A premium aesthetics &amp; wellness clinic in New Delhi since {founded}.
            </Text>
          </div>

          <FooterColumn title="Treatments" links={treatmentLinks} />
          <FooterColumn title="About" links={aboutLinks} />

          <div className="md:col-span-3">
            <Heading as="h3" size="h4" className="text-mogra">
              Visit
            </Heading>
            <address className="mt-4 not-italic">
              <Text size="sm" className="text-mogra/80">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block">
                  {contact.city} {contact.pincode}
                </span>
              </Text>
              <ul className="mt-4 space-y-1">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="font-body text-sm text-mogra/80 transition-colors hover:text-mogra"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-body text-sm text-mogra/80 transition-colors hover:text-mogra"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>
            </address>

            <div className="mt-6">
              <Text size="micro" className="text-mogra/60">
                Hours
              </Text>
              <ul className="mt-2 space-y-1">
                {hours.map(({ day, open, close }) => (
                  <li key={day} className="flex justify-between text-sm text-mogra/80">
                    <span>{day}</span>
                    <span>
                      {open} — {close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-mogra/20 py-6 md:flex-row md:items-center">
          <Text size="sm" className="text-mogra/60">
            © {currentYear} {brandName}. All rights reserved.
          </Text>
          <ul className="flex flex-wrap items-center gap-6">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-mogra/60 transition-colors hover:text-mogra"
                >
                  {label}
                </Link>
              </li>
            ))}
            {social.map(({ platform, url, handle }) => (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm capitalize text-mogra/60 transition-colors hover:text-mogra"
                  aria-label={`${platform}: ${handle}`}
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <Heading as="h3" size="h4" className="text-mogra">
        {title}
      </Heading>
      <ul className="mt-4 space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-body text-sm text-mogra/80 transition-colors hover:text-mogra"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
