import { useState } from "react";
import { BadgeCheck, Search, Star } from "lucide-react";
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

      {/* Client cards */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {visibleClients.map((client) => (
          <article
            key={client.id}
            className="rounded-lg border border-border bg-card p-4 sm:p-5"
          >
            {/* Logo, name, rating */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {client.initials}
                </span>
                <div>
                  <h3 className="flex items-center gap-1 font-bold">
                    {client.name}
                    {client.verified && (
                      <BadgeCheck className="h-4 w-4 text-primary" />
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {client.location} · {client.industry}
                  </p>
                </div>
              </div>
              <p className="flex shrink-0 items-center gap-1 text-sm font-semibold">
                <Star className="h-4 w-4 fill-foreground" />
                {client.rating}
              </p>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {client.description}
            </p>

            {/* Stats + action */}
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-4">
              <dl className="flex gap-6">
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Avg. Budget
                  </dt>
                  <dd className="text-sm font-bold">{client.avgBudget}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Total Hires
                  </dt>
                  <dd className="text-sm font-bold">{client.totalHires}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Open Projects
                  </dt>
                  <dd className="text-sm font-bold">{client.openProjects}</dd>
                </div>
              </dl>
              <Button type="button" size="sm">
                View Projects
              </Button>
            </div>
          </article>
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
