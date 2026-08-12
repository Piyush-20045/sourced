import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { SideNav } from "../_components/side-nav";
import { StatsGrid } from "../_components/stats-grid";

export const metadata = {
  title: "Freelancer Dashboard — Sourced",
  description:
    "Track your bids, earnings, portfolio and recommended projects from one Sourced freelancer dashboard.",
};

function FreelancerPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <DashboardNav />
      <ProfileHeader />
      <StatsGrid />

      {/* overview: left nav + bids/recommendations */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-12 lg:grid-cols-[220px_1fr]">
        <SideNav />
        <div className="space-y-10">
          Bids + Recommendations here
        </div>
      </div>

    </div>
  );
}

export default FreelancerPage;
