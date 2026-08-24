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

export const clientStats: ClientStat[] = [
  { label: "Total spent", value: "₹3,24,000" },
  { label: "Active projects", value: "3" },
  { label: "Avg. freelancer rating", value: "4.7" },
  { label: "Freelancers hired", value: "18" },
];
