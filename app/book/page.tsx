import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { FadeIn } from "@/components/primitives/FadeIn";
import { PageHero } from "@/components/sections/page/PageHero";
import { BookingForm } from "@/components/sections/book/BookingForm";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Book a 30-minute consultation with a Keynu doctor — online or on WhatsApp. Real person on the other side, no bot scripts.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a visit"
        title="A 30-minute consultation. __HL__ pitch."
        highlight="No"
        lead="Pick what brings you in, tell us when works, and we'll confirm the exact slot on WhatsApp. A real person on our front desk replies — usually within ten minutes during clinic hours."
      />

      <Section spacing="default">
        <Container width="wide">
          <FadeIn from="bottom">
            <div className="mx-auto max-w-3xl">
              <BookingForm />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
