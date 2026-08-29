"use client";
import { contractsSummary } from "@/data/dashboard/client-dashboard";

/** Active contracts view for the Client Dashboard */
export function ActiveContracts() {
  return (
    <section className="space-y-6">
      {/* Header & Mini Summary Stat Cards */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#022b3a]">
            Active contracts
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {contractsSummary.totalContractsCount} contracts —{" "}
            {contractsSummary.totalValue} total value
          </p>
        </div>

        {/* Mini Summary Cards */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-border bg-card px-5 py-3 shadow-xs">
            <p className="text-base font-bold text-[#022b3a]">
              {contractsSummary.amountPaid}
            </p>
            <p className="text-xs text-muted-foreground">Amount paid</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-5 py-3 shadow-xs">
            <p className="text-base font-bold text-[#022b3a]">
              {contractsSummary.remaining}
            </p>
            <p className="text-xs text-muted-foreground">Remaining</p>
          </div>
        </div>
      </div>
    </section>
  );
}
