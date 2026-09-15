import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  portfolio,
  portfolioCategories,
} from "@/data/dashboard/freelancer-dashboard";

type PortfolioFilter = (typeof portfolioCategories)[number];

/** Full portfolio manager shown from the dashboard side navigation. */
export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");

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
