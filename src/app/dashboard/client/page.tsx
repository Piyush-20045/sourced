import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { ClientStatsGrid } from "../_components/client/client-stats-grid";
import { ClientSideNav } from "../_components/client/client-side-nav";
import { ActiveProjects } from "../_components/client/active-projects";
import { RecommendedFreelancers } from "../_components/client/recommended-freelancers";
import { ClientAboutSection } from "../_components/client/client-about-section";
import { PostedProjects } from "../_components/client/posted-projects";
import { ClientTestimonialCta } from "../_components/client/client-testimonial-cta";
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
        <div className="min-w-0 space-y-10">
          <ActiveProjects />
          <RecommendedFreelancers />
        </div>
      </div>

      {/* Client profile details: about, posted projects, testimonial CTA */}
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-12 sm:px-6">
        <ClientAboutSection />
        <PostedProjects />
        <ClientTestimonialCta />
      </div>

      <Footer />
    </div>
  );
}
