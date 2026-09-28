"use client";

import { Clock, Lightbulb, Tag } from "lucide-react";
import {
  DURATIONS,
  EXPERIENCE_LEVELS,
  PostProjectFormData,
} from "./post-project-data";

interface StepBudgetScopeProps {
  data: PostProjectFormData;
  onChange: (patch: Partial<PostProjectFormData>) => void;
}

const BUDGET_OPTIONS = [
  {
    value: "fixed" as const,
    icon: Tag,
    title: "Fixed Price",
    body: "Best for well-defined projects with clear deliverables.",
  },
  {
    value: "hourly" as const,
    icon: Clock,
    title: "Hourly Rate",
    body: "Flexible for evolving scopes and long-term collaborations.",
  },
];

/** Stage 2: budget type + amount, timeline, experience level */
export function StepBudgetScope({ data, onChange }: StepBudgetScopeProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Left explainer */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Budget & scope</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Define the financial parameters and time commitment for your project
          to attract the right expertise.
        </p>

        <div className="mt-5 rounded-xl border border-border bg-card p-5 shadow-xs">
          <p className="flex items-center gap-1.5 text-xs font-bold text-[#022b3a]">
            <Lightbulb className="h-4 w-4 text-blue-600" />
            Pro Tip
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            Experts usually prefer hourly rates for complex, open-ended tasks.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-[#0e1b33]">
          <img
            src="/proposal-submission/stage-2-img.jpeg"
            alt="Budget balancing illustration"
            className="h-56 w-full object-cover rounded-xl -rotate-2 border border-[#0e1b33]"
          />
        </div>
      </div>

      {/* Right cards */}
      <div className="space-y-5">
        {/* 1. Budget type */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h3 className="text-base font-semibold text-foreground">
            1. Budget Type
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {BUDGET_OPTIONS.map((opt) => {
              const isSelected = data.budgetType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ budgetType: opt.value })}
                  aria-pressed={isSelected}
                  className={`rounded-xl border p-5 text-left transition-colors ${
                    isSelected
                      ? "border-blue-200 bg-[#e8efff]"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  <span className="flex items-start justify-between">
                    <opt.icon className="h-5 w-5 text-foreground" />
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-blue-600"
                          : "border-border bg-background"
                      }`}
                    >
                      {isSelected && (
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                      )}
                    </span>
                  </span>
                  <span className="mt-3 block text-sm font-bold text-foreground">
                    {opt.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground">
                    {opt.body}
                  </span>
                </button>
              );
            })}
          </div>

          <label
            htmlFor="budget-amount"
            className="mt-5 block text-xs font-bold tracking-wide text-muted-foreground uppercase"
          >
            Enter Amount (₹)
          </label>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold text-foreground">
              ₹
            </span>
            <input
              id="budget-amount"
              type="number"
              min={0}
              value={data.amount}
              onChange={(e) => onChange({ amount: e.target.value })}
              placeholder="0.00"
              className="w-full rounded-xl border border-border bg-background py-3.5 pr-4 pl-9 text-sm focus:border-[#022b3a] focus:ring-2 focus:ring-[#022b3a]/10 focus:outline-none"
            />
          </div>
        </div>

        {/* 2. Timeline */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h3 className="text-base font-semibold text-foreground">
            2. Estimated Timeline
          </h3>
          <select
            value={data.duration}
            onChange={(e) => onChange({ duration: e.target.value })}
            className="mt-4 w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:border-[#022b3a] focus:ring-2 focus:ring-[#022b3a]/10 focus:outline-none"
          >
            <option value="" disabled>
              Select project duration...
            </option>
            {DURATIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Experience level */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h3 className="text-base font-semibold text-foreground">
            3. Experience Level
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {EXPERIENCE_LEVELS.map((level) => {
              const isSelected = data.experience === level.value;
              return (
                <button
                  key={level.value}
                  type="button"
                  onClick={() => onChange({ experience: level.value })}
                  aria-pressed={isSelected}
                  className={`rounded-xl border p-5 text-left transition-colors ${
                    isSelected
                      ? "border-blue-200 bg-[#e8efff]"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  <span className="block text-xs font-bold text-red-800">
                    {level.eyebrow}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-foreground">
                    {level.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                    {level.body}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
