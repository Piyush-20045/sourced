import { LayoutGrid, Send } from "lucide-react";
import { recommendations } from "../data/dashboard";

const rowIcons = [Send, LayoutGrid];

/** Personalised project suggestions the freelancer can bid on. */
export function Recommended() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Recommended for you</h2>
        <a href="#" className="text-sm text-muted-foreground hover:underline">
          Browse feed →
        </a>
      </div>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border">
        {recommendations.map((rec, i) => {
          const Icon = rowIcons[i % rowIcons.length]!;
          return (
            <div key={rec.id} className="flex items-center gap-3 p-4">
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{rec.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {rec.client} · {rec.budget} · {rec.bids} bids
                </p>
              </div>
              <button className="ml-auto shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">
                Place a bid
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
