"use client";
import Link from "next/link";
import {
  Bell,
  CreditCard,
  Headphones,
  LogOut,
  Shield,
  User,
  Zap,
} from "lucide-react";

interface SettingsNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function SettingsNav({ activeTab, onSelectTab }: SettingsNavProps) {
  const navItems = [
    { id: "Account", label: "Account", icon: User },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Billing", label: "Billing", icon: CreditCard },
    { id: "Notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <nav className="space-y-6 text-sm">
      {/* Primary Tab Links */}
      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-md px-4 py-3 font-semibold transition-all ${
                isActive
                  ? "bg-[#dbeafe] text-[#1e40af] shadow-2xs"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Power User Callout Box */}
      <div className="rounded-xl bg-[#042430] p-5 text-white shadow-md space-y-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-1">
            <Zap className="h-3 w-3 fill-emerald-400" />
            POWER USER
          </p>
          <p className="mt-1 text-xs text-teal-100/80 font-medium leading-relaxed">
            Unlock professional talent tools.
          </p>
        </div>

        <Link
          href="/subscriptions"
          className="block w-full rounded-xl bg-white hover:bg-neutral-100 py-2.5 text-center text-xs font-bold text-neutral-900 shadow-xs transition-all active:scale-98"
        >
          Upgrade Plan
        </Link>
      </div>

      {/* Support & Sign Out */}
      <div className="pt-2 border-t border-neutral-200 space-y-1">
        <button
          type="button"
          onClick={() =>
            alert("Support chat initiated. Our team will contact you shortly.")
          }
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 font-semibold text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
        >
          <Headphones className="h-4 w-4 text-neutral-500" />
          <span>Support</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (confirm("Are you sure you want to sign out?")) {
              window.location.href = "/";
            }
          }}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 font-semibold text-rose-600 hover:bg-rose-50 transition-all"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
}
