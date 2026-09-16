"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "@/data/dashboard/freelancer-dashboard";

interface SinglePortfolioProps {
  item: PortfolioItem;
  onBack: () => void;
}

export function SinglePortfolio({ item, onBack }: SinglePortfolioProps) {
  return (
    <article className="min-w-0 space-y-6">
      {/* Back button */}
      <div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="-ml-2 h-auto py-1 px-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          Back to Portfolio
        </Button>
      </div>

      {/* Project Header Banner & Info */}
      <section className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
        <div
          className={`grid h-44 place-items-center text-6xl sm:h-52 ${item.visualClass || "bg-accent/15"}`}
          aria-hidden="true"
        >
          {item.symbol || "📁"}
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold sm:text-3xl text-foreground">{item.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.client} · {item.discipline}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-5 sm:grid-cols-4">
            {[
              ["ROLE", item.role],
              ["CLIENT", item.client],
              ["DURATION", item.duration],
              ["YEAR", item.year],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 text-xs font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Impact Metrics */}
      {item.metrics && item.metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-card p-4 text-center shadow-xs"
            >
              <dt className="text-2xl font-bold sm:text-3xl text-foreground">
                {metric.value}
              </dt>
              <dd className="mt-1 text-[11px] text-muted-foreground">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {/* Overview */}
      {item.overview && (
        <CaseStudyBlock title="Overview">
          <p className="text-sm text-foreground/90 leading-relaxed">{item.overview}</p>
        </CaseStudyBlock>
      )}

      {/* The Problem */}
      {item.problem && (
        <CaseStudyBlock title="The Problem">
          <p className="text-sm text-foreground/90 leading-relaxed">{item.problem}</p>
        </CaseStudyBlock>
      )}

      {/* Process */}
      {item.process && item.process.length > 0 && (
        <CaseStudyBlock title="Process">
          <ol className="space-y-3.5">
            {item.process.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#022b3a] text-xs font-bold text-white mt-0.5">
                  {index + 1}
                </span>
                <span className="text-sm text-foreground/90 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </CaseStudyBlock>
      )}

      {/* Outcome */}
      {item.outcome && (
        <section className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-5 sm:p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            Outcome
          </p>
          <p className="mt-2 text-sm font-semibold text-emerald-950 dark:text-emerald-200 leading-relaxed">
            {item.outcome}
          </p>
        </section>
      )}

      {/* Tools & Tags */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs space-y-4">
        {item.tools && item.tools.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Tools
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-[#022b3a] px-3 py-1 text-xs font-medium text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Tags
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Bottom Footer Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Button>
        <Button type="button" variant="outline" size="sm">
          Edit Project
        </Button>
      </div>
    </article>
  );
}

function CaseStudyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
      <h2 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
