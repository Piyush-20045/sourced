import { Plus } from "lucide-react";
import { workHistory } from "../data/dashboard";

/** Past contracts / jobs. Empty in the mock data. */
export function WorkHistory() {
  return (
    <section className="border-b border-border pb-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">Work history</h2>
        <button
          className="grid h-6 w-6 place-items-center rounded-full border border-border"
          aria-label="Add work history"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      {workHistory.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No items</p>
      ) : (
        <ul className="mt-4 space-y-2 text-sm">
          {workHistory.map((w) => (
            <li key={w.id}>{w.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
