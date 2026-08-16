import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import { ExploreSidebar } from "./_components/explore-navbar";
import Footer from "@/components/layout/footer";
import { JobFeed } from "./_components/job-feed";

export const metadata = {
  title: "Explore Projects — Sourced",
  description:
    "Browse freelance projects, full-time roles and agency briefs matched to your skills on Sourced.",
};

function ExplorePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <DashboardNav />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[220px_1fr]">
        <ExploreSidebar />
        <JobFeed />
      </main>

      <Footer />
    </div>
  );
}

export default ExplorePage;
