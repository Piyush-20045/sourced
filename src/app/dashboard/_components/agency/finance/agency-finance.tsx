"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownLeft, ArrowUpRight, Download, Plus } from "lucide-react";
import {
  agencyInvoices,
  agencyTransactions,
  financeSummary,
  upcomingPayouts,
  type InvoiceStatus,
} from "@/data/dashboard/agency-dashboard";

const invoiceStyles: Record<InvoiceStatus, string> = {
  PAID: "bg-emerald-50 text-emerald-700",
  "DUE SOON": "bg-amber-50 text-amber-700",
  OVERDUE: "bg-rose-50 text-rose-700",
  DRAFT: "bg-slate-100 text-slate-700",
};

export function AgencyFinance() {
  const [status, setStatus] = useState("ALL");
  const invoices = agencyInvoices.filter(
    (invoice) => status === "ALL" || invoice.status === status,
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Finance
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Contracts, client invoices, agency balance, and team payouts.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-4 text-xs font-semibold hover:bg-muted"
          >
            <Download className="size-4" /> Export
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground"
          >
            <Plus className="size-4" /> New invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {financeSummary.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-border bg-card p-4 sm:p-5"
          >
            <p className="text-xl font-bold text-primary sm:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
            <p className="mt-3 text-[11px] font-semibold text-accent">
              {item.change}
            </p>
          </article>
        ))}
      </div>

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-primary">
              Contracts & invoices
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Track client billing against active delivery.
            </p>
          </div>
          <select
            aria-label="Filter invoices"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-9 rounded-lg border border-border bg-background px-3 text-xs font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="ALL">All statuses</option>
            {Object.keys(invoiceStyles).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-190 text-left text-xs">
              <thead className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3.5 font-bold">Invoice</th>
                  <th className="px-5 py-3.5 font-bold">Client / project</th>
                  <th className="px-5 py-3.5 font-bold">Due date</th>
                  <th className="px-5 py-3.5 font-bold">Amount</th>
                  <th className="px-5 py-3.5 font-bold">Status</th>
                  <th className="px-5 py-3.5">
                    <span className="sr-only">Open</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-muted/20">
                    <td className="px-5 py-4 font-bold text-primary">
                      {invoice.id}
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-primary">
                        {invoice.client}
                      </p>
                      <p className="mt-0.5 text-muted-foreground">
                        {invoice.project}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {invoice.dueDate}
                    </td>
                    <td className="px-5 py-4 font-bold text-primary">
                      {invoice.amount}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${invoiceStyles[invoice.status]}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        aria-label={`Open ${invoice.id}`}
                        className="rounded-lg border border-border p-2 hover:bg-muted"
                      >
                        <ArrowUpRight className="size-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-bold text-primary">
            Recent transactions
          </h2>
          <div className="mt-5 divide-y divide-border">
            {agencyTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <span
                  className={`grid size-9 place-items-center rounded-full ${transaction.type === "CREDIT" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}
                >
                  {transaction.type === "CREDIT" ? (
                    <ArrowDownLeft className="size-4" />
                  ) : (
                    <ArrowUpRight className="size-4" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-primary">
                    {transaction.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
                <p
                  className={`text-sm font-bold ${transaction.type === "CREDIT" ? "text-emerald-700" : "text-primary"}`}
                >
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Upcoming payouts</h2>
            <span className="text-xs font-semibold text-muted-foreground">
              This week
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {upcomingPayouts.map((payout) => (
              <div key={payout.id} className="flex items-center gap-3">
                <Image
                  src={payout.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-primary">
                    {payout.member}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Due {payout.due}
                  </p>
                </div>
                <p className="text-sm font-bold text-primary">
                  {payout.amount}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-xl border border-border py-2.5 text-xs font-semibold hover:bg-muted"
          >
            Review payout schedule
          </button>
        </section>
      </div>
    </section>
  );
}
