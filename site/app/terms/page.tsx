import { Section } from "@/components/layout/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <Section bg="base" className="pt-32 md:pt-40">
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">LEGAL</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary mb-6">
          Terms & Conditions
        </h1>
        <p className="text-base text-text-secondary leading-relaxed mb-4">
          Horizon Tech Consulting&apos;s terms and conditions will be published before the site launches publicly.
        </p>
        <p className="text-sm text-text-muted">Last updated: 2026</p>
      </div>
    </Section>
  );
}
