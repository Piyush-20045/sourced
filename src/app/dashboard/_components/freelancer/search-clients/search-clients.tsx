import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  clientIndustries,
  clients,
} from "@/data/dashboard/freelancer-dashboard";

/** Client directory: search box, industry filters, and client cards. */
export function SearchClients() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] =
    useState<(typeof clientIndustries)[number]>("All");

  // filter clients by the search query and the active industry chip
  const visibleClients = clients.filter((client) => {
    const matchesIndustry = industry === "All" || client.industry === industry;
    const matchesQuery = `${client.name} ${client.industry}`
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesIndustry && matchesQuery;
  });

  return (
    <section>
      {/* Section heading */}
      <h2 className="text-2xl font-bold">Search Clients</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Discover companies actively hiring freelancers.
      </p>

      {/* Search box */}
      <div className="relative mt-5">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search clients, industries..."
          className="h-11 w-full rounded-lg border border-border bg-card pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Industry filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {clientIndustries.map((item) => (
          <Button
            key={item}
            type="button"
            variant={industry === item ? "default" : "outline"}
            size="sm"
            onClick={() => setIndustry(item)}
            aria-pressed={industry === item}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* Empty state */}
      {visibleClients.length === 0 && (
        <div className="mt-5 rounded-lg border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
          No clients match your search.
        </div>
      )}
    </section>
  );
}
