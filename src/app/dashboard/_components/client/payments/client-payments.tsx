"use client";
import { CreditCard, Landmark, Receipt } from "lucide-react";
import {
  paymentAccountMethods,
  paymentsSummary,
  transactionHistory,
} from "@/data/dashboard/client-dashboard";

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

      {/* Payment Methods Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#022b3a]">
            Payment methods
          </h2>
          <button
            type="button"
            className="rounded-xl bg-[#022b3a] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#064259]"
          >
            + Add method
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {paymentAccountMethods.map((pa) => (
            <div
              key={pa.id}
              className="flex items-center gap-3.5 rounded-xl border border-border bg-background p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/60 text-[#022b3a] shrink-0">
                {pa.type === "bank" ? (
                  <Landmark className="h-5 w-5" />
                ) : (
                  <CreditCard className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-bold text-xs sm:text-sm text-[#022b3a]">
                  {pa.name} •••• {pa.mask}
                </h3>
                <p className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">
                  {pa.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#022b3a]">
          Transaction history
        </h2>

        <div className="divide-y divide-border">
          {transactionHistory.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col justify-between gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground shrink-0">
                  <Receipt className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-sm text-[#022b3a]">
                    {tx.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">
                    {tx.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                <span className="font-bold text-sm text-[#022b3a]">
                  {tx.amount}
                </span>

                <span
                  className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                    tx.status === "COMPLETED"
                      ? "bg-[#e6f4ea] text-[#137333]"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
