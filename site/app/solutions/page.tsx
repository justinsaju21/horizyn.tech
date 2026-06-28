"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { industries } from "@/content/industries";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/constants";

const industryDetails: Record<string, { problem: string; built: string }> = {
  insurance: {
    problem:
      "Insurance teams manage leads, track agent performance, and run operations across disconnected spreadsheets and generic CRMs that weren't built for insurance workflows.",
    built:
      "A fully custom platform with lead pipeline management, agent performance dashboards, attendance tracking, and AI-driven insights — all in one system that maps to how the insurance business actually runs.",
  },
  hospitality: {
    problem:
      "Resort and hospitality operators juggle guest experiences, staff schedules, payment systems, and performance management across tools that don't talk to each other.",
    built:
      "An end-to-end operations platform: guest portal, staff management, attendance tracking, performance reviews, and integrated payments — replacing five tools with one system built around how the resort actually operates.",
  },
  "interior-design": {
    problem:
      "Interior design and construction firms manage complex projects, client approvals, vendor coordination, and timelines with no single system built for their workflow.",
    built:
      "Early-stage conversations underway. A project management and client portal solution is being scoped.",
  },
  "your-industry": {
    problem: "",
    built:   "",
  },
};

export default function SolutionsPage() {
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
            SOLUTIONS
          </motion.p>
          <motion.h1
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-6"
          >
            Industry-specific. Built from scratch.
          </motion.h1>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal">
            Horizon Tech is industry-agnostic by design — but our current engagements are in insurance, hospitality, and interior design. Every solution is different. Every one is custom.
          </motion.p>
        </motion.div>
      </Section>

      {/* Industry deep-dive cards */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="BY INDUSTRY"
          headline="The problems we're solving right now."
        />
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {industries.map((industry) => {
            const detail = industryDetails[industry.id];
            if (industry.isOpen) {
              return (
                <motion.div
                  key={industry.id}
                  variants={shouldReduce ? {} : fadeUp}
                  className="bg-accent-dim rounded-lg border border-border-accent p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-accent-dim border border-border-accent flex items-center justify-center">
                      <industry.icon size={20} className="text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-text-primary">{industry.name}</h2>
                  </div>
                  <p className="text-base text-text-secondary leading-normal mb-6">
                    Horizon Tech is industry-agnostic by design. If your business has a workflow problem, a data problem, or a team-visibility problem — we can build around it. Tell us what you&apos;re building.
                  </p>
                  <Link
                    href={BOOKING_URL}
                    className={cn(
                      "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium",
                      "bg-accent text-text-inverted hover:brightness-110 transition-all duration-150"
                    )}
                  >
                    Book a Discovery Call
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={industry.id}
                variants={shouldReduce ? {} : fadeUp}
                className="bg-bg-surface rounded-lg border border-border p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center">
                    <industry.icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-text-primary">{industry.name}</h2>
                  <span className={cn(
                    "ml-auto font-mono text-xs tracking-widest px-2 py-0.5 rounded-sm border",
                    industry.status === "active"
                      ? "text-success bg-success/10 border-success/20"
                      : "text-warning bg-warning/10 border-warning/20"
                  )}>
                    {industry.status === "active" ? "ACTIVE" : "IN PROGRESS"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-2">The Problem</p>
                    <p className="text-base text-text-secondary leading-normal">{detail.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-2">What We Built</p>
                    <p className="text-base text-text-secondary leading-normal">{detail.built}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <CtaBanner
        headline="Your industry might be next."
        subheadline="Horizon Tech adapts to any business with a workflow worth optimizing."
      />
    </>
  );
}
