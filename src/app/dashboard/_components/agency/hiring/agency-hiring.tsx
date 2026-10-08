"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  MessageSquare,
  Plus,
  Search,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import {
  candidates,
  openRoles,
  type HiringStage,
} from "@/data/dashboard/agency-dashboard";

const workflowStages: HiringStage[] = [
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "OFFER",
  "HIRED",
];
const stages: HiringStage[] = [...workflowStages, "REJECTED"];
type StageFilter = "ALL" | HiringStage;

const stageLabels: Record<StageFilter, string> = {
  ALL: "All candidates",
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  OFFER: "Offer",
  HIRED: "Hired",
  REJECTED: "Rejected",
};

const stageStyles: Record<HiringStage, string> = {
  APPLIED: "bg-slate-100 text-slate-700",
  SCREENING: "bg-blue-50 text-blue-700",
  INTERVIEW: "bg-amber-50 text-amber-700",
  OFFER: "bg-emerald-50 text-emerald-700",
  HIRED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-rose-50 text-rose-700",
};

const nextStepByStage: Partial<Record<HiringStage, string>> = {
  SCREENING: "Complete screening",
  INTERVIEW: "Schedule interview",
  OFFER: "Prepare offer",
  HIRED: "Start onboarding",
};

interface AgencyHiringProps {
  view?: "all" | "summary" | "pipeline";
}

