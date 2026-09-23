"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Eye,
  Link2,
  Check,
  Globe,
  StarCheck,
} from "lucide-react";

export function AccountTab() {
  const [fullName, setFullName] = useState("Alexander Sterling");
  const [email, setEmail] = useState("alexander.s@nexusmarket.io");
  const [headline, setHeadline] = useState(
    "Principal Product Designer & Strategy Consultant",
  );
  const [isPublic, setIsPublic] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleDiscard = () => {
    setFullName("Alexander Sterling");
    setEmail("alexander.s@nexusmarket.io");
    setHeadline("Principal Product Designer & Strategy Consultant");
  };

  return (
    <div className="space-y-6">
      {/* Account Details Form Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <h2 className="text-2xl font-bold text-neutral-900">
            Account Details
          </h2>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("full-name-input");
              el?.focus();
            }}
            className="text-xs font-bold text-neutral-600 hover:text-black transition-colors"
          >
            Edit all
          </button>
        </div>

        <form onSubmit={handleSave} className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="full-name-input"
                className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5"
              >
                FULL NAME
              </label>
              <input
                id="full-name-input"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email-input"
                className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5"
              >
                EMAIL ADDRESS
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="headline-input"
              className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5"
            >
              PROFESSIONAL HEADLINE
            </label>
            <input
              id="headline-input"
              type="text"
              required
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={handleDiscard}
              className="rounded-xl border border-neutral-200 px-5 py-2.5 text-xs font-bold text-neutral-700 hover:bg-neutral-100 transition-all"
            >
              Discard Changes
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#042430] hover:bg-black px-6 py-2.5 text-xs font-extrabold text-white shadow-xs transition-all active:scale-98 flex items-center gap-1.5"
            >
              {isSaved ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Updates</span>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Grid: Profile Visibility & Connected Accounts */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Profile Visibility Card */}
        <div className="rounded-3xl bg-[#042430] p-6 text-white shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-950/80 text-emerald-400">
                <Eye className="h-5 w-5 stroke-2" />
              </div>

              {/* On/Off Toggle Pill */}
              <button
                type="button"
                onClick={() => setIsPublic(!isPublic)}
                className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
                  isPublic ? "bg-emerald-500" : "bg-neutral-700"
                }`}
              >
                <span
                  className={`text-[10px] font-black uppercase text-white px-0.5 transition-transform ${
                    isPublic ? "translate-x-0" : "translate-x-5"
                  }`}
                >
                  {isPublic ? "On" : "Off"}
                </span>
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    isPublic ? "translate-x-1" : "-translate-x-6"
                  }`}
                />
              </button>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              Profile Visibility
            </h3>
            <p className="mt-2 text-xs text-teal-100/80 leading-relaxed">
              Your profile is currently public and discoverable by all premium
              clients.
            </p>
          </div>

          <Link
            href="/dashboard/freelancer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 hover:text-white transition-colors"
          >
            <span>PREVIEW PUBLIC PROFILE</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Connected Accounts Card */}
        <div className="rounded-3xl bg-[#eaeced] border border-neutral-200/90 p-6 shadow-xs flex flex-col justify-between space-y-6 relative overflow-hidden">
          <Link2 className="absolute -right-4 -bottom-4 h-32 w-32 text-neutral-300/40 pointer-events-none stroke-1" />

          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              Connected Accounts
            </h3>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Manage your third-party integrations.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-300 shadow-2xs text-xs font-black text-neutral-800">
              <Globe />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-300 shadow-2xs text-xs font-black text-neutral-800">
              <StarCheck />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
