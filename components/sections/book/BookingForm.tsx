"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { getAllTreatmentCategories } from "@/lib/content/treatments";
import { cn } from "@/lib/utils/cn";

type Step = 1 | 2 | 3;
type Status = "idle" | "submitting" | "success";

/**
 * Three-step booking flow.
 *
 *  1. Interest — what brings you in (category) + concern/notes
 *  2. Time — preferred date + time window
 *  3. You — name, phone, email
 *
 * Submissions are stored client-side only for now and logged to the
 * console — when KiviHealth's API access is confirmed (or when we wire
 * Resend) the submit handler hits `/api/booking` which will write to
 * Sanity + notify the clinic via email + WhatsApp.
 */
export function BookingForm() {
  const categories = getAllTreatmentCategories();
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    category: "",
    concern: "",
    preferredDate: "",
    preferredWindow: "morning",
    name: "",
    phone: "",
    email: "",
  });

  const update = (key: keyof typeof formData, value: string) =>
    setFormData((d) => ({ ...d, [key]: value }));

  const canAdvance =
    (step === 1 && formData.category) ||
    (step === 2 && formData.preferredDate) ||
    step === 3;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      setStep((s) => (s + 1) as Step);
      return;
    }
    setStatus("submitting");
    // eslint-disable-next-line no-console
    console.info("[booking] submission payload:", formData);
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-walnut/12 bg-mogra p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-marigold" aria-hidden="true" />
        <Heading as="h2" size="h2" className="mt-5">
          Your request is in.
        </Heading>
        <Text size="lg" className="mx-auto mt-4 max-w-xl text-ink/85">
          We&apos;ll confirm your slot on WhatsApp shortly. A real person on our front desk — never a bot.
        </Text>
        <p className="mt-6 font-body text-caption text-walnut/55">
          Reference saved for{" "}
          <span className="font-medium text-walnut">{formData.name || "you"}</span> at{" "}
          <span className="font-medium text-walnut">{formData.preferredDate}</span> ·{" "}
          {formData.preferredWindow}.
        </p>
      </div>
    );
  }

  const stepLabels: Record<Step, string> = {
    1: "What brings you in",
    2: "When works for you",
    3: "How to reach you",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-7 rounded-xl border border-walnut/12 bg-mogra p-6 md:p-10"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-sm",
                step >= n ? "bg-marigold text-mogra" : "bg-sandalwood text-walnut/55",
              )}
            >
              {n}
            </span>
            <span
              className={cn(
                "hidden font-body text-micro uppercase tracking-widest md:inline",
                step >= n ? "text-walnut" : "text-walnut/50",
              )}
            >
              {stepLabels[n as Step]}
            </span>
            {n < 3 && (
              <span
                aria-hidden="true"
                className={cn(
                  "ml-2 hidden h-px flex-1 md:block",
                  step > n ? "bg-marigold" : "bg-walnut/15",
                )}
              />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <Heading as="h2" size="h3">
            What brings you in?
          </Heading>
          <FieldLabel label="Treatment area" required>
            <select
              required
              value={formData.category}
              onChange={(e) => update("category", e.target.value)}
              className="mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
            >
              <option value="">Pick the area you&apos;d like to discuss…</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
              <option value="not-sure">Not sure — I&apos;d like guidance</option>
            </select>
          </FieldLabel>
          <FieldLabel label="Anything else we should know">
            <textarea
              rows={4}
              value={formData.concern}
              onChange={(e) => update("concern", e.target.value)}
              placeholder="e.g. wedding in March, very sensitive skin, post-pregnancy hair fall…"
              className="mt-2 w-full resize-y rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut placeholder:text-walnut/40 focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
            />
          </FieldLabel>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <Heading as="h2" size="h3">
            When works for you?
          </Heading>
          <FieldLabel label="Preferred date" required>
            <input
              type="date"
              required
              value={formData.preferredDate}
              onChange={(e) => update("preferredDate", e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
              className="mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
            />
          </FieldLabel>
          <FieldLabel label="Time of day">
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["morning", "afternoon", "evening"] as const).map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => update("preferredWindow", w)}
                  className={cn(
                    "rounded-md border px-4 py-3 font-body text-caption uppercase tracking-widest transition-colors duration-base",
                    formData.preferredWindow === w
                      ? "border-marigold bg-marigold text-mogra"
                      : "border-walnut/15 bg-mogra text-walnut hover:border-walnut/35",
                  )}
                >
                  {w}
                </button>
              ))}
            </div>
          </FieldLabel>
          <p className="font-body text-caption text-walnut/55">
            We&apos;ll confirm the exact slot on WhatsApp once we receive your request.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <Heading as="h2" size="h3">
            How can we reach you?
          </Heading>
          <FieldLabel label="Your name" required>
            <input
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => update("name", e.target.value)}
              className="mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
            />
          </FieldLabel>
          <div className="grid gap-5 md:grid-cols-2">
            <FieldLabel label="WhatsApp / phone" required>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
              />
            </FieldLabel>
            <FieldLabel label="Email">
              <input
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20"
              />
            </FieldLabel>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-walnut/12 pt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="inline-flex items-center gap-2 font-body text-caption uppercase tracking-widest text-walnut/65 hover:text-walnut"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
          </button>
        ) : (
          <span />
        )}
        <Button type="submit" variant="primary" disabled={!canAdvance || status === "submitting"}>
          {step < 3 ? (
            <>
              Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          ) : status === "submitting" ? (
            "Sending…"
          ) : (
            "Request consultation"
          )}
        </Button>
      </div>
    </form>
  );
}

function FieldLabel({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-body text-micro uppercase tracking-widest text-walnut/65">
        {label}
        {required && <span className="text-marigold"> ·</span>}
      </span>
      {children}
    </label>
  );
}
