"use client";
import Link from "next/link";
import { CreditCard, Download, Zap } from "lucide-react";

export function BillingTab() {
  return (
    <div className="space-y-6">
      {/* Current Plan Overview */}
      <div className="rounded-3xl bg-[#042430] p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1">
            <Zap className="h-3 w-3 fill-emerald-400" />
            CURRENT PLAN
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight">
            Professional Tier
          </h2>
          <p className="mt-1 text-xs text-teal-100/80">
            Billed annually · ₹392/month · Renews Oct 2026
          </p>
        </div>

        <Link
          href="/subscriptions"
          className="rounded-xl bg-white hover:bg-neutral-100 px-6 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-neutral-900 shadow-xs transition-all active:scale-98"
        >
          Change Plan
        </Link>
      </div>

      {/* Payment Method Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-900">
              Payment Method
            </h3>
          </div>
          <button
            type="button"
            className="text-xs font-bold text-blue-600 hover:underline"
          >
            Update
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-black text-white">
              VISA
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">
                Visa ending in 8892
              </p>
              <p className="text-[11px] text-neutral-500">Expires 08/2028</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase text-emerald-800">
            Primary
          </span>
        </div>
      </div>

      {/* Invoice History */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-xl font-extrabold text-neutral-900 border-b border-neutral-100 pb-4">
          Invoice History
        </h3>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-100 text-neutral-400 uppercase font-bold text-[10px]">
                <th className="pb-3">Date</th>
                <th className="pb-3">Description</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
              {[
                {
                  date: "Oct 1, 2025",
                  desc: "Professional Plan (Annual)",
                  amount: "₹4,704",
                },
                {
                  date: "Oct 1, 2024",
                  desc: "Professional Plan (Annual)",
                  amount: "₹4,704",
                },
              ].map((inv) => (
                <tr key={inv.date}>
                  <td className="py-3.5 font-bold text-neutral-900">
                    {inv.date}
                  </td>
                  <td className="py-3.5">{inv.desc}</td>
                  <td className="py-3.5 font-bold">{inv.amount}</td>
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
