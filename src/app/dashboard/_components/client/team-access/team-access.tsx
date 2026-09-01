"use client";
import {
  teamMembers,
  teamMembersSummary,
} from "@/data/dashboard/client-dashboard";

/** Team Access / Team Members component for Client Dashboard */
export function TeamAccess() {
  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "bg-slate-100 text-slate-700 border border-slate-200/60";
      case "MEMBER":
        return "bg-emerald-100/90 text-emerald-700 border border-emerald-200/60";
      case "VIEWER":
        return "bg-amber-100/90 text-amber-800 border border-amber-200/60";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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

      {/* Team Members Table Card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Member
                </th>
                <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Contact
                </th>
                <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Access
                </th>
                <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                  Projects
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {teamMembers.map((m) => (
                <tr key={m.id} className="transition-colors hover:bg-muted/10">
                  {/* Member Name & Initials Avatar */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#022b3a] text-xs font-bold text-white shadow-xs">
                        {m.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#022b3a]">
                          {m.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {m.roleTitle}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Contact Email & Joined Date */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-xs text-foreground/80">
                      {m.email}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {m.joinedDate}
                    </p>
                  </td>

                  {/* Access Role Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getRoleBadgeStyle(
                        m.accessRole,
                      )}`}
                    >
                      {m.accessRole}
                    </span>
                  </td>

                  {/* Projects Count */}
                  <td className="px-6 py-4 text-xs font-medium text-muted-foreground">
                    {m.projectsCount} projects
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
