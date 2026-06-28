import { Section } from "@/components/layout/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section bg="base" className="pt-32 md:pt-40">
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">LEGAL</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-text-secondary">
          <p className="text-base leading-relaxed mb-6">
            At Horizon Tech Consulting, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you engage with our software development and consulting services.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-base leading-relaxed mb-4">
            We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This includes personal information such as your name, email address, phone number, and any project details you share with us.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-base leading-relaxed mb-4">
            We use the information we collect to communicate with you, provide our consulting and development services, and improve our offerings. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Data Security</h2>
          <p className="text-base leading-relaxed mb-4">
            We implement industry-standard security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Contact Us</h2>
          <p className="text-base leading-relaxed mb-8">
            If you have any questions about this Privacy Policy, please contact us through the forms provided on our website.
          </p>

          <p className="text-sm text-text-muted">Last updated: June 2026</p>
        </div>
      </div>
    </Section>
  );
}
