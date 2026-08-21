import { BadgeCheck, Star } from "lucide-react";
import type { JobPost } from "@/data/explore";

interface ProjectBriefCardProps {
  jobData: JobPost;
}

/** Right sidebar summary card displaying project title, budget, skills and client details */
export function ProjectBriefCard({ jobData }: ProjectBriefCardProps) {
  return (
    <div className="rounded-2xl border border-[#e2e4e9] bg-white p-6 shadow-xs">
      <h2 className="text-lg font-bold text-[#022b3a]">Project Brief</h2>

      <div className="mt-4 rounded-xl border border-[#d5e2e9]/50 bg-[#f0f5f8] p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#525866]">
          PROJECT TITLE
        </p>
        <p className="mt-1 text-base font-bold leading-snug text-[#022b3a]">
          {jobData.title}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#d5e2e9]/40 bg-[#f0f5f8]/60 p-3">
          <p className="text-[11px] text-[#525866]">Fixed Budget</p>
          <p className="text-sm font-bold text-[#022b3a]">{jobData.rate}</p>
        </div>
        <div className="rounded-xl border border-[#d5e2e9]/40 bg-[#f0f5f8]/60 p-3">
          <p className="text-[11px] text-[#525866]">Posted</p>
          <p className="text-sm font-bold text-[#022b3a]">
            {jobData.postedAgo.replace("Posted ", "")}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold text-[#525866]">Required Skills</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {jobData.tags.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#f0f5f8] px-3 py-1 text-xs font-medium text-[#022b3a]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-5 border-[#e2e4e9]" />

      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#16a34a]">
          <BadgeCheck className="h-5 w-5 fill-[#22c55e] text-white" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-[#022b3a]">
            {jobData.company.name}
          </p>
          <p className="flex items-center gap-1 text-xs text-[#525866]">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-[#022b3a]">
              {jobData.company.rating}
            </span>{" "}
            ({jobData.company.reviews} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
