"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

const statusLabel: Record<string, string> = {
  active:      "ACTIVE",
  "in-progress": "IN PROGRESS",
  open:        "OPEN",
};

/** Section 7 — Industries served. */
export function IndustriesSection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section bg="base" id="industries">
      <SectionHeader
        eyebrow="INDUSTRIES"
        headline="Industry-specific. Built from scratch."
        subheadline="Horizon Tech is industry-agnostic by design — we build around your workflow, whatever your sector."
      />

      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {industries.map(({ id, icon: Icon, name, description, status, isOpen }) => (
          <motion.div
            key={id}
            variants={shouldReduce ? {} : fadeUp}
            className={cn(
              "rounded-lg border p-6 flex flex-col gap-4",
              "transition-[border-color] duration-150",
              isOpen
                ? "bg-accent-dim border-border-accent hover:border-accent"
                : "bg-bg-surface border-border hover:border-border-strong"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center shrink-0">
                <Icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <span className={cn(
                "font-mono text-xs tracking-widest px-2 py-0.5 rounded-sm border",
                status === "active"
                  ? "text-success bg-success/10 border-success/20"
                  : status === "in-progress"
                  ? "text-warning bg-warning/10 border-warning/20"
                  : "text-accent bg-accent-dim border-border-accent"
              )}>
                {statusLabel[status]}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary tracking-tight mb-2">
                {name}
              </h3>
              <p className="text-sm text-text-secondary leading-normal">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
