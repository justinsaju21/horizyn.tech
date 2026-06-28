"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon:        LucideIcon;
  title:       string;
  description: string;
  tag?:        string;
  className?:  string;
}

/** Feature card: accent icon container + title + description + optional mono tag. */
export function FeatureCard({ icon: Icon, title, description, tag, className }: FeatureCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : fadeUp}
      whileHover={shouldReduce ? undefined : { y: -2 }}
      className={cn(
        "relative bg-bg-surface rounded-lg border border-border p-6 md:p-8",
        "transition-[border-color,box-shadow,transform] duration-150",
        "hover:border-border-strong hover:shadow-card",
        className
      )}
    >
      {tag && (
        <span className="absolute top-5 right-5 font-mono text-xs tracking-widest text-text-muted bg-bg-elevated border border-border px-2 py-0.5 rounded-sm">
          {tag}
        </span>
      )}
      <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center mb-4">
        <Icon size={20} className="text-accent" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary tracking-tight mb-2">{title}</h3>
      <p className="text-base text-text-secondary leading-normal">{description}</p>
    </motion.div>
  );
}
