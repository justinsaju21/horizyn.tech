import { ShieldCheck, Hotel, Pencil, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  id:          string;
  icon:        LucideIcon;
  name:        string;
  description: string;
  status:      "active" | "in-progress" | "open";
  isOpen?:     boolean;
}

export const industries: Industry[] = [
  {
    id:          "insurance",
    icon:        ShieldCheck,
    name:        "Insurance",
    description: "Sales lead management, employee performance, and operations software built around insurance workflows.",
    status:      "active",
  },
  {
    id:          "hospitality",
    icon:        Hotel,
    name:        "Hospitality / Resorts",
    description: "End-to-end operations platforms: guest portals, staff management, attendance, payments.",
    status:      "active",
  },
  {
    id:          "interior-design",
    icon:        Pencil,
    name:        "Interior Design & Construction",
    description: "Project management, client portals, and workflow systems for design and construction firms.",
    status:      "in-progress",
  },
  {
    id:          "your-industry",
    icon:        Globe,
    name:        "Your Industry",
    description: "Horizon Tech is industry-agnostic by design. Tell us what you're building — we'll figure it out together.",
    status:      "open",
    isOpen:      true,
  },
];
