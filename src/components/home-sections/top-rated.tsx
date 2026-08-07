function TopRated() {
  return (
    <section>
      {/* Top rated */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold">
          Top Rated Professionals
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="relative min-h-85 overflow-hidden rounded-md">
            <img
              src="/home/top-rated/person1.png"
              alt="Marcus Thorne, senior solutions architect"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-primary/50" />
            <div className="absolute bottom-0 p-6">
              <span className="rounded bg-accent px-2 py-1 text-[10px] font-bold text-primary-foreground">
                TOP RATED
              </span>
              <h3 className="mt-3 text-2xl font-bold text-primary-foreground">
                Marcus Thorne
              </h3>
              <p className="text-xs text-primary-foreground/80">
                Senior Solutions Architect • 12+ years experience
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded bg-background px-4 py-2 text-xs font-semibold"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 rounded-md bg-muted p-5">
              <img
                src="/home/top-rated/person2.png"
                alt="Sarah Jenkins"
                className="h-14 w-14 rounded object-cover"
              />
              <div className="min-w-0">
                <h3 className="font-bold">Sarah Jenkins</h3>
                <p className="text-xs text-muted-foreground">
                  Motion Graphics & Brand Identity
                </p>
                <p className="mt-2 text-[10px] text-muted-foreground">
                  Profile 98% Complete
                </p>
                <div className="mt-1 h-0.5 w-40 bg-accent" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "David Chen",
                  role: "Data Scientist",
                  img: "./home/top-rated/person3.png",
                },
                {
                  name: "Elena Rodriguez",
                  role: "Content Strategist",
                  img: "./home/top-rated/person4.png",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-md border border-border p-6 text-center"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="mx-auto h-12 w-12 rounded border border-border object-cover"
                  />
                  <h3 className="mt-3 text-xs font-bold">{p.name}</h3>
                  <p className="text-[11px] text-muted-foreground">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TopRated;
