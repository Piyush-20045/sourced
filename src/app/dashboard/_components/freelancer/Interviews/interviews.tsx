import { useState } from "react";
import { AlarmClock, Clock, MoveRight, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  interviews,
  interviewPrepTips,
} from "@/data/dashboard/freelancer-dashboard";

/** Days shown in the calendar view (static mock week). */
const weekDays = [
  { label: "MON", date: 15 },
  { label: "TUE", date: 16 },
  { label: "WED", date: 17 },
  { label: "THU", date: 18 },
  { label: "FRI", date: 19 },
  { label: "SAT", date: 20 },
  { label: "SUN", date: 21 },
];

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
      {view === "List" ? (
        <div className="mt-5 space-y-4">
          {interviews.map((interview) => (
            <article
              key={interview.id}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center justify-between sm:p-5"
            >
              <div className="flex gap-4">
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
      ) : (
        <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card">
          {/* Week heading */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
            <h3 className="text-sm font-bold">Week of Dec 15 – 21, 2025</h3>
            <span className="text-xs text-muted-foreground">
              {interviews.length} scheduled
            </span>
          </div>

          {/* 7-day grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {weekDays.map((day) => {
              const dayInterviews = interviews.filter(
                (i) => i.dayLabel === day.label,
              );
              return (
                <div
                  key={day.label}
                  className={`min-h-32 border-b border-r border-border p-2 last:border-r-0 ${
                    dayInterviews.length ? "bg-muted/40" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">
                    {day.label}
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      dayInterviews.length
                        ? "text-foreground"
                        : "text-muted-foreground/60"
                    }`}
                  >
                    {day.date}
                  </p>

                  <div className="mt-2 space-y-1.5">
                    {dayInterviews.map((interview) => (
                      <div
                        key={interview.id}
                        className="rounded-md bg-primary p-2 text-primary-foreground"
                      >
                        <p className="truncate text-[11px] font-semibold">
                          {interview.client}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-[10px] opacity-80">
                          {interview.mode === "Video Call" ? (
                            <Video className="h-3 w-3" />
                          ) : (
                            <Phone className="h-3 w-3" />
                          )}
                          {interview.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Prep tips */}
      <div className="mt-5 rounded-lg border border-border bg-muted/40 p-5">
        <h3 className="text-sm font-bold">Interview Prep Tips</h3>
        <ul className="mt-3 space-y-3">
          {interviewPrepTips.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <MoveRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
