"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail } from "lucide-react";

interface ProfileActionsProps {
  profileName: string;
  primaryLabel: string;
  primaryHref: string;
}

export function ProfileActions({
  profileName,
  primaryLabel,
  primaryHref,
}: ProfileActionsProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
      <button
        type="button"
        onClick={copyProfileLink}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Copy ${profileName}'s public profile link`}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
      </button>

      <Link
        href="/message"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Mail className="size-4" />
        Message
      </Link>

      <Link
        href={primaryHref}
        className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {primaryLabel}
      </Link>
    </div>
  );
}
