"use client";
import { useState } from "react";
import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import PricingCards from "./_components/pricing-cards";
import Footer from "@/components/layout/footer";

export default function SubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [selectedPlanModal, setSelectedPlanModal] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      <div>
        {/* Sticky top navbar */}
        <DashboardNav />

        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
          {/* Hero / Header section */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                PRICING & PLANS
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-900">
                Scale your <br className="hidden sm:inline" />
                <span className="text-neutral-500 font-extrabold">Impact.</span>
              </h1>
              <p className="max-w-md pt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                A modular pricing system built for solo creators, growing teams,
                and global enterprises.
              </p>
            </div>

            {/* Monthly / Yearly Toggle */}
            <div className="self-start md:self-end">
              <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-200/60 p-1.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                    billingCycle === "monthly"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("yearly")}
                  className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                    billingCycle === "yearly"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <span>Yearly</span>
                  <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    -20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <PricingCards
            billingCycle={billingCycle}
            setSelectedPlanModal={setSelectedPlanModal}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
