import { Bell, Search, Settings } from "lucide-react";
import Link from "next/link";
import { topNav, user } from "../../../data/dashboard";

/** Sticky top navigation bar of the dashboard. */
export function DashboardNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#e3e3e3] text-[#063242] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4.5 sm:px-6 md:gap-6">
        {/* logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold leading-none"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-[#063242] text-xs font-bold text-white">
            S
          </span>
          <span>Sourced</span>
        </Link>

        {/* primary links */}
        <nav className="hidden min-w-0 items-center gap-6 text-sm md:flex">
          {topNav.map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground/80 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* search */}
        <div className="ml-auto hidden items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-muted-foreground lg:flex">
          <Search className="h-3.5 w-3.5" />
          <input
            placeholder="Search..."
            className="w-40 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* icons + user */}
        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 lg:ml-0">
          <button className="relative" aria-label="Notifications">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
              3
            </span>
          </button>
          <button aria-label="Settings">
            <Settings className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <div className="hidden text-right leading-tight sm:block">
              <p className="text-sm font-semibold">{user.name.split(" ")[0]}</p>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {user.activeMode} mode
              </p>
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              className="h-8 w-8 shrink-0 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
