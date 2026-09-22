"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Cpu,
  Lock,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { DashboardNav } from "../../dashboard/_components/dashboard-nav";
import Footer from "@/components/layout/footer";

export default function EnterpriseSubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const monthlyPrice = 600;
  const yearlyMonthlyPrice = 480; // 20% off
  const yearlyTotal = yearlyMonthlyPrice * 12; // 5,760

  const activePrice =
    billingCycle === "yearly" ? yearlyMonthlyPrice : monthlyPrice;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      <div>
        {/* Sticky top navbar */}
        <DashboardNav />

        {/* Hero Banner with Grayscale Silver World Mesh Background Image */}
        <section className="relative overflow-hidden bg-[#d0d4dc] py-14 text-neutral-900 sm:py-20 border-b border-neutral-300">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/subscriptions/enterprise-hero.png"
              alt="Enterprise Infrastructure Background"
              className="h-full w-full object-cover object-center grayscale opacity-60 mix-blend-multiply"
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
              <span>MARKET FOR SCALE</span>
            </div>

            <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-neutral-950">
              Enterprise Infrastructure.
            </h1>

            <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
              Tailored for high-growth teams and global organizations.
              Experience the pinnacle of marketplace technology with custom
              integrations, elite support, and ironclad security.
            </p>
          </div>
        </section>

        {/* Main Content Body */}
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 space-y-10">
          {/* Subscription Overview Box + Core Enterprise Features */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Subscription Box (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-[#042430] p-7 text-white shadow-xl border border-teal-900/60 relative overflow-hidden">
              <Sparkles className="absolute -right-6 -bottom-6 h-44 w-44 text-cyan-400/10 pointer-events-none" />

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
                className="mt-6 w-full rounded-xl bg-teal-800/80 hover:bg-teal-700 py-3 text-center text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-all active:scale-98"
              >
                {billingCycle === "yearly"
                  ? "SAVE 20% WITH ANNUAL"
                  : "SWITCH TO ANNUAL & SAVE 20%"}
              </button>
            </div>

            {/* Right: Feature Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Feature 1: Custom API Access */}
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                      <Cpu className="h-6 w-6 stroke-2" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                      Custom API Access
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                      Connect your internal workflows, ERPs, and specialized
                      tools directly to the SOURCED ecosystem with unlimited
                      rate limits.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Dedicated Account Manager */}
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Briefcase className="h-6 w-6 stroke-2" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                      Dedicated Account Manager
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                      Your personal strategic partner for onboarding, custom
                      talent sourcing, team training, and platform optimization.
                    </p>
                  </div>
                </div>

                {/* Feature 3: SSO & Governance */}
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Lock className="h-6 w-6 stroke-2" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-neutral-900 text-lg">
                    SSO & Governance
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    SAML-based SSO, custom role-based permissions, and SOC2
                    compliant auditing for your entire organization.
                  </p>
                </div>

                {/* Feature 4: Unlimited Seats */}
                <div className="rounded-3xl bg-[#042430] p-6 text-white shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1 relative overflow-hidden">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-950/60 text-emerald-300">
                    <Users className="h-6 w-6 stroke-2" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-extrabold text-white text-lg">
                      Unlimited Seats
                    </h3>
                    <p className="mt-1 text-xs text-teal-100/70 leading-relaxed">
                      Scale your team without friction. Add recruiters and PMs
                      without per-seat pricing.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 pt-3 border-t border-teal-900/60">
                    <div className="flex -space-x-2 overflow-hidden">
                      {[
                        "/dashboard/salman.jpeg",
                        "/dashboard/freelancer/samiya.jpg",
                      ].map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt="Team member"
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-[#042430] object-cover"
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-teal-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      +99 seats
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
