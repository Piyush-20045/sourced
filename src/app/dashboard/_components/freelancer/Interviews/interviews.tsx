import { useState } from "react";
import { AlarmClock, Clock, MoveRight, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  interviews,
} from "@/data/dashboard/freelancer-dashboard";

/** Upcoming interviews list with a list/calendar toggle and prep tips. */
export function Interviews() {
  const [view, setView] = useState<"List" | "Calendar">("List");

  return (
    <section>
      {/* Section heading + view toggle */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Interviews</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {interviews.length} upcoming interviews this week
          </p>
        </div>
        <div className="flex rounded-lg border border-border bg-card p-1">
          {(["List", "Calendar"] as const).map((option) => (
            <Button
              key={option}
              type="button"
              size="sm"
              variant={view === option ? "default" : "ghost"}
              onClick={() => setView(option)}
              aria-pressed={view === option}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Interview cards */}
      <div className="mt-5 space-y-4">
        {interviews.map((interview) => (
          <article
            key={interview.id}
            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:p-5"
          >
            {/* Date tile */}
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-primary text-center text-primary-foreground">
              <div>
                <p className="text-[10px] font-semibold tracking-widest">
                  {interview.dayLabel}
                </p>
                <p className="text-xl font-bold leading-tight">
                  {interview.monthLabel}
                </p>
              </div>
            </div>

            {/* Interview details */}
            <div className="min-w-0 flex-1">
              <h3 className="font-bold">{interview.projectTitle}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                with {interview.client}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <AlarmClock className="h-3.5 w-3.5" />
                  {interview.time}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {interview.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  {interview.mode === "Video Call" ? (
                    <Video className="h-3.5 w-3.5" />
                  ) : (
                    <Phone className="h-3.5 w-3.5" />
                  )}
                  {interview.mode}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 gap-2">
              <Button type="button" size="sm">
                Join Interview
              </Button>
              <Button type="button" variant="outline" size="sm">
                Reschedule
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
