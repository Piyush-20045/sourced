"use client";

import { useState } from "react";
import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { ClientStatsGrid } from "../_components/client/shared/client-stats-grid";
import { ClientSideNav } from "../_components/client/shared/client-side-nav";
import Footer from "@/components/layout/footer";

// Overview components
import { ActiveProjects } from "../_components/client/overview/active-projects";
import { RecommendedFreelancers } from "../_components/client/overview/recommended-freelancers";
import { ClientAboutSection } from "../_components/client/overview/client-about-section";
import { PostedProjects } from "../_components/client/overview/posted-projects";
import { ClientTestimonialCta } from "../_components/client/overview/client-testimonial-cta";

// Post Project components
import { PostProjectCard } from "../_components/client/post-project/post-project-card";

// Browse Freelancers components
import { BrowseFreelancers } from "../_components/client/browse-freelancers/browse-freelancers";

// Active Contracts components
import { ActiveContracts } from "../_components/client/active-contracts/active-contracts";

export default function ClientDashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* Sticky top navbar & Profile header */}
      <DashboardNav />
      <ProfileHeader />

      {/* 4 KPI stats grid */}
      <ClientStatsGrid />

      {/* Main dashboard body: left nav + right content */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div className="min-w-0">
          <ClientSideNav activeTab={activeTab} onSelectTab={setActiveTab} />
        </div>

        <div className="min-w-0 space-y-10">
          {activeTab === "Post a Project" && (
            <>
              <PostProjectCard />
              <PostedProjects />
              <ActiveProjects />
              <RecommendedFreelancers />
            </>
          )}

          {activeTab === "Browse Freelancers" && <BrowseFreelancers />}

          {activeTab === "Active Contracts" && <ActiveContracts />}

          {activeTab === "Overview" && (
            <>
              <ActiveProjects />
              <RecommendedFreelancers />
            </>
          )}
        </div>
      </div>

      {/* Client profile details section (Overview tab only) */}
      {activeTab === "Overview" && (
        <div className="mx-auto max-w-6xl space-y-10 px-4 pb-12 sm:px-6">
          <ClientAboutSection />
          <PostedProjects />
          <ClientTestimonialCta />
        </div>
      )}

      <Footer />
    </div>
  );
}
