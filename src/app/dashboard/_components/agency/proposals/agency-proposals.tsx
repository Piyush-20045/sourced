"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  agencyProposals,
  type ProposalStatus,
} from "@/data/dashboard/agency-dashboard";

const filters = ["ALL", "DRAFT", "SUBMITTED", "SHORTLISTED", "WON", "LOST"] as const;

const statusStyles: Record<ProposalStatus, string> = {
  DRAFT: "bg-slate-100 text-slate-700",
  SUBMITTED: "bg-blue-50 text-blue-700",
  SHORTLISTED: "bg-amber-50 text-amber-700",
  WON: "bg-emerald-50 text-emerald-700",
  LOST: "bg-rose-50 text-rose-700",
};

export function AgencyProposals() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ALL");
  const visibleProposals = agencyProposals.filter(
    (proposal) => filter === "ALL" || proposal.status === filter,
  );

  const summary = [
    { label: "Drafts", value: agencyProposals.filter((proposal) => proposal.status === "DRAFT").length },
    { label: "Submitted", value: agencyProposals.filter((proposal) => proposal.status === "SUBMITTED").length },
    { label: "Shortlisted", value: agencyProposals.filter((proposal) => proposal.status === "SHORTLISTED").length },
    { label: "Won", value: agencyProposals.filter((proposal) => proposal.status === "WON").length },
    { label: "Pipeline value", value: "₹38.7L" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">Proposals</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage agency pitches from draft through decision.</p>
        </div>
        <button type="button" className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground sm:self-auto">
          <Plus className="size-4" /> New proposal
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {summary.map((item) => (
          <article key={item.label} className="rounded-xl border border-border bg-card p-4">
            <p className="text-2xl font-bold text-primary">{item.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter proposals by status">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
              filter === item
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            {item === "ALL" ? "All proposals" : item.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-215 text-left text-xs">
            <thead className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3.5 font-bold">Project</th>
                <th className="px-5 py-3.5 font-bold">Value</th>
                <th className="px-5 py-3.5 font-bold">Lead</th>
                <th className="px-5 py-3.5 font-bold">Submitted</th>
                <th className="px-5 py-3.5 font-bold">Status</th>
                <th className="px-5 py-3.5 font-bold">Next action</th>
                <th className="px-5 py-3.5"><span className="sr-only">Open</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visibleProposals.map((proposal) => (
                <tr key={proposal.id} className="hover:bg-muted/20">
                  <td className="px-5 py-4">
                    <p className="font-bold text-primary">{proposal.project}</p>
                    <p className="mt-0.5 text-muted-foreground">{proposal.client}</p>
                  </td>
                  <td className="px-5 py-4 font-bold text-primary">{proposal.value}</td>
                  <td className="px-5 py-4 text-muted-foreground">{proposal.lead}</td>
                  <td className="px-5 py-4 text-muted-foreground">{proposal.submitted}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${statusStyles[proposal.status]}`}>
                      {proposal.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{proposal.nextAction}</td>
                  <td className="px-5 py-4 text-right">
                    <button type="button" aria-label={`Open ${proposal.project}`} className="rounded-lg border border-border p-2 hover:bg-muted">
                      <ArrowUpRight className="size-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visibleProposals.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">No proposals match this status.</p>
        )}
      </div>
    </section>
  );
}
