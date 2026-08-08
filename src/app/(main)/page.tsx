import Hero from "@/components/home-sections/hero";
import RecentProjects from "@/components/home-sections/recent-projects";
import TopRated from "@/components/home-sections/top-rated";
import CTA from "@/components/home-sections/cta";

function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <RecentProjects />
      <TopRated />
      <CTA />
    </main>
  );
}

export default Home;
