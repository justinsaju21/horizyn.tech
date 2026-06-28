"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/shared/contact-form";
import { stagger, fadeUp, slideInLeft } from "@/lib/animations";
import { CalendarDays, Mail, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, BOOKING_URL } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What happens after I send a message?",
    a: "We'll read it within one business day and reply with either a follow-up question or a suggested time for a discovery call.",
  },
  {
    q: "Do I need to prepare a full brief?",
    a: "No. The discovery call is designed to help us understand your needs. Just show up with a rough idea of the problem you're trying to solve.",
  },
  {
    q: "Is the discovery call free?",
    a: "Yes. It's a 30-minute conversation. No commitment, no fee, no pressure.",
  },
];

export default function ContactPage() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <Section bg="base" className="pt-32 md:pt-40">
        <motion.div
          variants={shouldReduce ? {} : stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={shouldReduce ? {} : slideInLeft} className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            CONTACT
          </motion.p>
          <motion.h1
            variants={shouldReduce ? {} : fadeUp}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-4 max-w-2xl"
          >
            Let&apos;s talk about what you&apos;re building.
          </motion.h1>
          <motion.p variants={shouldReduce ? {} : fadeUp} className="text-xl text-text-secondary leading-normal max-w-xl">
            Start with a message or book a 30-minute discovery call. No commitment, no briefing deck required.
          </motion.p>
        </motion.div>
      </Section>

      {/* Form + right column */}
      <Section bg="subtle">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — form */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Right — booking + contact info */}
          <motion.div
            variants={shouldReduce ? {} : stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            {/* Book a call card */}
            <motion.div
              variants={shouldReduce ? {} : fadeUp}
              className="bg-bg-surface rounded-lg border border-border-accent p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center">
                  <CalendarDays size={20} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">Book a Discovery Call</h3>
              </div>
              <p className="text-base text-text-secondary leading-normal mb-5">
                A 30-minute conversation where we learn about your business, your workflow, and what you want to build. No prep required.
              </p>
              <Link
                href={BOOKING_URL}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium",
                  "bg-accent text-text-inverted hover:brightness-110 transition-all duration-150"
                )}
              >
                Schedule a Call
              </Link>
              <p className="text-xs text-text-muted mt-3">
                Calendly integration coming soon. Use the form for now.
              </p>
            </motion.div>

            {/* Contact details */}
            <motion.div
              variants={shouldReduce ? {} : fadeUp}
              className="bg-bg-surface rounded-lg border border-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail size={18} className="text-text-muted" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-text-muted tracking-wide mb-0.5">EMAIL</p>
                  {CONTACT_EMAIL ? (
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  ) : (
                    <p className="text-sm text-text-muted italic">Coming soon</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-border-subtle pt-4">
                <MessageSquare size={18} className="text-text-muted" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-text-muted tracking-wide mb-0.5">RESPONSE TIME</p>
                  <p className="text-sm text-text-primary">Within one business day</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ mini-section */}
      <Section bg="base">
        <h2 className="font-display text-2xl font-semibold text-text-primary mb-8">
          What happens next?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-surface rounded-lg border border-border p-5">
              <p className="font-mono text-xs text-accent tracking-wide mb-2">{`_0${i + 1}`}</p>
              <p className="text-base font-medium text-text-primary mb-2">{faq.q}</p>
              <p className="text-sm text-text-secondary leading-normal">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
