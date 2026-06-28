"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { caseStudies } from "@/content/case-studies";
import { cn } from "@/lib/utils";

/** Section 6 — Work preview: 2 anonymized case study cards. */
export function WorkPreviewSection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section bg="subtle" id="case-studies">
      <SectionHeader
        eyebrow="OUR WORK"
        headline="What we're building right now."
        subheadline="Horizon Tech is two months old. Here's an honest look at the work in progress — no fabricated outcomes."
      />

      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10"
      >
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </motion.div>

      {/* Below-grid CTA */}
      <motion.div
        variants={shouldReduce ? {} : fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle"
      >
        <p className="text-sm text-text-muted">
          More case studies coming as projects complete.
        </p>
        <Link
          href="/contact"
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium",
            "bg-accent text-text-inverted hover:brightness-110 transition-all duration-150"
          )}
        >
          Request a Discovery Call
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </motion.div>
    </Section>
  );
}
