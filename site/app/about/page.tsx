"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { Lightbulb, ShieldCheck, Fingerprint } from "lucide-react";

const values = [
  {
    icon:  Lightbulb,
    title: "Innovation",
    body:  "Building deeply integrated AI solutions, not surface-level add-ons. We pursue the kind of ground-up AI integration that larger, risk-averse companies won't attempt.",
  },
  {
    icon:  ShieldCheck,
    title: "Client Ownership",
    body:  "Clients own their code and systems outright. Zero vendor lock-in. Zero ongoing dependency. You receive full source code and documentation on delivery.",
  },
  {
    icon:  Fingerprint,
    title: "Customization",
    body:  "Every solution is built from scratch around the client's actual workflow — not a template, not a SaaS tool in disguise. If it doesn't fit you exactly, it isn't done.",
  },
];

const teamPlaceholders = [
  { initials: "TBD", role: "Founder & CEO" },
  { initials: "TBD", role: "Senior Developer" },
  { initials: "TBD", role: "Developer" },
  { initials: "TBD", role: "Developer" },
  { initials: "TBD", role: "Marketing" },
  { initials: "TBD", role: "Marketing" },
];

const visionPoints = [
  "Expand into cloud management, security, and maintenance — in-house",
  "Build a recognized brand around bespoke, AI-integrated software",
  "Grow from a custom dev studio into a full-service software company",
];

export default function AboutPage() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* Hero — founding story */}
      <Section bg="base" className="pt-32 md:pt-40">
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={shouldReduce ? {} : slideInLeft} className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            ABOUT
          </motion.p>
          <motion.h1
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-6"
          >
            Why we started Horizon Tech.
          </motion.h1>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal mb-4">
            The software market is full of generic, subscription-based tools dressed up as custom solutions. Most companies aren&apos;t willing to build AI deeply into a client&apos;s codebase — the risk feels too high.
          </motion.p>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal">
            The Horizon Tech founding team — some still studying, some with prior industry experience — came together around a simple belief: there has to be a better way. Being small means we can pursue the kind of deep, ground-up integration that larger companies won&apos;t attempt.
          </motion.p>
        </motion.div>
      </Section>

      {/* Values */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="VALUES"
          headline="What we believe in. What we build around."
        />
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {values.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={shouldReduce ? {} : fadeUp}
              className="bg-bg-surface rounded-lg border border-border p-6 md:p-8"
            >
              <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center mb-4">
                <Icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-base text-text-secondary leading-normal">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team */}
      <Section bg="base">
        <SectionHeader
          eyebrow="THE TEAM"
          headline="Six people. Two active clients. Founded 2026."
          subheadline="Names, roles, and photos to follow from the founder. Until then — meet the placeholders."
        />
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {teamPlaceholders.map((member, i) => (
            <motion.div
              key={i}
              variants={shouldReduce ? {} : fadeUp}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-bg-surface border border-border flex items-center justify-center">
                <span className="font-mono text-xs text-text-muted tracking-widest">
                  {member.initials}
                </span>
              </div>
              <p className="font-mono text-xs text-text-muted text-center tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Vision */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="VISION"
          headline="Where we're headed in three years."
          align="left"
        />
        <motion.ul
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          {visionPoints.map((point, i) => (
            <motion.li
              key={i}
              variants={shouldReduce ? {} : slideInLeft}
              className="flex items-start gap-4"
            >
              <span className="font-mono text-sm text-accent shrink-0 mt-0.5">
                {`_0${i + 1}`}
              </span>
              <span className="text-lg text-text-primary leading-normal">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <CtaBanner
        headline="Meet the team behind the work."
        subheadline="Book a discovery call and talk directly with the people who'll build your software."
        primaryLabel="Meet the Team"
      />
    </>
  );
}
