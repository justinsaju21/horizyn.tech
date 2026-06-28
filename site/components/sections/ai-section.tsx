"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { Check } from "lucide-react";

const DashboardPreview = dynamic(
  () => import("@/components/shared/dashboard-preview").then((m) => m.DashboardPreview),
  { ssr: false }
);

const differentiators = [
  "AI trained on your actual business data",
  "Workflow-native automation — not generic prompts",
  "Predictive analytics built into the core",
  "Real-time performance and operations insight",
];

/** Section 4 — AI Integration deep-dive: copy + dashboard preview. */
export function AiSection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section bg="subtle" id="ai-integration">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={shouldReduce ? {} : slideInLeft}
            className="font-mono text-xs tracking-widest text-accent uppercase mb-3"
          >
            AI INTEGRATION
          </motion.p>
          <motion.h2
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-4xl font-semibold tracking-tight text-text-primary leading-tight mb-4"
          >
            AI that knows your data.{" "}
            <br className="hidden sm:block" />
            Not just the internet&apos;s.
          </motion.h2>
          <motion.p
            variants={shouldReduce ? {} : fadeUp}
            className="text-lg text-text-secondary leading-normal mb-8"
          >
            Most companies bolt a chatbot onto their software and call it AI. That&apos;s
            surface-level. Horizon Tech builds AI directly into the codebase — with
            access to your real workflows, your data, and your team structure.
          </motion.p>
          <motion.ul
            variants={shouldReduce ? {} : stagger}
            className="flex flex-col gap-3"
          >
            {differentiators.map((item) => (
              <motion.li
                key={item}
                variants={shouldReduce ? {} : fadeUp}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-success" aria-hidden="true" />
                </div>
                <span className="text-base text-text-primary">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — dashboard preview */}
        <div>
          <DashboardPreview />
        </div>
      </div>
    </Section>
  );
}
