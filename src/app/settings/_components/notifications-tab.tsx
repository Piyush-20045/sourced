"use client";

import { useState } from "react";
import { Bell, Mail, MessageSquare } from "lucide-react";

export function NotificationsTab() {
  const [projectAlerts, setProjectAlerts] = useState(true);
  const [directMessages, setDirectMessages] = useState(true);
  const [marketingDigest, setMarketingDigest] = useState(false);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
          <Bell className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
            Notification Preferences
          </h2>
          <p className="text-xs text-neutral-500">
            Control how and when SOURCED notifies you.
          </p>
        </div>
      </div>

      <div className="space-y-4 divide-y divide-neutral-100">
        {/* Toggle 1 */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <p className="text-sm font-extrabold text-neutral-900">
                Direct Messages & Client Invites
              </p>
              <p className="text-xs text-neutral-500">
                Receive instant notifications when a client sends a message or interview request.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDirectMessages(!directMessages)}
            className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
              directMessages ? "bg-emerald-500" : "bg-neutral-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                directMessages ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Toggle 2 */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-start gap-3">
            <Bell className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <p className="text-sm font-extrabold text-neutral-900">
                Project Match Alerts
              </p>
              <p className="text-xs text-neutral-500">
                Get notified when new projects matching your skills are posted.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setProjectAlerts(!projectAlerts)}
            className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
              projectAlerts ? "bg-emerald-500" : "bg-neutral-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                projectAlerts ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Toggle 3 */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <p className="text-sm font-extrabold text-neutral-900">
                Weekly Marketplace Digest
              </p>
              <p className="text-xs text-neutral-500">
                A weekly summary of trending rates, platform tips, and top stories.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMarketingDigest(!marketingDigest)}
            className={`relative inline-flex h-7 w-13 items-center rounded-full p-1 transition-colors ${
              marketingDigest ? "bg-emerald-500" : "bg-neutral-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                marketingDigest ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
