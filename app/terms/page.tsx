import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/page/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern your use of Keynu's clinic and website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      lead="Plain-language terms for booking, cancellations, refunds and the use of this website."
      lastUpdated="May 2026"
      sections={[
        {
          heading: "Bookings",
          body: [
            "Booking a consultation reserves clinic time for you. We confirm every appointment on WhatsApp.",
            "First visits are always a 30-minute consultation. We will not start a treatment on the first visit unless it is medically clear and you have specifically asked for it.",
          ],
        },
        {
          heading: "Pricing",
          body: [
            "Treatment costs depend on your skin or body type, the area treated, and the number of sessions. We share a written estimate after consultation and before any treatment begins.",
            "No hidden add-ons. No upsells on the chair. If the plan needs to change, we discuss it with you first.",
          ],
        },
        {
          heading: "Cancellations & rescheduling",
          body: [
            "You can cancel or reschedule any appointment by WhatsApping the front desk at least 4 hours before your slot — no cancellation charge for one reschedule per appointment.",
            "Late cancellations (under 4 hours) or no-shows may forfeit the booking. We will always try to work with you.",
          ],
        },
        {
          heading: "Refunds",
          body: [
            "Pre-paid packages: you can request a refund on unused sessions at any time. We deduct only what's been used at the per-session rate. No long-tail lock-ins.",
            "One-off treatments: refunds are not offered after a treatment has been delivered, but if you're unhappy we always offer a no-charge review.",
          ],
        },
        {
          heading: "Website use",
          body: [
            "The content on this website is for general information. It does not constitute medical advice. A doctor's consultation is required before any treatment is recommended or delivered.",
          ],
        },
      ]}
    />
  );
}
