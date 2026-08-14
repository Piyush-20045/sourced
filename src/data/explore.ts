export interface Category {
  label: string;
  count: string;
}

export interface TrendingSkill {
  name: string;
}

export interface SavedJobStat {
  label: string;
  count: number;
}

export const categories: Category[] = [
  { label: "Full-Time Jobs", count: "714" },
  { label: "Freelance Projects", count: "1.1k" },
  { label: "Internships", count: "86" },
  { label: "Agency Hiring", count: "39" },
  { label: "Portfolio Showcase", count: "640" },
  { label: "Discussions", count: "328" },
];

export const trendingSkills: TrendingSkill[] = [
  "Figma",
  "React",
  "Prompt Eng.",
  "SQL",
  "Webflow",
  "Motion",
  "Copywriting",
  "Reel Editing",
].map((name) => ({ name }));

export const savedJobStats: SavedJobStat[] = [
  { label: "View saved", count: 12 },
  { label: "Applied", count: 5 },
];

export const proBanner = {
  eyebrow: "Pro Freelancer",
  title: "Skip the queue on every job",
  body: "Unlimited applications, AI proposal drafts, and a verified badge that gets you seen first.",
  cta: "Upgrade to Pro",
};
