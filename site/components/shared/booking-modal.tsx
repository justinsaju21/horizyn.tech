"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  message: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type FormValues = z.infer<typeof schema>;

const inputClass = cn(
  "w-full bg-bg-surface border border-border rounded-md px-4 py-3",
  "text-text-primary placeholder:text-text-muted text-sm",
  "focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent",
  "transition-colors duration-150"
);
const labelClass = "block text-sm font-medium text-text-secondary mb-1.5";
const errorClass = "text-xs text-error mt-1";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        setServerError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setServerError(null);
      reset();
    }, 200);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-bg-surface border border-border rounded-lg shadow-xl p-6 md:p-8 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-base transition-colors"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-success text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Request received</h3>
                  <p className="text-text-secondary text-sm">
                    We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-text-primary mb-1">Book a Call</h2>
                  <p className="text-text-secondary text-sm mb-6">
                    Tell us a bit about your project and we&apos;ll reach out to schedule a time.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
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
                      <label htmlFor="phone" className={labelClass}>
                        Phone <span className="text-error">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-bg-base text-text-secondary text-sm">
                          +91
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel"
                          placeholder="98765 43210"
                          className={cn(
                            inputClass,
                            "rounded-l-none",
                            errors.phone && "border-error focus:ring-error focus:border-error"
                          )}
                          {...register("phone")}
                        />
                      </div>
                      {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message <span className="text-text-muted font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Briefly describe what you need..."
                        className={cn(inputClass, "resize-none", errors.message && "border-error focus:ring-error focus:border-error")}
                        {...register("message")}
                      />
                      {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        id="consentGiven"
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-border accent-accent shrink-0"
                        {...register("consentGiven")}
                      />
                      <label htmlFor="consentGiven" className="text-xs text-text-secondary leading-snug">
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
                    {errors.consentGiven && <p className={errorClass}>{errors.consentGiven.message}</p>}

                    {serverError && (
                      <p className="text-xs text-error bg-error/10 border border-error/20 rounded-md px-3 py-2">
                        {serverError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium mt-2",
                        "bg-accent text-text-inverted",
                        "hover:brightness-110 transition-all duration-150",
                        "disabled:opacity-60 disabled:cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <ArrowRight size={16} aria-hidden="true" />
                      )}
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}