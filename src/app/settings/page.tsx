"use client";
import { useState } from "react";
import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import Footer from "@/components/layout/footer";
import { SettingsNav } from "./_components/settings-nav";
import { AccountTab } from "./_components/account-tab";
import { SettingsSidebar } from "./_components/settings-sidebar";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");

  // Dynamic header titles based on selected tab
  const headerTitle =
    activeTab === "Security" ? "Security Protocol" : "Settings";
  const headerSubtitle =
    activeTab === "Security"
      ? "Advanced protection and access management for your professional identity."
      : "Control your professional identity and workspace preferences.";

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      <div>
        {/* Sticky top navbar */}
        <DashboardNav />

        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
          {/* Header Title */}
          <div className="space-y-2 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              {headerTitle}
            </h1>
            <p className="text-sm font-medium text-neutral-600">
              {headerSubtitle}
            </p>
          </div>

          {/* 3-Column Dashboard Layout */}
          <div className="grid gap-8 lg:grid-cols-[220px_1fr_300px]">
            {/* Left Vertical Navigation */}
            <aside className="min-w-0">
              <SettingsNav activeTab={activeTab} onSelectTab={setActiveTab} />
            </aside>

            {/* Center Content Tab View */}
            <div className="min-w-0">
              {activeTab === "Account" && <AccountTab />}
            </div>

            {/* Right Information Sidebar */}
            <aside className="min-w-0">
              <SettingsSidebar activeTab={activeTab} />
            </aside>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
