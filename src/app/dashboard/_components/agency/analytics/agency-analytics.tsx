import {
  agencyAnalyticsSummary,
  projectProfitability,
  revenueTrend,
  serviceRevenue,
} from "@/data/dashboard/agency-dashboard";

export function AgencyAnalytics() {
  const maxRevenue = Math.max(...revenueTrend.map((item) => item.revenue));

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          Analytics
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Revenue, pipeline efficiency, capacity, and delivery performance.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {agencyAnalyticsSummary.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-border bg-card p-4 sm:p-5"
          >
            <p className="text-xl font-bold text-primary sm:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
            <p className="mt-3 text-[11px] font-semibold text-emerald-700">
              {item.change} vs last period
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-primary">Revenue trend</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Monthly recognized revenue
              </p>
            </div>
            <p className="text-right text-xl font-bold text-primary">
              ₹54.8L
              <span className="block text-[10px] font-medium text-muted-foreground">
                Year to date
              </span>
            </p>
          </div>
          <div className="mt-8 flex h-56 items-end gap-3 sm:gap-5">
            {revenueTrend.map((item) => (
              <div
                key={item.month}
                className="group flex h-full min-w-0 flex-1 flex-col justify-end"
              >
                <span className="mb-2 text-center text-[10px] font-semibold text-muted-foreground group-hover:text-primary">
                  ₹{Math.round(item.revenue / 1000)}k
                </span>
                <div className="flex flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-primary transition-colors group-hover:bg-primary/80"
                    style={{
                      height: `${Math.max(14, (item.revenue / maxRevenue) * 100)}%`,
                    }}
                    aria-label={`${item.month}: ₹${item.revenue.toLocaleString("en-IN")}`}
                  />
                </div>
                <span className="mt-2 text-center text-[10px] font-bold uppercase text-muted-foreground">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-bold text-primary">Revenue by service</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Share of year-to-date revenue
          </p>
          <div className="mt-6 space-y-5">
            {serviceRevenue.map((item) => (
              <div key={item.service}>
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="font-semibold text-primary">
                    {item.service}
                  </span>
                  <span className="font-bold text-primary">
                    {item.value} · {item.percentage}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-primary">
              Project profitability
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Revenue, delivery progress, and estimated gross margin.
            </p>
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            Target margin: 30%+
          </span>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-170 text-left text-xs">
            <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-3 pr-5 font-bold">Project</th>
                <th className="px-5 py-3 font-bold">Revenue</th>
                <th className="px-5 py-3 font-bold">Delivery</th>
                <th className="py-3 pl-5 font-bold">Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projectProfitability.map((item) => (
                <tr key={item.project}>
                  <td className="py-4 pr-5">
                    <p className="font-bold text-primary">{item.project}</p>
                    <p className="mt-0.5 text-muted-foreground">
                      {item.client}
                    </p>
                  </td>
                  <td className="px-5 py-4 font-bold text-primary">
                    {item.revenue}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {item.delivery}
                  </td>
                  <td className="py-4 pl-5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${item.margin >= 30 ? "bg-emerald-600" : "bg-amber-500"}`}
                          style={{ width: `${item.margin}%` }}
                        />
                      </div>
                      <span
                        className={`font-bold ${item.margin >= 30 ? "text-emerald-700" : "text-amber-700"}`}
                      >
                        {item.margin}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Avg. project duration",
            value: "9.6 weeks",
            note: "−1.2 weeks",
          },
          { label: "Repeat client rate", value: "61%", note: "+8%" },
          { label: "Bench time", value: "11%", note: "−4%" },
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <p className="text-2xl font-bold text-primary">{item.value}</p>
              <p className="text-xs font-bold text-emerald-700">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
