/** Promo block encouraging the freelancer to publish project offerings. */
export function TestimonialCta() {
  return (
    <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-8 border-b border-border px-6 pb-12">
      <div className="max-w-lg">
        <h2 className="text-xl font-bold">Your project testimonial</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Projects are a new way to earn on Sourced that helps you do more of
          the work you love to do. Create project offerings that highlight your
          strengths and attract more clients.
        </p>
        <button className="mt-5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
          Manage projects
        </button>
      </div>

      <img
        src="/dashboard/officeDave.png"
        alt="Illustration of a happy freelancer with five star rating"
        className="ml-auto w-96 max-w-full"
        loading="lazy"
      />
    </section>
  );
}
