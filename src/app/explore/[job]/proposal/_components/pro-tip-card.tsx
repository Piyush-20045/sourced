import { Lightbulb } from "lucide-react";

/** Soft purple recommendation card with proposal tip for freelancers */
export function ProTipCard() {
  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-[#e0e7ff] bg-[#eef2ff] p-5">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#4f46e5]" />
      <div>
        <p className="text-xs font-bold text-[#022b3a]">Pro Tip</p>
        <p className="mt-1 text-xs leading-relaxed text-[#525866]">
          Personalize your proposal! Clients are 3x more likely to hire
          freelancers who reference specific details from the job description.
        </p>
      </div>
    </div>
  );
}
