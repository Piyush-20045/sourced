"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BadgeCheck } from "lucide-react";
import { getJobById } from "@/data/explore";
import { DashboardNav } from "@/app/dashboard/_components/dashboard-nav";
import Footer from "@/components/layout/footer";

// Route Private Components
import { ProposalFormTerms } from "./_components/proposal-form-terms";
import { CoverLetterEditor } from "./_components/cover-letter-editor";
import { AttachmentDropzone } from "./_components/attachment-dropzone";
import { ProjectBriefCard } from "./_components/project-brief-card";
import { ProTipCard } from "./_components/pro-tip-card";

function ProposalNotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <DashboardNav />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#022b3a]">
            Project not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The project you are attempting to submit a proposal for does not
            exist.
          </p>
          <Link
            href="/explore"
            className="mt-6 inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Back to Explore
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SubmitProposalPage() {
  const { job } = useParams();
  const router = useRouter();
  const jobData = getJobById(job as string) || getJobById("j1");

  // Form state
  const [bidAmount, setBidAmount] = useState<number>(20500);
  const [duration, setDuration] = useState<string>("1 to 3 months");
  const [coverLetter, setCoverLetter] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Dynamic fee calculation (10% fee)
  const serviceFee = Math.round(bidAmount * 0.1);
  const youReceive = Math.max(0, bidAmount - serviceFee);

  if (!jobData) return <ProposalNotFound />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push(`/explore/${jobData.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8f9fa] font-sans text-foreground">
      <DashboardNav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        {submitted ? (
          <div className="mx-auto max-w-lg rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#022b3a]">
              Proposal Submitted!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your proposal for &quot;{jobData.title}&quot; has been sent to the
              client.
            </p>
            <p className="mt-4 text-xs font-semibold text-primary">
              Redirecting back to project details...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 lg:grid-cols-[1fr_360px]"
          >
            {/* LEFT COLUMN: Proposal Terms & Form */}
            <div className="rounded-2xl border border-[#e2e4e9] bg-white p-6 shadow-xs sm:p-8">
              <h1 className="text-2xl font-bold text-[#022b3a]">
                Proposal Terms
              </h1>
              <p className="mt-1 text-sm text-[#525866]">
                Establish your pricing and estimated delivery timeline for this
                project.
              </p>

              <hr className="my-6 border-[#e2e4e9]" />

              {/* Terms & Fee Calculation */}
              <ProposalFormTerms
                bidAmount={bidAmount}
                setBidAmount={setBidAmount}
                duration={duration}
                setDuration={setDuration}
                serviceFee={serviceFee}
                youReceive={youReceive}
              />

              {/* Cover Letter */}
              <CoverLetterEditor
                coverLetter={coverLetter}
                setCoverLetter={setCoverLetter}
              />

              {/* Attachments Dropzone */}
              <AttachmentDropzone file={file} setFile={setFile} />

              {/* Form Action Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-[#e2e4e9] pt-6">
                <Link
                  href={`/explore/${jobData.id}`}
                  className="text-sm font-semibold text-[#022b3a] hover:underline"
                >
                  Cancel
                </Link>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => alert("Draft saved successfully!")}
                    className="rounded-xl border border-[#c6c6cd] px-6 py-2.5 text-sm font-semibold text-[#022b3a] transition-colors hover:bg-muted"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#022b3a] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#064259]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Project Brief & Pro Tip */}
            <aside className="space-y-5">
              <ProjectBriefCard jobData={jobData} />
              <ProTipCard />
            </aside>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
