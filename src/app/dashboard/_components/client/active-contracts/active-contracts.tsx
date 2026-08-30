"use client";
import Image from "next/image";
import {
  activeContracts,
  contractsSummary,
} from "@/data/dashboard/client-dashboard";

/** Active contracts view for the Client Dashboard */
export function ActiveContracts() {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "IN PROGRESS":
        return "bg-[#e8f0fe] text-[#1a73e8]";
      case "IN REVIEW":
        return "bg-[#fef7e0] text-[#b06000]";
      case "COMPLETED":
        return "bg-[#e6f4ea] text-[#137333]";
      case "PENDING":
        return "bg-[#f1f3f4] text-[#5f6368]";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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

      {/* Contracts List */}
      <div className="space-y-4">
        {activeContracts.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-xs sm:p-6"
          >
            {/* Top Row: Avatar, Title, Freelancer & Status */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <Image
                  src={c.avatar}
                  alt={c.freelancer}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-base text-[#022b3a]">
                    {c.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">
                    with {c.freelancer} · {c.startDate} → {c.endDate}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <span
                className={`shrink-0 rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${getBadgeStyle(
                  c.status,
                )}`}
              >
                {c.status}
              </span>
            </div>

            {/* Middle Row: Contract Value, Paid So Far & Progress Bar */}
            <div className="mt-5 grid grid-cols-1 gap-4 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-[1fr_1fr_2fr] sm:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Contract Value
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#022b3a]">
                  {c.contractValue}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Paid So Far
                </p>
                <p className="mt-0.5 text-sm font-bold text-emerald-600">
                  {c.paidSoFar}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                    Progress
                  </p>
                  <span className="text-xs font-bold text-[#022b3a]">
                    {c.progress}%
                  </span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-[#022b3a] transition-all duration-300"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Actions */}
            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                className="rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
              >
                View contract
              </button>
              <button
                type="button"
                className="rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
              >
                Message
              </button>

              {c.status !== "COMPLETED" && (
                <button
                  type="button"
                  className="ml-auto rounded-xl bg-[#022b3a] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#064259]"
                >
                  Release payment
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
