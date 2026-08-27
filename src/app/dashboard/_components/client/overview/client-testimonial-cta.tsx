import { Star } from "lucide-react";

/** Testimonial & reputation banner section for Client Dashboard */
export function ClientTestimonialCta() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-[#022b3a]">
            Your hiring testimonial
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Build your reputation as a great client. Showcase your best
            freelancer partnerships and make top talent eager to work with you.
          </p>
          <button className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-[#022b3a] transition-colors hover:bg-muted">
            Manage profile
          </button>
        </div>

        {/* 5-Star Reputation Graphic */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-8 w-8 fill-amber-400 text-amber-400 drop-shadow-xs"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
