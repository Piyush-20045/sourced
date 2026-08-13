import { Pencil } from "lucide-react";
import { skills } from "../data/dashboard";

/** Self-reported skill chips. */
export function SkillsSection() {
  return (
    <section className="border-b border-border pb-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <Pencil className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Self-reported</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s.name} className="rounded bg-muted px-3 py-1 text-xs">
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}
