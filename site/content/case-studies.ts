export interface CaseStudy {
  id:          string;
  industry:    string;
  status:      string;
  title:       string;
  description: string;
  tags:        string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id:          "insurance",
    industry:    "Insurance",
    status:      "Currently Building",
    title:       "Sales & Operations Platform",
    description:
      "Custom sales lead management, employee performance tracking, and operations software for an insurance industry client. Built to replace a patchwork of disconnected spreadsheets and generic CRM tools that weren't designed for insurance workflows.",
    tags:        ["Lead Management", "Performance Tracking", "AI Analytics", "Custom CRM"],
  },
  {
    id:          "hospitality",
    industry:    "Hospitality / Resorts",
    status:      "Currently Building",
    title:       "All-in-One Resort Operations",
    description:
      "End-to-end operations platform for a resort client: guest portal, staff management, attendance tracking, performance management, and integrated payments — replacing a collection of separate tools with one system built around how the resort actually runs.",
    tags:        ["Guest Portal", "Staff Management", "Attendance", "Payments"],
  },
];
