"use client";

import { useRef } from "react";
import {
  BadgeDollarSign,
  Calendar,
  Eye,
  FileUp,
  Info,
  Pencil,
  ShieldCheck,
  X,
} from "lucide-react";
import { PostProjectFormData, formatAmountINR } from "./post-project-data";

interface StepReviewPostProps {
  data: PostProjectFormData;
  onChange: (patch: Partial<PostProjectFormData>) => void;
  onEditStep: (step: number) => void;
  onPublish: () => void;
  onSaveDraft: () => void;
}

/** Stage 3: review summary + publish sidebar */
export function StepReviewPost({
  data,
  onChange,
  onEditStep,
  onPublish,
  onSaveDraft,
}: StepReviewPostProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    onChange({ attachments: [...data.attachments, ...Array.from(files)] });
  };

  const removeFile = (name: string) => {
    onChange({ attachments: data.attachments.filter((f) => f.name !== name) });
  };

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
      {/* Left summary column */}
      <div className="space-y-5">
        {/* Project overview */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">
              Project Overview
            </h3>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#022b3a] hover:underline"
            >
              <Pencil className="h-3 w-3" />
              Edit
            </button>
          </div>

          <p className="mt-4 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
            Project Title
          </p>
          <p className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
            {data.title || "Untitled project"}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                Category
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {data.category}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                Experience
              </p>
              <p className="mt-1 text-sm font-medium text-foreground capitalize">
                {data.experience}
              </p>
            </div>
          </div>

          {data.skills.length > 0 && (
            <div className="mt-4">
              <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                Required Skills
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#e8efff] px-3 py-1 text-xs font-semibold text-[#0b0c0e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Budget & timeline */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">
              Budget & Timeline
            </h3>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#022b3a] hover:underline"
            >
              <Pencil className="h-3 w-3" />
              Edit
            </button>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-muted/50 p-4">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8efff] text-[#022b3a]">
                  <BadgeDollarSign className="h-5 w-5" />
                </span>
                Budget type: {data.budgetType === "fixed" ? "Fixed" : "Hourly"}
              </p>
              <p className="mt-2 text-lg font-bold text-foreground">
                {formatAmountINR(data.amount, data.budgetType)}
              </p>
              <p className="text-xs text-muted-foreground">
                {data.budgetType === "fixed"
                  ? "Fixed price agreement"
                  : "Hourly rate agreement"}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/50 p-4">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8efff] text-[#022b3a]">
                  <Calendar className="h-5 w-5" />
                </span>
                Expected delivery
              </p>
              <p className="mt-2 text-lg font-bold text-foreground">
                {data.duration || "Not set"}
              </p>
              <p className="text-xs text-muted-foreground">
                Starting{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Additional settings */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h3 className="text-base font-semibold text-foreground">
            Additional Settings
          </h3>

          <p className="mt-4 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
            Attach project brief or assets
          </p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 flex w-full flex-col items-center rounded-xl border border-dashed border-border bg-background px-4 py-8 transition-colors hover:bg-muted"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8efff] text-[#022b3a]">
              <FileUp className="h-5 w-5" />
            </span>
            <span className="mt-3 text-sm font-bold text-foreground">
              Click to upload or drag and drop
            </span>
            <span className="mt-1 text-xs text-muted-foreground">
              PDF, DOCX, or ZIP (max. 50MB)
            </span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.docx,.zip"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          {data.attachments.length > 0 && (
            <ul className="mt-3 space-y-2">
              {data.attachments.map((file) => (
                <li
                  key={file.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/50 px-3 py-2 text-xs font-medium"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(file.name)}
                    aria-label={`Remove ${file.name}`}
                    className="ml-2 rounded-full p-1 hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-muted/60 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8efff] text-[#022b3a]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Require NDA Signing
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Freelancers must sign a Non-Disclosure Agreement before
                  viewing project details.
                </p>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={data.requireNda}
              onClick={() => onChange({ requireNda: !data.requireNda })}
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                data.requireNda ? "bg-blue-600" : "bg-border"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                  data.requireNda ? "left-5.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Right publish column */}
      <div className="space-y-5">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h3 className="text-base font-semibold text-foreground">
            Ready to Publish?
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            Your project will be visible to our elite pool of pre-vetted
            freelancers immediately after publishing.
          </p>

          <button
            type="button"
            onClick={onPublish}
            className="mt-5 w-full rounded-xl bg-[#022b3a] py-3 text-sm font-bold text-white transition-colors hover:bg-[#064259]"
          >
            Publish Project
          </button>
          <button
            type="button"
            onClick={onSaveDraft}
            className="mt-3 w-full rounded-xl border border-border bg-muted/60 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
          >
            Save as Draft
          </button>

          <hr className="my-5 border-border" />

          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              By publishing, you agree to Sourced{" "}
              <span className="underline">Marketplace Policies</span> and{" "}
              <span className="underline">Escrow Terms</span>.
            </span>
          </p>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Eye className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Estimated visibility: High (Top 10% of projects this week)
            </span>
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border shadow-xs">
          <img
            src="/proposal-submission/stage-3-img.jpg"
            alt="Pre-vetted talent meeting"
            className="h-44 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-5">
            <p className="text-sm font-bold text-white">
              Pre-Vetted Talent Only
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/80">
              Access the top 1% of creative professionals worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
