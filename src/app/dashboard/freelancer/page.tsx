import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { StatsGrid } from "../_components/stats-grid";
import { SideNav } from "../_components/side-nav";
import { ActiveBids } from "../_components/active-bids";
import { Recommended } from "../_components/recommended";

export const metadata = {
  title: "Freelancer Dashboard — Sourced",
  description:
    "Track your bids, earnings, portfolio and recommended projects from one Sourced freelancer dashboard.",
};

function FreelancerPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <DashboardNav />
      <ProfileHeader />
      <StatsGrid />

      {/* overview: left nav + bids/recommendations */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div className="min-w-0">
          <SideNav />
        </div>
        <div className="min-w-0 space-y-10">
          <ActiveBids />
          <Recommended />
        </div>
      </div>
    </div>
  );
}

export default FreelancerPage;
