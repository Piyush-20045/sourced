import Link from "next/link";
import { LayoutPanelLeft, PanelsTopLeft } from "lucide-react";
import { clientRecommendations } from "@/data/dashboard/client-dashboard";

const rowIcons = [PanelsTopLeft, LayoutPanelLeft];

/** Recommended projects/freelancers feed for client */
export function RecommendedFreelancers() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Recommended freelancers</h2>
        <Link
          href="/explore"
          className="text-sm text-muted-foreground hover:underline"
        >
          Browse all →
        </Link>
      </div>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border">
        {clientRecommendations.map((item, i) => {
          const Icon = rowIcons[i % rowIcons.length]!;
          return (
            <div key={item.id} className="flex items-center gap-3 p-4">
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{item.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.status} · {item.budget} · {item.bids} bids
                </p>
              </div>
              <Link
                href="/explore"
                className="ml-auto shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
              >
                View Project
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
