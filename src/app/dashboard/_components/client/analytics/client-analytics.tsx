"use client";

import {
  analyticsSummary,
  monthlySpendData,
  topCategoriesData,
} from "@/data/dashboard/client-dashboard";

/** Client Analytics & Spend overview component */
export function ClientAnalytics() {
  const maxSpend = Math.max(...monthlySpendData.map((d) => d.amount));

  return (
    <section className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Hiring and spend overview
        </p>
      </div>

      {/* 4 KPI Summary Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {analyticsSummary.totalSpend}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Total spend</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {analyticsSummary.freelancersHired}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Freelancers hired
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {analyticsSummary.projectsCompleted}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Projects completed
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {analyticsSummary.avgRatingGiven}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Avg. rating given
          </p>
        </div>
      </div>

      {/* Monthly Spend Bar Chart Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#022b3a]">
          Monthly spend (₹&apos;000)
        </h2>

        <div className="grid grid-cols-6 items-end gap-3 sm:gap-6 h-48 pt-6 pb-2">
          {monthlySpendData.map((item) => {
            const heightPercent = Math.round((item.amount / maxSpend) * 100);
            return (
              <div
                key={item.month}
                className="group flex flex-col items-center justify-end h-full gap-2 min-w-0"
              >
                <span className="text-xs font-semibold text-muted-foreground transition-colors group-hover:text-[#022b3a]">
                  {item.label}
                </span>

                <div className="w-full max-w-16 flex-1 flex items-end">
                  <div
                    className="w-full bg-[#022b3a] rounded-t-sm transition-all duration-300 group-hover:bg-[#064259]"
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>

                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Categories Hired Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-[#022b3a]">
          Top categories hired
        </h2>

        <div className="space-y-4">
          {topCategoriesData.map((cat) => (
            <div key={cat.id} className="flex items-center gap-4">
              <span className="text-xs font-semibold text-muted-foreground min-w-32.5 sm:min-w-45 shrink-0 truncate">
                {cat.category}
              </span>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-[#022b3a] transition-all duration-300"
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>

              <span className="text-xs font-bold text-[#022b3a] shrink-0 text-right min-w-20">
                {cat.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
