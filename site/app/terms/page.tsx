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
        <div className="prose prose-invert max-w-none text-text-secondary">
          <p className="text-base leading-relaxed mb-6">
            These Terms and Conditions govern your use of Horizon Tech Consulting&apos;s website and services. By engaging with us, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Services</h2>
          <p className="text-base leading-relaxed mb-4">
            Horizon Tech Consulting provides custom software development, AI integration, and technical consulting services. Specific deliverables, timelines, and costs will be outlined in a separate Statement of Work (SOW) for each project.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Client Responsibilities</h2>
          <p className="text-base leading-relaxed mb-4">
            Clients are expected to provide timely feedback, necessary access to systems, and accurate requirements to ensure the successful delivery of our services.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-base leading-relaxed mb-4">
            Upon full payment for our services, you will own the intellectual property rights to the custom software we build for you, unless otherwise specified in your SOW. Horizon Tech Consulting retains the rights to any underlying frameworks or pre-existing tools used in the development process.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-base leading-relaxed mb-4">
            Horizon Tech Consulting shall not be liable for any indirect, incidental, or consequential damages arising out of or related to our services or your use of the deliverables.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Contact Information</h2>
          <p className="text-base leading-relaxed mb-8">
            For any questions regarding these Terms and Conditions, please contact us.
          </p>

          <p className="text-sm text-text-muted">Last updated: June 2026</p>
        </div>
      </div>
    </Section>
  );
}
