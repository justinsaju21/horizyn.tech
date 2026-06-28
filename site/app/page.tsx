import { HeroHome }           from "@/components/sections/hero-home";
import { ProblemSection }     from "@/components/sections/problem-section";
import { WhatWeDoSection }    from "@/components/sections/what-we-do-section";
import { AiSection }          from "@/components/sections/ai-section";
import { ProcessSection }     from "@/components/sections/process-section";
import { WorkPreviewSection } from "@/components/sections/work-preview-section";
import { IndustriesSection }  from "@/components/sections/industries-section";
import { FaqSection }         from "@/components/sections/faq-section";
import { CtaBanner }          from "@/components/shared/cta-banner";
import type { Metadata }      from "next";

export const metadata: Metadata = {
  title: "Horizon Tech Consulting — AI-Integrated Custom Software",
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProblemSection />
      <WhatWeDoSection />
      <AiSection />
      <ProcessSection />
      <WorkPreviewSection />
      <IndustriesSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
