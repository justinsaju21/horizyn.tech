"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/content/faqs";

interface FaqAccordionProps {
  faqs:       FAQ[];
  className?: string;
}

/** Accessible FAQ accordion with animated height expansion. */
export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex]  = useState<number | null>(null);
  const shouldReduce               = useReducedMotion();

  return (
    <div className={cn("divide-y divide-border max-w-2xl mx-auto", className)}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              className="w-full py-5 flex justify-between items-center gap-4 cursor-pointer text-left"
            >
              <span className="text-base font-medium text-text-primary">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={cn(
                  "text-text-muted shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  key="content"
                  initial={shouldReduce ? {} : { height: 0, opacity: 0 }}
                  animate={shouldReduce ? {} : { height: "auto", opacity: 1 }}
                  exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-text-secondary leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
