import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  UserRound,
} from "lucide-react";

const workModes = [
  {
    title: "Client",
    icon: BriefcaseBusiness,
    description:
      "Find trusted specialists and move your next project from brief to delivery.",
    features: [
      "Post projects",
      "Review proposals",
      "Manage projects and payments",
      "Hire skilled freelancers and agencies",
    ],
  },
  {
    title: "Freelancer",
    icon: UserRound,
    description:
      "Build your reputation, discover quality opportunities, and grow your independent career.",
    features: [
      "Build a professional profile",
      "Discover projects",
      "Submit bids",
      "Manage projects and grow earnings",
    ],
  },
  {
    title: "Agency",
    icon: Building2,
    description:
      "Bring your team’s expertise to larger engagements and deliver exceptional work together.",
    features: [
      "Build and manage a professional team",
      "Bid on larger projects",
      "Post jobs and hire talent",
      "Manage team delivery",
    ],
  },
];

function ThreePortals() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.18em] text-accent">
            FIND YOUR FIT
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three Ways to Work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Whether you are hiring, freelancing, or growing an agency, Sourced
            gives you the tools to do your best work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {workModes.map((mode) => {
            const Icon = mode.icon;

            return (
              <article
                key={mode.title}
                className="group flex min-h-87.5 flex-col rounded-md border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-muted text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-bold">{mode.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {mode.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-5">
                  {mode.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-xs leading-relaxed text-foreground/80"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-auto flex items-center gap-2 pt-8 text-xs font-semibold text-primary transition-colors group-hover:text-accent"
                >
                  Explore {mode.title}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ThreePortals;
