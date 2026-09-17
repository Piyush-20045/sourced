import {
  analyticsMetrics,
  analyticsMonths,
  skillEarnings,
} from "@/data/dashboard/freelancer-dashboard";
import { Card } from "@/components/ui/card";

const maxEarnings = Math.max(...analyticsMonths.map((item) => item.earnings));
const maxViews = Math.max(...analyticsMonths.map((item) => item.profileViews));

/** Freelancer performance summary with responsive charts and monthly detail. */
export function FreelancerAnalytics() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold sm:text-3xl">Analytics</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Profile views, win rates, and earnings over time.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {analyticsMetrics.map((metric) => (
          <Card key={metric.label} className="min-w-0 rounded-lg p-4 shadow-sm">
            <p className="text-[10px] font-semibold uppercase text-muted-foreground">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{metric.value}</p>
            <p className="mt-1 text-xs font-medium text-accent">
              {metric.change}
            </p>
          </Card>
        ))}
      </div>

      <ChartCard title="Monthly Earnings (₹)">
        {analyticsMonths.map((item) => (
          <div
            key={item.month}
            className="flex min-w-0 flex-1 flex-col justify-end"
          >
            <p className="mb-2 text-center text-[10px] font-medium text-muted-foreground">
              ₹{Math.round(item.earnings / 1000)}k
            </p>
            <div
              className="min-h-5 rounded-t bg-primary"
              style={{ height: `${(item.earnings / maxEarnings) * 112}px` }}
              aria-label={`${item.month}: ${item.earningsLabel}`}
            />
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              {item.month}
            </p>
          </div>
        ))}
      </ChartCard>

      <ChartCard title="Profile Views">
        {analyticsMonths.map((item) => (
          <div
            key={item.month}
            className="flex min-w-0 flex-1 flex-col justify-end"
          >
            <div
              className="min-h-4 rounded-t bg-chart-2/35"
              style={{ height: `${(item.profileViews / maxViews) * 100}px` }}
              aria-label={`${item.month}: ${item.profileViews} profile views`}
            />
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              {item.month}
            </p>
          </div>
        ))}
      </ChartCard>

      <Card className="rounded-lg p-5 shadow-sm sm:p-6">
        <h3 className="text-sm font-bold">Earnings by Skill</h3>
        <div className="mt-5 space-y-4">
          {skillEarnings.map((item) => (
            <div key={item.skill}>
              <div className="mb-1.5 flex items-center justify-between gap-4 text-xs">
                <span className="text-muted-foreground">{item.skill}</span>
                <span className="font-bold">{item.percentage}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-147.5 border-collapse text-left text-xs">
            <thead>
              <tr className="border-b text-[10px] uppercase text-muted-foreground">
                <th className="px-4 py-3 font-medium sm:px-5">Month</th>
                <th className="px-4 py-3 font-medium sm:px-5">Profile Views</th>
                <th className="px-4 py-3 font-medium sm:px-5">
                  Proposals Sent
                </th>
                <th className="px-4 py-3 font-medium sm:px-5">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {analyticsMonths.map((item) => (
                <tr key={item.month} className="border-b last:border-0">
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    {item.monthLabel}
                  </th>
                  <td className="px-4 py-3 text-muted-foreground sm:px-5">
                    {item.profileViews}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-5">
                    {item.proposalsSent}
                  </td>
                  <td className="px-4 py-3 font-bold text-accent sm:px-5">
                    {item.earningsLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-lg p-5 shadow-sm sm:p-6">
      <h3 className="text-sm font-bold">{title}</h3>
      <div className="mt-5 flex h-36 items-end gap-1.5 sm:gap-2">
        {children}
      </div>
    </Card>
  );
}
