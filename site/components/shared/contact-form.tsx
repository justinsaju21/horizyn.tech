"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const schema = z.object({
  name:        z.string().min(2, "Please enter your name"),
  company:     z.string().optional(),
  email:       z.string().email("Please enter a valid email address"),
  description: z.string().min(20, "Please describe your project in at least 20 characters"),
  budget:      z.string().min(1, "Please select a budget range"),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),

});

type FormValues = z.infer<typeof schema>;

const budgetOptions = [
  "Under ₹5 lakh",
  "₹5 – ₹15 lakh",
  "₹15 – ₹40 lakh",
  "₹40 lakh+",
  "Not sure yet",
];

const inputClass = cn(
  "w-full bg-bg-surface border border-border rounded-md px-4 py-3",
  "text-text-primary placeholder:text-text-muted text-sm",
  "focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent",
  "transition-colors duration-150"
);

const labelClass = "block text-sm font-medium text-text-secondary mb-1.5";
const errorClass = "text-xs text-error mt-1";

/** Contact form with Zod validation and loading state. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-bg-surface rounded-lg border border-border p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-success text-xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message sent</h3>
        <p className="text-text-secondary text-base">
          We&apos;ll review your message and get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-bg-surface rounded-lg border border-border p-6 md:p-8 flex flex-col gap-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={cn(inputClass, errors.name && "border-error focus:ring-error focus:border-error")}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company"
            className={inputClass}
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className={cn(inputClass, errors.email && "border-error focus:ring-error focus:border-error")}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          What are you building? <span className="text-error">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Describe your project, the problem you're solving, and what software you currently use..."
          className={cn(inputClass, "resize-none", errors.description && "border-error focus:ring-error focus:border-error")}
          {...register("description")}
        />
        {errors.description && <p className={errorClass}>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget range <span className="text-error">*</span>
        </label>
        <select
          id="budget"
          className={cn(inputClass, errors.budget && "border-error focus:ring-error focus:border-error")}
          defaultValue=""
          {...register("budget")}
        >
          <option value="" disabled>Select a range...</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
      </div>

      <div className="flex items-start gap-2 pt-1">
      <input
        id="consentGiven"
        type="checkbox"
        className="mt-0.5 h-4 w-4 rounded border-border accent-accent shrink-0"
        {...register("consentGiven")}
      />

      <label
        htmlFor="consentGiven"
        className="text-xs text-text-secondary leading-snug"
      >
        I agree to the{" "}
        <Link
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:no-underline"
        >
          Privacy Policy
        </Link>{" "}
        and consent to my data being processed as described.
      </label>
    </div>

    {errors.consentGiven && (
      <p className={errorClass}>{errors.consentGiven.message}</p>
    )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
          "bg-accent text-text-inverted",
          "hover:brightness-110 transition-all duration-150",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <Loader2 size={16} className="animate-spin" aria-label="Sending..." />
        ) : (
          <ArrowRight size={16} aria-hidden="true" />
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-text-muted text-center">
        We typically reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
