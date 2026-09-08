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

/* ================== MY PROPOSALS DATA ================== */

export type ProposalStatus = "PENDING" | "SHORTLISTED" | "WON" | "DECLINED";

export interface Proposal {
  id: string;
  projectId: string;
  title: string;
  client: string;
  submitted: string;
  bid: string;
  coverLetterExcerpt: string;
  status: ProposalStatus;
}

export interface ProposalSummary {
  label: string;
  value: string;
}

export const proposalFilters = [
  "All",
  "Pending",
  "Shortlisted",
  "Won",
  "Declined",
] as const;

export const proposalSummary: ProposalSummary[] = [
  { label: "Total Submitted", value: "7" },
  { label: "Shortlisted", value: "2" },
  { label: "Won", value: "1" },
  { label: "Win Rate", value: "14%" },
];

export const proposals: Proposal[] = [
  {
    id: "pr1",
    projectId: "j1",
    title: "SaaS Dashboard UI Redesign",
    client: "Nimbus Labs",
    submitted: "Submitted Dec 10",
    bid: "₹72,000",
    coverLetterExcerpt:
      "Hi team! I have 5+ years of SaaS dashboard experience and would love to bring clarity to your product.",
    status: "SHORTLISTED",
  },
  {
    id: "pr2",
    projectId: "j1",
    title: "Fintech Mobile App Onboarding",
    client: "WealthBase",
    submitted: "Submitted Dec 9",
    bid: "₹58,000",
    coverLetterExcerpt:
      "Onboarding is my favourite design challenge. I've helped 3 fintech products reduce drop-off by 40%.",
    status: "PENDING",
  },
  {
    id: "pr3",
    projectId: "j3",
    title: "Brand Identity System",
    client: "GreenRoot Co.",
    submitted: "Submitted Dec 8",
    bid: "₹1,10,000",
    coverLetterExcerpt:
      "Your brand values deeply resonate with my design philosophy. I've attached 3 relevant case studies.",
    status: "WON",
  },
  {
    id: "pr4",
    projectId: "j2",
    title: "Admin Panel Component Library",
    client: "DevCloud",
    submitted: "Submitted Dec 7",
    bid: "₹850/hr",
    coverLetterExcerpt:
      "I can start immediately. I've built 2 full component systems in Figma + Storybook for SaaS teams.",
    status: "PENDING",
  },
  {
    id: "pr5",
    projectId: "j1",
    title: "E-commerce Product Page Redesign",
    client: "Shoplink India",
    submitted: "Submitted Dec 5",
    bid: "₹42,000",
    coverLetterExcerpt:
      "Conversion-focused design is my bread and butter. Happy to share an approach document.",
    status: "DECLINED",
  },
  {
    id: "pr6",
    projectId: "j1",
    title: "B2B Checkout UX Audit",
    client: "Paylo Finance",
    submitted: "Submitted Dec 3",
    bid: "₹32,000",
    coverLetterExcerpt:
      "I specialize in fintech UX audits. I recently conducted a full audit and increased conversion by 28%.",
    status: "SHORTLISTED",
  },
  {
    id: "pr7",
    projectId: "j1",
    title: "Loyalty App UI Kit",
    client: "RewardBox",
    submitted: "Submitted Dec 1",
    bid: "₹65,000",
    coverLetterExcerpt:
      "Excited about this brief! I've designed UI kits for 6 reward platforms.",
    status: "PENDING",
  },
];

/* ================= SEARCH CLIENTS DATA ================= */

export interface Client {
  id: string;
  name: string;
  initials: string;
  verified: boolean;
  rating: number;
  location: string;
  industry: string;
  description: string;
  avgBudget: string;
  totalHires: number;
  openProjects: number;
}

export const clientIndustries = [
  "All",
  "SaaS",
  "Fintech",
  "E-commerce",
  "Agency",
  "Healthcare",
  "Startup",
] as const;

export const clients: Client[] = [
  {
    id: "c1",
    name: "Nimbus Labs",
    initials: "NL",
    verified: true,
    rating: 4.8,
    location: "Bangalore, India",
    industry: "SaaS",
    description:
      "Product-led SaaS company building workflow tools for enterprise teams.",
    avgBudget: "₹70,000",
    totalHires: 24,
    openProjects: 6,
  },
  {
    id: "c2",
    name: "WealthBase",
    initials: "W",
    verified: true,
    rating: 4.9,
    location: "Mumbai, India",
    industry: "Fintech",
    description:
      "India's fastest-growing personal finance app. We build for 10M+ users.",
    avgBudget: "₹85,000",
    totalHires: 18,
    openProjects: 4,
  },
  {
    id: "c3",
    name: "Shoplink India",
    initials: "SI",
    verified: true,
    rating: 4.7,
    location: "Pune, India",
    industry: "E-commerce",
    description:
      "Omnichannel commerce platform powering 5,000+ Indian sellers.",
    avgBudget: "₹50,000",
    totalHires: 35,
    openProjects: 8,
  },
  {
    id: "c4",
    name: "Pixelworks Agency",
    initials: "PA",
    verified: true,
    rating: 4.9,
    location: "Delhi, India",
    industry: "Agency",
    description:
      "Full-service design and product agency. We hire specialists for client projects.",
    avgBudget: "₹1,20,000",
    totalHires: 47,
    openProjects: 12,
  },
  {
    id: "c5",
    name: "GreenRoot Co.",
    initials: "GC",
    verified: false,
    rating: 4.6,
    location: "Hyderabad, India",
    industry: "Startup",
    description:
      "Climate tech startup building sustainability tracking software for SMEs.",
    avgBudget: "₹95,000",
    totalHires: 6,
    openProjects: 2,
  },
  {
    id: "c6",
    name: "Paylo Finance",
    initials: "PF",
    verified: true,
    rating: 4.8,
    location: "Chennai, India",
    industry: "Fintech",
    description: "B2B payments infrastructure for Indian supply chains.",
    avgBudget: "₹45,000",
    totalHires: 20,
    openProjects: 5,
  },
];

/* ============================= INTERVIEWS DATA ============================= */
/* Separate mock data for the "Interviews" section. Swap for an API later. */

export interface Interview {
  id: string;
  projectTitle: string;
  client: string;
  dayLabel: string; // e.g. "MON"
  monthLabel: string; // e.g. "Dec"
  dateLabel: string; // e.g. "15 Dec"
  time: string;
  duration: string;
  mode: "Video Call" | "Phone";
}

export const interviews: Interview[] = [
  {
    id: "i1",
    projectTitle: "SaaS Dashboard Redesign",
    client: "Nimbus Labs",
    dayLabel: "MON",
    monthLabel: "Dec",
    dateLabel: "15 Dec",
    time: "3:00 PM",
    duration: "30 min",
    mode: "Video Call",
  },
  {
    id: "i2",
    projectTitle: "Brand Identity System",
    client: "GreenRoot Co.",
    dayLabel: "WED",
    monthLabel: "Dec",
    dateLabel: "17 Dec",
    time: "11:00 AM",
    duration: "45 min",
    mode: "Video Call",
  },
  {
    id: "i3",
    projectTitle: "Admin Panel Library",
    client: "DevCloud",
    dayLabel: "FRI",
    monthLabel: "Dec",
    dateLabel: "19 Dec",
    time: "5:00 PM",
    duration: "20 min",
    mode: "Phone",
  },
];

export const interviewPrepTips: string[] = [
  "Review the client's product and recent work before the call.",
  "Prepare 2–3 relevant case studies you can reference.",
  "Have your portfolio tab open and ready to share your screen.",
  "Ask about timeline, revision rounds, and communication style.",
];
