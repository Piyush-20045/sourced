'use client';

import {
  analyticsSummary,
} from '@/data/dashboard/client-dashboard';

/** Client Analytics & Spend overview component */
export function ClientAnalytics() {
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
    </section>
  );
}
