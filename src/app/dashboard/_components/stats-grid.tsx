import { stats } from "../data/dashboard";

/** Four KPI cards shown under the profile header. */
export function StatsGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-border p-4">
          <p className="text-xl font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
