"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Unlink, Bot, BarChart2 } from "lucide-react";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    icon:        Layers,
    title:       "Generic tools that don't fit",
    description: "Off-the-shelf software forces you to adapt your workflow to the product, not the other way around.",
  },
  {
    icon:        Unlink,
    title:       "Disconnected systems",
    description: "Separate tools for client-facing work and internal operations create data silos and manual overhead.",
  },
  {
    icon:        Bot,
    title:       "Bolted-on AI",
    description: "Most companies wrap a chatbot around existing software and call it AI. It's surface-level — it doesn't know your business.",
  },
  {
    icon:        BarChart2,
    title:       "No operational visibility",
    description: "Without a system built for your data, you can't see employee performance, lead health, or business trends in real time.",
  },
];

/** Section 2 — The Problem: why generic software fails. */
export function ProblemSection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section bg="subtle" id="the-problem">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — headline */}
        <motion.div
          variants={shouldReduce ? {} : slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            THE PROBLEM
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
            Why generic software keeps failing your business
          </h2>
          <p className="text-lg text-text-secondary leading-normal">
            The software market is saturated with subscription tools wrapped in a thin
            layer of "customization." They solve general problems — not yours.
          </p>
        </motion.div>

        {/* Right — 2×2 pain-point grid */}
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {painPoints.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={shouldReduce ? {} : fadeUp}
              className={cn(
                "bg-bg-surface rounded-lg border border-border p-5",
                "hover:border-border-strong transition-colors duration-150"
              )}
            >
              <div className="w-9 h-9 rounded-md bg-accent-dim flex items-center justify-center mb-3">
                <Icon size={18} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-1.5">{title}</h3>
              <p className="text-sm text-text-secondary leading-normal">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
