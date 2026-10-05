"use client";

import {
  BarChart3,
  CreditCard,
  FolderKanban,
  LayoutGrid,
  MailCheck,
  SearchCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { agencySideNav } from "@/data/dashboard/agency-dashboard";

const icons = {
  LayoutGrid,
  SearchCheck,
  MailCheck,
  FolderKanban,
  Users,
  UserPlus,
  CreditCard,
  BarChart3,
} as const;

interface AgencySideNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function AgencySideNav({
  activeTab,
  onSelectTab,
}: AgencySideNavProps) {
  return (
    <nav aria-label="Agency dashboard" className="space-y-1 text-sm">
      {agencySideNav.map((item, index) => {
        const Icon = icons[item.icon as keyof typeof icons] ?? LayoutGrid;
        const startsSection =
          item.section && item.section !== agencySideNav[index - 1]?.section;

        return (
          <div key={item.label}>
            {startsSection && (
              <p className="px-3 pb-2 pt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.section}
              </p>
            )}
            <button
              type="button"
              onClick={() => onSelectTab(item.label)}
              aria-current={activeTab === item.label ? "page" : undefined}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeTab === item.label
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Icon className="size-4" />
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="ml-auto grid size-5 place-items-center rounded-full bg-[#EDEDF5] text-xs text-foreground">
                  {item.badge}
                </span>
              )}
            </button>
          </div>
        );
      })}
    </nav>
  );
}
