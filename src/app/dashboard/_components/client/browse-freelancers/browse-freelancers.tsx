"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import { browseFreelancers } from "@/data/dashboard/client-dashboard";

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

  const filteredFreelancers = browseFreelancers.filter((f) => {
    const matchesSearch =
      searchQuery === "" ||
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === "All" ||
      f.skills.some((s) => s.toLowerCase() === activeCategory.toLowerCase()) ||
      (activeCategory === "Research" &&
        f.skills.some((s) => s.toLowerCase().includes("research"))) ||
      (activeCategory === "Motion" &&
        f.skills.some(
          (s) =>
            s.toLowerCase().includes("motion") ||
            s.toLowerCase().includes("lottie") ||
            s.toLowerCase().includes("effects"),
        ));

    return matchesSearch && matchesCategory;
  });

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

      {/* Freelancers Cards Grid (2 Columns) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filteredFreelancers.map((f) => (
          <div
            key={f.id}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-xs"
          >
            <div className="space-y-4">
              {/* Header Info: Avatar, Name, Role, Badge */}
              <div className="flex items-start gap-3.5">
                <Image
                  src={f.avatar}
                  alt={f.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-bold text-base text-[#022b3a]">
                      {f.name}
                    </h3>
                    {f.badge && (
                      <span
                        className={`rounded px-1.75 pt-0.75 text-[10px] font-semibold tracking-wider uppercase ${
                          f.badge === "TOP RATED"
                            ? "bg-[#e6f4ea] text-[#137333]"
                            : "bg-[#e8f0fe] text-[#1a73e8]"
                        }`}
                      >
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {f.role} · {f.location}
                  </p>

                  {/* Hourly Rate & Rating */}
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#022b3a]">
                      {f.hourlyRate}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 font-semibold text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {f.rating}
                    </span>
                    <span className="text-muted-foreground">
                      · {f.jobsCount} jobs
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5">
                {f.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                className="flex-1 rounded-lg bg-[#022b3a] py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-[#064259]"
              >
                Invite to project
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg border border-border bg-background py-2 text-center text-xs font-semibold text-[#022b3a] transition-colors hover:bg-muted"
              >
                View profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
