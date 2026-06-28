import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  generic: boolean | string;
  horizon: boolean | string;
}

const rows: ComparisonRow[] = [
  { feature: "Built around your workflow",     generic: false,     horizon: true  },
  { feature: "You own the source code",        generic: false,     horizon: true  },
  { feature: "AI in the core codebase",        generic: false,     horizon: true  },
  { feature: "No vendor lock-in",              generic: false,     horizon: true  },
  { feature: "Custom reporting & analytics",   generic: "Limited", horizon: true  },
  { feature: "Integration with your systems",  generic: "Limited", horizon: true  },
  { feature: "Scales with your business",      generic: "Limited", horizon: true  },
  { feature: "Priced per project complexity",  generic: false,     horizon: true  },
];

interface ComparisonTableProps {
  className?: string;
}

/** Comparison table: Generic SaaS vs. Horizon Tech. */
export function ComparisonTable({ className }: ComparisonTableProps) {
  return (
    <div className={cn("overflow-x-auto rounded-lg border border-border", className)}>
      <table className="w-full min-w-[480px] text-sm" role="table">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-4 px-6 text-left font-medium text-text-muted bg-bg-elevated">
              Feature
            </th>
            <th scope="col" className="py-4 px-6 text-left font-medium text-text-muted bg-bg-elevated">
              Generic SaaS
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left font-semibold text-accent bg-accent-dim"
            >
              Horizon Tech
              <span className="ml-2 inline-block font-mono text-xs tracking-wide text-accent-dim border border-border-accent rounded-sm px-1.5 py-0.5">
                RECOMMENDED
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {rows.map((row) => (
            <tr key={row.feature} className="bg-bg-surface hover:bg-bg-elevated transition-colors duration-100">
              <td className="py-4 px-6 text-text-primary">{row.feature}</td>
              <td className="py-4 px-6">
                {row.generic === false ? (
                  <span className="flex items-center gap-1.5 text-text-muted">
                    <X size={15} className="text-error" aria-label="No" />
                    No
                  </span>
                ) : (
                  <span className="text-text-muted">{row.generic}</span>
                )}
              </td>
              <td className="py-4 px-6">
                {row.horizon === true ? (
                  <span className="flex items-center gap-1.5 text-text-primary">
                    <Check size={15} className="text-success" aria-label="Yes" />
                    Yes
                  </span>
                ) : (
                  <span className="text-accent">{row.horizon}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
