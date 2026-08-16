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

      </main>

      <Footer />
    </div>
  );
}

export default JobDetailsPage;
