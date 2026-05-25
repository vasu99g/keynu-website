import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/page/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Keynu collects, stores and uses your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      lead="What we collect, why we collect it, and how it's protected. Short, plain-spoken."
      lastUpdated="May 2026"
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you book a consultation, fill in our contact form, or message us on WhatsApp we collect your name, phone number, email address, and any medical or aesthetic concern you share. When you become a patient we also keep clinical records and treatment photographs (always with written consent).",
            "We don't collect anything we don't need.",
          ],
        },
        {
          heading: "Why we collect it",
          body: [
            "To run your appointment, deliver your treatment safely, send you aftercare instructions, and follow up on your progress. Clinical records are mandatory under Indian medical guidelines.",
          ],
        },
        {
          heading: "Who can see it",
          body: [
            "Inside the clinic, only the doctors and staff directly involved in your care. We do not sell or share patient data with marketing or analytics third parties.",
            "Anonymised photographs are only used in publications, social posts, or before/after galleries with explicit written consent.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Clinical records: minimum 7 years, in line with Indian Medical Council guidance.",
            "Marketing data (enquiries you make before becoming a patient): up to 2 years, after which we delete it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can request a copy of your records, ask us to correct anything that's wrong, or ask us to delete non-medical data. Email infokeynu@gmail.com or speak to our front desk. We'll respond within 7 working days.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "The website uses minimal cookies — first-party analytics to understand which pages people find useful. No advertising trackers. You can disable cookies in your browser without losing any site functionality.",
          ],
        },
      ]}
    />
  );
}
