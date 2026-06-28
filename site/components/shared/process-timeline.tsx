"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerSlow, slideInLeft } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/content/process-steps";

interface ProcessTimelineProps {
  steps:      ProcessStep[];
  className?: string;
}

/** Horizontal stepper on desktop, vertical on mobile. */
export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : staggerSlow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0",
        className
      )}
    >
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          variants={shouldReduce ? {} : slideInLeft}
          className="relative flex flex-col gap-3 p-6 border-b border-border-subtle lg:border-b-0 lg:border-r last:border-0"
        >
          {/* Step number */}
          <span className="font-mono text-sm text-accent tracking-widest">
            {step.number}
          </span>

          {/* Horizontal connector dot (desktop) */}
          {i < steps.length - 1 && (
            <div
              className="hidden lg:block absolute top-[2.6rem] right-0 translate-x-1/2 w-2 h-2 rounded-full bg-border-strong z-10"
              aria-hidden="true"
            />
          )}

          <h3 className="text-xl font-semibold text-text-primary tracking-tight">
            {step.title}
          </h3>
          <p className="text-base text-text-secondary leading-normal">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
