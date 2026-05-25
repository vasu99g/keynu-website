import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { Watermark } from "@/components/brand/Watermark";
import { getSiteSettings } from "@/lib/content/site";

interface PageCTAProps {
  title?: string;
  lead?: string;
}

/**
 * Reusable closing-CTA band for interior pages. Sandalwood band with the
 * book + WhatsApp pair, kinu emblem watermark in the corner. Sits above
 * the SiteFooter so each interior page has its own contextual call.
 */
export function PageCTA({
  title = "Want to talk to a doctor?",
  lead = "A 30-minute consultation is the simplest way to know what's right. Book online or message us on WhatsApp.",
}: PageCTAProps) {
  const { contact } = getSiteSettings();
  return (
    <Section tone="secondary" spacing="loose">
      <Watermark
        symbol="emblem"
        position="bottom-right"
        size={360}
        opacity={0.08}
        rotation={-6}
        tone="dark"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 font-body text-micro uppercase tracking-widest text-walnut/65">
            <span aria-hidden="true" className="text-saffron">
              +
            </span>
            Next step
          </span>
          <Heading as="h2" size="h1" className="mt-5">
            {title}
          </Heading>
          <Text size="lg" className="mt-5 text-ink/85">
            {lead}
          </Text>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/book">Book a consultation</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
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
      </Container>
    </Section>
  );
}
