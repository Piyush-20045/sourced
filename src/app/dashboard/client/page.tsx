import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { ClientStatsGrid } from "../_components/client/client-stats-grid";
import { ClientSideNav } from "../_components/client/client-side-nav";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Client Dashboard — Sourced",
  description:
    "Manage your active projects, browse freelancers, and view posted jobs from your Sourced client dashboard.",
};

export default function ClientDashboardPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* Sticky top navbar & Profile header */}
      <DashboardNav />
      <ProfileHeader />

      {/* 4 KPI stats grid */}
      <ClientStatsGrid />

      {/* Overview section: left operational nav + active projects & recommendations */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div className="min-w-0">
          <ClientSideNav />
        </div>
      </div>

      <Footer />
    </div>
  );
}
