import { cn } from "@/lib/utils";

export interface Technology {
  name:  string;
  label: string;
}

interface TechGridProps {
  technologies?: Technology[];
  className?:    string;
}

const placeholderItems = Array.from({ length: 12 }, (_, i) => ({
  name:  `tech-${i}`,
  label: "TBD",
}));

/** 6-col technology grid. Renders skeleton placeholders until real data is provided. */
export function TechGrid({ technologies, className }: TechGridProps) {
  const items = technologies ?? [];
  const isEmpty = items.length === 0;

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
        className
      )}
    >
      {isEmpty
        ? placeholderItems.map((item) => (
            <div
              key={item.name}
              className="bg-bg-surface border border-border rounded-md p-4 flex flex-col items-center gap-2 animate-pulse"
            >
              <div className="w-6 h-6 bg-bg-elevated rounded" />
              <div className="w-8 h-2.5 bg-bg-elevated rounded" />
            </div>
          ))
        : items.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                "bg-bg-surface border border-border rounded-md p-4",
                "flex flex-col items-center gap-2",
                "hover:border-border-strong transition-colors duration-150 group"
              )}
            >
              <div className="w-6 h-6 bg-accent-dim rounded flex items-center justify-center">
                <span className="font-mono text-xs text-accent">
                  {tech.name.slice(0, 1).toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors text-center">
                {tech.label}
              </span>
            </div>
          ))}
    </div>
  );
}
