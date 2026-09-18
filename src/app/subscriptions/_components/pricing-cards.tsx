import {
  ArrowRight,
  Compass,
  Hexagon,
  Sparkles,
  Zap,
  BarChart2,
  Lock,
} from "lucide-react";

export default function PricingCards({
  billingCycle,
  setSelectedPlanModal,
}: {
  billingCycle: "monthly" | "yearly";
  setSelectedPlanModal: (plan: string) => void;
}) {
  // Price calculations based on billing cycle (-20% for yearly)
  const proPrice = billingCycle === "yearly" ? 392 : 490;
  const enterprisePrice = billingCycle === "yearly" ? 480 : 600;
  return (
    <div className="mt-12 space-y-6">
      {/* Top Row: Starter & Professional Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {/* STARTER CARD */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xl sm:p-9">
          <div>
            {/* Card Header Icons */}
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 shadow-2xs">
                <Compass className="h-6 w-6 stroke-[1.75]" />
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                BASIC
              </span>
            </div>

            {/* Title & Desc */}
            <div className="mt-8 space-y-2">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Starter
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                Essential groundwork for your first digital venture.
              </p>
            </div>
          </div>

          {/* Price & Action */}
          <div className="mt-10 pt-6 border-t border-neutral-100">
            <div className="flex items-baseline">
              <span className="text-5xl font-black text-neutral-900 tracking-tight sm:text-6xl">
                ₹0
              </span>
              <span className="ml-1.5 text-sm font-medium text-neutral-500">
                /forever
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPlanModal("Starter")}
              className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-neutral-900 hover:text-black transition-all group-hover:translate-x-1"
            >
              <span>Get started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PROFESSIONAL CARD (Featured) */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#042430] p-7 text-white shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-9">
          {/* Background Watermark Zap */}
          <Zap
            className="absolute -right-8 -bottom-8 h-64 w-64 text-teal-400/10 pointer-events-none stroke-1"
            aria-hidden="true"
          />

          <div>
            {/* Card Header Icons */}
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-950/60 text-emerald-300 shadow-inner">
                <Sparkles className="h-6 w-6 stroke-[1.75]" />
              </div>
              <span className="rounded-full bg-blue-600 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-xs">
                MOST POPULAR
              </span>
            </div>

            {/* Title & Desc */}
            <div className="mt-8 space-y-2 relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Professional
              </h2>
              <p className="text-sm text-teal-100/80 leading-relaxed max-w-sm">
                Unlock the full power of SOURCED with elite tools and priority
                access to global talent.
              </p>
            </div>
          </div>

          {/* Price & Action */}
          <div className="mt-10 pt-6 border-t border-teal-900/50 flex flex-wrap items-end justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-baseline">
                <span className="text-5xl font-black text-white tracking-tight sm:text-6xl">
                  ₹{proPrice}
                </span>
                <span className="ml-1.5 text-sm font-medium text-teal-200/70">
                  /month
                </span>
              </div>
              {billingCycle === "yearly" && (
                <p className="mt-1 text-[11px] text-teal-300/80">
                  Billed annually (₹{proPrice * 12}/yr)
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlanModal("Professional")}
              className="rounded-full bg-black hover:bg-neutral-900 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-lg border border-white/10 transition-transform active:scale-95"
            >
              UPGRADE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: ENTERPRISE CARD (Wide) */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-300/70 bg-[#d5d7dc] p-7 shadow-sm transition-all duration-300 hover:shadow-md sm:p-9 lg:flex-row lg:items-center">
        {/* Left Side Info */}
        <div className="max-w-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-neutral-900 shadow-2xs">
            <Hexagon className="h-6 w-6 stroke-[1.75]" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Enterprise
          </h2>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
            For organizations requiring high-volume throughput, custom API
            governance, and dedicated account intelligence.
          </p>
        </div>

        {/* Right Side Feature Badges & Pricing */}
        <div className="mt-8 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
          {/* Feature Highlight Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xs px-5 py-3.5 text-left shadow-2xs min-w-35">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                <BarChart2 className="h-3 w-3 text-neutral-700" />
                ANALYTICS
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-900">
                Predictive AI
              </div>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xs px-5 py-3.5 text-left shadow-2xs min-w-35">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                <Lock className="h-3 w-3 text-neutral-700" />
                SECURITY
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-900">
                SSO & Governance
              </div>
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-neutral-400/30 pt-6 lg:border-t-0 lg:pt-0">
            <div>
              <div className="flex items-baseline">
                <span className="text-5xl font-black text-neutral-900 tracking-tight sm:text-6xl">
                  ₹{enterprisePrice}
                </span>
                <span className="ml-1.5 text-sm font-medium text-neutral-600">
                  /month
                </span>
              </div>
              {billingCycle === "yearly" && (
                <p className="mt-1 text-[11px] text-neutral-600">
                  Billed annually (₹{enterprisePrice * 12}/yr)
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlanModal("Enterprise")}
              className="rounded-full bg-black hover:bg-neutral-900 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-lg active:scale-95 transition-transform"
            >
              UPGRADE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
