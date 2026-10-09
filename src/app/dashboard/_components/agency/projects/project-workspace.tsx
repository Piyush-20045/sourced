"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  File,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  ListChecks,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Upload,
  UsersRound,
} from "lucide-react";
import type {
  AgencyProject,
  AgencyProjectHealth,
} from "@/data/dashboard/agency-dashboard";

export type ProjectWorkspaceTab =
  | "overview"
  | "milestones"
  | "files"
  | "activity";

interface ProjectWorkspaceProps {
  project: AgencyProject;
  initialTab?: ProjectWorkspaceTab;
  onBack: () => void;
}

const healthStyles: Record<AgencyProjectHealth, string> = {
  "ON TRACK": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "AT RISK": "border-rose-200 bg-rose-50 text-rose-700",
  "IN REVIEW": "border-amber-200 bg-amber-50 text-amber-700",
  COMPLETED: "border-slate-200 bg-slate-100 text-slate-700",
};

const tabs: { id: ProjectWorkspaceTab; label: string; icon: typeof FolderOpen }[] = [
  { id: "overview", label: "Overview", icon: FolderOpen },
  { id: "milestones", label: "Milestones", icon: ListChecks },
  { id: "files", label: "Files", icon: Paperclip },
  { id: "activity", label: "Activity", icon: Clock3 },
];

const milestoneNames = [
  "Discovery and project alignment",
  "Requirements and delivery plan",
  "Experience direction approval",
  "Core production sprint",
  "Internal quality review",
  "Client review and revisions",
  "Final delivery and handoff",
  "Post-launch support",
];

function createMilestones(project: AgencyProject) {
  return Array.from({ length: project.totalMilestones }, (_, index) => ({
    id: `${project.id}-milestone-${index + 1}`,
    title: milestoneNames[index] ?? `Delivery milestone ${index + 1}`,
    owner: project.team[index % project.team.length]?.name ?? project.lead,
    initiallyComplete: index < project.completedMilestones,
  }));
}

const workspaceFiles = [
  {
    id: "file-1",
    name: "Project brief and requirements.pdf",
    meta: "2.4 MB · Updated today",
    icon: FileText,
    color: "bg-rose-50 text-rose-700",
  },
  {
    id: "file-2",
    name: "Delivery plan and milestones.xlsx",
    meta: "860 KB · Updated yesterday",
    icon: FileSpreadsheet,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "file-3",
    name: "Client review notes.docx",
    meta: "1.1 MB · Updated 3 days ago",
    icon: File,
    color: "bg-blue-50 text-blue-700",
  },
];

