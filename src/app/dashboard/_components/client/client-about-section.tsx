import { clientAbout } from "@/data/dashboard/client-dashboard";

/** Client company bio, tagline, and corporate metadata specs */
export function ClientAboutSection() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl font-bold text-[#022b3a]">About</h2>
      <p className="mt-2 text-base font-semibold text-[#022b3a]">
        {clientAbout.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {clientAbout.bio}
      </p>

      {/* Corporate Metadata Stats Row */}
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            TYPICAL BUDGET
          </p>
          <p className="mt-1 text-sm font-bold text-[#022b3a]">
            {clientAbout.typicalBudget}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            INDUSTRY
          </p>
          <p className="mt-1 text-sm font-bold text-[#022b3a]">
            {clientAbout.industry}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            COMPANY SIZE
          </p>
          <p className="mt-1 text-sm font-bold text-[#022b3a]">
            {clientAbout.companySize}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            LOCATION
          </p>
          <p className="mt-1 text-sm font-bold text-[#022b3a]">
            {clientAbout.location}
          </p>
        </div>
      </div>
    </section>
  );
}
