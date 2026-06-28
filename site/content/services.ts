import { Code2, BrainCircuit, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id:          string;
  icon:        LucideIcon;
  tag:         string;
  title:       string;
  description: string;
  details:     string[];
}

export const services: Service[] = [
  {
    id:          "custom-software",
    icon:        Code2,
    tag:         "CORE",
    title:       "Custom Software Development",
    description:
      "Full bespoke software built from scratch around your specific workflow — not a template dressed up to look custom.",
    details: [
      "Customer-facing applications",
      "Internal operational systems",
      "CRM-style lead management",
      "Attendance & performance tracking",
      "Payments & hierarchy management",
    ],
  },
  {
    id:          "ai-integration",
    icon:        BrainCircuit,
    tag:         "DIFFERENTIATOR",
    title:       "AI-Integrated Solutions",
    description:
      "AI built directly into the codebase with access to your actual data and workflows — enabling deeper automation, predictive analytics, and performance insights.",
    details: [
      "Workflow-aware AI models",
      "Predictive analytics on your data",
      "Automated operations & decisions",
      "Performance insight dashboards",
      "Not a chatbot. Not an add-on.",
    ],
  },
  {
    id:          "mvp",
    icon:        Rocket,
    tag:         "ACTIVE",
    title:       "MVP Development",
    description:
      "A focused, core-feature version of your product built quickly and affordably to validate market fit before full investment.",
    details: [
      "Core feature prioritization",
      "Rapid build cycles",
      "Real-user validation",
      "Clear path to full product",
      "Ownership from day one",
    ],
  },
];
