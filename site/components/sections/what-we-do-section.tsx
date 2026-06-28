"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { services } from "@/content/services";

/** Section 3 — What We Do Differently: 3 feature cards + scan-lines. */
export function WhatWeDoSection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section bg="base" className="scan-lines" id="services-overview">
      <SectionHeader
        eyebrow="WHAT WE BUILD"
        headline="Built different — from the ground up."
        subheadline='Not bolted on. Not a template. Software engineered around how your business actually runs.'
      />

      <motion.div
        variants={shouldReduce ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {services.map((service) => (
          <FeatureCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tag={service.tag}
          />
        ))}
      </motion.div>

      <motion.p
        variants={shouldReduce ? {} : fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-8 text-center font-mono text-sm text-accent tracking-wide"
      >
        Not bolted on. Built in.
      </motion.p>
    </Section>
  );
}
