import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getPublicProfileBySlug, publicProfiles } from "@/data/public-profiles";
import { PublicProfileView } from "./_components/public-profile-view";

interface PublicProfilePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publicProfiles
    .filter((profile) => profile.published)
    .map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({
  params,
}: PublicProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getPublicProfileBySlug(slug);

  if (!profile) {
    return {
      title: "Profile not found | Sourced",
      description: "The requested Sourced profile is unavailable.",
    };
  }

  const typeLabel =
    profile.kind === "freelancer"
      ? "Freelancer"
      : profile.kind === "client"
        ? "Client"
        : "Agency";
  const title = `${profile.name} — ${typeLabel} | Sourced`;
  const description = `${profile.headline}. View ${profile.name}'s verified ${typeLabel.toLowerCase()} profile, experience, reviews, and work on Sourced.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function PublicProfilePage({
  params,
}: PublicProfilePageProps) {
  const { slug } = await params;
  const profile = getPublicProfileBySlug(slug);

  if (!profile) notFound();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <Navbar />
      <PublicProfileView profile={profile} />
      <Footer />
    </div>
  );
}
