import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children:  ReactNode;
  className?: string;
  bg?:       "base" | "subtle";
  id?:       string;
}

/** Consistent section wrapper with alternating backgrounds and standard padding. */
export function Section({ children, className, bg = "base", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 lg:py-40",
        bg === "base"   && "bg-bg-base",
        bg === "subtle" && "bg-bg-subtle",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
