"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { CATEGORIES, PostProjectFormData } from "./post-project-data";

interface StepProjectDetailsProps {
  data: PostProjectFormData;
  onChange: (patch: Partial<PostProjectFormData>) => void;
}

/** Stage 1: title, category, description + required skills */
export function StepProjectDetails({
  data,
  onChange,
}: StepProjectDetailsProps) {
  const [skillDraft, setSkillDraft] = useState("");

  const addSkill = () => {
    const skill = skillDraft.trim();
    if (!skill || data.skills.includes(skill)) return;
    onChange({ skills: [...data.skills, skill] });
    setSkillDraft("");
  };

  const removeSkill = (skill: string) => {
    onChange({ skills: data.skills.filter((s) => s !== skill) });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Left explainer */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Project details</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Describe what you need built. A clear title and sharp requirements
          attract the right experts faster.
        </p>

        <div className="mt-5 rounded-xl bg-[#0e1b33] p-5 text-white shadow-md">
          <p className="flex items-center gap-1.5 text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            Expert Insight
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/70">
            &ldquo;Projects with 3+ listed skills and a concrete deliverable get
            40% more qualified proposals.&rdquo;
          </p>
        </div>

        <div className="mt-5 rounded-xl bg-[#0e1b33]">
          <img
            src="/proposal-submission/stage-1-img.jpeg"
            alt="Project checklist illustration"
            className="h-56 w-full object-cover rounded-xl -rotate-2 border border-[#0e1b33]"
          />
        </div>
      </div>

      {/* Right form card */}
      <div className="h-fit rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="project-title"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Project title
            </label>
            <input
              id="project-title"
              type="text"
              value={data.title}
              onChange={(e) => onChange({ title: e.target.value })}
              placeholder="e.g. Redesign our mobile app dashboard"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:ring-2 focus:ring-[#022b3a]/10 focus:outline-none"
            />
          </div>

          <div>
            <span className="block text-sm font-semibold text-[#022b3a]">
              Category
            </span>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = data.category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onChange({ category: cat })}
                    className={`rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      isSelected
                        ? "border-[#022b3a] bg-[#022b3a]/5 font-semibold text-[#022b3a]"
                        : "border-border bg-background text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="project-description"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Project description
            </label>
            <textarea
              id="project-description"
              rows={4}
              value={data.description}
              onChange={(e) => onChange({ description: e.target.value })}
              placeholder="Scope, goals, deliverables, and any specific requirements..."
              className="mt-2 w-full resize-y rounded-xl border border-border bg-background p-4 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:ring-2 focus:ring-[#022b3a]/10 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="project-skills"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Required skills
            </label>
            <input
              id="project-skills"
              type="text"
              value={skillDraft}
              onChange={(e) => setSkillDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill();
                }
              }}
              onBlur={addSkill}
              placeholder="Type a skill and press Enter (e.g. Figma)"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:ring-2 focus:ring-[#022b3a]/10 focus:outline-none"
            />
            {data.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#e8efff] px-3 py-1 text-xs font-semibold text-[#0b0c0e]"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      aria-label={`Remove ${skill}`}
                      className="rounded-full hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
