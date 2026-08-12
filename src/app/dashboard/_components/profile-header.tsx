"use client";
import { useState } from "react";
import { BadgeCheck, MapPin, Search } from "lucide-react";
import { user, Mode } from "../data/dashboard";

/** Cover photo, avatar, mode switcher and profile-strength meter. */
export function ProfileHeader() {
  const [mode, setMode] = useState<Mode>(user.activeMode);

  return (
    <section>
      {/* cover image */}
      <div className="h-28 w-full overflow-hidden sm:h-40 md:h-44">
        <img
          src={user.cover}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* avatar + name row */}
        <div className="-mt-10 flex flex-wrap items-end gap-4 pt-2">
          <div className="flex items-end">
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-24 w-24 rounded-full border-2 border-background object-cover"
              />
              {user.verified && (
                <BadgeCheck className="absolute bottom-2 right-1 h-5 w-5 fill-accent bg-white text-background border rounded-full" />
              )}
            </div>

            <div className="ml-1 sm:ml-4 mb-1 min-w-0 basis-full sm:basis-auto">
              <h1 className="truncate text-2xl font-bold">{user.name}</h1>
              <p className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {user.location} <span className="mx-1">|</span> {user.title}
              </p>
            </div>
          </div>

          {/* actions */}
          <div className="mb-1 flex w-full flex-wrap gap-2 sm:ml-auto sm:w-auto">
            <button className="flex-1 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted sm:flex-none">
              Edit Profile
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 sm:flex-none">
              <Search className="h-3.5 w-3.5 shrink-0" />
              Find Projects
            </button>
          </div>
        </div>

        {/* mode switch + profile strength */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
          <div className="flex w-full rounded-md bg-muted p-1 text-sm sm:w-auto">
            {user.modes.map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded px-3 py-1.5 font-medium transition-colors sm:flex-none sm:px-4 ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="w-full sm:max-w-xs rounded-lg border border-border p-3">
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="uppercase tracking-wider text-muted-foreground">
                Profile strength
              </span>
              <span className="text-sm font-bold">{user.profileStrength}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${user.profileStrength}%` }}
              />
            </div>
            <a
              href="#"
              className="mt-2 block text-right text-xs font-semibold underline"
            >
              Complete Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
