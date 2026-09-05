import { useState } from "react";
import Link from "next/link";
import {
  budgetFilters,
  durationFilters,
  findProjects,
  projectCategories,
} from "@/data/dashboard/freelancer-dashboard";

/** "Find Projects" section — filter pills + open project cards. */
export function FindProjects() {
  const [category, setCategory] = useState("All");

  return (
    <section>
      {/* heading */}
      <h2 className="text-2xl font-bold">Find Projects</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Browse open projects matched to your skills.
      </p>

      {/* filter pills */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
        <select className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium">
          {budgetFilters.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
        <select className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium">
          {durationFilters.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* project cards */}
      <div className="mt-4 space-y-4">
        {findProjects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:justify-between sm:p-5"
          >
            {/* left: details */}
            <div className="min-w-0">
              <Link
                href={`/jobs/${p.id}`}
                className="font-bold hover:underline"
              >
                {p.title}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                {p.client} · {p.posted} · {p.proposals} proposals
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-6 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Budget
                  </p>
                  <p className="font-semibold">{p.budget}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Duration
                  </p>
                  <p className="font-semibold">{p.duration}</p>
                </div>
              </div>
            </div>

            {/* right: type + actions */}
            <div className="flex shrink-0 flex-row gap-2">
              <span
                className={`rounded px-2 py-0.5 h-fit text-[10px] font-semibold tracking-wide ${
                  p.type === "FIXED"
                    ? "bg-green-400/20 text-neutral-700"
                    : "bg-neutral-400/20 text-neutral-600"
                }`}
              >
                {p.type}
              </span>
              <div className="flex md:flex-col gap-2 h-fit md:items-end">
                <Link
                  href={`/jobs/${p.id}`}
                  className="rounded-md bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground hover:opacity-90"
                >
                  Apply Now
                </Link>
                <button className="rounded-md border border-border px-4 py-2 text-xs font-medium hover:bg-muted">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
