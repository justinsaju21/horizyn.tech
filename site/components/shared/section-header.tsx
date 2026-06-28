"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, fadeUp, stagger } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?:     string;
  headline:     string;
  subheadline?: string;
  align?:       "center" | "left";
  className?:   string;
}

/** Reusable section header: mono eyebrow + display headline + body subheadline. */
export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = "center",
  className,
}: SectionHeaderProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        align === "left"   && "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={shouldReduce ? {} : fadeIn}
          className="font-mono text-xs tracking-widest text-accent uppercase mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={shouldReduce ? {} : fadeUp}
        className={cn(
          "font-display text-4xl font-semibold tracking-tight text-text-primary mb-4",
          "leading-tight"
        )}
      >
        {headline}
      </motion.h2>
      {subheadline && (
        <motion.p
          variants={shouldReduce ? {} : fadeUp}
          className={cn(
            "text-lg text-text-secondary leading-normal",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subheadline}
        </motion.p>
      )}
    </motion.div>
  );
}
