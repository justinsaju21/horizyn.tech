"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  headline?:    string;
  subheadline?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?:  string;
  className?:   string;
}

/** Full-width conversion banner. Used on every page except /contact. */
export function CtaBanner({
  headline    = "Ready to build software that actually works the way you do?",
  subheadline = "Start with a 30-minute discovery call. No commitment.",
  primaryLabel   = "Book a Discovery Call",
  secondaryLabel,
  secondaryHref,
  className,
}: CtaBannerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className={cn(
        "py-24 md:py-32 bg-bg-base border-t border-border-subtle relative overflow-hidden",
        className
      )}
      aria-label="Call to action"
    >
      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center"
      >
        <motion.h2
          variants={shouldReduce ? {} : fadeUp}
          className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-4 max-w-3xl mx-auto"
        >
          {headline}
        </motion.h2>
        <motion.p
          variants={shouldReduce ? {} : fadeUp}
          className="text-lg text-text-secondary mb-10 max-w-xl mx-auto"
        >
          {subheadline}
        </motion.p>
        <motion.div
          variants={shouldReduce ? {} : fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={BOOKING_URL}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
              "bg-accent text-text-inverted",
              "hover:brightness-110 shadow-glow transition-all duration-150"
            )}
          >
            {primaryLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
                "border border-border-strong text-text-primary",
                "hover:bg-bg-surface hover:border-border-accent transition-colors duration-150"
              )}
            >
              {secondaryLabel}
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
