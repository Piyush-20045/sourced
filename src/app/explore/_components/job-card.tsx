import { MapPin, Star } from "lucide-react";
import type { JobPost } from "@/data/explore";
import Link from "next/link";

/** A single project/job listing card in the explore feed. */
export function JobCard({ job }: { job: JobPost }) {
  return (
    <article className="rounded-xl border border-border p-5 transition-shadow hover:shadow-sm">
      {/* header: meta + rate */}
      <div className="flex flex-wrap items-start gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {job.recommended && (
              <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] font-semibold tracking-wider text-foreground">
                ★ RECOMMENDED
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {job.postedAgo}
            </span>
          </div>
          <Link
            href={`/explore/${job.id}`}
            className="mt-2 block text-lg font-semibold text-primary hover:underline"
          >
            {job.title}
          </Link>
        </div>

        <div className="ml-auto text-right">
          <p className="text-lg font-bold">{job.rate}</p>
          <p className="text-[11px] text-muted-foreground">{job.rateNote}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{job.description}</p>

      {/* skill tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((t) => (
          <span
            key={t}
            className="rounded bg-muted px-2 py-1 text-[11px] text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>

      {/* footer: company + apply */}
      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <img
          src={job.company.logo}
          alt={job.company.name}
          className="h-9 w-9 shrink-0 rounded object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{job.company.name}</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-current text-foreground" />
            <span className="font-semibold text-foreground">
              {job.company.rating}
            </span>
            ({job.company.reviews} reviews) ·<MapPin className="h-3 w-3" />
            {job.company.location}
          </p>
        </div>
        <Link
          href={`/explore/${job.id}`}
          className="ml-auto shrink-0 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Submit Proposal
        </Link>
      </div>
    </article>
  );
}
