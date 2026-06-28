"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { CtaBanner } from "@/components/shared/cta-banner";
import { services } from "@/content/services";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/constants";

const notOffered = [
  {
    title:       "Maintenance & Security",
    description: "Available via trusted partner vendors. We connect you directly.",
  },
  {
    title:       "DevOps / Cloud Migration",
    description: "Currently outsourced. Planned in-house as the team grows.",
  },
  {
    title:       "API Development & Staff Augmentation",
    description: "Under consideration for future growth.",
  },
];

const processPreview = [
  { step: "_01", label: "Discover",  body: "A 30-minute call to understand your workflow." },
  { step: "_02", label: "Build",     body: "Full build from scratch around your requirements." },
  { step: "_03", label: "Own",       body: "You receive the source code — no lock-in, ever." },
];

export default function ServicesPage() {
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
            SERVICES
          </motion.p>
          <motion.h1
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-6"
          >
            What we build — and how we build it.
          </motion.h1>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal mb-8">
            Every service Horizon Tech offers starts with one question: what does your business actually need? Then we build exactly that — from scratch.
          </motion.p>
          <motion.div variants={shouldReduce ? {} : fadeUp}>
            <Link
              href={BOOKING_URL}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium",
                "bg-accent text-text-inverted hover:brightness-110 shadow-glow transition-all duration-150"
              )}
            >
              Request a Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* Service detail cards */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="WHAT WE OFFER"
          headline="Three services. One approach."
          subheadline="Built around your workflow, owned by you from day one."
          align="left"
        />
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={shouldReduce ? {} : fadeUp}
              className="bg-bg-surface rounded-lg border border-border p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center">
                    <service.icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-text-muted border border-border bg-bg-elevated px-2 py-0.5 rounded-sm">
                    {service.tag}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-text-primary tracking-tight mb-3">
                  {service.title}
                </h2>
                <p className="text-base text-text-secondary leading-normal">
                  {service.description}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Check size={15} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-base text-text-primary">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* What's not included */}
      <Section bg="base">
        <SectionHeader
          eyebrow="TRANSPARENCY"
          headline="What we don't offer yet."
          subheadline="Honest about scope. These are available via trusted partner vendors."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notOffered.map((item) => (
            <div key={item.title} className="bg-bg-surface rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section bg="subtle">
        <SectionHeader
          eyebrow="COMPARISON"
          headline="Horizon Tech vs. generic SaaS."
        />
        <ComparisonTable />
      </Section>

      {/* Process preview */}
      <Section bg="base">
        <SectionHeader
          eyebrow="THE PROCESS"
          headline="Three things you can always count on."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-lg overflow-hidden">
          {processPreview.map((item, i) => (
            <div
              key={item.step}
              className={cn(
                "p-6 md:p-8",
                i < processPreview.length - 1 && "border-b md:border-b-0 md:border-r border-border"
              )}
            >
              <span className="font-mono text-sm text-accent tracking-widest block mb-3">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{item.label}</h3>
              <p className="text-base text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        headline="Not sure what you need? That's what the discovery call is for."
        subheadline="Tell us about your business. We'll figure out the right scope together."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
