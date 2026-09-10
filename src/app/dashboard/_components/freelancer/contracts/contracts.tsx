import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  contracts,
  type ContractStatus,
} from "@/data/dashboard/freelancer-dashboard";

const filters = ["All", "Active", "Completed", "Draft"] as const;

const statusStyles: Record<ContractStatus, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-800",
  COMPLETED: "bg-muted text-muted-foreground",
  DRAFT: "bg-yellow-100 text-yellow-800",
};

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

  const visibleContracts = contracts.filter(
    (contract) => filter === "All" || contract.status === filter.toUpperCase(),
  );

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

      {/* Contract list */}
      <div className="mt-4 space-y-3">
        {visibleContracts.map((contract) => {
          const progress = contract.amountValue
            ? Math.round((contract.paid / contract.amountValue) * 100)
            : 0;

          return (
            <article
              key={contract.id}
              className="rounded-lg border border-border bg-card p-4 sm:p-5"
            >
              {/* Top row: contract id + title + amount/status */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-8 shrink-0 place-items-center rounded bg-muted px-2 text-xs font-mono font-semibold text-muted-foreground">
                    {contract.contractId}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold">{contract.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      With {contract.client} · {contract.dateRange}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <p className="font-bold">{contract.amount}</p>
                  <span
                    className={`rounded px-2 py-1 text-[10px] font-semibold tracking-wide uppercase ${statusStyles[contract.status]}`}
                  >
                    {contract.status}
                  </span>
                </div>
              </div>

              {/* Bottom row: progress bar + paid text + actions */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="w-full sm:w-1/2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                      aria-label={`${progress}% paid`}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs text-muted-foreground">
                    {contract.paidLabel} of {contract.amount} paid
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    View
                  </Button>
                  {contract.status === "ACTIVE" && (
                    <Button type="button" size="sm">
                      Release payment
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {visibleContracts.length === 0 && (
          <div className="rounded-lg border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
            No contracts match this status.
          </div>
        )}
      </div>
    </section>
  );
}
