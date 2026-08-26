import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { StatsGrid } from "../_components/freelancer/stats-grid";
import { FreelancerSideNav } from "../_components/freelancer/freelancer-side-nav";
import { ActiveBids } from "../_components/freelancer/active-bids";
import { Recommended } from "../_components/freelancer/recommended";
import { AboutSection } from "../_components/freelancer/about-section";
import { Portfolio } from "../_components/freelancer/portfolio";
import { WorkHistory } from "../_components/freelancer/work-history";
import { SidebarInfo } from "../_components/freelancer/sidebar-info";
import { SkillsSection } from "../_components/freelancer/skills-section";
import { TestimonialCta } from "../_components/freelancer/testimonial-cta";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Freelancer Dashboard — Sourced",
  description:
    "Track your bids, earnings, portfolio and recommended projects from one Sourced freelancer dashboard.",
};

function FreelancerPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <DashboardNav />
      <ProfileHeader />
      <StatsGrid />

      {/* overview: left nav + bids/recommendations */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div className="min-w-0">
          <FreelancerSideNav />
        </div>
        <div className="min-w-0 space-y-10">
          <ActiveBids />
          <Recommended />
        </div>
      </div>

      {/* profile detail: main column + info sidebar */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-8">
        <AboutSection />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
          <div className="space-y-10">
            <Portfolio />
            <WorkHistory />
          </div>
          <SidebarInfo />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <SkillsSection />
      </div>

      <TestimonialCta />
      <Footer />
    </div>
  );
}

export default FreelancerPage;
