"use client";

import { useState } from "react";
import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import Footer from "@/components/layout/footer";
import { agencyIdentity } from "@/data/dashboard/agency-dashboard";
import { AgencySideNav } from "../_components/agency/shared/agency-side-nav";
import { AgencyStatsGrid } from "../_components/agency/shared/agency-stats-grid";
import {
  AgencyOverview,
  AgencyOverviewDetails,
} from "../_components/agency/overview/agency-overview";
import { AgencyFindWork } from "../_components/agency/find-work/agency-find-work";
import { AgencyProposals } from "../_components/agency/proposals/agency-proposals";
import { AgencyProjects } from "../_components/agency/projects/agency-projects";
import { AgencyTeam } from "../_components/agency/team/agency-team";
import { AgencyHiring } from "../_components/agency/hiring/agency-hiring";
import { AgencyFinance } from "../_components/agency/finance/agency-finance";
import { AgencyAnalytics } from "../_components/agency/analytics/agency-analytics";

export default function AgencyDashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <DashboardNav />
      <ProfileHeader
        identity={agencyIdentity}
        editLabel="Edit agency profile"
        actionLabel="Find projects"
        actionHref="/explore"
      />
      <AgencyStatsGrid />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="min-w-0">
          <AgencySideNav activeTab={activeTab} onSelectTab={setActiveTab} />
        </div>
        <div className="min-w-0">
          {activeTab === "Overview" && <AgencyOverview />}
          {activeTab === "Find Work" && <AgencyFindWork />}
          {activeTab === "Proposals" && <AgencyProposals />}
          {activeTab === "Projects" && <AgencyProjects />}
          {activeTab === "Team & Capacity" && <AgencyTeam />}
          {activeTab === "Hiring" && <AgencyHiring view="summary" />}
          {activeTab === "Finance" && <AgencyFinance />}
          {activeTab === "Analytics" && <AgencyAnalytics />}
        </div>
      </div>

      {activeTab === "Overview" && (
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <AgencyOverviewDetails />
        </div>
      )}

      {activeTab === "Hiring" && (
        <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6">
          <AgencyHiring view="pipeline" />
        </div>
      )}

      <Footer />
    </div>
  );
}
