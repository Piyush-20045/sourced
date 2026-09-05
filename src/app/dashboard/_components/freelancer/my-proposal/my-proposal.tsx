import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  proposalFilters,
  proposals,
  proposalSummary,
  type ProposalStatus,
} from "@/data/dashboard/freelancer-dashboard";

const statusStyles: Record<ProposalStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  SHORTLISTED: "bg-emerald-100 text-emerald-800",
  WON: "bg-primary text-primary-foreground",
  DECLINED: "bg-red-100 text-red-700",
};

/** Freelancer proposal history, summary metrics, and status filters. */
export function MyProposals() {
  const [filter, setFilter] = useState<(typeof proposalFilters)[number]>("All");

  const visibleProposals = proposals.filter(
    (proposal) => filter === "All" || proposal.status === filter.toUpperCase(),
  );

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

      {/* Proposal list */}
      <div className="mt-4 space-y-3">
        {visibleProposals.map((proposal) => (
          <article
            key={proposal.id}
            className="rounded-lg border border-border bg-card p-4 sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="font-bold">{proposal.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {proposal.client} · {proposal.submitted}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <p className="font-bold">{proposal.bid}</p>
                <span
                  className={`rounded px-2 py-1 text-[10px] font-semibold tracking-wide ${statusStyles[proposal.status]}`}
                >
                  {proposal.status}
                </span>
              </div>
            </div>

            <blockquote className="mt-3 border-l-2 border-border pl-3 text-sm italic leading-relaxed text-muted-foreground">
              “{proposal.coverLetterExcerpt}”
            </blockquote>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Link href={`/jobs/${proposal.projectId}`}>View Project</Link>
              </Button>
              {proposal.status === "SHORTLISTED" ? (
                <Button type="button" size="sm">
                  Message Client
                </Button>
              ) : proposal.status !== "WON" ? (
                <Button type="button" variant="outline" size="sm">
                  Withdraw
                </Button>
              ) : null}
            </div>
          </article>
        ))}

        {visibleProposals.length === 0 && (
          <div className="rounded-lg border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
            No proposals match this status.
          </div>
        )}
      </div>
    </section>
  );
}
