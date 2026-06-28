"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

/** Abstract SVG dashboard mockup — no real data, precision aesthetic. */
export function DashboardPreview() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="rounded-xl border border-border-accent overflow-hidden"
        style={{
          transform: "perspective(1000px) rotateX(8deg) rotateY(-4deg)",
          boxShadow: "0 20px 80px rgba(99,179,237,0.15), 0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Dashboard chrome */}
        <div className="bg-bg-elevated">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-error opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-success opacity-70" />
              <span className="ml-2 font-mono text-xs text-text-muted tracking-wide">
                operations.horizontech
              </span>
            </div>
            {/* LIVE badge */}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="font-mono text-xs text-success tracking-widest">LIVE</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-4 grid grid-cols-3 gap-3">
            {/* Stat cards */}
            {[
              { label: "LEADS", value: "248", delta: "+12%" },
              { label: "ACTIVE", value: "36", delta: "+4" },
              { label: "PERF.", value: "94%", delta: "+2%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-surface rounded-md border border-border p-3"
              >
                <p className="font-mono text-xs text-text-muted tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className="font-display text-2xl font-semibold text-text-primary">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-accent mt-0.5">{stat.delta}</p>
              </div>
            ))}
          </div>

          {/* Sparkline chart area */}
          <div className="px-4 pb-4">
            <div className="bg-bg-surface rounded-md border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-text-muted tracking-wide">PIPELINE ACTIVITY</span>
                <span className="font-mono text-xs text-accent">7D</span>
              </div>
              <svg
                viewBox="0 0 280 60"
                className="w-full h-16"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                {[15, 30, 45].map((y) => (
                  <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="var(--border)" strokeWidth="0.5" />
                ))}
                {/* Sparkline */}
                <polyline
                  points="0,50 40,35 80,42 120,20 160,28 200,15 240,22 280,10"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Fill */}
                <polygon
                  points="0,50 40,35 80,42 120,20 160,28 200,15 240,22 280,10 280,60 0,60"
                  fill="var(--accent-dim)"
                />
              </svg>
            </div>
          </div>

          {/* Table stub */}
          <div className="px-4 pb-4">
            <div className="bg-bg-surface rounded-md border border-border overflow-hidden">
              <div className="grid grid-cols-4 px-4 py-2 border-b border-border-subtle bg-bg-elevated">
                {["AGENT", "LEADS", "STATUS", "SCORE"].map((h) => (
                  <span key={h} className="font-mono text-xs text-text-muted tracking-wide">
                    {h}
                  </span>
                ))}
              </div>
              {[
                { name: "A. Kumar",  leads: "24", status: "Active", score: "92" },
                { name: "S. Mehta",  leads: "19", status: "Active", score: "87" },
                { name: "R. Patel",  leads: "31", status: "Active", score: "96" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-4 px-4 py-2.5 border-b border-border-subtle last:border-0"
                >
                  <span className="text-xs text-text-secondary">{row.name}</span>
                  <span className="font-mono text-xs text-text-primary">{row.leads}</span>
                  <span className="font-mono text-xs text-success">{row.status}</span>
                  <span className="font-mono text-xs text-accent">{row.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
