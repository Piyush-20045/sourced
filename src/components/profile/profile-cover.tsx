import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProfileCoverProps {
  src: string;
  sizes: string;
  containerClassName?: string;
  coverClassName?: string;
  imageClassName?: string;
  children?: ReactNode;
}

/** Shared 4:1 profile cover used by dashboards and public profiles. */
export function ProfileCover({
  src,
  sizes,
  containerClassName,
  coverClassName,
  imageClassName,
  children,
}: ProfileCoverProps) {
  return (
    <div className={cn("mx-auto w-full", containerClassName)}>
      <div
        className={cn(
          "relative aspect-4/1 overflow-hidden bg-muted",
          coverClassName,
        )}
      >
        <Image
          src={src}
          alt=""
          fill
          priority
          unoptimized={src.startsWith("data:")}
          sizes={sizes}
          className={cn("object-cover object-center", imageClassName)}
        />
        {children}
      </div>
    </div>
  );
}
