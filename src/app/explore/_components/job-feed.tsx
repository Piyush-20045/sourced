import { jobs } from "@/data/explore";
import { ExploreHero } from "./explore-hero";
import { JobCard } from "./job-card";

/** Main column of the explore page: search banner + list of job cards. */
export function JobFeed() {
  return (
    <div className="min-w-0 space-y-5">
      <ExploreHero />
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
