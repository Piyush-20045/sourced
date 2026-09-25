"use client";
import { useState } from "react";
import {
  Check,
  Laptop,
  Lock,
  MessageSquare,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export function SecurityTab() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  // 2FA Toggles
  const [authenticatorApp, setAuthenticatorApp] = useState(true);
  const [smsAuth, setSmsAuth] = useState(false);

  // Active Sessions
  const [sessions, setSessions] = useState([
    {
      id: "s1",
      device: 'MacBook Pro 16"',
      isCurrent: true,
      location: "San Francisco, USA • Chrome • 192.168.1.1",
      icon: Laptop,
    },
    {
      id: "s2",
      device: "iPhone 15 Pro",
      isCurrent: false,
      location: "San Francisco, USA • App • 2 hours ago",
      icon: Smartphone,
    },
    {
      id: "s3",
      device: "Windows Desktop",
      isCurrent: false,
      location: "London, UK • Edge • 3 days ago",
      icon: Monitor,
    },
  ]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleRevokeSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* 1. Update Password Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-100">
          <Lock className="h-5 w-5 text-emerald-600" />
          <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
            Update Password
          </h2>
        </div>

        <form onSubmit={handlePasswordSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400 placeholder:font-normal"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 12 characters"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400 placeholder:font-normal"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat new password"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400 placeholder:font-normal"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="rounded-xl bg-[#042430] hover:bg-black px-6 py-3 text-xs font-extrabold text-white shadow-xs transition-all active:scale-98 flex items-center gap-1.5"
            >
              {isSaved ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Security Credentials Updated!</span>
                </>
              ) : (
                <span>Update Security Credentials</span>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* 2. Two-Factor Authentication (2FA) Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
              Two-Factor Authentication (2FA)
            </h2>
          </div>
          <p className="mt-1 text-xs text-neutral-500">
            Add an extra layer of security to your account.
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {/* Sub-item 1: Authenticator App */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4 transition-all hover:bg-neutral-50">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-neutral-900">
                  Authenticator App
                </h3>
                <p className="text-xs text-neutral-500">
                  Use Google Authenticator or Authy.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAuthenticatorApp(!authenticatorApp)}
              className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
                authenticatorApp ? "bg-emerald-500" : "bg-neutral-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-xs ${
                  authenticatorApp ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Sub-item 2: SMS Authentication */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4 transition-all hover:bg-neutral-50">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 border border-neutral-200">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-neutral-900">
                  SMS Authentication
                </h3>
                <p className="text-xs text-neutral-500">
                  Receive codes via text message.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSmsAuth(!smsAuth)}
              className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
                smsAuth ? "bg-emerald-500" : "bg-neutral-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-xs ${
                  smsAuth ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Active Sessions Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight pb-4 border-b border-neutral-100">
          Active Sessions
        </h2>

        <div className="divide-y divide-neutral-100">
          {sessions.map((session) => {
            const Icon = session.icon;
            return (
              <div
                key={session.id}
                className="flex items-center justify-between py-4 first:pt-4 last:pb-0"
              >
                <div className="flex items-center gap-3.5">
                  <Icon className="h-5 w-5 text-neutral-700 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-extrabold text-neutral-900">
                        {session.device}
                      </h3>
                      {session.isCurrent && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-700">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {session.location}
                    </p>
                  </div>
                </div>

                {session.isCurrent ? (
                  <span className="text-xs font-medium text-neutral-400">
                    Revoke
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRevokeSession(session.id)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-800 hover:underline transition-colors"
                  >
                    Revoke
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
