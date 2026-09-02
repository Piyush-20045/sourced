"use client";
import { paymentsSummary } from "@/data/dashboard/client-dashboard";

/** Client Payments & Escrow activity component */
export function ClientPayments() {
  return (
    <section className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">Payments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          All transactions and escrow activity
        </p>
      </div>

      {/* 3 KPI Summary Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {paymentsSummary.totalSpent}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Total spent</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {paymentsSummary.inEscrow}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">In escrow</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {paymentsSummary.releasedToFreelancers}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Released to freelancers
          </p>
        </div>
      </div>
    </section>
  );
}
