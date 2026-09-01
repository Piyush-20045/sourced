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

// Active Contracts Data
export interface ContractItem {
  id: string;
  title: string;
  freelancer: string;
  avatar: string;
  startDate: string;
  endDate: string;
  status: "IN PROGRESS" | "IN REVIEW" | "COMPLETED" | "PENDING";
  contractValue: string;
  paidSoFar: string;
  progress: number;
}

export const contractsSummary = {
  totalContractsCount: 4,
  totalValue: "₹1,83,000",
  amountPaid: "₹1,10,000",
  remaining: "₹73,000",
};

export const activeContracts: ContractItem[] = [
  {
    id: "c1",
    title: "Rebuild analytics dashboard",
    freelancer: "Samiya A.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    startDate: "Aug 1, 2024",
    endDate: "Aug 28, 2024",
    status: "IN PROGRESS",
    contractValue: "₹42,000",
    paidSoFar: "₹21,000",
    progress: 60,
  },
  {
    id: "c2",
    title: "Mobile app UI for wellness platform",
    freelancer: "Rahul K.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    startDate: "Jul 20, 2024",
    endDate: "Sep 5, 2024",
    status: "IN REVIEW",
    contractValue: "₹68,000",
    paidSoFar: "₹34,000",
    progress: 45,
  },
  {
    id: "c3",
    title: "Brand identity & guidelines",
    freelancer: "Aisha M.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    startDate: "Jun 10, 2024",
    endDate: "Jul 30, 2024",
    status: "COMPLETED",
    contractValue: "₹55,000",
    paidSoFar: "₹55,000",
    progress: 100,
  },
  {
    id: "c4",
    title: "Landing page copywriting",
    freelancer: "Dev K.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    startDate: "Aug 10, 2024",
    endDate: "Aug 20, 2024",
    status: "PENDING",
    contractValue: "₹18,000",
    paidSoFar: "₹0",
    progress: 10,
  },
];

// Reviews Data
export interface ReviewGiven {
  id: string;
  freelancer: string;
  avatar: string;
  project: string;
  date: string;
  rating: number;
  comment: string;
}

export interface ReviewReceived {
  id: string;
  freelancer: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const reviewsSummary = {
  avgRatingGiven: 4.9,
  reviewsWritten: 3,
  pendingReviewsCount: 1,
};

export const pendingReviewNotice = {
  id: "pr1",
  freelancer: "Rahul K.",
  project: "Mobile app UI for wellness platform",
  milestone: "After milestone 2 delivery",
};

export const reviewsGiven: ReviewGiven[] = [
  {
    id: "rg1",
    freelancer: "Samiya A.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    project: "Brand identity & guidelines",
    date: "Jul 30, 2024",
    rating: 5,
    comment:
      "Samiya exceeded expectations. Her attention to detail and design sensibility are exceptional. Delivered ahead of schedule with clean handoffs.",
  },
  {
    id: "rg2",
    freelancer: "Aisha M.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    project: "Content strategy — Q2 2024",
    date: "May 15, 2024",
    rating: 5,
    comment:
      "Brilliant strategic thinker. Aisha understood our brand voice instantly and produced content that felt entirely on-brand.",
  },
  {
    id: "rg3",
    freelancer: "Rahul K.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    project: "Backend API — user auth",
    date: "Mar 22, 2024",
    rating: 4,
    comment:
      "Solid work, well-structured code. Communication could be slightly faster during the review cycle.",
  },
];

export const reviewsReceived: ReviewReceived[] = [
  {
    id: "rr1",
    freelancer: "Samiya A.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    rating: 5,
    comment:
      "Nimbus Labs was a joy to work with — clear brief, timely feedback, and respectful of my process. Would love to collaborate again.",
  },
  {
    id: "rr2",
    freelancer: "Aisha M.",
    avatar: "/dashboard/freelancer/samiya.jpg",
    rating: 5,
    comment:
      "Professional, communicative, and paid promptly. The scope was well-defined from day one.",
  },
];

// Team Access Data
export interface TeamMember {
  id: string;
  name: string;
  roleTitle: string;
  initials: string;
  email: string;
  joinedDate: string;
  accessRole: "ADMIN" | "MEMBER" | "VIEWER";
  projectsCount: number;
}

export const teamMembersSummary = {
  activeMembersCount: 4,
};

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Rohan Gupta",
    roleTitle: "Project Manager",
    initials: "RG",
    email: "rohan@pixelworks.in",
    joinedDate: "Joined Jan 2023",
    accessRole: "ADMIN",
    projectsCount: 8,
  },
  {
    id: "tm2",
    name: "Meera Nair",
    roleTitle: "Creative Director",
    initials: "MN",
    email: "meera@pixelworks.in",
    joinedDate: "Joined Mar 2023",
    accessRole: "ADMIN",
    projectsCount: 12,
  },
  {
    id: "tm3",
    name: "Siddharth Rao",
    roleTitle: "Developer",
    initials: "SR",
    email: "sid@pixelworks.in",
    joinedDate: "Joined Jul 2023",
    accessRole: "MEMBER",
    projectsCount: 5,
  },
  {
    id: "tm4",
    name: "Tanvi Kapoor",
    roleTitle: "Account Manager",
    initials: "TK",
    email: "tanvi@pixelworks.in",
    joinedDate: "Joined Sep 2023",
    accessRole: "MEMBER",
    projectsCount: 7,
  },
  {
    id: "tm5",
    name: "Ayush Patel",
    roleTitle: "Designer",
    initials: "AP",
    email: "ayush@pixelworks.in",
    joinedDate: "Joined Nov 2023",
    accessRole: "VIEWER",
    projectsCount: 3,
  },
];
