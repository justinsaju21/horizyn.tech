"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/content/case-studies";

interface CaseStudyCardProps {
  study:     CaseStudy;
  className?: string;
}

/** Case study card with "Currently Building" status badge and no fabricated metrics. */
export function CaseStudyCard({ study, className }: CaseStudyCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      variants={shouldReduce ? {} : scaleIn}
      className={cn(
        "bg-bg-surface rounded-lg border border-border p-6 md:p-8",
        "flex flex-col gap-4",
        className
      )}
    >
      {/* Header badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs tracking-widest text-accent bg-accent-dim border border-border-accent px-2.5 py-1 rounded-sm">
          {study.industry}
        </span>
        <span className="font-mono text-xs tracking-widest text-text-muted bg-bg-elevated border border-border px-2.5 py-1 rounded-sm">
          {study.status}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold text-text-primary tracking-tight mb-3">
          {study.title}
        </h3>
        <p className="text-base text-text-secondary leading-normal">
          {study.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-text-muted bg-bg-elevated border border-border px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
