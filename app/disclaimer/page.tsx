import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/page/LegalPage";

export const metadata: Metadata = {
  title: "Medical disclaimer",
  description:
    "Information on this site is general — every patient is different. A doctor's consultation is required before any treatment.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Medical disclaimer"
      lead="Information on this site is general. Your skin, hair and body are not."
      lastUpdated="May 2026"
      sections={[
        {
          heading: "This site is general information",
          body: [
            "Articles, treatment descriptions, before/after galleries and FAQs on this website are written for general education. They are not medical advice, a diagnosis, or a treatment recommendation for any specific person.",
          ],
        },
        {
          heading: "Every patient is different",
          body: [
            "Outcomes vary based on skin type, age, hormonal context, lifestyle, prior treatments and many other factors. Results shown on this website are real but represent the individual patient pictured — they are not a guarantee for any future patient.",
          ],
        },
        {
          heading: "A consultation is required",
          body: [
            "Before any aesthetic, dermatological or surgical procedure at Keynu, a doctor will examine you, take a history, and discuss risks and alternatives. We will not start a treatment without that first conversation.",
          ],
        },
        {
          heading: "Risk acknowledgment",
          body: [
            "All medical and aesthetic procedures carry some risk, even minor ones. Common risks (redness, swelling, downtime) and rare risks (infection, pigmentation change, allergic reaction) are explained at consultation and listed on the consent form you sign before any treatment.",
          ],
        },
        {
          heading: "Emergencies",
          body: [
            "If you are experiencing a medical emergency, go to your nearest hospital. We are an aesthetic and wellness clinic, not an emergency facility.",
          ],
        },
      ]}
    />
  );
}
