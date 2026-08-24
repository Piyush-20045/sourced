import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
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

      <Footer />
    </div>
  );
}
