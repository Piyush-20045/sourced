import { useState } from "react";
import {
  budgetFilters,
  durationFilters,
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
    </section>
  );
}
