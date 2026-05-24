import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { FadeIn } from "@/components/primitives/FadeIn";
import { getSiteSettings } from "@/lib/content/site";

/**
 * Closing "Visit" call-to-action — sits on the forest accent band for a clean
 * tonal exit before the footer. Pulls contact details from site settings so
 * non-tech editors can update the address/phone in one place.
 */
export function VisitCTASection() {
  const { contact, hours } = getSiteSettings();

  return (
    <Section tone="accent" spacing="loose">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <FadeIn from="bottom">
              <span className="font-body text-micro uppercase tracking-widest text-mogra/60">
                + Visit us
              </span>
              <Heading as="h2" size="h1" className="mt-4 text-mogra">
                Step in. We&apos;ll handle the rest.
              </Heading>
              <Text size="lg" className="mt-5 text-mogra/75">
                Booking a consultation takes a minute. Whether you know exactly what you need or
                want guidance, a doctor will sit with you before any treatment is recommended.
              </Text>
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
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn from="bottom" delay={0.1}>
              <div className="rounded-3xl border border-mogra/20 p-6 md:p-8">
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

                <div className="mt-6 border-t border-mogra/15 pt-6">
                  <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                    Open today
                  </p>
                  <p className="mt-2 font-body text-body-lg text-mogra">
                    {hours[0]?.open} — {hours[0]?.close}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-mogra/15 pt-6">
                  <div>
                    <p className="font-body text-micro uppercase tracking-widest text-mogra/60">
                      Call
                    </p>
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="mt-1 block font-body text-body text-mogra/85 transition-colors hover:text-mogra"
                      >
                        {phone}
                      </a>
                    ))}
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
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
