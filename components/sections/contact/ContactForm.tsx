"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/primitives/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * General-purpose enquiry form for the Contact page.
 *
 * Today: client-side validation only — on submit, logs the payload to the
 * console and shows a success state. When the email backend (Resend) is
 * wired in, swap the submit handler for a POST to `/api/contact` and
 * forward to the clinic inbox.
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.info("[contact] submission payload:", data);
    // Simulate a network call so the success state feels intentional
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-walnut/12 bg-mogra p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-marigold" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-h3 text-walnut">Got it. Thank you.</h3>
        <p className="mt-3 font-body text-body text-ink/80">
          A real person on our front desk will be in touch — usually within ten minutes during clinic hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-xl border border-walnut/12 bg-mogra p-6 md:p-8"
    >
      <Field label="Your name" name="name" type="text" required autoComplete="name" />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Field
        label="Tell us what brings you in"
        name="message"
        as="textarea"
        rows={5}
        placeholder="e.g. I'd like to know more about laser hair reduction for face & underarms"
      />
      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="font-body text-caption text-walnut/55">
          We reply within 10 minutes during clinic hours.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

function Field({ label, name, type = "text", as = "input", rows, required, autoComplete, placeholder }: FieldProps) {
  const baseClass =
    "mt-2 w-full rounded-md border border-walnut/15 bg-mogra px-4 py-3 font-body text-body text-walnut placeholder:text-walnut/40 focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/20";
  return (
    <label className="block">
      <span className="font-body text-micro uppercase tracking-widest text-walnut/65">
        {label}
        {required && <span className="text-marigold"> ·</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows ?? 4}
          required={required}
          placeholder={placeholder}
          className={baseClass + " resize-y"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
