import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { getSiteSettings } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact & visit",
  description:
    "B-2/11, Basement, Paschim Vihar, New Delhi 110063. Open Mon-Sun. Call or WhatsApp +91 9311211404, email infokeynu@gmail.com.",
};

export default function ContactPage() {
  const { contact, hours } = getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="Visit us"
        title="Five minutes from __HL__."
        highlight="Paschim Vihar metro"
        lead="Valet parking available. Walk-ins welcome — though a consultation booked in advance lets us hold time for you."
      />

      <Section spacing="default">
        <Container width="wide">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Address + hours + contact */}
            <div className="lg:col-span-5">
              <FadeIn from="bottom">
                <ul className="space-y-7">
                  <ContactItem icon={MapPin} label="Address">
                    <address className="not-italic">
                      {contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="block">
                        {contact.city} {contact.pincode}, {contact.country}
                      </span>
                    </address>
                  </ContactItem>

                  <ContactItem icon={Phone} label="Call or WhatsApp">
                    <ul className="space-y-1">
                      {contact.phones.map((phone) => (
                        <li key={phone}>
                          <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="font-body text-body text-walnut hover:underline"
                          >
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </ContactItem>

                  <ContactItem icon={Mail} label="Email">
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-body text-body text-walnut hover:underline"
                    >
                      {contact.email}
                    </a>
                  </ContactItem>

                  <ContactItem icon={Clock} label="Hours">
                    <ul className="space-y-1">
                      {hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-6 font-body text-body text-walnut/85">
                          <span>{h.day}</span>
                          <span>
                            {h.open} — {h.close}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ContactItem>
                </ul>
              </FadeIn>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <FadeIn from="bottom" delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sandalwood shadow-[0_32px_64px_-20px_rgba(86,46,38,0.32)]">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(contact.addressLines.join(", ") + ", " + contact.city + " " + contact.pincode)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map to Keynu"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="secondary">
        <Container width="wide">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn from="bottom">
                <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
                  <span aria-hidden="true" className="text-saffron">
                    +
                  </span>
                  Or write to us
                </span>
                <Heading as="h2" size="h1" className="mt-5">
                  Tell us what brings you in.
                </Heading>
                <Text size="lg" className="mt-5 text-ink/85">
                  Whether you want to book or just want a quick answer, send us a note. A real person on our front desk replies — usually within ten minutes during clinic hours.
                </Text>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn from="bottom" delay={0.1}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron/20 text-walnut"
      >
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-body text-micro uppercase tracking-widest text-walnut/55">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  );
}
