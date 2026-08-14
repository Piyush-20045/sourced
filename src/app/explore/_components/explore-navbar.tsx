import {
  categories,
  proBanner,
  savedJobStats,
  trendingSkills,
} from "@/data/explore";

/** Left column of the explore page: categories, skills, saved jobs and pro upsell. */
export function ExploreSidebar() {
  return (
    <aside className="space-y-4">
      {/* categories */}
      <div className="rounded-lg border border-border p-4">
        <p className="text-xs font-bold tracking-wider">CATEGORIES</p>
        <ul className="mt-3 space-y-2 text-sm">
          {categories.map((c) => (
            <li key={c.label} className="flex items-center gap-2">
              <a href="#" className="truncate hover:underline">
                {c.label}
              </a>
              <span className="ml-auto shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {c.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* trending skills */}
      <div className="rounded-lg border border-border p-4">
        <p className="text-xs font-bold tracking-wider">TRENDING SKILLS</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {trendingSkills.map((s) => (
            <span
              key={s.name}
              className="rounded bg-muted px-2 py-1 text-[11px] text-foreground/80"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* saved jobs */}
      <div className="rounded-lg border border-border p-4">
        <p className="text-xs font-bold tracking-wider">SAVED JOBS</p>
        <ul className="mt-3 space-y-2 text-sm">
          {savedJobStats.map((s) => (
            <li key={s.label} className="flex items-center gap-2">
              <a href="#" className="hover:underline">
                {s.label}
              </a>
              <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {s.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* pro upsell */}
      <div className="rounded-lg bg-muted p-4">
        <p className="text-[10px] font-semibold italic text-muted-foreground">
          {proBanner.eyebrow}
        </p>
        <p className="mt-1 text-sm font-bold">{proBanner.title}</p>
        <p className="mt-2 text-xs text-muted-foreground">{proBanner.body}</p>
        <button className="mt-3 rounded bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground">
          {proBanner.cta}
        </button>
      </div>
    </aside>
  );
}
