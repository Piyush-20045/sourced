import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  proposalFilters,
  proposals,
  proposalSummary,
} from "@/data/dashboard/freelancer-dashboard";

/** Freelancer proposal history, summary metrics, and status filters. */
export function MyProposals() {
  const [filter, setFilter] = useState<(typeof proposalFilters)[number]>("All");

  return (
    <section>
      {/* Section heading */}
      <h2 className="text-2xl font-bold">My Proposals</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {proposals.length} proposals submitted
      </p>

      {/* Proposal performance */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {proposalSummary.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border bg-card px-3 py-5 text-center"
          >
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Status filters */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {proposalFilters.map((item) => (
          <Button
            key={item}
            type="button"
            variant={filter === item ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </Button>
        ))}
      </div>
    </section>
  );
}
