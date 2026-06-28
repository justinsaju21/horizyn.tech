"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp, fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/constants";

/** Home page hero — bg-grid + scan-lines + radial glow + gradient headline word. */
export function HeroHome() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center scan-lines bg-bg-base overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none z-0" aria-hidden="true" />

      {/* Radial accent glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,179,237,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-40 flex flex-col items-center text-center"
      >
        {/* Eyebrow badge */}
        <motion.div variants={shouldReduce ? {} : fadeIn} className="mb-6">
          <span
            className={cn(
              "inline-block font-mono text-xs tracking-widest text-accent uppercase",
              "bg-accent-dim border border-border-accent px-4 py-1.5 rounded-full"
            )}
          >
            AI-Integrated Custom Software
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={shouldReduce ? {} : fadeUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-text-primary max-w-4xl mb-6"
        >
          Software built for{" "}
          <span className="gradient-text">your</span>{" "}
          workflow.{" "}
          <br className="hidden md:block" />
          Not adapted to it.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={shouldReduce ? {} : fadeUp}
          className="text-xl text-text-secondary max-w-2xl leading-normal mb-10"
        >
          Horizon Tech builds custom AI-integrated software from the ground up — so you
          own it, control it, and it actually fits how your business works.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduce ? {} : fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={BOOKING_URL}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
              "bg-accent text-text-inverted",
              "hover:brightness-110 shadow-glow transition-all duration-150"
            )}
          >
            Book a Discovery Call
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
              "border border-border-strong text-text-primary",
              "hover:bg-bg-surface hover:border-border-accent transition-colors duration-150"
            )}
          >
            See Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: -4 }}
        animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <ChevronDown
          size={20}
          className="text-text-muted animate-bounce"
        />
      </motion.div>
    </section>
  );
}
