import {
  ChartNoAxesCombined,
  ScrollText,
  TabletSmartphone,
} from "lucide-react";
import { activeProjects } from "@/data/dashboard/client-dashboard";

// small helper so each project row gets a different leading icon
const rowIcons = [ChartNoAxesCombined, TabletSmartphone, ScrollText];

/** Renders client's current active ongoing projects */
export function ActiveProjects() {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "IN PROGRESS":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "IN REVIEW":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "COMPLETED":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold">Your active projects</h2>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border">
        {activeProjects.map((p, i) => {
          const Icon = rowIcons[i % rowIcons.length]!;
          return (
            <div key={p.id} className="flex items-center gap-3 p-4">
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{p.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {p.freelancer} · {p.amount}
                </p>
              </div>
              <span
                className={`ml-auto rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${getBadgeStyle(
                  p.status,
                )}`}
              >
                {p.status}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
