"use client";
import { useState } from "react";
import { BarChart3, CalendarDays, CreditCard, FileText, LayoutGrid } from "lucide-react";
import { sideNav } from "../data/dashboard";

// map of icon names used in the mock data to real lucide components
const icons = { LayoutGrid, CalendarDays, FileText, CreditCard, BarChart3 } as const;

/** Left-hand section navigation for the dashboard overview area. */
export function SideNav() {
  const [active, setActive] = useState(sideNav[0]!.label);

  return (
    <nav className="space-y-1 text-sm">
      {sideNav.map((item, i) => {
        const Icon = icons[item.icon as keyof typeof icons];
        const isNewSection = item.section && item.section !== sideNav[i - 1]?.section;

        return (
          <div key={item.label}>
            {isNewSection && (
              <p className="px-3 pb-2 pt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.section}
              </p>
            )}
            <button
              onClick={() => setActive(item.label)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 transition-colors ${
                active === item.label
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
              {item.badge && (
                <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-xs text-foreground">
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
