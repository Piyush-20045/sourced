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

export interface JobPost {
  id: string;
  recommended: boolean;
  postedAgo: string;
  title: string;
  description: string;
  tags: string[];
  rate: string;
  rateNote: string;
  company: {
    name: string;
    logo: string;
    rating: number;
    reviews: number;
    location: string;
  };
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

export const exploreHero = {
  titleLine1: "Find Work,",
  titleLine2: "That Fits Your Skills & Lifestyle.",
  placeholder: "Post a job, create standout proposals....",
};

export const jobs: JobPost[] = [
  {
    id: "j1",
    recommended: true,
    postedAgo: "Posted 2 hours ago",
    title: "Architectural Re-design for Web3 Dashboard",
    description:
      "We are looking for a senior-level UI/UX designer to overhaul our core trading dashboard. The focus is on complex data visualization and multi-chain wallet management. Must have experience with Figma and…",
    tags: ["UI/UX Design", "Data Visualization", "Web3", "Figma"],
    rate: "₹40,500",
    rateNote: "Fixed Price · 2 Months",
    company: {
      name: "Horizon Ventures",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviews: 32,
      location: "San Francisco",
    },
  },
  {
    id: "j2",
    recommended: false,
    postedAgo: "Posted 5 hours ago",
    title: "Rust Developer for Core Protocol Optimization",
    description:
      "Deep tech stack optimization for an L2 scaling solution. Seeking experts in Rust and low-level memory management. You will work directly with our CTO to improve throughput by 40%.",
    tags: ["Rust", "Distributed Systems", "L2"],
    rate: "₹1220/hr",
    rateNote: "Hourly · 6+ Months",
    company: {
      name: "NodeLabs Global",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      reviews: 14,
      location: "Berlin",
    },
  },
  {
    id: "j3",
    recommended: true,
    postedAgo: "Posted 1 day ago",
    title: "Brand Identity & Motion Kit for Fintech Launch",
    description:
      "End-to-end brand system: logo refinement, type scale, colour tokens and a short motion kit for launch reels. Deliverables in Figma plus After Effects source files.",
    tags: ["Branding", "Motion", "After Effects"],
    rate: "₹78,000",
    rateNote: "Fixed Price · 6 Weeks",
    company: {
      name: "Pixelworks Agency",
      logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      reviews: 58,
      location: "Bengaluru",
    },
  },
];
