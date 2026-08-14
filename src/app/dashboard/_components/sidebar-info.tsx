import { Pencil, Plus, Trash2 } from "lucide-react";
import { education, languages, weekStats } from "../../../data/dashboard";

/** Right column: weekly activity, languages and education. */
export function SidebarInfo() {
  return (
    <aside className="lg:mt-3 space-y-10">
      {/* this week */}
      <div>
        <h3 className="text-lg font-bold">This Week</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {weekStats.map((s) => (
            <li key={s.label} className="flex justify-between">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-semibold">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* languages */}
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold">Languages</h3>
          <div className="ml-auto flex gap-3 text-muted-foreground">
            <Plus className="h-4 w-4" />
            <Pencil className="h-4 w-4" />
          </div>
        </div>
        <ul className="mt-3 space-y-1 text-sm">
          {languages.map((l) => (
            <li key={l.name}>
              {l.name}: <span className="text-muted-foreground">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* education */}
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold">Education</h3>
          <Plus className="ml-auto h-4 w-4 text-muted-foreground" />
        </div>
        {education.map((e) => (
          <div key={e.school} className="mt-3 flex items-start text-sm">
            <div>
              <p>{e.school}</p>
              <p className="text-muted-foreground">{e.degree}</p>
              <p className="text-muted-foreground">{e.years}</p>
            </div>
            <Trash2 className="ml-auto h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </aside>
  );
}
