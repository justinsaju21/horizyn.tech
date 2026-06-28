import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { homeFaqs } from "@/content/faqs";

/** Section 8 — FAQ short section for home page. */
export function FaqSection() {
  return (
    <Section bg="subtle" id="faq">
      <SectionHeader
        eyebrow="QUESTIONS"
        headline="What you're probably wondering."
      />
      <FaqAccordion faqs={homeFaqs} />
    </Section>
  );
}
