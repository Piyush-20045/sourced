"use client";

import Link from "next/link";
import { ArrowRight, Building2, Calendar, Check, Info } from "lucide-react";
import type { JobPost } from "@/data/explore";

interface ProposalSuccessProps {
  jobData: JobPost;
  bidAmount: number;
  duration: string;
}

function formatBid(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function ProposalSuccess({
  jobData,
  bidAmount,
  duration,
}: ProposalSuccessProps) {
  const startDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      {/* Success header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#e2e4e9] bg-white shadow-xs">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
            <Check className="h-6 w-6 text-white" strokeWidth={3} />
          </span>
        </div>
        <h1 className="mt-5 text-3xl font-bold text-[#0b0c0e] sm:text-4xl">
          Proposal Submitted!
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#525866] sm:text-[15px]">
          Your application has been successfully transmitted to the client.
          We&apos;ve notified them of your interest and availability.
        </p>
      </div>

      {/* Overview + bid summary */}
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* Project overview card */}
        <div className="rounded-2xl border border-[#d3d6dc] bg-white p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#525866]">
            Project Overview
          </p>
          <h2 className="mt-2 max-w-md text-2xl font-bold leading-snug text-[#0a2e3f] sm:text-3xl">
            {jobData.title}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {jobData.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#d3d6dc] bg-[#f1f2f4] px-3.5 py-1 text-xs font-semibold text-[#0b0c0e]"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="my-6 border-[#d3d6dc]" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e1b33] text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0b0c0e]">
                {jobData.company.name}
              </p>
              <p className="text-xs text-[#525866]">
                {jobData.paymentVerified ? "Verified Client" : "Client"} •{" "}
                {jobData.company.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bid + timeline stack */}
        <div className="space-y-5">
          <div className="rounded-xl bg-[#0e1b33] p-5 text-white">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Your Bid
            </p>
            <p className="mt-1.5 text-xl font-medium">{formatBid(bidAmount)}</p>
            <p className="mt-1 text-[13px] text-white/70">
              Fixed Price Agreement
            </p>
          </div>

          <div className="rounded-xl border border-[#d3d6dc] bg-[#f1f2f4] p-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#525866]">
              Estimated Timeline
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-lg font-bold text-[#0b0c0e]">
              <Calendar className="h-5 w-5 text-[#0a2e3f]" />
              {duration}
            </p>
            <p className="mt-1 text-[13px] text-[#525866]">
              Starting {startDate}
            </p>
          </div>
        </div>
      </div>

      {/* Back to details */}
      <Link
        href={`/explore/${jobData.id}`}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0a2e3f] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#064259]"
      >
        Back to details
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </Link>

      {/* Next step note */}
      <hr className="my-8 border-[#d3d6dc]" />
      <p className="flex items-center gap-1.5 text-[13px] text-[#525866]">
        <Info className="h-3.5 w-3.5 shrink-0" />
        Next step: The client will review your proposal and may invite you to an
        interview.
      </p>
    </div>
  );
}
