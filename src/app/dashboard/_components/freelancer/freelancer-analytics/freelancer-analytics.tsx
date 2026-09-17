import {
  analyticsMetrics,
} from "@/data/dashboard/freelancer-dashboard";
import { Card } from "@/components/ui/card";

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
    </section>
  );
}
