import { clientStats } from "@/data/dashboard/client-dashboard";

/** Top 4 KPI metrics summary grid for client dashboard. */
export function ClientStatsGrid() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8 lg:grid-cols-4">
      {clientStats.map((s) => (
        <div
          key={s.label}
          className="min-w-0 rounded-lg border border-border p-4"
        >
          <p className="text-lg font-bold sm:text-xl">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
