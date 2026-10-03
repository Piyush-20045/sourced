import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Languages,
  MapPin,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";
import type {
  AgencyPublicProfile,
  ClientPublicProfile,
  FreelancerPublicProfile,
  PublicProfile,
  PublicReview,
} from "@/data/public-profiles";
import { ProfileActions } from "./profile-actions";

function getProfilePresentation(profile: PublicProfile) {
  switch (profile.kind) {
    case "freelancer":
      return {
        label: "Freelancer",
        eyebrow: "Independent professional",
        primaryLabel: "Invite to project",
        primaryHref: "/dashboard/client",
        icon: BriefcaseBusiness,
      };
    case "client":
      return {
        label: "Client",
        eyebrow: "Hiring company",
        primaryLabel: "View open projects",
        primaryHref: "/explore",
        icon: Building2,
      };
    case "agency":
      return {
        label: "Agency",
        eyebrow: "Creative & technology partner",
        primaryLabel: "Request a proposal",
        primaryHref: "/message",
        icon: UsersRound,
      };
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-amber-500"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3.5 ${
            index < Math.round(rating)
              ? "fill-current"
              : "fill-transparent text-border"
          }`}
        />
      ))}
    </span>
  );
}

function IdentityMark({ profile }: { profile: PublicProfile }) {
  if (profile.avatar) {
    return (
      <Image
        src={profile.avatar}
        alt={`${profile.name} profile photo`}
        width={112}
        height={112}
        priority
        className="size-24 rounded-2xl object-cover ring-4 ring-background sm:size-28"
      />
    );
  }

  return (
    <div
      className="grid size-24 place-items-center rounded-2xl bg-primary text-2xl font-bold tracking-tight text-primary-foreground ring-4 ring-background sm:size-28"
      aria-label={`${profile.name} logo`}
    >
      {profile.initials}
    </div>
  );
}

function ProfileHero({ profile }: { profile: PublicProfile }) {
  const presentation = getProfilePresentation(profile);
  const KindIcon = presentation.icon;

  return (
    <section className="border-b border-border bg-muted/30">
      <div className="relative h-44 overflow-hidden sm:h-56 lg:h-64">
        <Image
          src={profile.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-360 px-4 pb-7 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative -mt-16 rounded-3xl border border-border/80 bg-background p-5 shadow-lg shadow-primary/5 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-end">
              <IdentityMark profile={profile} />

              <div className="min-w-0 pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">
                    <KindIcon className="size-3" />
                    {presentation.label}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {presentation.eyebrow}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <h1 className="truncate text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    {profile.name}
                  </h1>
                  {profile.verified && (
                    <BadgeCheck
                      className="size-5 shrink-0 fill-primary text-primary-foreground"
                      aria-label="Verified profile"
                    />
                  )}
                </div>

                <p className="mt-1 text-sm font-medium text-foreground/85 sm:text-base">
                  {profile.headline}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <strong className="text-foreground">
                      {profile.rating}
                    </strong>
                    <span>({profile.reviewCount} reviews)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    Member since {profile.joined}
                  </span>
                </div>
              </div>
            </div>

            <ProfileActions
              profileName={profile.name}
              primaryLabel={presentation.primaryLabel}
              primaryHref={presentation.primaryHref}
            />
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-background px-4 py-4 sm:px-5">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SectionCard({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
      {eyebrow && (
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={
          eyebrow
            ? "mt-1 text-xl font-bold text-primary"
            : "text-xl font-bold text-primary"
        }
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground/80"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ReviewSection({ reviews }: { reviews: PublicReview[] }) {
  if (reviews.length === 0) return null;

  return (
    <SectionCard title="Reviews" eyebrow="Trusted collaboration">
      <div className="space-y-5">
        {reviews.map((review, index) => (
          <article
            key={review.id}
            className={index === 0 ? "" : "border-t border-border pt-5"}
          >
            <div className="flex items-start gap-3">
              {review.avatar ? (
                <Image
                  src={review.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
              ) : (
                <div className="grid size-10 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {review.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-primary">
                      {review.author}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {review.authorRole}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <blockquote className="mt-3 text-sm leading-6 text-foreground/80">
                  “{review.quote}”
                </blockquote>
                <p className="mt-3 text-[11px] font-medium text-muted-foreground">
                  {review.project} · {review.date}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

function FreelancerContent({ profile }: { profile: FreelancerPublicProfile }) {
  return (
    <>
      <div className="space-y-5">
        <SectionCard title="About" eyebrow="Professional overview">
          <p className="text-sm leading-7 text-foreground/75">
            {profile.about}
          </p>
        </SectionCard>

        {profile.portfolio.length > 0 && (
          <SectionCard title="Selected work" eyebrow="Portfolio">
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.portfolio.map((item, index) => (
                <article
                  key={item.id}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <div
                    className={`group relative overflow-hidden rounded-xl bg-muted ${
                      index === 0 ? "aspect-16/7" : "aspect-4/3"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 720px"
                          : "(max-width: 768px) 100vw, 360px"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/75">
                        {item.category}
                      </p>
                      <h3 className="mt-1 font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {profile.workHistory.length > 0 && (
          <SectionCard title="Work history" eyebrow="Recent engagements">
            <div className="space-y-0">
              {profile.workHistory.map((item, index) => (
                <article
                  key={item.id}
                  className={`relative pl-7 ${
                    index < profile.workHistory.length - 1
                      ? "border-l border-border pb-6"
                      : ""
                  }`}
                >
                  <span className="absolute -left-1.5 top-1 size-3 rounded-full border-2 border-background bg-primary" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.company} · {item.period}
                      </p>
                    </div>
                    <StarRating rating={item.rating} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        <ReviewSection reviews={profile.reviews} />
      </div>

      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <section className="rounded-2xl bg-primary p-5 text-primary-foreground sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Work with Salman
          </p>
          <p className="mt-2 text-2xl font-bold">{profile.hourlyRate}</p>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <span className="size-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </p>
          <p className="mt-2 flex items-center gap-2 text-xs text-primary-foreground/65">
            <Clock3 className="size-3.5" />
            {profile.responseTime}
          </p>
          <Link
            href="/dashboard/client"
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl bg-background px-4 text-sm font-bold text-primary transition-opacity hover:opacity-90"
          >
            Invite to a project
          </Link>
        </section>

        <SectionCard title="Skills">
          <TagList items={profile.skills} />
        </SectionCard>

        <SectionCard title="Background">
          <div className="space-y-5 text-sm">
            {profile.languages.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Languages className="size-4" /> Languages
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {profile.languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex justify-between gap-3"
                    >
                      <span className="font-medium text-primary">
                        {language.name}
                      </span>
                      <span className="text-muted-foreground">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.education.length > 0 && (
              <div className="border-t border-border pt-5">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <GraduationCap className="size-4" /> Education
                </h3>
                {profile.education.map((education) => (
                  <div key={education.qualification} className="mt-2">
                    <p className="font-semibold text-primary">
                      {education.qualification}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {education.school} · {education.period}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {profile.certifications.length > 0 && (
              <div className="border-t border-border pt-5">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <CheckCircle2 className="size-4" /> Certifications
                </h3>
                <ul className="mt-2 space-y-3">
                  {profile.certifications.map((certification) => (
                    <li key={certification.name}>
                      <p className="font-semibold text-primary">
                        {certification.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {certification.issuer} · {certification.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </SectionCard>
      </aside>
    </>
  );
}

function ClientContent({ profile }: { profile: ClientPublicProfile }) {
  return (
    <>
      <div className="space-y-5">
        <SectionCard title="Company overview" eyebrow="About the client">
          <p className="text-sm leading-7 text-foreground/75">
            {profile.about}
          </p>
        </SectionCard>

        {profile.openProjects.length > 0 && (
          <SectionCard title="Open projects" eyebrow="Currently hiring">
            <div className="space-y-3">
              {profile.openProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-xl border border-border p-4 transition-colors hover:border-primary/30 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        {project.status}
                      </span>
                      <h3 className="mt-2 font-bold text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {project.engagement}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-primary">
                      {project.budget}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <TagList items={project.skills} />
                    <Link
                      href="/explore"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      View project <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {profile.hiringHistory.length > 0 && (
          <SectionCard title="Hiring history" eyebrow="Completed work">
            <div className="divide-y divide-border">
              {profile.hiringHistory.map((item) => (
                <article key={item.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-primary">
                        {item.project}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        With {item.talent} · Completed {item.completed}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary">
                        {item.amount}
                      </p>
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        <ReviewSection reviews={profile.reviews} />
      </div>

      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <SectionCard title="Company details">
          <dl className="space-y-4 text-sm">
            {[
              ["Industry", profile.industry],
              ["Company size", profile.companySize],
              ["Founded", profile.founded],
              ["Typical budget", profile.typicalBudget],
              ["Website", profile.website],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4"
              >
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-right font-semibold text-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </SectionCard>

        <SectionCard title="Hiring preferences">
          <TagList items={profile.preferredSkills} />
        </SectionCard>

        <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-bold text-emerald-950">
            <ShieldCheck className="size-5" /> Trust & safety
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-emerald-950/75">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-700" /> Identity
              verified
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-700" />
              {profile.paymentVerified
                ? "Payment method verified"
                : "Payment verification pending"}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-700" /> Consistent
              hiring history
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
}

function AgencyContent({ profile }: { profile: AgencyPublicProfile }) {
  return (
    <>
      <div className="space-y-5">
        <SectionCard title="Agency overview" eyebrow="About the team">
          <p className="text-sm leading-7 text-foreground/75">
            {profile.about}
          </p>
        </SectionCard>

        {profile.services.length > 0 && (
          <SectionCard title="Services" eyebrow="What we do">
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.services.map((service, index) => (
                <article
                  key={service.name}
                  className="rounded-xl bg-muted/55 p-4"
                >
                  <span className="text-xs font-bold text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {profile.caseStudies.length > 0 && (
          <SectionCard title="Featured case studies" eyebrow="Selected results">
            <div className="space-y-5">
              {profile.caseStudies.map((study) => (
                <article
                  key={study.id}
                  className="overflow-hidden rounded-xl border border-border sm:grid sm:grid-cols-[220px_1fr]"
                >
                  <div className="relative min-h-44 bg-muted">
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {study.client}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-primary">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-emerald-700">
                      {study.result}
                    </p>
                    <div className="mt-4">
                      <TagList items={study.services} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {profile.team.length > 0 && (
          <SectionCard title="Core team" eyebrow="Senior-led delivery">
            <div className="grid gap-3 sm:grid-cols-3">
              {profile.team.map((member) => (
                <article
                  key={member.id}
                  className="rounded-xl bg-muted/50 p-4 text-center"
                >
                  <Image
                    src={member.avatar}
                    alt={`${member.name}, ${member.role}`}
                    width={64}
                    height={64}
                    className="mx-auto size-16 rounded-full object-cover"
                  />
                  <h3 className="mt-3 text-sm font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {member.role}
                  </p>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {profile.opportunities.length > 0 && (
          <SectionCard title="Open opportunities" eyebrow="Join a project team">
            <div className="space-y-3">
              {profile.opportunities.map((opportunity) => (
                <article
                  key={opportunity.id}
                  className="rounded-xl border border-border p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-primary">
                        {opportunity.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {opportunity.type} · {opportunity.location}
                      </p>
                    </div>
                    <Link
                      href="/explore"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      View opportunity <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                  <div className="mt-3">
                    <TagList items={opportunity.skills} />
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        <ReviewSection reviews={profile.reviews} />
      </div>

      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <section className="rounded-2xl bg-primary p-5 text-primary-foreground sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Start a conversation
          </p>
          <p className="mt-2 text-xl font-bold">
            Projects from {profile.minimumProject}
          </p>
          <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-primary-foreground/65">
            <Clock3 className="mt-0.5 size-3.5 shrink-0" />
            {profile.responseTime}
          </p>
          <Link
            href="/message"
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl bg-background px-4 text-sm font-bold text-primary transition-opacity hover:opacity-90"
          >
            Request a proposal
          </Link>
        </section>

        <SectionCard title="Agency details">
          <dl className="space-y-4 text-sm">
            {[
              ["Founded", profile.founded],
              ["Team", profile.teamSize],
              ["Minimum project", profile.minimumProject],
              ["Website", profile.website],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4"
              >
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-right font-semibold text-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </SectionCard>

        <SectionCard title="Industries">
          <TagList items={profile.industries} />
        </SectionCard>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-bold text-primary">
            <ShieldCheck className="size-5" /> Verified agency
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Business identity, team ownership, and payment details have been
            reviewed by Sourced.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="size-4" /> Ready for enterprise contracts
          </div>
        </section>
      </aside>
    </>
  );
}

export function PublicProfileView({ profile }: { profile: PublicProfile }) {
  return (
    <>
      <ProfileHero profile={profile} />
      <main className="mx-auto grid w-full max-w-360 flex-1 gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-7 lg:px-8 lg:py-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-8 xl:px-10">
        {profile.kind === "freelancer" && (
          <FreelancerContent profile={profile} />
        )}
        {profile.kind === "client" && <ClientContent profile={profile} />}
        {profile.kind === "agency" && <AgencyContent profile={profile} />}
      </main>
    </>
  );
}
