"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  "UI/UX Design",
  "Web Development",
  "Mobile App",
  "Branding & Identity",
  "Content & Copy",
  "Motion & Video",
  "Data & Analytics",
  "DevOps & Cloud",
];

const STEPS = [
  { number: 1, label: "Project details" },
  { number: 2, label: "Scope & budget" },
  { number: 3, label: "Review & post" },
];

/** Interactive multi-step "Post a project" form card for the client dashboard */
export function PostProjectCard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("UI/UX Design");
  const [description, setDescription] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Project posted successfully!");
    }
  };

  return (
    <section className="space-y-6">
      {/* Header & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">Post a project</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Describe your project and get proposals from top freelancers within
          hours.
        </p>
      </div>

      {/* Stepper Progress Bar */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        {STEPS.map((step, idx) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div key={step.number} className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isActive || isCompleted
                    ? "bg-[#022b3a] text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step.number}
              </span>
              <span
                className={`text-xs font-semibold ${
                  isActive ? "text-[#022b3a]" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
              {idx < STEPS.length - 1 && (
                <div className="hidden h-px w-8 bg-border sm:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Main Form Card Container */}
      <form
        onSubmit={handleContinue}
        className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
      >
        <div className="space-y-6">
          {/* Project Title Field */}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Redesign our mobile app dashboard"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/10"
              required
            />
          </div>

          {/* Category Chips Selector */}
          <div>
            <label className="block text-sm font-semibold text-[#022b3a]">
              Category
            </label>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
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

          {/* Project Description Field */}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the scope, goals, deliverables, and any specific requirements..."
              className="mt-2 w-full resize-y rounded-xl border border-border bg-background p-4 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/10"
              required
            />
          </div>
        </div>

        {/* Form Action Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[#022b3a] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#064259]"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </section>
  );
}
