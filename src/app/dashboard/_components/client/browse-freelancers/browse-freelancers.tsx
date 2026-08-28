"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const FILTER_CATEGORIES = [
  "All",
  "Figma",
  "React",
  "Branding",
  "Prototyping",
  "Motion",
  "Research",
];

/** Browse freelancers view for the Client Dashboard */
export function BrowseFreelancers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#022b3a]">
          Browse freelancers
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          284 freelancers available in your categories
        </p>
      </div>

      {/* Search Input & Category Filter Chips */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search Bar */}
        <div className="relative min-w-0 flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, skill, or role..."
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground/60 focus:border-[#022b3a] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/10"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-[#022b3a] text-white shadow-xs"
                    : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
