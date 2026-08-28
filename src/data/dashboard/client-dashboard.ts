// Overview Page Data
export interface NavItem {
  label: string;
  icon: string; // lucide icon name handled by the component
  badge?: number;
  section?: string;
}

export interface ClientStat {
  label: string;
  value: string;
}

export interface ActiveProject {
  id: string;
  title: string;
  freelancer: string;
  amount: string;
  status: "IN PROGRESS" | "IN REVIEW" | "COMPLETED";
}

export interface ClientRecommendation {
  id: string;
  title: string;
  status: string;
  budget: string;
  bids: number;
}

export interface PostedProject {
  id: string;
  title: string;
  budgetRange: string;
  bidsCount: number;
  postedAgo: string;
  status: "ACTIVE" | "CLOSED";
}

export const clientStats: ClientStat[] = [
  { label: "Total spent", value: "₹3,24,000" },
  { label: "Active projects", value: "3" },
  { label: "Avg. freelancer rating", value: "4.7" },
  { label: "Freelancers hired", value: "18" },
];

export const clientSideNav: NavItem[] = [
  { label: "Overview", icon: "LayoutGrid" },
  { label: "Post a Project", icon: "PlusCircle", badge: 37 },
  { label: "Browse Freelancers", icon: "UserSearch" },
  { label: "Active Contracts", icon: "FileText" },
  { label: "Reviews", icon: "Star", badge: 5 },
  { label: "Team Access", icon: "Users", section: "OPERATIONS" },
  { label: "Billing", icon: "CreditCard", section: "OPERATIONS" },
  { label: "Payments", icon: "Receipt", section: "OPERATIONS" },
  { label: "Analytics", icon: "BarChart3", section: "OPERATIONS" },
];

export const activeProjects: ActiveProject[] = [
  {
    id: "ap1",
    title: "Rebuild analytics dashboard",
    freelancer: "Samiya A.",
    amount: "₹42,000",
    status: "IN PROGRESS",
  },
  {
    id: "ap2",
    title: "Mobile app UI for wellness platform",
    freelancer: "Rahul K.",
    amount: "₹68,000",
    status: "IN REVIEW",
  },
  {
    id: "ap3",
    title: "Brand identity & guidelines",
    freelancer: "Aisha M.",
    amount: "₹55,000",
    status: "COMPLETED",
  },
];

export const clientRecommendations: ClientRecommendation[] = [
  {
    id: "cr1",
    title: "Full-stack web app — SaaS dashboard",
    status: "Open",
    budget: "₹2,30,000",
    bids: 12,
  },
  {
    id: "cr2",
    title: "iOS & Android app redesign",
    status: "Open",
    budget: "₹1,50,000",
    bids: 8,
  },
];

export const clientAbout = {
  tagline: "Product company building tools for modern teams.",
  bio: "Nimbus Labs is a fast-growing product company based in Bengaluru, India. We build cloud-native tools for engineering and product teams. We regularly hire top-tier freelancers to scale design, development, and content work. We believe in transparent collaboration, fair compensation, and long-term partnerships.",
  typicalBudget: "₹30k – ₹2L",
  industry: "SaaS / B2B",
  companySize: "51–200 employees",
  location: "Bengaluru, IN",
};

export const postedProjects: PostedProject[] = [
  {
    id: "pp1",
    title: "Rebuild analytics dashboard",
    budgetRange: "₹5L–₹7L",
    bidsCount: 9,
    postedAgo: "1 week ago",
    status: "ACTIVE",
  },
  {
    id: "pp2",
    title: "Mobile app UI — wellness platform",
    budgetRange: "₹5L–₹7L",
    bidsCount: 9,
    postedAgo: "1 week ago",
    status: "ACTIVE",
  },
  {
    id: "pp3",
    title: "Brand identity & logo refresh",
    budgetRange: "₹28,000",
    bidsCount: 14,
    postedAgo: "2 weeks ago",
    status: "CLOSED",
  },
];

// Browse Freelancers Data
export interface FreelancerItem {
  id: string;
  name: string;
  avatar: string;
  badge?: "TOP RATED" | "RISING";
  role: string;
  location: string;
  hourlyRate: string;
  rating: number;
  jobsCount: number;
  skills: string[];
}

export const browseFreelancers: FreelancerItem[] = [
  {
    id: "f1",
    name: "Samiya A.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    badge: "TOP RATED",
    role: "UI/UX Designer",
    location: "Lucknow, IN",
    hourlyRate: "₹90/hr",
    rating: 4.9,
    jobsCount: 128,
    skills: ["Figma", "Prototyping", "Branding"],
  },
  {
    id: "f2",
    name: "Rahul K.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    badge: "RISING",
    role: "Full-stack Developer",
    location: "Pune, IN",
    hourlyRate: "₹120/hr",
    rating: 4.8,
    jobsCount: 94,
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "f3",
    name: "Aisha M.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    badge: "TOP RATED",
    role: "Brand Strategist",
    location: "Delhi, IN",
    hourlyRate: "₹75/hr",
    rating: 4.9,
    jobsCount: 61,
    skills: ["Branding", "Typography", "Copywriting"],
  },
  {
    id: "f4",
    name: "Vikram S.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    badge: "RISING",
    role: "Motion Designer",
    location: "Mumbai, IN",
    hourlyRate: "₹95/hr",
    rating: 4.7,
    jobsCount: 47,
    skills: ["After Effects", "Figma", "Lottie"],
  },
  {
    id: "f5",
    name: "Priya R.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    role: "UX Researcher",
    location: "Bengaluru, IN",
    hourlyRate: "₹80/hr",
    rating: 4.8,
    jobsCount: 38,
    skills: ["User Research", "Personas", "Usability Testing"],
  },
  {
    id: "f6",
    name: "Dev K.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    badge: "RISING",
    role: "iOS Developer",
    location: "Chennai, IN",
    hourlyRate: "₹110/hr",
    rating: 4.6,
    jobsCount: 55,
    skills: ["Swift", "SwiftUI", "Xcode"],
  },
];
