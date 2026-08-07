import Hero from "@/components/home-sections/hero";
import RecentProjects from "@/components/home-sections/recent-projects";
import { CTA } from "@/components/home-sections/cta";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <RecentProjects />
      <CTA />
    </main>
  );
}
