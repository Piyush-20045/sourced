"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { portfolio } from "../../../data/dashboard";

/** Published / draft portfolio pieces. */
export function Portfolio() {
  const [tab, setTab] = useState<"published" | "draft">("published");
  const items = portfolio.filter((p) => p.state === tab);

  return (
    <section>
      <h2 className="text-xl font-bold">Portfolio</h2>

      {/* tabs */}
      <div className="mt-4 flex items-center gap-6 border-b border-border text-sm">
        {(["published", "draft"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-2 capitalize ${
              tab === t
                ? "border-foreground font-semibold"
                : "border-transparent text-foreground/70"
            }`}
          >
            {t === "draft" ? "Drafts" : "Published"}
          </button>
        ))}
        <button className="-mb-px pb-2" aria-label="Add portfolio item">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* items */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <figure key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="h-36 w-full rounded object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2 text-xs tracking-wide text-muted-foreground">
              {item.title}
            </figcaption>
          </figure>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">No items</p>
        )}
      </div>
    </section>
  );
}
