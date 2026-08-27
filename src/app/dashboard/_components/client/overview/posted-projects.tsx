import Link from "next/link";
import { postedProjects } from "@/data/dashboard/client-dashboard";

/** Renders list of jobs posted by the client with status and bid count */
export function PostedProjects() {
  return (
    <section>
      <h2 className="text-xl font-bold">Posted projects</h2>

      <div className="mt-4 space-y-3">
        {postedProjects.map((p) => (
          <div
            key={p.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-2xs sm:px-6"
          >
            <div className="min-w-0">
              <p className="font-semibold text-[#022b3a]">{p.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Budget: {p.budgetRange} <span className="mx-1">•</span>{" "}
                {p.bidsCount} bids <span className="mx-1">•</span> posted{" "}
                {p.postedAgo}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                  p.status === "ACTIVE"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {p.status}
              </span>
              <Link
                href="/explore"
                className="rounded-lg border border-border bg-background px-4 py-2 text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
              >
                View bids
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
