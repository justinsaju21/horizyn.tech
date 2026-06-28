import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { processSteps } from "@/content/process-steps";

/** Section 5 — How it works: 7-step process timeline. */
export function ProcessSection() {
  return (
    <Section bg="base" id="process">
      <SectionHeader
        eyebrow="HOW IT WORKS"
        headline="From discovery to delivery — you own every step."
        subheadline="No black boxes. No lock-in. A clear process from the first conversation to full code ownership."
      />
      <ProcessTimeline steps={processSteps} />
    </Section>
  );
}
