"use client";

import { Pencil, Star } from "lucide-react";
import {
  pendingReviewNotice,
  reviewsSummary,
} from "@/data/dashboard/client-dashboard";

/** Client Reviews section for the Client Dashboard */
export function ClientReviews() {
  return (
    <section className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">Reviews</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your reputation as a client shapes who wants to work with you
        </p>
      </div>

      {/* 3 Summary Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {reviewsSummary.avgRatingGiven}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Avg. rating given</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {reviewsSummary.reviewsWritten}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Reviews written</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-2xl font-bold text-[#022b3a]">
            {reviewsSummary.pendingReviewsCount}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Pending review</p>
        </div>
      </div>

      {/* Pending Review Banner */}
      <div className="flex flex-col gap-4 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100/80 text-amber-800 shrink-0">
            <Pencil className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#022b3a]">
              You have 1 pending review
            </h3>
            <p className="text-xs text-muted-foreground">
              {pendingReviewNotice.freelancer} · {pendingReviewNotice.project}{" "}
              · {pendingReviewNotice.milestone}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="self-start rounded-xl bg-[#022b3a] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#064259] sm:self-auto"
        >
          Write review
        </button>
      </div>
    </section>
  );
}
