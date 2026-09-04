"use client";
import { useState } from "react";
import {
  BarChart3,
  SearchCheck,
  MailCheck,
  UserSearch,
  CalendarDays,
  CreditCard,
  BriefcaseBusiness,
  FileText,
  LayoutGrid,
} from "lucide-react";
import { freelancerSideNav } from "@/data/dashboard/freelancer-dashboard";

// map of icon names used in the mock data to real lucide components
const icons = {
  LayoutGrid,
  SearchCheck,
  MailCheck,
  UserSearch,
  CalendarDays,
  FileText,
  CreditCard,
  BriefcaseBusiness,
  BarChart3,
} as const;

interface FreelancerSideNavProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

/** Left-hand section navigation for the dashboard overview area. */
export function FreelancerSideNav({
  activeTab,
  onSelectTab,
}: FreelancerSideNavProps) {
  const [internalActive, setInternalActive] = useState(
    freelancerSideNav[0]!.label,
  );
  const active = activeTab ?? internalActive;

  const handleSelect = (label: string) => {
    setInternalActive(label);
    onSelectTab?.(label);
  };

  return (
    <nav className="space-y-1 text-sm">
      {freelancerSideNav.map((item, i) => {
        const Icon = icons[item.icon as keyof typeof icons] || LayoutGrid;
        const isNewSection =
          item.section && item.section !== freelancerSideNav[i - 1]?.section;

        return (
          <div key={item.label}>
            {isNewSection && (
              <p className="px-3 pb-2 pt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.section}
              </p>
            )}
            <button
              onClick={() => handleSelect(item.label)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 transition-colors ${
                active === item.label
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
              {item.badge !== undefined && (
                <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-[#EDEDF5] text-xs text-foreground">
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
