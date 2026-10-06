"use client";

import { useState } from "react";
import Image from "next/image";
import { BriefcaseBusiness, CalendarDays, Plus, Star } from "lucide-react";
import {
  candidates,
  openRoles,
  type HiringStage,
} from "@/data/dashboard/agency-dashboard";

const stages: HiringStage[] = ["APPLIED", "SCREENING", "INTERVIEW", "OFFER"];

export function AgencyHiring() {
  const [roleFilter, setRoleFilter] = useState("ALL");
  const visibleCandidates = candidates.filter(
    (candidate) => roleFilter === "ALL" || candidate.role === roleFilter,
  );
  const roleNames = Array.from(
    new Set(candidates.map((candidate) => candidate.role)),
  );

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Hiring
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Build the specialist bench needed for upcoming client work.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground sm:self-auto"
        >
          <Plus className="size-4" /> Post a role
        </button>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary">Open roles</h2>
          <span className="text-xs text-muted-foreground">
            {openRoles.length} roles
          </span>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {openRoles.map((role) => (
            <article
              key={role.id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/8 text-primary">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <span
                  className={`rounded-md px-2 py-1 text-[10px] font-bold ${role.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-700"}`}
                >
                  {role.status}
                </span>
              </div>
              <h3 className="mt-4 font-bold text-primary">{role.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {role.type} · {role.location}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
                <div>
                  <p className="text-lg font-bold text-primary">
                    {role.applicants}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Applicants
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">
                    {role.shortlisted}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Shortlisted
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-border py-2 text-xs font-semibold hover:bg-muted"
              >
                Manage role
              </button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-primary">
              Candidate pipeline
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {visibleCandidates.length} candidates across active roles
            </p>
          </div>
          <select
            aria-label="Filter candidates by role"
            value={roleFilter}
            onChange={(event) => setRoleFilter(event.target.value)}
            className="h-9 rounded-lg border border-border bg-background px-3 text-xs font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="ALL">All open roles</option>
            {roleNames.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 xl:grid-cols-4">
          {stages.map((stage) => {
            const stageCandidates = visibleCandidates.filter(
              (candidate) => candidate.stage === stage,
            );
            return (
              <div key={stage} className="rounded-2xl bg-muted/40 p-3">
                <div className="flex items-center justify-between px-1 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {stage}
                  </h3>
                  <span className="grid size-5 place-items-center rounded-full bg-background text-[10px] font-bold">
                    {stageCandidates.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {stageCandidates.map((candidate) => (
                    <article
                      key={candidate.id}
                      className="rounded-xl border border-border bg-card p-4 shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <Image
                          src={candidate.avatar}
                          alt=""
                          width={40}
                          height={40}
                          className="size-10 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-primary">
                            {candidate.name}
                          </p>
                          <p className="truncate text-[11px] text-muted-foreground">
                            {candidate.role}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-amber-600">
                            <Star className="size-3 fill-current" />{" "}
                            {candidate.rating}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {candidate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-muted px-2 py-1 text-[10px] text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          Next step
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-primary">
                          {stage === "INTERVIEW" && (
                            <CalendarDays className="size-3.5" />
                          )}
                          {candidate.nextStep}
                        </p>
                      </div>
                    </article>
                  ))}
                  {stageCandidates.length === 0 && (
                    <div className="rounded-xl border border-dashed border-border py-8 text-center text-xs text-muted-foreground">
                      No candidates
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
