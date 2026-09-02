"use client";

import { CreditCard, FileText } from "lucide-react";
import {
  billingSummary,
  invoiceHistory,
  paymentMethods,
} from "@/data/dashboard/client-dashboard";

/** Billing and payment history view for the Client Dashboard */
export function ClientBilling() {
  return (
    <section className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">Billing</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Payment methods and invoice history
        </p>
      </div>

      {/* 3 Summary Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {billingSummary.totalSpent}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Total spent</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {billingSummary.overdue}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Overdue</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {billingSummary.savedCardsCount}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Saved cards</p>
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
            + Add card
          </button>
        </div>

        <div className="space-y-3">
          {paymentMethods.map((pm) => (
            <div
              key={pm.id}
              className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/60 text-[#022b3a] shrink-0">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-sm text-[#022b3a]">
                    {pm.cardBrand} ending {pm.last4}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Expires {pm.expiryDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                {pm.isPrimary && (
                  <span className="rounded-md bg-[#e6f4ea] px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#137333] uppercase">
                    Primary
                  </span>
                )}
                <button
                  type="button"
                  className="rounded-xl border border-border bg-background px-4 py-1.5 text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invoice History Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#022b3a]">Invoice history</h2>

        <div className="divide-y divide-border">
          {invoiceHistory.map((inv) => (
            <div
              key={inv.id}
              className="flex flex-col justify-between gap-4 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-sm text-[#022b3a]">
                    {inv.description}
                  </h3>
                  <p className="text-xs text-muted-foreground">{inv.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="font-bold text-sm text-[#022b3a]">
                  {inv.amount}
                </span>

                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                    inv.status === "PAID"
                      ? "bg-[#e6f4ea] text-[#137333]"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {inv.status}
                </span>

                <button
                  type="button"
                  className="rounded-xl border border-border bg-background px-4 py-1.5 text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
