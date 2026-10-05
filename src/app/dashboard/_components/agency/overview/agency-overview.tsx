import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CircleDollarSign,
  Users,
} from "lucide-react";
import {
  agencyBriefs,
  agencyInvoices,
  agencyMembers,
  agencyProjects,
  agencyProposals,
  upcomingMilestones,
} from "@/data/dashboard/agency-dashboard";

const healthStyles = {
  "ON TRACK": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "AT RISK": "bg-rose-50 text-rose-700 border-rose-200",
  "IN REVIEW": "bg-amber-50 text-amber-700 border-amber-200",
  COMPLETED: "bg-slate-100 text-slate-700 border-slate-200",
} as const;

export function AgencyOverview() {
  const activeProjects = agencyProjects.filter(
    (project) => project.health !== "COMPLETED",
  );
  const activeProposals = agencyProposals.filter(
    (proposal) => proposal.status !== "LOST" && proposal.status !== "WON",
  );
  const averageUtilization = Math.round(
    agencyMembers.reduce((total, member) => total + member.utilization, 0) /
      agencyMembers.length,
  );

  return (
    <section className="min-w-0 space-y-8">
      <section aria-labelledby="active-delivery-title">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2
              id="active-delivery-title"
              className="text-xl font-bold text-primary"
            >
              Active delivery
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {activeProjects.length} client projects currently in motion
            </p>
          </div>
          <button
            type="button"
            className="text-xs font-bold text-primary hover:underline"
          >
            View all projects
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {activeProjects.map((project, index) => (
            <article
              key={project.id}
              className={`p-4 sm:p-5 ${index > 0 ? "border-t border-border" : ""}`}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-primary">{project.title}</h3>
                    <span
                      className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${healthStyles[project.health]}`}
                    >
                      {project.health}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.client} · Led by {project.lead} · Due{" "}
                    {project.dueDate}
                  </p>
                </div>

                <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-5 lg:shrink-0">
                  <div className="flex -space-x-2">
                    {project.team.map((member) => (
                      <Image
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        title={member.name}
                        width={32}
                        height={32}
                        className="size-8 rounded-full border-2 border-background object-cover"
                      />
                    ))}
                  </div>
                  <div className="min-w-0 flex-1 basis-20 sm:w-36 sm:flex-none">
                    <div className="flex justify-between text-[10px] font-semibold text-muted-foreground">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${project.title}`}
                    className="grid size-9 shrink-0 place-items-center rounded-lg border border-border hover:bg-muted"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-2">
        <section className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-primary">
                Proposal pipeline
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {activeProposals.length} proposals need attention
              </p>
            </div>
            <CircleDollarSign className="size-5 shrink-0 text-muted-foreground" />
          </div>
          <div className="mt-5 space-y-4">
            {activeProposals.slice(0, 3).map((proposal) => (
              <article
                key={proposal.id}
                className="flex flex-col items-start justify-between gap-2 min-[400px]:flex-row sm:gap-4"
              >
                <div className="min-w-0 max-w-full">
                  <p className="wrap-break-word text-sm font-bold text-primary">
                    {proposal.project}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {proposal.client} · {proposal.nextAction}
                  </p>
                </div>
                <div className="shrink-0 min-[400px]:text-right">
                  <p className="text-sm font-bold text-primary">
                    {proposal.value}
                  </p>
                  <span className="text-[10px] font-bold text-accent">
                    {proposal.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-primary">Team capacity</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {agencyMembers.length} visible specialists
              </p>
            </div>
            <Users className="size-5 shrink-0 text-muted-foreground" />
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-4xl font-bold text-primary">
                {averageUtilization}%
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Average utilization
              </p>
            </div>
            <div className="flex -space-x-2">
              {agencyMembers.slice(0, 5).map((member) => (
                <Image
                  key={member.id}
                  src={member.avatar}
                  alt={member.name}
                  title={`${member.name}: ${member.utilization}% utilized`}
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${averageUtilization}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-medium text-emerald-700">
            90 team hours available for new work this week
          </p>
        </section>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <section className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-primary">
                Upcoming milestones
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Next seven days
              </p>
            </div>
            <CalendarClock className="size-5 shrink-0 text-muted-foreground" />
          </div>
          <div className="mt-5 space-y-3">
            {upcomingMilestones.map((milestone) => (
              <article
                key={milestone.id}
                className="flex min-w-0 items-center gap-3 rounded-xl bg-muted/45 p-3 sm:gap-4 sm:p-3.5"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-background text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-muted-foreground">
                    {milestone.date.split(" ")[1]}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {milestone.date.split(" ")[0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="wrap-break-word text-sm font-bold text-primary">
                    {milestone.title}
                  </p>
                  <p className="wrap-break-word text-xs text-muted-foreground">
                    {milestone.project} · {milestone.owner}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-primary">
                Finance snapshot
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Open invoices
              </p>
            </div>
            <p className="text-xl font-bold text-primary">₹4.8L</p>
          </div>
          <div className="mt-5 space-y-3">
            {agencyInvoices.slice(0, 3).map((invoice) => (
              <div
                key={invoice.id}
                className="flex flex-wrap items-center justify-between gap-3 text-sm"
              >
                <div className="min-w-0">
                  <p className="truncate font-semibold text-primary">
                    {invoice.client}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Due {invoice.dueDate}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-bold text-primary">{invoice.amount}</p>
                  <p
                    className={`text-[10px] font-bold ${invoice.status === "OVERDUE" ? "text-rose-700" : "text-amber-700"}`}
                  >
                    {invoice.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-primary">
              Recommended briefs
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Matched to your team and services
            </p>
          </div>
          <button
            type="button"
            className="text-xs font-bold text-primary hover:underline"
          >
            Browse all
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {agencyBriefs.slice(0, 2).map((brief) => (
            <article
              key={brief.id}
              className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-md bg-primary/8 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {brief.service}
                </span>
                <span className="text-xs text-muted-foreground">
                  {brief.posted}
                </span>
              </div>
              <h3 className="mt-3 font-bold leading-6 text-primary">
                {brief.title}
              </h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                {brief.client}
                {brief.clientVerified && (
                  <BadgeCheck className="size-3.5 text-primary" />
                )}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs">
                <span className="font-bold text-primary">{brief.budget}</span>
                <span className="text-muted-foreground">
                  {brief.duration} · {brief.teamSize}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
