import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contracts } from "@/data/dashboard/freelancer-dashboard";

const filters = ["All", "Active", "Completed", "Draft"] as const;

/** Format a number as a compact Indian rupee label (e.g. 570000 -> 5.7L). */
function formatCompact(value: number) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/** Freelancer contracts: metrics, status filters, and contract cards. */
export function Contracts() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const totalValue = contracts.reduce((sum, c) => sum + c.amountValue, 0);
  const activeCount = contracts.filter((c) => c.status === "ACTIVE").length;
  const avgSize = Math.round(totalValue / contracts.length);

  return (
    <section>
      {/* Section heading + new contract action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Contracts</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {contracts.length} contracts · {activeCount} active
          </p>
        </div>
        <Button type="button" size="sm">
          + New contract
        </Button>
      </div>

      {/* Summary metrics */}
      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
        <div className="rounded-lg border border-border bg-card px-3 py-4 sm:px-4 sm:py-5">
          <p className="text-xl font-bold sm:text-2xl">
            ₹{formatCompact(totalValue)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Total contract value
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card px-3 py-4 sm:px-4 sm:py-5">
          <p className="text-xl font-bold sm:text-2xl">{activeCount}</p>
          <p className="mt-1 text-xs text-muted-foreground">Active contracts</p>
        </div>
        <div className="rounded-lg border border-border bg-card px-3 py-4 sm:px-4 sm:py-5">
          <p className="text-xl font-bold sm:text-2xl">
            ₹{Math.round(avgSize / 1000)}K
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Avg contract size
          </p>
        </div>
      </div>

      {/* Status filters */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((item) => (
          <Button
            key={item}
            type="button"
            variant={filter === item ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </Button>
        ))}
      </div>
    </section>
  );
}
