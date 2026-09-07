"use client";

import { useState } from "react";
import { DashboardNav } from "../_components/dashboard-nav";
import { ProfileHeader } from "../_components/profile-header";
import { FreelancerSideNav } from "../_components/freelancer/shared/freelancer-side-nav";
import Footer from "@/components/layout/footer";

// Overview Components
import { StatsGrid } from "../_components/freelancer/shared/stats-grid";
import { ActiveBids } from "../_components/freelancer/overview/active-bids";
import { Recommended } from "../_components/freelancer/overview/recommended";
import { AboutSection } from "../_components/freelancer/overview/about-section";
import { Portfolio } from "../_components/freelancer/overview/portfolio";
import { WorkHistory } from "../_components/freelancer/overview/work-history";
import { SidebarInfo } from "../_components/freelancer/overview/sidebar-info";
import { SkillsSection } from "../_components/freelancer/overview/skills-section";
import { TestimonialCta } from "../_components/freelancer/overview/testimonial-cta";

// Find Projects Components
import { FindProjects } from "../_components/freelancer/find-projects/find-projects";

// My Proposals Components
import { MyProposals } from "../_components/freelancer/my-proposal/my-proposal";

// Search Clients Components
import { SearchClients } from "../_components/freelancer/search-clients/search-clients";

export default function FreelancerPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* Sticky top navbar & Profile header */}
      <DashboardNav />
      <ProfileHeader />
      <StatsGrid />

      {/* overview: left nav + right active tab section */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div className="min-w-0">
          <FreelancerSideNav activeTab={activeTab} onSelectTab={setActiveTab} />
        </div>
        <div className="min-w-0 space-y-10">
          {activeTab === "Overview" && (
            <>
              <ActiveBids />
              <Recommended />
            </>
          )}

          {activeTab === "Find Projects" && <FindProjects />}

          {activeTab === "My Proposals" && <MyProposals />}

          {activeTab === "Search Clients" && <SearchClients />}
        </div>
      </div>

      {/* profile detail (Overview only): main column + info sidebar */}
      {activeTab === "Overview" && (
        <>
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
        </>
      )}

      <Footer />
    </div>
  );
}
