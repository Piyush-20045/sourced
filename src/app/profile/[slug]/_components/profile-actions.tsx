"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail, Pencil } from "lucide-react";

interface ProfileActionsProps {
  profileName: string;
  primaryLabel: string;
  primaryHref: string;
  onEdit?: () => void;
}

export function ProfileActions({
  profileName,
  primaryLabel,
  primaryHref,
  onEdit,
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
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-end">
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Pencil className="size-4" />
          Edit profile
        </button>
      )}

      <button
        type="button"
        onClick={copyProfileLink}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Copy ${profileName}'s public profile link`}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
      </button>

      <Link
        href="/message"
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-primary px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Mail className="size-4" />
        Message
      </Link>

      <Link
        href={primaryHref}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {primaryLabel}
      </Link>
    </div>
  );
}
