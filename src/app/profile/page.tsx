import Link from "next/link";
import {
  Search,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight,
  Info,
  LogOut,
} from "lucide-react";
import Footer from "@/components/layout/footer";

// The three identity options shown as cards
const options = [
  {
    icon: Search,
    title: "Freelancer",
    desc: "I want to find work and build my portfolio.",
    points: [
      "Browse elite projects",
      "Submit strategic proposals",
      "Manage enterprise contracts",
    ],
    footer: "Best for individuals",
  },
  {
    icon: Briefcase,
    title: "Client",
    desc: "I want to hire talent and manage projects.",
    points: [
      "Post high-impact projects",
      "Hire top-tier freelancers",
      "Automated escrow payments",
    ],
    footer: "Best for project owners",
  },
  {
    icon: Users,
    title: "Agency",
    desc: "I want to scale my team and manage clients.",
    points: [
      "Centralized team hiring",
      "Unified seat management",
      "Global agency analytics",
    ],
    footer: "Best for organizations",
  },
];

function ProfilePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      <header className="border-b border-border">
        <div className="flex items-center justify-between px-8 py-4">
          <Link href="/" className="text-xl font-bold">
            Sourced
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <span className="flex items-center gap-2">
              {/* small dot indicator */}
              <span className="h-2 w-2 rounded-full bg-primary" />
              Choose Identity
            </span>
            <a href="#" className="flex items-center gap-2 hover:underline">
              <LogOut className="h-4 w-4" />
              Sign Out
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Define your presence.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          You're logged in as Samiya. Now, choose how you want to participate in
          the Sourced ecosystem.
        </p>

        {/* Identity cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <div
              key={o.title}
              className="flex flex-col rounded-lg border border-border p-6 transition-colors hover:border-foreground/30"
            >
              {/* icon badge */}
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft">
                <o.icon className="h-5 w-5" />
              </span>

              <h2 className="mt-8 text-lg">{o.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>

              {/* feature list */}
              <ul className="mt-6 space-y-3 text-sm">
                {o.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* card footer */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                {o.footer}
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Skip button + note */}
        <div className="mt-14 text-center">
          <button className="rounded-md bg-foreground px-12 py-4 text-xs font-bold tracking-wider text-background hover:opacity-90">
            SKIP
          </button>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            Switching between profiles is seamless from your dashboard.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProfilePage;
