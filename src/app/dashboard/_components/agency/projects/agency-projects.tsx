"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, MessageSquare, Milestone } from "lucide-react";
import {
  agencyProjects,
  type AgencyProjectHealth,
} from "@/data/dashboard/agency-dashboard";

const healthStyles: Record<AgencyProjectHealth, string> = {
  "ON TRACK": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "AT RISK": "bg-rose-50 text-rose-700 border-rose-200",
  "IN REVIEW": "bg-amber-50 text-amber-700 border-amber-200",
  COMPLETED: "bg-slate-100 text-slate-700 border-slate-200",
};

const filters = ["ALL", "ON TRACK", "AT RISK", "IN REVIEW", "COMPLETED"] as const;

export function AgencyProjects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ALL");
  const projects = agencyProjects.filter(
    (project) => filter === "ALL" || project.health === filter,
  );

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">Projects</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track delivery health, milestones, and assigned teams.</p>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`rounded-lg px-3 py-2 text-xs font-bold ${filter === item ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-muted"}`}
          >
            {item === "ALL" ? "All projects" : item.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.id} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-primary">{project.title}</h2>
                  <span className={`rounded-md border px-2.5 py-1 text-[10px] font-bold ${healthStyles[project.health]}`}>
                    {project.health}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{project.client} · Project lead: {project.lead}</p>
              </div>
              <p className="shrink-0 text-lg font-bold text-primary">{project.contractValue}</p>
            </div>

            <div className="mt-5 grid gap-4 rounded-xl bg-muted/35 p-4 sm:grid-cols-[1.5fr_1fr_1fr] sm:items-center">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Delivery progress</span>
                  <span className="font-bold text-primary">{project.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Milestone className="size-4 text-muted-foreground" />
                <div>
                  <p className="font-bold text-primary">{project.completedMilestones}/{project.totalMilestones}</p>
                  <p className="text-muted-foreground">Milestones</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CalendarDays className="size-4 text-muted-foreground" />
                <div>
                  <p className="font-bold text-primary">{project.dueDate}</p>
                  <p className="text-muted-foreground">Delivery date</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {project.team.map((member) => (
                    <Image key={member.id} src={member.avatar} alt={member.name} title={member.name} width={36} height={36} className="size-9 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{project.team.length} assigned members</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:bg-muted">
                  <MessageSquare className="size-3.5" /> Message client
                </button>
                <button type="button" className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:bg-muted">Review milestones</button>
                <button type="button" className="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">Open workspace</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border py-14 text-center text-sm text-muted-foreground">No projects match this health status.</div>
      )}
    </section>
  );
}
