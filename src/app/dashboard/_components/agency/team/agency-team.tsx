"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Plus, Search, Users } from "lucide-react";
import {
  agencyMembers,
  capacityByDiscipline,
} from "@/data/dashboard/agency-dashboard";

export function AgencyTeam() {
  const [query, setQuery] = useState("");
  const [employment, setEmployment] = useState("ALL");

  const members = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return agencyMembers.filter((member) => {
      const matchesQuery =
        !normalizedQuery ||
        `${member.name} ${member.role} ${member.discipline}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesEmployment =
        employment === "ALL" || member.employment === employment;
      return matchesQuery && matchesEmployment;
    });
  }, [employment, query]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">Team & capacity</h1>
          <p className="mt-1 text-sm text-muted-foreground">Balance assignments, availability, and billable utilization.</p>
        </div>
        <button type="button" className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground sm:self-auto">
          <Plus className="size-4" /> Invite member
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {capacityByDiscipline.map((item) => (
          <article key={item.discipline} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-primary">{item.discipline}</p>
              <span className="text-xs text-muted-foreground">{item.members} people</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-2xl font-bold text-primary">{item.utilization}%</p>
              <p className="text-[11px] font-medium text-emerald-700">{item.availableHours}h free</p>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${item.utilization}%` }} />
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="relative block">
          <span className="sr-only">Search team members</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search members, roles, or disciplines..."
            className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <select
          aria-label="Filter by employment type"
          value={employment}
          onChange={(event) => setEmployment(event.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="ALL">All member types</option>
          <option value="EMPLOYEE">Employees</option>
          <option value="CONTRACTOR">Contractors</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-225 text-left text-xs">
            <thead className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3.5 font-bold">Member</th>
                <th className="px-5 py-3.5 font-bold">Type</th>
                <th className="px-5 py-3.5 font-bold">Assignments</th>
                <th className="px-5 py-3.5 font-bold">Utilization</th>
                <th className="px-5 py-3.5 font-bold">Availability</th>
                <th className="px-5 py-3.5 font-bold">Billable rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-muted/20">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Image src={member.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-bold text-primary">{member.name}</p>
                        <p className="text-muted-foreground">{member.role} · {member.discipline}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${member.employment === "EMPLOYEE" ? "bg-blue-50 text-blue-700" : "bg-violet-50 text-violet-700"}`}>
                      {member.employment}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{member.assignments} active</td>
                  <td className="px-5 py-4">
                    <div className="flex w-36 items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${member.utilization}%` }} />
                      </div>
                      <span className="font-bold text-primary">{member.utilization}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-emerald-700">{member.availability}</td>
                  <td className="px-5 py-4 font-bold text-primary">{member.billableRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {members.length === 0 && (
          <div className="py-14 text-center">
            <Users className="mx-auto size-6 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">No team members match these filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