export function ProjectWorkspace({
  project,
  initialTab = "overview",
  onBack,
}: ProjectWorkspaceProps) {
  const milestones = createMilestones(project);
  const [activeTab, setActiveTab] =
    useState<ProjectWorkspaceTab>(initialTab);
  const [completedMilestones, setCompletedMilestones] = useState<Set<string>>(
    () =>
      new Set(
        milestones
          .filter((milestone) => milestone.initiallyComplete)
          .map((milestone) => milestone.id),
      ),
  );
  const [downloadedFile, setDownloadedFile] = useState<string | null>(null);
  const completion = Math.round(
    (completedMilestones.size / milestones.length) * 100,
  );

  const toggleMilestone = (milestoneId: string) => {
    setCompletedMilestones((current) => {
      const next = new Set(current);
      if (next.has(milestoneId)) next.delete(milestoneId);
      else next.add(milestoneId);
      return next;
    });
  };

  const nextMilestones = milestones
    .filter((milestone) => !completedMilestones.has(milestone.id))
    .slice(0, 3);

  return (
    <section className="min-w-0 space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-4" /> Back to projects
      </button>

      <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Project workspace
              </span>
              <span
                className={`rounded-md border px-2 py-1 text-[10px] font-bold ${healthStyles[project.health]}`}
              >
                {project.health}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.client} · Led by {project.lead}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/message"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-primary hover:bg-muted"
            >
              <MessageSquare className="size-4" /> Message client
            </Link>
            <button
              type="button"
              onClick={() => setActiveTab("files")}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Upload className="size-4" /> Add deliverable
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          <div className="bg-background p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Delivery progress
            </p>
            <p className="mt-1 text-xl font-bold text-primary">
              {project.progress}%
            </p>
          </div>
          <div className="bg-background p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Milestones
            </p>
            <p className="mt-1 text-xl font-bold text-primary">
              {completedMilestones.size}/{project.totalMilestones}
            </p>
          </div>
          <div className="bg-background p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Delivery date
            </p>
            <p className="mt-1 text-sm font-bold text-primary sm:text-base">
              {project.dueDate}
            </p>
          </div>
          <div className="bg-background p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Contract value
            </p>
            <p className="mt-1 text-xl font-bold text-primary">
              {project.contractValue}
            </p>
          </div>
        </div>
      </div>

      <div className="scrollbar-none overflow-x-auto border-b border-border">
        <div className="flex min-w-max gap-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="size-4" /> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
          <div className="space-y-5">
            <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-primary">
                    Delivery status
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Current completion across the approved project plan.
                  </p>
                </div>
                <span className="text-lg font-bold text-primary">
                  {completion}%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${completion}%` }}
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-muted/45 p-3">
                  <p className="text-lg font-bold text-primary">
                    {completedMilestones.size}
                  </p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
                <div className="rounded-lg bg-muted/45 p-3">
                  <p className="text-lg font-bold text-primary">
                    {nextMilestones.length > 0 ? 1 : 0}
                  </p>
                  <p className="text-xs text-muted-foreground">In progress</p>
                </div>
                <div className="rounded-lg bg-muted/45 p-3">
                  <p className="text-lg font-bold text-primary">
                    {Math.max(
                      project.totalMilestones - completedMilestones.size - 1,
                      0,
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">Upcoming</p>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-primary">
                    Upcoming milestones
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The next delivery checkpoints requiring attention.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("milestones")}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  View all
                </button>
              </div>
              <div className="mt-5 divide-y divide-border">
                {nextMilestones.map((milestone, index) => (
                  <div
                    key={milestone.id}
                    className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-md text-xs font-bold ${
                        index === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-primary">
                        {milestone.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {milestone.owner} · {index === 0 ? "In progress" : "Upcoming"}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                      {index === 0 ? "Due soon" : project.dueDate}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 font-bold text-primary">
                  <UsersRound className="size-4" /> Project team
                </h2>
                <button
                  type="button"
                  className="grid size-8 place-items-center rounded-md border border-border hover:bg-muted"
                  aria-label="Add team member"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {project.team.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-primary">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.name === project.lead
                          ? "Project lead"
                          : "Project specialist"}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-muted"
                      aria-label={`More options for ${member.name}`}
                    >
                      <MoreHorizontal className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-border bg-card p-5">
              <h2 className="font-bold text-primary">Recent activity</h2>
              <div className="mt-4 space-y-4 text-xs">
                <div className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-emerald-500" />
                  <p className="leading-5 text-muted-foreground">
                    <strong className="text-foreground">{project.lead}</strong>{" "}
                    updated the delivery plan · 2h ago
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-blue-500" />
                  <p className="leading-5 text-muted-foreground">
                    Client feedback was added to the current milestone ·
                    Yesterday
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-amber-500" />
                  <p className="leading-5 text-muted-foreground">
                    New deliverable uploaded for internal review · 3 days ago
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      )}

      {activeTab === "milestones" && (
        <section className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-primary">
                Milestones and tasks
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Track approvals and completion across the delivery plan.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground"
            >
              <Plus className="size-3.5" /> Add milestone
            </button>
          </div>
          <div className="divide-y divide-border">
            {milestones.map((milestone, index) => {
              const isComplete = completedMilestones.has(milestone.id);
              const isCurrent =
                !isComplete &&
                milestones
                  .slice(0, index)
                  .every((item) => completedMilestones.has(item.id));
              return (
                <article
                  key={milestone.id}
                  className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5"
                >
                  <button
                    type="button"
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`grid size-8 shrink-0 place-items-center rounded-md border ${
                      isComplete
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-transparent hover:bg-muted"
                    }`}
                    aria-label={`${isComplete ? "Mark incomplete" : "Mark complete"}: ${milestone.title}`}
                  >
                    <Check className="size-4" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-semibold ${
                          isComplete
                            ? "text-muted-foreground line-through"
                            : "text-primary"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                          isComplete
                            ? "bg-emerald-50 text-emerald-700"
                            : isCurrent
                              ? "bg-blue-50 text-blue-700"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isComplete
                          ? "COMPLETED"
                          : isCurrent
                            ? "IN PROGRESS"
                            : "UPCOMING"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Owner: {milestone.owner}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {isComplete ? "Completed" : project.dueDate}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {activeTab === "files" && (
        <section className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-primary">Project files</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Shared documents, plans, and client deliverables.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground"
            >
              <Upload className="size-3.5" /> Upload file
            </button>
          </div>
          <div className="divide-y divide-border">
            {workspaceFiles.map((file) => {
              const Icon = file.icon;
              return (
                <div
                  key={file.id}
                  className="flex items-center gap-3 p-4 sm:p-5"
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-md ${file.color}`}
                  >
                    <Icon className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-primary">
                      {file.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {file.meta}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDownloadedFile(file.id)}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-xs font-semibold text-primary hover:bg-muted"
                  >
                    {downloadedFile === file.id ? (
                      <CheckCircle2 className="size-4 text-emerald-700" />
                    ) : (
                      <Download className="size-4" />
                    )}
                    <span className="hidden sm:inline">
                      {downloadedFile === file.id ? "Ready" : "Download"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {activeTab === "activity" && (
        <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-bold text-primary">Project activity</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            A shared record of important delivery events.
          </p>
          <div className="mt-6 space-y-0">
            {[
              [project.lead, "updated the delivery plan", "Today, 10:42 AM"],
              [project.client, "left feedback on the current milestone", "Yesterday, 4:18 PM"],
              [project.team[0]?.name ?? "Team member", "uploaded a new deliverable", "Yesterday, 11:05 AM"],
              [project.team[1]?.name ?? "Team member", "completed an assigned task", "3 days ago"],
            ].map(([person, action, date], index) => (
              <div
                key={`${person}-${action}`}
                className={`relative flex gap-4 pb-6 pl-1 ${
                  index < 3 ? "before:absolute before:left-4 before:top-9 before:h-[calc(100%-1.5rem)] before:w-px before:bg-border" : ""
                }`}
              >
                <span className="relative z-1 grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <p className="text-sm text-foreground/80">
                    <strong className="text-primary">{person}</strong> {action}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
