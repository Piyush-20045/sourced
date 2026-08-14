import { CheckCircle2, Tag, Calendar } from "lucide-react";
import { activeBids } from "../../../data/dashboard";

// small helper so each bid row gets a different leading icon
const rowIcons = [Calendar, Tag, CheckCircle2];

/** List of the freelancer's currently open bids. */
export function ActiveBids() {
  return (
    <section>
      <h2 className="text-xl font-bold">Your active bids</h2>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border">
        {activeBids.map((bid, i) => {
          const Icon = rowIcons[i % rowIcons.length]!;
          return (
            <div key={bid.id} className="flex items-center gap-3 p-4">
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{bid.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {bid.client} · Bid {bid.amount}
                </p>
              </div>
              <span
                className={`ml-auto rounded px-2 py-1 text-[10px] font-semibold tracking-wider ${
                  bid.status === "WON"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {bid.status}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
