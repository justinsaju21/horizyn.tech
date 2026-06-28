"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { caseStudies } from "@/content/case-studies";
import { stagger, slideInLeft, fadeUp } from "@/lib/animations";
import { Clock } from "lucide-react";

export default function WorkPage() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <Section bg="base" className="pt-32 md:pt-40">
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={shouldReduce ? {} : slideInLeft} className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            OUR WORK
          </motion.p>
          <motion.h1
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-6"
          >
            What we&apos;re building right now.
          </motion.h1>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal">
            Horizon Tech is two months old. We&apos;re not going to show you a portfolio of past projects we didn&apos;t build. Here&apos;s what we&apos;re actually working on — honestly.
          </motion.p>
        </motion.div>
      </Section>

      {/* Case studies */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="ACTIVE ENGAGEMENTS"
          headline="Two live projects. Real clients. Zero fabricated outcomes."
          align="left"
        />
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </motion.div>
      </Section>

      {/* "More coming soon" empty state */}
      <Section bg="base">
        <motion.div
          variants={shouldReduce ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-bg-surface border border-border flex items-center justify-center mx-auto mb-6">
            <Clock size={24} className="text-text-muted" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-3">
            More case studies coming soon.
          </h2>
          <p className="text-base text-text-secondary leading-normal">
            Client confidentiality is our priority. Case studies will be published once
            projects are complete and written permission is granted. No fabricated
            completion percentages, no fake testimonials — just real work, when it&apos;s done.
          </p>
        </motion.div>
      </Section>

      <CtaBanner
        headline="Want to see how we work before the case studies are ready?"
        subheadline="Book a discovery call. We'll walk you through our process in detail."
        primaryLabel="See How We Work"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
