"use client";

import Link from "next/link";
import {
  BadgeCheck,
  ChevronRight,
  History,
  Key,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { user } from "@/data/dashboard/freelancer-dashboard";

interface SettingsSidebarProps {
  activeTab?: string;
}

export function SettingsSidebar({ activeTab }: SettingsSidebarProps) {
  // If Security tab is active, render Security-specific sidebar cards
  if (activeTab === "Security") {
    return (
      <div className="space-y-6">
        {/* Trust Score Card */}
        <div className="rounded-3xl bg-black p-6 text-white shadow-md space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
              TRUST SCORE
            </span>
            <Sparkles className="h-4 w-4 text-emerald-400 opacity-80" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-white tracking-tight">
              94%
            </span>
            <span className="text-sm font-bold text-emerald-400">
              Excellent
            </span>
          </div>

          {/* Password Strength Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-neutral-400">Password Strength</span>
              <span className="text-white font-bold">Strong</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-neutral-800">
              <div className="h-full w-[94%] rounded-full bg-emerald-500" />
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed pt-1">
            Your account is well-protected. We recommend a monthly security
            audit to maintain your status.
          </p>
        </div>

        {/* Security Insights Card */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-neutral-900 tracking-tight">
            Security Insights
          </h3>

          <div className="space-y-3.5 text-xs text-neutral-600">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Enable IP Whitelisting for sensitive financial operations.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <History className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Regularly review your Login History for suspicious activity.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Key className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                API keys should be rotated every 90 days to ensure maximum
                security.
              </p>
            </div>
          </div>
        </div>

        {/* Identity Verified Card */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-xs flex items-center gap-3.5">
          <img
            src={user.avatar || "/dashboard/salman.jpeg"}
            alt={user.name}
            className="h-11 w-11 rounded-full object-cover shrink-0 border border-neutral-200"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-extrabold text-neutral-900">
                Identity Verified
              </h4>
              <BadgeCheck className="h-4 w-4 text-emerald-600 fill-emerald-100" />
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Verification Level 3
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Account tab / Default Sidebar
  const percentage = 85;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Profile Strength Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs text-center space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          PROFILE STRENGTH
        </p>

        {/* Circular Progress Gauge */}
        <div className="relative mx-auto h-36 w-36 flex items-center justify-center">
          <svg
            className="h-full w-full -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-neutral-100"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Progress Arc */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-emerald-500 transition-all duration-1000 ease-out"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-neutral-900 tracking-tight">
              85%
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
              COMPLETE
            </span>
          </div>
        </div>

        <p className="text-xs text-neutral-600 leading-relaxed px-2">
          Adding a{" "}
          <Link
            href="/dashboard/freelancer"
            className="font-bold text-neutral-900 underline hover:text-black"
          >
            Case Study
          </Link>{" "}
          would boost your visibility by 25%.
        </p>

        <Link
          href="/dashboard/freelancer"
          className="flex items-center justify-center gap-1 w-full rounded-xl bg-neutral-200/80 hover:bg-neutral-300 py-3 text-xs font-extrabold uppercase tracking-wider text-neutral-800 transition-all active:scale-98"
        >
          <span>Finish Setup</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Global Network Image Card */}
      <div className="group relative h-52 w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-xs">
        <img
          src="/settings/setting-side-image.png"
          alt="Global Network"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
        <h3 className="absolute bottom-4 left-5 text-xl font-extrabold text-white tracking-tight">
          Global Network
        </h3>
      </div>

      {/* Expert Tip Card */}
      <div className="rounded-3xl border border-blue-200/80 bg-[#dbeafe]/90 p-5 shadow-2xs space-y-2">
        <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-blue-900">
          <Lightbulb className="h-3.5 w-3.5 text-blue-700" />
          <span>EXPERT TIP</span>
        </div>
        <p className="text-xs font-medium text-blue-950 leading-relaxed pt-1">
          &quot;Authenticity is the new premium. Keep your headline sharp and
          your bio direct.&quot;
        </p>
        <p className="text-[11px] font-semibold text-blue-800">
          — Design Council
        </p>
      </div>
    </div>
  );
}
