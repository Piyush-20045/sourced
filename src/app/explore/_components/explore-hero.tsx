import { ArrowRight } from "lucide-react";
import { exploreHero } from "@/data/explore";

/** Dark gradient search banner at the top of the explore feed. */
export function ExploreHero() {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-6 md:flex-row md:items-center"
      // exact gradient requested for this banner
      style={{ background: "linear-gradient(90deg, #022B3A 0%, #000000 100%)" }}
    >
      <div className="min-w-0 text-white">
        <p className="text-lg font-bold leading-snug">
          {exploreHero.titleLine1}
        </p>
        <p className="text-lg font-bold leading-snug">
          {exploreHero.titleLine2}
        </p>
      </div>

      <div className="ml-auto flex w-full items-center gap-2 rounded-lg bg-white/10 p-2 md:w-80">
        <input
          placeholder={exploreHero.placeholder}
          className="min-w-0 flex-1 bg-transparent px-2 text-xs text-white outline-none placeholder:text-white/60"
        />
        <button
          aria-label="Search projects"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-black"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
