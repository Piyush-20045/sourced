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
