"use client";
import { ChevronDown } from "lucide-react";

interface ProposalFormTermsProps {
  bidAmount: number;
  setBidAmount: (amount: number) => void;
  duration: string;
  setDuration: (duration: string) => void;
  serviceFee: number;
  youReceive: number;
}

/** Bid Amount, Duration selector, and Sourced Service Fee calculation card */
export function ProposalFormTerms({
  bidAmount,
  setBidAmount,
  duration,
  setDuration,
  serviceFee,
  youReceive,
}: ProposalFormTermsProps) {
  return (
    <>
      {/* Pricing & Duration Input Row */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Bid Amount */}
        <div>
          <label className="block text-xs font-semibold text-[#022b3a]">
            Bid Amount
          </label>
          <div className="relative mt-2 flex items-center rounded-xl border border-[#c6c6cd] bg-white px-3.5 py-2.5 shadow-2xs focus-within:border-[#022b3a] focus-within:ring-1 focus-within:ring-[#022b3a]">
            <span className="mr-2 text-sm font-semibold text-[#022b3a]">₹</span>
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(Number(e.target.value) || 0)}
              className="w-full bg-transparent text-sm font-semibold text-[#022b3a] outline-none"
            />
          </div>
          <p className="mt-2 text-xs text-[#525866]">
            What the client will see as your total bid.
          </p>
        </div>

        {/* Estimated Duration */}
        <div>
          <label className="block text-xs font-semibold text-[#022b3a]">
            Estimated Duration
          </label>
          <div className="relative mt-2 flex items-center rounded-xl border border-[#c6c6cd] bg-white px-3.5 py-2.5 shadow-2xs focus-within:border-[#022b3a]">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full cursor-pointer appearance-none bg-transparent pr-8 text-sm font-medium text-[#022b3a] outline-none"
            >
              <option value="Less than 1 month">Less than 1 month</option>
              <option value="1 to 3 months">1 to 3 months</option>
              <option value="3 to 6 months">3 to 6 months</option>
              <option value="More than 6 months">More than 6 months</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 h-4 w-4 text-[#022b3a]" />
          </div>
        </div>
      </div>

      {/* Service Fee Calculation Box */}
      <div className="mt-6 rounded-2xl border border-[#d5e2e9] bg-[#f0f5f8] p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-[#525866]">
            Sourced Service Fee (10%)
          </span>
          <span className="font-semibold text-[#c93b3b]">
            -₹{serviceFee.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#d5e2e9]/60 pt-3">
          <span className="text-base font-bold text-[#022b3a]">
            You&apos;ll Receive
          </span>
          <span className="text-xl font-bold text-[#022b3a]">
            ₹{youReceive.toLocaleString("en-IN")}.00
          </span>
        </div>
      </div>
    </>
  );
}
