"use client";
import { Check, Clock, Globe, ShieldCheck, Star } from "lucide-react";
import { getJobById } from "@/data/explore";
import { DashboardNav } from "@/app/dashboard/_components/dashboard-nav";
import Footer from "@/components/layout/footer";
import { useParams } from "next/navigation";

function JobNotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <DashboardNav />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Job not found</h1>
          <p className="mt-2 text-muted-foreground">
            The project you are looking for does not exist.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function JobDetailsPage() {
  const { job } = useParams();
  const jobData = getJobById(job as string);

  if (!jobData) return <JobNotFound />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <DashboardNav />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        {/* Title + meta */}
        <section className="space-y-4">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {jobData.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {jobData.postedAgo}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              {jobData.location}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <span className="h-4 w-4 rounded-full border-2 border-foreground/30" />
              {jobData.level}
            </span>
            {jobData.paymentVerified && (
              <span className="flex items-center gap-1.5 font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" />
                Payment Verified
              </span>
            )}
          </div>
        </section>

        <hr className="my-8 border-border" />

        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Project Description</h2>
          {jobData.fullDescription.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Responsibilities + Technical Requirements */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded border border-border text-sm">
                ☑
              </span>
              Responsibilities
            </h3>
            <ul className="mt-4 space-y-3">
              {jobData.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded border border-border text-sm">
                ⊞
              </span>
              Technical Requirements
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {jobData.technicalRequirements.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-3 py-1.5 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default JobDetailsPage;
