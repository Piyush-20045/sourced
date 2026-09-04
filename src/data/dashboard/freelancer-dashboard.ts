export type Mode = "Freelancer" | "Client" | "Agency";

export interface UserProfile {
  name: string;
  avatar: string;
  cover: string;
  location: string;
  title: string;
  verified: boolean;
  modes: Mode[];
  activeMode: Mode;
  profileStrength: number; // 0-100
  hourlyRate: string;
  tagline: string;
  bio: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Bid {
  id: string;
  title: string;
  client: string;
  amount: string;
  status: "PENDING" | "WON" | "LOST";
}

export interface Recommendation {
  id: string;
  title: string;
  client: string;
  budget: string;
  bids: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  state: "published" | "draft";
}

export interface Skill {
  name: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skill {
  name: string;
}

export interface Education {
  school: string;
  degree: string;
  years: string;
}

export interface NavItem {
  label: string;
  icon: string; // lucide icon name handled by the component
  badge?: number;
  section?: string;
}

export const user: UserProfile = {
  name: "Salman K.",
  avatar: "/dashboard/salman.jpeg",
  cover: "/dashboard/header.jpg",
  location: "Mumbai, India",
  title: "UI/UX Designer",
  verified: true,
  modes: ["Freelancer", "Client", "Agency"],
  activeMode: "Freelancer",
  profileStrength: 92,
  hourlyRate: "₹90.00/hr",
  tagline: "ui/ux designer , product designer , interaction designer",
  bio: "I'm Salman Khan, a UI/UX and Interaction Designer based in Mumbai, India, currently completing my BCA at St. Xavier's College (graduating May 2026). I'm reaching out for freelancing — I specialise in end-to-end product design from user research, personas, and journey mapping to high-fidelity Figma prototyping and motion design.",
};

export const stats: Stat[] = [
  { label: "Earned this month", value: "₹68,400" },
  { label: "Active bids", value: "5" },
  { label: "Client rating", value: "4.9" },
  { label: "Projects completed", value: "128" },
];

export const freelancerSideNav: NavItem[] = [
  { label: "Overview", icon: "LayoutGrid" },
  { label: "Find Projects", icon: "SearchCheck", badge: 32 },
  { label: "My Proposals", icon: "MailCheck" },
  { label: "Search Clients", icon: "UserSearch" },
  { label: "Interviews", icon: "CalendarDays", badge: 5 },
  { label: "Contracts", icon: "FileText", section: "OPERATIONS" },
  { label: "Payments", icon: "CreditCard", section: "OPERATIONS" },
  { label: "Portfolio", icon: "BriefcaseBusiness", section: "OPERATIONS" },
  { label: "Analytics", icon: "BarChart3", section: "OPERATIONS" },
];

export const activeBids: Bid[] = [
  {
    id: "b1",
    title: "Rebuild analytics dashboard",
    client: "Nimbus Labs",
    amount: "₹42,000",
    status: "PENDING",
  },
  {
    id: "b2",
    title: "Design system audit",
    client: "Pixelworks Agency",
    amount: "₹34,000",
    status: "PENDING",
  },
  {
    id: "b3",
    title: "Brand refresh - Loop Studio",
    client: "Loop Studio",
    amount: "₹48,000",
    status: "WON",
  },
];

export const recommendations: Recommendation[] = [
  {
    id: "r1",
    title: "Pitch deck + brand story for Series A",
    client: "Pixelworks Agency",
    budget: "₹1,20,000",
    bids: 6,
  },
  {
    id: "r2",
    title: "Mobile app UI for wellness platform",
    client: "Nimbus Labs",
    budget: "₹5L-₹7L",
    bids: 9,
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "PORTFOLIO",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    state: "published",
  },
];

export const weekStats = [
  { label: "Profile views", value: "312" },
  { label: "New messages", value: "6" },
];

export const languages: Language[] = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native or Bilingual" },
];

export const education: Education[] = [
  {
    school: "St. Xavier's College",
    degree: "Bachelor of Computer Applications",
    years: "2015-2022",
  },
];

export const workHistory: { id: string; title: string }[] = [];

export const skills: Skill[] = [
  "Design & Usability Research",
  "UI/UX Prototyping",
  "Figma",
  "Storytelling",
  "Typography",
  "Color Theory",
  "Color Palette",
  "Journey Mapping",
  "User Interface Design",
  "User Stories",
  "User Experience Design",
  "Wireframing",
  "Sketch",
].map((name) => ({ name }));

export const topNav = ["Browse projects", "Post a project", "Messages"];

/* ============ FIND PROJECTS DATA ============== */

export interface FindProject {
  id: string;
  title: string;
  client: string;
  posted: string;
  proposals: number;
  tags: string[];
  type: "FIXED" | "HOURLY";
  budget: string;
  duration: string;
}

export const projectCategories = [
  "All",
  "UI/UX Design",
  "Frontend Dev",
  "Branding",
  "Mobile",
  "Data Science",
  "Copywriting",
];

export const budgetFilters = ["Any budget", "Under ₹50k", "₹50k–₹1L", "₹1L+"];
export const durationFilters = [
  "Any duration",
  "Under 2 weeks",
  "2–4 weeks",
  "1 month+",
];

export const findProjects: FindProject[] = [
  {
    id: "fp1",
    title: "SaaS Dashboard UI Redesign",
    client: "Nimbus Labs",
    posted: "Posted 2h ago",
    proposals: 8,
    tags: ["Figma", "UI Design", "Design Systems"],
    type: "FIXED",
    budget: "₹60,000–₹90,000",
    duration: "4 weeks",
  },
  {
    id: "fp2",
    title: "Fintech Mobile App — Onboarding Flow",
    client: "WealthBase",
    posted: "Posted 5h ago",
    proposals: 4,
    tags: ["UX Research", "Figma", "Prototyping"],
    type: "FIXED",
    budget: "₹45,000–₹75,000",
    duration: "3 weeks",
  },
  {
    id: "fp3",
    title: "Brand Identity & Logo System",
    client: "GreenRoot Co.",
    posted: "Posted 1d ago",
    proposals: 12,
    tags: ["Branding", "Illustrator", "Typography"],
    type: "FIXED",
    budget: "₹80,000–₹1,40,000",
    duration: "6 weeks",
  },
  {
    id: "fp4",
    title: "Admin Panel — React Component Library",
    client: "DevCloud",
    posted: "Posted 1d ago",
    proposals: 6,
    tags: ["React", "TypeScript", "Tailwind"],
    type: "HOURLY",
    budget: "₹800/hr",
    duration: "Ongoing",
  },
  {
    id: "fp5",
    title: "E-commerce Product Page Redesign",
    client: "Shoplink India",
    posted: "Posted 2d ago",
    proposals: 15,
    tags: ["Figma", "Conversion Optimisation"],
    type: "FIXED",
    budget: "₹35,000–₹55,000",
    duration: "2 weeks",
  },
  {
    id: "fp6",
    title: "UX Audit — B2B Checkout Flow",
    client: "Paylo Finance",
    posted: "Posted 3d ago",
    proposals: 9,
    tags: ["UX Research", "Heuristic Evaluation"],
    type: "FIXED",
    budget: "₹25,000–₹40,000",
    duration: "2 weeks",
  },
];

/* ========================== END FIND PROJECTS DATA ========================= */

export const footerLinks = [
  {
    title: "PRODUCT",
    links: ["Categories", "Pricing", "Case Studies"],
  },
  {
    title: "SUPPORT",
    links: ["Help Center", "Contact Us", "Trust & Safety"],
  },
  {
    title: "LEGAL",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  },
];
