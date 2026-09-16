"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  portfolio,
  portfolioCategories,
  getPortfolioItemById,
} from "@/data/dashboard/freelancer-dashboard";
import { SinglePortfolio } from "./single-portfolio";

type PortfolioFilter = (typeof portfolioCategories)[number];

/** Full portfolio manager shown from the dashboard side navigation. */
export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);

  const selectedItem = selectedPortfolioId
    ? getPortfolioItemById(selectedPortfolioId)
    : null;

  if (selectedItem) {
    return (
      <SinglePortfolio
        item={selectedItem}
        onBack={() => setSelectedPortfolioId(null)}
      />
    );
  }

  const published = portfolio.filter((item) => item.state === "published");
  const visibleItems = published.filter(
    (item) => filter === "All" || item.category === filter,
  );

  return (
    <section>
      {/* Heading and primary action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {published.length} published case studies
          </p>
        </div>
        <Button type="button" size="sm">
          <Plus />
          Add Project
        </Button>
      </div>

      {/* Category filters */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {portfolioCategories.map((category) => (
          <Button
            key={category}
            type="button"
            size="sm"
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Case-study cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="min-w-0 overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xs"
          >
            <div
              className={`grid h-32 cursor-pointer place-items-center text-4xl ${item.visualClass}`}
              aria-hidden="true"
              onClick={() => setSelectedPortfolioId(item.id)}
            >
              {item.symbol}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3
                    className="cursor-pointer font-bold leading-snug hover:underline"
                    onClick={() => setSelectedPortfolioId(item.id)}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.client} · {item.discipline}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] text-muted-foreground">
                  {item.year}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {item.summary}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-muted/50 px-2 py-1 text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  className="min-w-0 flex-1"
                  onClick={() => setSelectedPortfolioId(item.id)}
                >
                  View Case Study
                </Button>
                <Button type="button" variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleItems.length === 0 && (
        <div className="mt-5 rounded-lg border border-dashed border-border px-4 py-12 text-center">
          <p className="font-medium">No case studies in this category yet.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Add a project or choose another category.
          </p>
        </div>
      )}
    </section>
  );
}
