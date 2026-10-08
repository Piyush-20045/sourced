"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileWarning,
  Settings2,
  UsersRound,
} from "lucide-react";
import { initialAuthState } from "@/data/auth";

const identityProfiles = [
  {
    label: "Freelancer",
    description: "Your independent professional profile",
    slug: initialAuthState.user.profileSlugs.Freelancer,
    icon: BriefcaseBusiness,
  },
  {
    label: "Client",
    description: "Your hiring company profile",
    slug: initialAuthState.user.profileSlugs.Client,
    icon: Building2,
  },
  {
    label: "Agency",
    description: "Your agency and team profile",
    slug: initialAuthState.user.profileSlugs.Agency,
    icon: UsersRound,
  },
] as const;

export function AccountTab() {
  const [isPublic, setIsPublic] = useState(true);
  const [defaultIdentity, setDefaultIdentity] = useState("Freelancer");
  const [language, setLanguage] = useState("English (US)");
  const [timeZone, setTimeZone] = useState("Asia/Kolkata (GMT+5:30)");
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [exportRequested, setExportRequested] = useState(false);
  const [showClosureNotice, setShowClosureNotice] = useState(false);
  const account = initialAuthState.user;

  const markPreferencesChanged = () => setPreferencesSaved(false);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs sm:p-7">
        <div className="flex flex-col gap-5 border-b border-neutral-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <Image
              src={account.avatar}
              alt={account.name}
              width={64}
              height={64}
              className="size-14 shrink-0 rounded-full object-cover sm:size-16"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="truncate text-xl font-bold text-neutral-950">
                  {account.name}
                </h2>
                <BadgeCheck
                  className="size-4.5 shrink-0 fill-emerald-100 text-emerald-700"
                  aria-label="Verified account"
                />
              </div>
              <p className="mt-1 truncate text-sm text-neutral-500">
                {account.email}
              </p>
              <p className="mt-1 text-xs font-medium text-emerald-700">
                Identity verified · Account in good standing
              </p>
            </div>
          </div>

          <Link
            href={`/profile/${account.profileSlugs.Freelancer}`}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-[#042430] px-4 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Open public profile
            <ExternalLink className="size-4" />
          </Link>
        </div>

        <div className="mt-6">
          <div>
            <h3 className="text-base font-bold text-neutral-900">
              Your public identities
            </h3>
            <p className="mt-1 text-xs leading-5 text-neutral-500">
              Profile details are now edited directly from each dashboard or
              public profile.
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            {identityProfiles.map((identity) => {
              const Icon = identity.icon;
              return (
                <Link
                  key={identity.label}
                  href={`/profile/${identity.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-neutral-200 p-3.5 transition-colors hover:border-[#042430]/30 hover:bg-neutral-50"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#042430] text-white">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-neutral-900">
                      {identity.label}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-neutral-500">
                      {identity.description}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-800" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs sm:p-7">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-md bg-neutral-100 text-neutral-700">
            <Settings2 className="size-4.5" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-neutral-950">
              Account preferences
            </h2>
            <p className="mt-1 text-xs leading-5 text-neutral-500">
              Choose the workspace and regional settings used when you sign in.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Default identity
            </span>
            <select
              value={defaultIdentity}
              onChange={(event) => {
                setDefaultIdentity(event.target.value);
                markPreferencesChanged();
              }}
              className="mt-2 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-900 outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            >
              <option>Freelancer</option>
              <option>Client</option>
              <option>Agency</option>
            </select>
          </label>

          <label className="block">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Display language
            </span>
            <select
              value={language}
              onChange={(event) => {
                setLanguage(event.target.value);
                markPreferencesChanged();
              }}
              className="mt-2 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-900 outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            >
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Hindi</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Time zone
            </span>
            <select
              value={timeZone}
              onChange={(event) => {
                setTimeZone(event.target.value);
                markPreferencesChanged();
              }}
              className="mt-2 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-900 outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            >
              <option>Asia/Kolkata (GMT+5:30)</option>
              <option>Europe/London (GMT)</option>
              <option>America/New_York (GMT-5)</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => setPreferencesSaved(true)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#042430] px-4 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            {preferencesSaved && <Check className="size-4 text-emerald-300" />}
            {preferencesSaved ? "Preferences saved" : "Save preferences"}
          </button>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        <section className="flex flex-col justify-between rounded-lg bg-[#042430] p-6 text-white shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="grid size-10 place-items-center rounded-md bg-white/10 text-emerald-300">
                <Eye className="size-5" />
              </span>
              <button
                type="button"
                onClick={() => setIsPublic((current) => !current)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
                  isPublic ? "bg-emerald-500" : "bg-neutral-600"
                }`}
                aria-pressed={isPublic}
                aria-label="Toggle public profile visibility"
              >
                <span
                  className={`size-5 rounded-full bg-white shadow-sm transition-transform ${
                    isPublic ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <h2 className="mt-5 text-xl font-bold">Profile visibility</h2>
            <p className="mt-2 text-xs leading-5 text-teal-100/75">
              Your profiles are {isPublic ? "public and discoverable" : "hidden from marketplace search"}.
              Direct profile links remain available to you.
            </p>
          </div>
          <Link
            href={`/profile/${account.profileSlugs.Freelancer}`}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:text-white"
          >
            Preview public profile <ExternalLink className="size-3.5" />
          </Link>
        </section>

        <section className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xs">
          <h2 className="text-xl font-bold text-neutral-950">Data & account</h2>
          <p className="mt-1 text-xs leading-5 text-neutral-500">
            Download your information or review account closure options.
          </p>

          <div className="mt-5 divide-y divide-neutral-100">
            <button
              type="button"
              onClick={() => setExportRequested(true)}
              className="flex w-full items-center gap-3 py-3 text-left first:pt-0"
            >
              <span className="grid size-9 place-items-center rounded-md bg-neutral-100 text-neutral-700">
                {exportRequested ? (
                  <Check className="size-4 text-emerald-700" />
                ) : (
                  <Download className="size-4" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-neutral-900">
                  {exportRequested ? "Export requested" : "Export your data"}
                </span>
                <span className="mt-0.5 block text-xs text-neutral-500">
                  {exportRequested
                    ? "We’ll notify you when the archive is ready."
                    : "Projects, messages, profiles, and transactions"}
                </span>
              </span>
              <ChevronRight className="size-4 text-neutral-400" />
            </button>

            <button
              type="button"
              onClick={() => setShowClosureNotice((current) => !current)}
              className="flex w-full items-center gap-3 py-3 text-left last:pb-0"
            >
              <span className="grid size-9 place-items-center rounded-md bg-rose-50 text-rose-700">
                <FileWarning className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-neutral-900">
                  Account closure
                </span>
                <span className="mt-0.5 block text-xs text-neutral-500">
                  Review what happens before closing your account
                </span>
              </span>
              <ChevronRight
                className={`size-4 text-neutral-400 transition-transform ${
                  showClosureNotice ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {showClosureNotice && (
            <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-xs leading-5 text-rose-900">
              Active contracts and outstanding balances must be resolved before
              an account can be closed. Contact support when you are ready to
              begin the process.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
