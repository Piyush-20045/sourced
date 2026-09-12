import { useState } from "react";
import {
  paymentStats,
  withdrawInfo,
} from "@/data/dashboard/freelancer-dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
        <div>
          this is transactions tab
        </div>
      ) : (
        /* invoice cards */
        <div className="space-y-4">
          this is invoice tab
        </div>
      )}
    </section>
  );
}
