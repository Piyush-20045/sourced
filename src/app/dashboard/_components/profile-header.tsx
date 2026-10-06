"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { BadgeCheck, MapPin, Search } from "lucide-react";
import { user, Mode } from "@/data/dashboard/freelancer-dashboard";
import Link from "next/link";

export interface DashboardHeaderIdentity {
  name: string;
  avatar?: string;
  initials?: string;
  cover: string;
  location: string;
  title: string;
  verified: boolean;
  profileStrength: number;
}

interface ProfileHeaderProps {
  identity?: DashboardHeaderIdentity;
  editLabel?: string;
  actionLabel?: string;
  actionHref?: string;
}

/** Cover photo, avatar, mode switcher and profile-strength meter. */
export function ProfileHeader({
  identity,
  editLabel = "Edit Profile",
  actionLabel = "Find Projects",
  actionHref = "/explore",
}: ProfileHeaderProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const profile: DashboardHeaderIdentity = identity ?? user;

  // Determine current active mode from URL route
  const currentMode: Mode = pathname.includes("/dashboard/client")
    ? "Client"
    : pathname.includes("/dashboard/agency")
      ? "Agency"
      : "Freelancer";

  const handleModeChange = (m: Mode) => {
    if (m === "Freelancer") {
      router.push("/dashboard/freelancer");
    } else if (m === "Client") {
      router.push("/dashboard/client");
    } else {
      router.push("/dashboard/agency");
    }
  };

  return (
    <section>
      {/* cover image */}
      <div className="relative h-28 w-full overflow-hidden sm:h-40 md:h-48">
        <Image
          src={profile.cover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* avatar + name row */}
        <div className="-mt-10 flex flex-wrap items-end gap-4 pt-2">
          <div className="flex min-w-0 w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-end sm:gap-4">
            <div className="relative shrink-0">
              {profile.avatar ? (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="size-24 rounded-full border-2 border-background object-cover"
                />
              ) : (
                <div className="grid size-24 place-items-center rounded-full border-2 border-background bg-primary text-xl font-bold text-primary-foreground">
                  {profile.initials ?? profile.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              {profile.verified && (
                <BadgeCheck className="absolute bottom-2 right-1 h-5 w-5 fill-accent bg-white text-background border rounded-full" />
              )}
            </div>

            <div className="mb-1 min-w-0 max-w-full">
              <h1 className="wrap-break-word text-xl font-bold sm:text-2xl">{profile.name}</h1>
              <p className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {profile.location} <span className="mx-1">|</span> {profile.title}
              </p>
            </div>
          </div>

          {/* actions */}
          <div className="mb-1 flex w-full flex-col gap-2 min-[400px]:flex-row sm:ml-auto sm:w-auto">
            <Link href={'/settings'} className="min-w-0 flex-1 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted sm:flex-none">
              {editLabel}
            </Link>
            <Link
              href={actionHref}
              className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 sm:flex-none"
            >
              <Search className="h-3.5 w-3.5 shrink-0" />
              {actionLabel}
            </Link>
          </div>
        </div>

        {/* mode switch + profile strength */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
          <div className="flex w-full rounded-md bg-muted p-1 text-sm sm:w-auto">
            {user.modes.map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`min-w-0 flex-1 rounded px-2 py-1.5 text-xs font-medium transition-colors sm:flex-none sm:px-4 sm:text-sm ${
                  currentMode === m
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
              <span className="text-sm font-bold">{profile.profileStrength}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${profile.profileStrength}%` }}
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
