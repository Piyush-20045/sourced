"use client";

import { Check } from "lucide-react";
import { STEPS } from "./post-project-data";

interface PostProjectStepperProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

/** Top progress stepper: dark check for done, outlined number for current */
export function PostProjectStepper({
  currentStep,
  onStepClick,
}: PostProjectStepperProps) {
  return (
    <div className="relative">
      {/* Track line */}
      <div
        className="absolute top-5 right-6 left-6 h-px bg-border"
        aria-hidden
      />
      <div
        className="absolute top-5 left-6 h-0.5 bg-[#022b3a] transition-all"
        style={{
          width: `calc(${(currentStep - 1) * 50}% - ${currentStep === 1 ? 0 : 24}px)`,
          maxWidth: "calc(100% - 48px)",
        }}
        aria-hidden
      />

      <ol className="relative flex items-start justify-between">
        {STEPS.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = step.number < currentStep;

          return (
            <li key={step.number} className="flex flex-col items-center gap-2">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => onStepClick(step.number)}
                aria-label={`Go to ${step.label}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                  isCompleted
                    ? "border-[#022b3a] bg-[#022b3a] text-white"
                    : isCurrent
                      ? "border-[#022b3a] bg-background text-sm font-bold text-[#022b3a]"
                      : "border-border bg-background text-sm font-bold text-muted-foreground"
                } ${isClickable ? "cursor-pointer hover:opacity-80" : "cursor-default"}`}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" strokeWidth={3} />
                ) : (
                  step.number
                )}
              </button>
              <span
                className={`text-xs font-semibold ${
                  isCurrent || isCompleted
                    ? "text-[#022b3a]"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
