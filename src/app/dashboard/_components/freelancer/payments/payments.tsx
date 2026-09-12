import { useState } from "react";
import {
  invoices,
  paymentStats,
  transactions,
  withdrawInfo,
} from "@/data/dashboard/freelancer-dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// badge styles per invoice status / transaction type
const invoiceBadge: Record<string, string> = {
  PARTIAL: "bg-yellow-100 text-yellow-700",
  PAID: "bg-green-100 text-green-700",
  PENDING: "bg-muted text-muted-foreground",
};

const txnBadge: Record<string, string> = {
  RECEIVED: "bg-green-100 text-green-700",
  WITHDRAWN: "bg-red-100 text-red-600",
};

/** Payments section: earnings stats, withdraw banner, and Transactions/Invoices tabs. */
export function Payments() {
  // which tab is active: transaction list or invoice cards
  const [tab, setTab] = useState<"Transactions" | "Invoices">("Transactions");

  return (
    <section className="space-y-6">
      {/* heading */}
      <div>
        <h2 className="text-2xl font-bold sm:text-3xl">Payments</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your earnings, invoices, and withdrawals.
        </p>
      </div>

      {/* earnings stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {paymentStats.map((stat) => (
          <Card key={stat.label} className="rounded-xl shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-medium tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-xl font-bold sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* available-to-withdraw banner */}
      <div className="flex flex-col gap-4 rounded-2xl bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">
            Available to Withdraw
          </p>
          <p className="mt-1 text-3xl font-bold">{withdrawInfo.amount}</p>
          <p className="mt-2 text-sm opacity-70">{withdrawInfo.note}</p>
        </div>
        <Button variant="secondary" className="w-full font-semibold sm:w-auto">
          Withdraw Now
        </Button>
      </div>

      {/* transactions / invoices toggle */}
      <div className="flex gap-3">
        {(["Transactions", "Invoices"] as const).map((label) => (
          <Button
            key={label}
            variant={tab === label ? "default" : "outline"}
            onClick={() => setTab(label)}
            className="rounded-lg"
          >
            {label}
          </Button>
        ))}
      </div>

      {tab === "Transactions" ? (
        /* transactions table (stacks on small screens) */
        <Card className="overflow-hidden rounded-xl shadow-sm">
          <div className="hidden grid-cols-[1.6fr_1fr_1fr_auto] gap-4 border-b px-6 py-3 text-xs font-medium tracking-wider text-muted-foreground sm:grid">
            <span>DESCRIPTION</span>
            <span>DATE</span>
            <span>AMOUNT</span>
            <span className="text-right">TYPE</span>
          </div>
          {transactions.map((txn) => (
            <div
              key={txn.id}
              className="grid grid-cols-2 gap-2 border-b px-6 py-4 last:border-0 sm:grid-cols-[1.6fr_1fr_1fr_auto] sm:items-center sm:gap-4"
            >
              <div className="col-span-2 sm:col-span-1">
                <p className="text-sm font-semibold">{txn.description}</p>
                <p className="text-xs text-muted-foreground">{txn.client}</p>
              </div>
              <p className="text-sm text-muted-foreground">{txn.date}</p>
              <p
                className={`text-sm font-semibold ${
                  txn.type === "WITHDRAWN" ? "text-red-600" : "text-green-700"
                }`}
              >
                {txn.amount}
              </p>
              <span
                className={`justify-self-start rounded-md px-2.5 py-1 text-xs font-semibold sm:justify-self-end ${txnBadge[txn.type]}`}
              >
                {txn.type}
              </span>
            </div>
          ))}
        </Card>
      ) : (
        /* invoice cards */
        <div className="space-y-4">
          {invoices.map((inv) => (
            <Card key={inv.id} className="rounded-xl shadow-sm">
              <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium tracking-wider text-muted-foreground">
                      {inv.invoiceId}
                    </p>
                    <span
                      className={`rounded-md px-2.5 py-0.5 text-xs font-semibold ${invoiceBadge[inv.status]}`}
                    >
                      {inv.status}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold">{inv.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {inv.client} · {inv.due}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <p className="text-lg font-bold">{inv.amount}</p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
