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
      <div className="h-40 w-full overflow-hidden md:h-44">
        <img
          src={user.cover}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* avatar + name row */}
        <div className="-mt-8 flex flex-wrap items-end gap-4 pt-2">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-20 w-20 rounded-full border-4 border-background object-cover"
            />
            {user.verified && (
              <BadgeCheck className="absolute bottom-1 right-0 h-5 w-5 fill-accent text-background" />
            )}
          </div>

          <div className="mb-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {user.location} <span className="mx-1">|</span> {user.title}
            </p>
          </div>

          {/* actions */}
          <div className="mb-1 ml-auto flex gap-2">
            <button className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
              Edit Profile
            </button>
            <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              <Search className="h-3.5 w-3.5" />
              Find Projects
            </button>
          </div>
        </div>

        {/* mode switch + profile strength */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
          <div className="flex rounded-md bg-muted p-1 text-sm">
            {user.modes.map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded px-4 py-1.5 font-medium transition-colors ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="w-full max-w-xs rounded-lg border border-border p-3">
            <div className="flex items-center justify-between text-xs">
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
