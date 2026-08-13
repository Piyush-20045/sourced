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
  name: "Samiya A.",
  avatar: "/dashboard/samiya.png",
  cover:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  location: "Lucknow, India",
  title: "UI/UX Designer",
  verified: true,
  modes: ["Freelancer", "Client", "Agency"],
  activeMode: "Freelancer",
  profileStrength: 92,
  hourlyRate: "₹90.00/hr",
  tagline: "ui/ux designer , product designer , interaction designer",
  bio: "I'm Samiya Singh, a UI/UX and Interaction Designer based in Lucknow, India, currently completing my BCA at Amity University (graduating May 2026). I'm reaching out for freelancing — I specialise in end-to-end product design from user research, personas, and journey mapping to high-fidelity Figma prototyping and motion design.",
};

export const stats: Stat[] = [
  { label: "Earned this month", value: "₹68,400" },
  { label: "Active bids", value: "5" },
  { label: "Client rating", value: "4.9" },
  { label: "Projects completed", value: "128" },
];

export const sideNav: NavItem[] = [
  { label: "Overview", icon: "LayoutGrid" },
  { label: "Interviews", icon: "CalendarDays", badge: 5 },
  { label: "Contracts", icon: "FileText", section: "OPERATIONS" },
  { label: "Payments", icon: "CreditCard", section: "OPERATIONS" },
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
    school: "Kendriya Vidyalayas",
    degree: "Bachelor of Computer Applications",
    years: "2015-2022",
  },
];

export const workHistory: { id: string; title: string }[] = [];

export const topNav = ["Browse projects", "Post a project", "Messages"];
