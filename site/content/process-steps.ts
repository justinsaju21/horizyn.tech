export interface ProcessStep {
  number:      string;
  title:       string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number:      "_01",
    title:       "Discovery",
    description: "Understand your workflow, pain points, and goals via a discovery call. No upfront brief required.",
  },
  {
    number:      "_02",
    title:       "Planning & Quote",
    description: "Scope the project, define deliverables, and provide a custom quote. Negotiable based on your budget.",
  },
  {
    number:      "_03",
    title:       "Design",
    description: "Design system architecture and UI/UX around your specific needs — not a generic template.",
  },
  {
    number:      "_04",
    title:       "Development",
    description: "Build from scratch. AI integrated directly into the core codebase, with access to your real data.",
  },
  {
    number:      "_05",
    title:       "Testing",
    description: "Validate the system against your real workflows before launch — not just a QA checklist.",
  },
  {
    number:      "_06",
    title:       "Delivery & Ownership",
    description: "You receive full source code and documentation. No lock-in. No ongoing dependency on us.",
  },
  {
    number:      "_07",
    title:       "Post-Launch Support",
    description: "Ongoing maintenance and security available through trusted partner vendors — we connect you directly.",
  },
];
