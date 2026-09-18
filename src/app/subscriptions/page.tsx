"use client";
import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
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

          {/* Capabilities Matrix Section */}
          <div className="mt-20 sm:mt-28">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-2xl font-extrabold text-neutral-900 sm:text-3xl tracking-tight">
                  Capabilities Matrix
                </h2>
                <div className="hidden sm:block flex-1 h-px bg-neutral-200" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500">
                Deep dive into tiers
              </p>
            </div>

            {/* Matrix Table */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-3 sm:p-6 shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full min-w-160 text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/4 p-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="w-1/4 p-2 text-center">
                        <div className="rounded-xl bg-neutral-100 py-3.5 text-xs font-black uppercase tracking-widest text-neutral-800">
                          STARTER
                        </div>
                      </th>
                      <th className="w-1/4 p-2 text-center">
                        <div className="rounded-xl bg-black py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-md">
                          PROFESSIONAL
                        </div>
                      </th>
                      <th className="w-1/4 p-2 text-center">
                        <div className="rounded-xl bg-neutral-100 py-3.5 text-xs font-black uppercase tracking-widest text-neutral-800">
                          ENTERPRISE
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {[
                      {
                        name: "Platform Fee",
                        starter: "20%",
                        pro: "10%",
                        enterprise: "Negotiable",
                      },
                      {
                        name: "Payout Speed",
                        starter: "14 Days",
                        pro: "3 Days",
                        enterprise: "Instant",
                      },
                      {
                        name: "Team Seats",
                        starter: "1 User",
                        pro: "Up to 5",
                        enterprise: "Unlimited",
                      },
                      {
                        name: "Support",
                        starter: "Standard",
                        pro: "24h Priority",
                        enterprise: "24h Priority",
                      },
                      {
                        name: "Escrow Protection",
                        starter: "Standard",
                        pro: "Advanced",
                        enterprise: "Custom Escrow",
                      },
                      {
                        name: "Analytics & Reports",
                        starter: "Basic",
                        pro: "Advanced AI",
                        enterprise: "Custom BI Sync",
                      },
                      {
                        name: "Dedicated Manager",
                        starter: "—",
                        pro: "Community",
                        enterprise: "1-on-1 Dedicated",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={row.name}
                        className="transition-colors hover:bg-neutral-50/80"
                      >
                        <td className="p-4 font-semibold text-neutral-900">
                          {row.name}
                        </td>
                        <td className="p-4 text-center text-neutral-600 font-medium">
                          {row.starter}
                        </td>
                        <td className="p-4 text-center font-bold text-neutral-900 bg-neutral-50/50">
                          {row.pro}
                        </td>
                        <td className="p-4 text-center text-neutral-600 font-medium">
                          {row.enterprise}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-20 border-t border-neutral-200 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-neutral-500">
                Everything you need to know about SOURCED plans and billing.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Can I change my subscription tier later?",
                  a: "Yes! You can upgrade or downgrade your plan at any time from your account settings. Pro-rated differences will be automatically calculated.",
                },
                {
                  q: "What payment methods are supported?",
                  a: "We support all major credit/debit cards, UPI, NetBanking, Razorpay, and enterprise invoicing for annual plans.",
                },
                {
                  q: "Is there a long-term commitment?",
                  a: "No commitment required. You can cancel monthly plans at any time with no cancellation fees.",
                },
                {
                  q: "How does the 10% platform fee work on Professional?",
                  a: "Subscribers on the Professional tier enjoy a reduced platform fee of 10% on all completed contracts instead of the standard 20%.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xs space-y-2"
                >
                  <h3 className="font-bold text-neutral-900 text-base flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Selection Confirmation Modal */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl text-center space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check className="h-7 w-7 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Select {selectedPlanModal} Plan
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                You have chosen the <strong>{selectedPlanModal}</strong> tier
                billed{" "}
                <span className="capitalize font-semibold">{billingCycle}</span>
                .
              </p>
            </div>
            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setSelectedPlanModal(null)}
                className="flex-1 rounded-xl border border-neutral-300 py-3 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(
                    `Successfully initiated ${selectedPlanModal} plan subscription!`,
                  );
                  setSelectedPlanModal(null);
                }}
                className="flex-1 rounded-xl bg-black py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-900 shadow-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
