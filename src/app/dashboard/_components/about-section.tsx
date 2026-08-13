import { Pencil } from "lucide-react";
import { user } from "../data/dashboard";

/** Headline, hourly rate and long-form bio. */
export function AboutSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">About</h2>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-lg">
          {user.tagline}
          <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
        </p>
        <p className="flex items-center gap-2 border-b border-border pb-1 text-md font-medium">
          {user.hourlyRate}
          <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
        </p>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {user.bio}
      </p>
    </section>
  );
}
