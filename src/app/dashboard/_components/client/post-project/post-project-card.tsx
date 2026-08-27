"use client";
import { useState } from "react";

const STEPS = [
  { number: 1, label: "Project details" },
  { number: 2, label: "Scope & budget" },
  { number: 3, label: "Review & post" },
];

/** Interactive multi-step "Post a project" form card for the client dashboard */
export function PostProjectCard() {
  const [currentStep, setCurrentStep] = useState(1);

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

    </section>
  );
}
