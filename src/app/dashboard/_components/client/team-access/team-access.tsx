"use client";

import {
  teamMembersSummary,
} from "@/data/dashboard/client-dashboard";

/** Team Access / Team Members component for Client Dashboard */
export function TeamAccess() {

  return (
    <section className="space-y-6">
      {/* Title & Action Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#022b3a]">Team Members</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {teamMembersSummary.activeMembersCount} active members · Manage
            roles and project access
          </p>
        </div>

        <button
          type="button"
          className="self-start rounded-xl bg-[#022b3a] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#064259] sm:self-auto"
        >
          + Invite member
        </button>
      </div>
    </section>
  );
}
