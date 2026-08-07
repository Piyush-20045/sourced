import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    tag: "DESIGN",
    price: "Rs 8,000 - Rs 12,000",
    title: "Bento Grid Dashboard Design",
    desc: "We need a UI/UX specialist to redesign our SaaS dashboard using a modern bento-style layout with...",
    skills: ["Figma", "UI Design", "SaaS"],
    meta: "Verified Client",
  },
  {
    tag: "DEVELOPMENT",
    price: "14k-20k",
    title: "Real-time Web3 Marketplace",
    desc: "Building a decentralized asset trading platform. Requires deep knowledge of Solidity and React...",
    skills: ["Next.js", "Solidity", "Ethers.js"],
    meta: "Premium Plus",
  },
  {
    tag: "MARKETING",
    price: "12k/mo",
    title: "Lead Generation Strategy",
    desc: "Ongoing engagement for a B2B startup. Focus on LinkedIn automation and content funnel...",
    skills: ["LinkedIn Ads", "B2B"],
    meta: "3 bids received",
  },
];

export default function RecentProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-muted z-0">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Recent Projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Hot opportunities waiting for your expertise
            </p>
          </div>

          {/* Pencil artwork and link from the Figma section header. */}
          <div className="hidden text-right sm:block">
            <Image
              src="/home/pencil.png"
              alt=""
              width={271}
              height={285}
              aria-hidden="true"
              className="ml-auto -mr-18 w-72"
            />
            <Link
              href="/projects"
              className="text-sm font-medium hover:underline"
            >
              View all projects &rsaquo;
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-md border border-border bg-background shadow-sm"
            >
              <div className="flex-1 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded bg-muted px-2 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
                    {project.tag}
                  </span>
                  <span className="text-xs font-medium">{project.price}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold">{project.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-muted px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border px-5 py-3">
                <span className="text-xs text-muted-foreground">
                  {project.meta}
                </span>
                <Link
                  href="/projects"
                  className="text-xs font-semibold hover:underline"
                >
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