export function AgencyHiring({ view = "all" }: AgencyHiringProps) {
  const [candidateRecords, setCandidateRecords] = useState(candidates);
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [stageFilter, setStageFilter] = useState<StageFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("MATCH");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const roleNames = Array.from(
    new Set(candidateRecords.map((candidate) => candidate.role)),
  );
  const candidatesForRole = candidateRecords.filter(
    (candidate) => roleFilter === "ALL" || candidate.role === roleFilter,
  );
  const visibleCandidates = candidatesForRole
    .filter(
      (candidate) =>
        stageFilter === "ALL" || candidate.stage === stageFilter,
    )
    .filter((candidate) => {
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;
      return [
        candidate.name,
        candidate.role,
        candidate.location,
        candidate.source,
        ...candidate.skills,
      ].some((value) => value.toLowerCase().includes(query));
    })
    .sort((a, b) => {
      if (sortBy === "RATING") return b.rating - a.rating;
      if (sortBy === "NAME") return a.name.localeCompare(b.name);
      return b.matchScore - a.matchScore;
    });

  const allVisibleSelected =
    visibleCandidates.length > 0 &&
    visibleCandidates.every((candidate) => selectedIds.has(candidate.id));

  const toggleCandidate = (candidateId: string) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(candidateId)) next.delete(candidateId);
      else next.add(candidateId);
      return next;
    });
  };

  const toggleAllVisible = () => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (allVisibleSelected) {
        visibleCandidates.forEach((candidate) => next.delete(candidate.id));
      } else {
        visibleCandidates.forEach((candidate) => next.add(candidate.id));
      }
      return next;
    });
  };

  const advanceCandidates = (candidateIds: Set<string>) => {
    setCandidateRecords((current) =>
      current.map((candidate) => {
        if (!candidateIds.has(candidate.id)) return candidate;
        const stageIndex = workflowStages.indexOf(candidate.stage);
        const nextStage = workflowStages[stageIndex + 1];
        if (stageIndex < 0 || !nextStage) return candidate;
        return {
          ...candidate,
          stage: nextStage,
          activity: `Moved to ${stageLabels[nextStage].toLowerCase()} just now`,
          nextStep: nextStepByStage[nextStage] ?? candidate.nextStep,
        };
      }),
    );
    setSelectedIds(new Set());
  };

  const rejectCandidates = (candidateIds: Set<string>) => {
    setCandidateRecords((current) =>
      current.map((candidate) =>
        candidateIds.has(candidate.id)
          ? {
              ...candidate,
              stage: "REJECTED",
              activity: "Rejected just now",
              nextStep: "No further action required",
            }
          : candidate,
      ),
    );
    setSelectedIds((current) => {
      const next = new Set(current);
      candidateIds.forEach((candidateId) => next.delete(candidateId));
      return next;
    });
  };

  return (
    <section className="space-y-8">
      {view !== "pipeline" && (
        <>
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
        </>
      )}

      {view !== "summary" && <section>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-primary">
              Candidate pipeline
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Review applicants, track activity, and move the strongest matches
              forward.
            </p>
          </div>
          <p className="text-xs font-medium text-muted-foreground">
            {visibleCandidates.length} of {candidatesForRole.length} candidates
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="scrollbar-none overflow-x-auto border-b border-border px-4 sm:px-5">
            <div className="flex min-w-max gap-6">
              {(["ALL", ...stages] as StageFilter[]).map((stage) => {
                const count =
                  stage === "ALL"
                    ? candidatesForRole.length
                    : candidatesForRole.filter(
                        (candidate) => candidate.stage === stage,
                      ).length;
                return (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => {
                      setStageFilter(stage);
                      setSelectedIds(new Set());
                    }}
                    className={`border-b-2 py-3.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      stageFilter === stage
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {stageLabels[stage]}
                    <span
                      className={`ml-2 rounded-md px-1.5 py-0.5 text-[10px] ${
                        stageFilter === stage
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-2 border-b border-border bg-muted/20 p-4 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:p-5">
            <label className="relative min-w-0">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search candidates, skills, or location"
                className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                aria-label="Search candidates"
              />
            </label>

            <label className="relative">
              <select
                aria-label="Filter candidates by role"
                value={roleFilter}
                onChange={(event) => {
                  setRoleFilter(event.target.value);
                  setSelectedIds(new Set());
                }}
                className="h-10 w-full appearance-none rounded-md border border-border bg-background pl-3 pr-9 text-xs font-medium outline-none focus:ring-2 focus:ring-ring sm:w-48"
              >
                <option value="ALL">All open roles</option>
                {roleNames.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            </label>

            <label className="relative">
              <select
                aria-label="Sort candidates"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-10 w-full appearance-none rounded-md border border-border bg-background pl-3 pr-9 text-xs font-medium outline-none focus:ring-2 focus:ring-ring sm:w-38"
              >
                <option value="MATCH">Best match</option>
                <option value="RATING">Highest rated</option>
                <option value="NAME">Name A–Z</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            </label>
          </div>

          {selectedIds.size > 0 && (
            <div className="flex flex-col gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid size-6 place-items-center rounded-md bg-white/15 text-xs">
                  {selectedIds.size}
                </span>
                candidate{selectedIds.size === 1 ? "" : "s"} selected
              </p>
              <div className="flex gap-2">
                <Link
                  href="/message"
                  className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md border border-white/25 px-3 text-xs font-semibold hover:bg-white/10 sm:flex-none"
                >
                  <MessageSquare className="size-3.5" /> Message
                </Link>
                <button
                  type="button"
                  onClick={() => advanceCandidates(selectedIds)}
                  className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md bg-background px-3 text-xs font-semibold text-primary hover:bg-muted sm:flex-none"
                >
                  Move to next stage <ArrowRight className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => rejectCandidates(selectedIds)}
                  className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md bg-rose-600 px-3 text-xs font-semibold text-white hover:bg-rose-700 sm:flex-none"
                >
                  Reject <X className="size-3.5" />
                </button>
              </div>
            </div>
          )}

          <div className="hidden grid-cols-[32px_minmax(220px,1.2fr)_minmax(170px,0.85fr)_minmax(190px,1fr)_300px] items-center gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground xl:grid">
            <label className="grid size-5 place-items-center">
              <input
                type="checkbox"
                checked={allVisibleSelected}
                onChange={toggleAllVisible}
                className="size-4 rounded border-border accent-primary"
                aria-label="Select all visible candidates"
              />
            </label>
            <span>Candidate</span>
            <span>Role match</span>
            <span>Activity & next step</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="divide-y divide-border">
            {visibleCandidates.map((candidate) => {
              const isSelected = selectedIds.has(candidate.id);
              const stageIndex = workflowStages.indexOf(candidate.stage);
              const nextStage = workflowStages[stageIndex + 1];
              const canAdvance = nextStage !== undefined;
              const canReject =
                candidate.stage !== "HIRED" && candidate.stage !== "REJECTED";

              return (
                <article
                  key={candidate.id}
                  className={`p-4 transition-colors sm:p-5 xl:grid xl:grid-cols-[32px_minmax(220px,1.2fr)_minmax(170px,0.85fr)_minmax(190px,1fr)_300px] xl:items-center xl:gap-4 ${
                    isSelected ? "bg-primary/3" : "hover:bg-muted/15"
                  }`}
                >
                  <label className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground xl:mb-0 xl:grid xl:size-5 xl:place-items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleCandidate(candidate.id)}
                      className="size-4 rounded border-border accent-primary"
                      aria-label={`Select ${candidate.name}`}
                    />
                    <span className="xl:hidden">Select candidate</span>
                  </label>

                  <div className="flex min-w-0 items-start gap-3">
                    <Image
                      src={candidate.avatar}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="truncate text-sm font-bold text-primary">
                          {candidate.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600">
                          <Star className="size-3 fill-current" />
                          {candidate.rating}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-xs font-medium text-foreground/75">
                        {candidate.role}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {candidate.location} · Applied {candidate.appliedAt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-border/70 pt-4 xl:mt-0 xl:border-0 xl:pt-0">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground xl:hidden">
                      Role match
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
                        <Check className="size-3" /> {candidate.matchScore}% match
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        via {candidate.source}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {candidate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border bg-muted/50 px-2 py-1 text-[10px] text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-border/70 pt-4 xl:mt-0 xl:border-0 xl:pt-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-bold ${stageStyles[candidate.stage]}`}
                      >
                        {stageLabels[candidate.stage]}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {candidate.activity}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-primary">
                      {candidate.stage === "INTERVIEW" && (
                        <CalendarDays className="size-3.5" />
                      )}
                      {candidate.nextStep}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/70 pt-4 xl:mt-0 xl:flex xl:justify-end xl:border-0 xl:pt-0">
                    <Link
                      href="/message"
                      title={`Message ${candidate.name}`}
                      aria-label={`Message ${candidate.name}`}
                      className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md border border-border px-3 text-xs font-semibold text-primary hover:bg-muted xl:flex-none"
                    >
                      <MessageSquare className="size-3.5" />
                      <span>Message</span>
                    </Link>
                    {canAdvance ? (
                      <button
                        type="button"
                        onClick={() =>
                          advanceCandidates(new Set([candidate.id]))
                        }
                        className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md bg-emerald-700 px-3 text-xs font-semibold text-white hover:bg-emerald-800 xl:flex-none"
                        aria-label={`Move ${candidate.name} to ${stageLabels[nextStage]}`}
                      >
                        <Check className="size-3.5" />
                        Move to {stageLabels[nextStage]}
                      </button>
                    ) : (
                      <span
                        className={`inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-semibold xl:flex-none ${
                          candidate.stage === "HIRED"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {candidate.stage === "HIRED" ? (
                          <Check className="size-3.5" />
                        ) : (
                          <X className="size-3.5" />
                        )}
                        {stageLabels[candidate.stage]}
                      </span>
                    )}
                    {canReject && (
                      <button
                        type="button"
                        onClick={() =>
                          rejectCandidates(new Set([candidate.id]))
                        }
                        className="col-span-2 inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md border border-rose-200 px-3 text-xs font-semibold text-rose-700 hover:bg-rose-50 xl:col-span-1 xl:flex-none"
                        aria-label={`Reject ${candidate.name}`}
                      >
                        <X className="size-3.5" /> Reject
                      </button>
                    )}
                  </div>
                </article>
              );
            })}

            {visibleCandidates.length === 0 && (
              <div className="px-5 py-14 text-center">
                <span className="mx-auto grid size-11 place-items-center rounded-lg bg-muted text-muted-foreground">
                  <UsersRound className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-primary">
                  No candidates found
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try another stage, role, or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>}
    </section>
  );
}
