// Mock data for the Explore (browse projects) page and Job Details page.

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

export interface CompanyStat {
  label: string;
  value: string;
}

export interface JobPost {
  id: string;
  recommended: boolean;
  postedAgo: string;
  title: string;
  description: string;
  /** Full description shown on the details page. */
  fullDescription: string[];
  tags: string[];
  rate: string;
  rateNote: string;
  location: string;
  level: string;
  paymentVerified: boolean;
  responsibilities: string[];
  technicalRequirements: string[];
  company: {
    name: string;
    logo: string;
    rating: number;
    reviews: number;
    location: string;
    stats: CompanyStat[];
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
    title: "Lead UX Architect for Financial Dashboard Ecosystem",
    description:
      "We are seeking an elite-level UX Architect to spearhead the redesign of our flagship enterprise financial reporting suite.",
    fullDescription: [
      "We are seeking an elite-level UX Architect to spearhead the redesign of our flagship enterprise financial reporting suite. This project involves unifying three disparate legacy platforms into a cohesive, high-performance dashboard ecosystem designed for institutional investors and high-frequency traders.",
      "The ideal candidate possesses a deep understanding of data density, information hierarchy, and complex state management. You will be responsible for translating intricate financial data flows into intuitive, actionable visual experiences that minimize cognitive load while maximizing professional efficiency.",
    ],
    tags: ["UI/UX Design", "Data Visualization", "Web3", "Figma"],
    rate: "$4,500",
    rateNote: "Fixed Price · 2 Months",
    location: "Remote / New York, NY",
    level: "Expert Level",
    paymentVerified: true,
    responsibilities: [
      "Map complex user journeys for multiple persona types (Traders, Compliance, Execs).",
      "Develop a scalable design system for high-density data visualizations.",
      "Conduct stakeholder workshops to align business goals with user needs.",
    ],
    technicalRequirements: [
      "Figma Advanced",
      "Data Visualization",
      "Design Systems",
      "React Knowledge",
      "FinTech UI",
    ],
    company: {
      name: "Global Asset Management Inc.",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviews: 124,
      location: "New York, NY",
      stats: [
        { label: "TOTAL SPENT", value: "$2.4M+" },
        { label: "HIRES", value: "86" },
        { label: "ACTIVE PROJECTS", value: "14" },
        { label: "MEMBER SINCE", value: "2019" },
      ],
    },
  },
  {
    id: "j2",
    recommended: false,
    postedAgo: "Posted 5 hours ago",
    title: "Rust Developer for Core Protocol Optimization",
    description:
      "Deep tech stack optimization for an L2 scaling solution. Seeking experts in Rust and low-level memory management.",
    fullDescription: [
      "Deep tech stack optimization for an L2 scaling solution. Seeking experts in Rust and low-level memory management. You will work directly with our CTO to improve throughput by 40%.",
      "You should be comfortable reading academic papers, implementing novel data structures, and profiling hot paths under production load.",
    ],
    tags: ["Rust", "Distributed Systems", "L2"],
    rate: "$120/hr",
    rateNote: "Hourly · 6+ Months",
    location: "Remote / Berlin",
    level: "Expert Level",
    paymentVerified: true,
    responsibilities: [
      "Profile and optimize consensus-critical code paths.",
      "Implement memory-safe concurrency primitives.",
      "Write comprehensive benchmarks and regression tests.",
    ],
    technicalRequirements: [
      "Rust",
      "Tokio",
      "Cryptography",
      "Distributed Systems",
    ],
    company: {
      name: "NodeLabs Global",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      reviews: 14,
      location: "Berlin",
      stats: [
        { label: "TOTAL SPENT", value: "$850K+" },
        { label: "HIRES", value: "22" },
        { label: "ACTIVE PROJECTS", value: "5" },
        { label: "MEMBER SINCE", value: "2021" },
      ],
    },
  },
  {
    id: "j3",
    recommended: true,
    postedAgo: "Posted 1 day ago",
    title: "Brand Identity & Motion Kit for Fintech Launch",
    description:
      "End-to-end brand system: logo refinement, type scale, colour tokens and a short motion kit for launch reels.",
    fullDescription: [
      "End-to-end brand system: logo refinement, type scale, colour tokens and a short motion kit for launch reels. Deliverables in Figma plus After Effects source files.",
      "We need a cohesive visual language that feels premium, trustworthy, and modern — ready to ship across product, marketing, and social channels.",
    ],
    tags: ["Branding", "Motion", "After Effects"],
    rate: "$7,800",
    rateNote: "Fixed Price · 6 Weeks",
    location: "Remote / Bengaluru",
    level: "Intermediate",
    paymentVerified: false,
    responsibilities: [
      "Refine logo marks and build a flexible brand grid.",
      "Produce type scale and colour tokens for product hand-off.",
      "Create a 15-second motion kit for launch reels.",
    ],
    technicalRequirements: [
      "Figma",
      "After Effects",
      "Brand Strategy",
      "Motion Design",
    ],
    company: {
      name: "Pixelworks Agency",
      logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      reviews: 58,
      location: "Bengaluru",
      stats: [
        { label: "TOTAL SPENT", value: "$1.1M+" },
        { label: "HIRES", value: "64" },
        { label: "ACTIVE PROJECTS", value: "9" },
        { label: "MEMBER SINCE", value: "2018" },
      ],
    },
  },
];

/** Look up a job by its id. */
export function getJobById(id: string): JobPost | undefined {
  return jobs.find((job) => job.id === id);
}
