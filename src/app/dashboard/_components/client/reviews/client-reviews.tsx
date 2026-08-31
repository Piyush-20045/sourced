"use client";
import Image from "next/image";
import { Pencil, Star } from "lucide-react";
import {
  pendingReviewNotice,
  reviewsGiven,
  reviewsReceived,
  reviewsSummary,
} from "@/data/dashboard/client-dashboard";

/** Render a row of star icons based on rating number */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

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
          <p className="mt-1 text-xs text-muted-foreground">
            Avg. rating given
          </p>
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
              {pendingReviewNotice.freelancer} · {pendingReviewNotice.project} ·{" "}
              {pendingReviewNotice.milestone}
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

      {/* Reviews You've Given Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#022b3a]">
          Reviews you&apos;ve given
        </h2>

        <div className="divide-y divide-border">
          {reviewsGiven.map((rg) => (
            <div key={rg.id} className="py-4 first:pt-0 last:pb-0 space-y-2.5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={rg.avatar}
                    alt={rg.freelancer}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-sm text-[#022b3a]">
                      {rg.freelancer}
                    </h3>
                    <p className="truncate text-xs text-muted-foreground">
                      {rg.project} · {rg.date}
                    </p>
                  </div>
                </div>

                <StarRating rating={rg.rating} />
              </div>

              <p className="text-xs text-foreground/80 leading-relaxed italic">
                &ldquo;{rg.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What Freelancers Say About Working With You Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#022b3a]">
          What freelancers say about working with you
        </h2>

        <div className="divide-y divide-border">
          {reviewsReceived.map((rr) => (
            <div key={rr.id} className="py-4 first:pt-0 last:pb-0 space-y-2.5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={rr.avatar}
                    alt={rr.freelancer}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                  />
                  <h3 className="truncate font-bold text-sm text-[#022b3a]">
                    {rr.freelancer}
                  </h3>
                </div>

                <StarRating rating={rr.rating} />
              </div>

              <p className="text-xs text-foreground/80 leading-relaxed italic">
                &ldquo;{rr.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
