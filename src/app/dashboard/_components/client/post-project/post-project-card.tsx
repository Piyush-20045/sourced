"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { INITIAL_FORM_DATA, PostProjectFormData } from "./post-project-data";
import { PostProjectStepper } from "./post-project-stepper";
import { StepProjectDetails } from "./step-project-details";
import { StepBudgetScope } from "./step-budget-scope";
import { StepReviewPost } from "./step-review-post";

/** Multi-step "Post a project" flow: details → budget & scope → review & post */
export function PostProjectCard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] =
    useState<PostProjectFormData>(INITIAL_FORM_DATA);
  const [published, setPublished] = useState(false);

  const patchForm = (patch: Partial<PostProjectFormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

  const isStep1Valid =
    formData.title.trim().length > 0 && formData.description.trim().length > 0;
  const isStep2Valid =
    formData.amount !== "" &&
    Number(formData.amount) > 0 &&
    formData.duration !== "";

  const canContinue =
    currentStep === 1 ? isStep1Valid : currentStep === 2 ? isStep2Valid : true;

  const handleNext = () => {
    if (!canContinue || currentStep >= 3) return;
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (currentStep <= 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setPublished(false);
  };

  if (published) {
    return (
      <section className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <BadgeCheck className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-[#022b3a]">
          Project Published!
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          &ldquo;{formData.title || "Your project"}&rdquo; is now visible to
          pre-vetted freelancers.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-xl bg-[#022b3a] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#064259]"
        >
          Post another project
        </button>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <PostProjectStepper
        currentStep={currentStep}
        onStepClick={setCurrentStep}
      />

      {currentStep === 1 && (
        <StepProjectDetails data={formData} onChange={patchForm} />
      )}
      {currentStep === 2 && (
        <StepBudgetScope data={formData} onChange={patchForm} />
      )}
      {currentStep === 3 && (
        <StepReviewPost
          data={formData}
          onChange={patchForm}
          onEditStep={setCurrentStep}
          onPublish={() => setPublished(true)}
          onSaveDraft={() => alert("Draft saved successfully!")}
        />
      )}

      {/* Bottom nav (review step has its own publish actions) */}
      {currentStep < 3 && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canContinue}
            title={
              !canContinue
                ? currentStep === 1
                  ? "Add a title and description to continue"
                  : "Enter an amount and timeline to continue"
                : undefined
            }
            className="inline-flex items-center gap-2 rounded-xl bg-[#022b3a] px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#064259] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {currentStep === 2 ? "Confirm & Continue" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
