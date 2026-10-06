"use client";

import { useMemo, useState } from "react";
import { BadgeCheck, Bookmark, Clock3, Search, Users } from "lucide-react";
import { agencyBriefs } from "@/data/dashboard/agency-dashboard";

const services = [
  "All services",
  "Product Design",
  "Brand Systems",
  "Engineering",
];

export function AgencyFindWork() {
  const [query, setQuery] = useState("");
  const [service, setService] = useState("All services");
  const [budget, setBudget] = useState("Any budget");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const briefs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return agencyBriefs.filter((brief) => {
      const matchesQuery =
        !normalizedQuery ||
        `${brief.title} ${brief.client} ${brief.skills.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesService =
        service === "All services" || brief.service === service;
      const startingBudget = Number(brief.budget.match(/\d+/)?.[0] ?? 0);
      const matchesBudget =
        budget === "Any budget" ||
        (budget === "₹6L+" ? startingBudget >= 6 : startingBudget < 6);
      return matchesQuery && matchesService && matchesBudget;
    });
  }, [budget, query, service]);

  const toggleSaved = (id: string) => {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id],
    );
  };

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          Find work
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse larger briefs matched to your agency services and available
          team.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="relative block">
            <span className="sr-only">Search agency briefs</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by brief, client, or capability..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </label>
          <select
            aria-label="Filter by service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            {services.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            aria-label="Filter by budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            {["Any budget", "Under ₹6L", "₹6L+"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <p>{briefs.length} matched briefs</p>
        <p>{savedIds.length} saved</p>
      </div>

      <div className="space-y-4">
        {briefs.map((brief) => {
          const isSaved = savedIds.includes(brief.id);
          return (
            <article
              key={brief.id}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-primary/8 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {brief.service}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Posted {brief.posted}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-primary">
                    {brief.title}
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    {brief.client}
                    {brief.clientVerified && (
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                        <BadgeCheck className="size-4" /> Verified
                      </span>
                    )}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {brief.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-4">
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Budget
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-primary">
                        {brief.budget}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Duration
                      </dt>
                      <dd className="mt-0.5 flex items-center gap-1 text-sm font-semibold">
                        <Clock3 className="size-3.5" /> {brief.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Suggested team
                      </dt>
                      <dd className="mt-0.5 flex items-center gap-1 text-sm font-semibold">
                        <Users className="size-3.5" /> {brief.teamSize}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Competition
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold">
                        {brief.proposals} proposals
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex shrink-0 gap-2 lg:flex-col lg:items-stretch">
                  <button
                    type="button"
                    className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    Build proposal
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaved(brief.id)}
                    aria-pressed={isSaved}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-2.5 text-xs font-semibold hover:bg-muted"
                  >
                    <Bookmark
                      className={`size-3.5 ${isSaved ? "fill-primary text-primary" : ""}`}
                    />
                    {isSaved ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {briefs.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border py-14 text-center">
          <p className="font-semibold text-primary">No matching briefs</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a broader search or different filters.
          </p>
        </div>
      )}
    </section>
  );
}
