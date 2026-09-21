"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Headphones,
  Infinity as InfinityIcon,
  Lock,
  Percent,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { DashboardNav } from "../../dashboard/_components/dashboard-nav";
import Footer from "@/components/layout/footer";

export default function ProSubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const monthlyPrice = 490;
  const yearlyMonthlyPrice = 392; // 20% off
  const yearlyTotal = yearlyMonthlyPrice * 12; // 4,704

  const activePrice =
    billingCycle === "yearly" ? yearlyMonthlyPrice : monthlyPrice;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      <div>
        {/* Sticky top navbar */}
        <DashboardNav />

        {/* Hero Banner with Grayscale Silver Background Image */}
        <section className="relative overflow-hidden bg-[#d0d4dc] py-14 text-neutral-900 sm:py-20 border-b border-neutral-300">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/subscriptions/pro-hero.jpg"
              alt="Professional Header Background"
              className="h-full w-full object-cover object-center grayscale opacity-50 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#c8cdd6] via-[#d5d9e2]/80 to-[#e0e4ec]/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <Link
              href="/subscriptions"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-black transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to All Plans
            </Link>

            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-neutral-800">
              <Zap className="h-3.5 w-3.5 fill-neutral-900 text-neutral-900" />
              <span>PREMIUM ACCESS</span>
            </div>

            <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-neutral-950">
              Professional Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
              Unlock the full power of SOURCED. Elevate your marketplace
              presence with elite tools designed for top-tier performers.
            </p>
          </div>
        </section>

        {/* Main Content Body */}
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 space-y-10">
          {/* Top Row: Subscription Card + 4 Features Grid */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Left: Subscription Box (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-[#042430] p-7 text-white shadow-xl border border-teal-900/60 relative overflow-hidden">
              <Sparkles className="absolute -right-6 -bottom-6 h-44 w-44 text-emerald-400/10 pointer-events-none" />

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  SUBSCRIPTION
                </span>

                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                    ₹{activePrice}
                  </span>
                  <span className="ml-1.5 text-sm text-teal-200/70 font-medium">
                    /month
                  </span>
                </div>

                <p className="mt-1 text-xs text-teal-300/80 font-medium">
                  {billingCycle === "yearly"
                    ? `Billed annually (₹${yearlyTotal.toLocaleString()}/year)`
                    : `Monthly Plan ₹${monthlyPrice}/mo`}
                </p>

                {/* Annual Savings Toggle */}
                <div className="mt-8 rounded-2xl bg-teal-950/80 p-3 border border-teal-800/40">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-teal-200/90 font-medium">
                      Billing Cycle
                    </span>
                    <span className="font-bold text-emerald-300">
                      {billingCycle === "yearly" ? "Save 20%" : "Standard"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#021720] p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`rounded-lg py-2 transition-all ${
                        billingCycle === "monthly"
                          ? "bg-teal-800/90 text-white shadow-xs"
                          : "text-teal-300/60 hover:text-white"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      className={`rounded-lg py-2 transition-all ${
                        billingCycle === "yearly"
                          ? "bg-blue-600 text-white shadow-xs"
                          : "text-teal-300/60 hover:text-white"
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "yearly" ? "monthly" : "yearly",
                  )
                }
                className="mt-6 w-full rounded-xl bg-blue-600/90 hover:bg-blue-600 py-3 text-center text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-all active:scale-98"
              >
                {billingCycle === "yearly"
                  ? "SAVE 20% WITH ANNUAL"
                  : "SWITCH TO ANNUAL & SAVE 20%"}
              </button>
            </div>

            {/* Right: 4 Features Grid (8 cols) */}
            <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {/* Feature 1 */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <BadgeCheck className="h-6 w-6 stroke-2" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                    Verified Badge
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    A gold-tier verification mark that instantly builds trust
                    with enterprise-level clients and boosts bid visibility.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Headphones className="h-6 w-6 stroke-2" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                    Priority Support
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    Jump the queue with 24/7 dedicated support management and
                    guaranteed 1-hour response times for all inquiries.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <InfinityIcon className="h-6 w-6 stroke-2" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                    Unlimited Proposals
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    Apply to as many high-value projects as you want without
                    worrying about monthly credit limits or bid caps.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                    <BarChart3 className="h-6 w-6 stroke-2" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                    Advanced Analytics
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    Deep dive into market trends, competitor pricing, conversion
                    funnels, and detailed profile performance data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide Highlight Banner (Zero Platform Commission) */}
          <div className="rounded-3xl border border-neutral-200 bg-linear-to-r from-neutral-100 via-white to-neutral-100 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6">
            <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-[#042430] text-white shadow-md">
              <div className="text-center">
                <Percent className="h-7 w-7 mx-auto text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-200">
                  0% FEE
                </span>
              </div>
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="rounded-full bg-black px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  PRO EXCLUSIVE
                </span>
                <span className="rounded-full bg-blue-100 text-blue-800 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">
                  REVENUE BOOST
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-neutral-900">
                Zero Platform Commission on High-Value Projects
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl leading-relaxed">
                Keep 100% of your earnings on all projects over $5,000. For
                smaller projects, we slash our platform fee to just 2% for
                Professional members.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
