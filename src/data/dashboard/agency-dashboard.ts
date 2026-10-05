export type AgencyNavItem = {
  label: string;
  icon: string;
  badge?: number;
  section?: "PEOPLE" | "OPERATIONS";
};

export type AgencyIdentity = {
  name: string;
  initials: string;
  cover: string;
  location: string;
  title: string;
  verified: boolean;
  profileStrength: number;
};

export type AgencyProjectHealth =
  | "ON TRACK"
  | "AT RISK"
  | "IN REVIEW"
  | "COMPLETED";

export type AgencyMember = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  discipline: string;
  employment: "EMPLOYEE" | "CONTRACTOR";
  assignments: number;
  utilization: number;
  availability: string;
  billableRate: string;
};

export type AgencyProject = {
  id: string;
  title: string;
  client: string;
  lead: string;
  team: Pick<AgencyMember, "id" | "name" | "avatar">[];
  contractValue: string;
  progress: number;
  completedMilestones: number;
  totalMilestones: number;
  dueDate: string;
  health: AgencyProjectHealth;
};

export type AgencyBrief = {
  id: string;
  title: string;
  client: string;
  clientVerified: boolean;
  posted: string;
  budget: string;
  duration: string;
  teamSize: string;
  service: string;
  skills: string[];
  proposals: number;
};

export type ProposalStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "SHORTLISTED"
  | "WON"
  | "LOST";

export type AgencyProposal = {
  id: string;
  project: string;
  client: string;
  value: string;
  lead: string;
  submitted: string;
  nextAction: string;
  status: ProposalStatus;
};

export type HiringStage = "APPLIED" | "SCREENING" | "INTERVIEW" | "OFFER";

export type Candidate = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  skills: string[];
  rating: number;
  source: string;
  nextStep: string;
  stage: HiringStage;
};

export type OpenRole = {
  id: string;
  title: string;
  type: string;
  location: string;
  applicants: number;
  shortlisted: number;
  posted: string;
  status: "ACTIVE" | "PAUSED";
};

export type InvoiceStatus = "PAID" | "DUE SOON" | "OVERDUE" | "DRAFT";

export type AgencyInvoice = {
  id: string;
  client: string;
  project: string;
  dueDate: string;
  amount: string;
  status: InvoiceStatus;
};

export const agencyIdentity: AgencyIdentity = {
  name: "Pixelworks Agency",
  initials: "PA",
  cover: "/dashboard/header.jpg",
  location: "Delhi, India · Working worldwide",
  title: "Product design & engineering studio",
  verified: true,
  profileStrength: 88,
};

export const agencySideNav: AgencyNavItem[] = [
  { label: "Overview", icon: "LayoutGrid" },
  { label: "Find Work", icon: "SearchCheck", badge: 24 },
  { label: "Proposals", icon: "MailCheck", badge: 5 },
  { label: "Projects", icon: "FolderKanban" },
  { label: "Team & Capacity", icon: "Users", section: "PEOPLE" },
  { label: "Hiring", icon: "UserPlus", badge: 8, section: "PEOPLE" },
  { label: "Finance", icon: "CreditCard", section: "OPERATIONS" },
  { label: "Analytics", icon: "BarChart3", section: "OPERATIONS" },
];

export const agencyStats = [
  { label: "Active projects", value: "6", change: "+2 this month" },
  { label: "Proposal pipeline", value: "₹18.4L", change: "5 open proposals" },
  { label: "Team utilization", value: "78%", change: "+6% vs last month" },
  { label: "Outstanding revenue", value: "₹4.8L", change: "4 invoices" },
];

export const agencyMembers: AgencyMember[] = [
  {
    id: "tm1",
    name: "Samiya Ahmed",
    avatar: "/dashboard/freelancer/samiya.jpg",
    role: "Design Director",
    discipline: "Product Design",
    employment: "EMPLOYEE",
    assignments: 2,
    utilization: 92,
    availability: "8 hrs available",
    billableRate: "₹2,800/hr",
  },
  {
    id: "tm2",
    name: "Salman Khan",
    avatar: "/dashboard/salman.jpeg",
    role: "Senior Product Designer",
    discipline: "Product Design",
    employment: "CONTRACTOR",
    assignments: 2,
    utilization: 84,
    availability: "12 hrs available",
    billableRate: "₹2,200/hr",
  },
  {
    id: "tm3",
    name: "Mira Joseph",
    avatar: "/home/top-rated/person4.png",
    role: "Engineering Lead",
    discipline: "Engineering",
    employment: "EMPLOYEE",
    assignments: 2,
    utilization: 88,
    availability: "6 hrs available",
    billableRate: "₹3,100/hr",
  },
  {
    id: "tm4",
    name: "Rohan Das",
    avatar: "/home/top-rated/person3.png",
    role: "Frontend Engineer",
    discipline: "Engineering",
    employment: "CONTRACTOR",
    assignments: 1,
    utilization: 64,
    availability: "18 hrs available",
    billableRate: "₹2,400/hr",
  },
  {
    id: "tm5",
    name: "Aisha Mehta",
    avatar: "/home/top-rated/person1.png",
    role: "Brand Strategist",
    discipline: "Brand Strategy",
    employment: "EMPLOYEE",
    assignments: 1,
    utilization: 72,
    availability: "14 hrs available",
    billableRate: "₹2,600/hr",
  },
  {
    id: "tm6",
    name: "Neha Rao",
    avatar: "/home/top-rated/person2.png",
    role: "UX Researcher",
    discipline: "Research",
    employment: "CONTRACTOR",
    assignments: 1,
    utilization: 46,
    availability: "24 hrs available",
    billableRate: "₹1,900/hr",
  },
];

export const agencyProjects: AgencyProject[] = [
  {
    id: "agp1",
    title: "WealthBase product transformation",
    client: "WealthBase",
    lead: "Samiya Ahmed",
    team: agencyMembers.slice(0, 3).map(({ id, name, avatar }) => ({ id, name, avatar })),
    contractValue: "₹6,80,000",
    progress: 72,
    completedMilestones: 5,
    totalMilestones: 7,
    dueDate: "28 Sep 2026",
    health: "ON TRACK",
  },
  {
    id: "agp2",
    title: "Northstar operations platform",
    client: "Northstar Logistics",
    lead: "Mira Joseph",
    team: agencyMembers.slice(2, 5).map(({ id, name, avatar }) => ({ id, name, avatar })),
    contractValue: "₹9,40,000",
    progress: 48,
    completedMilestones: 3,
    totalMilestones: 8,
    dueDate: "14 Oct 2026",
    health: "AT RISK",
  },
  {
    id: "agp3",
    title: "GreenRoot brand system",
    client: "GreenRoot Co.",
    lead: "Aisha Mehta",
    team: [agencyMembers[0], agencyMembers[4]].map(({ id, name, avatar }) => ({ id, name, avatar })),
    contractValue: "₹3,20,000",
    progress: 86,
    completedMilestones: 6,
    totalMilestones: 7,
    dueDate: "20 Sep 2026",
    health: "IN REVIEW",
  },
  {
    id: "agp4",
    title: "Paylo design system audit",
    client: "Paylo Finance",
    lead: "Salman Khan",
    team: [agencyMembers[1], agencyMembers[5]].map(({ id, name, avatar }) => ({ id, name, avatar })),
    contractValue: "₹2,40,000",
    progress: 100,
    completedMilestones: 4,
    totalMilestones: 4,
    dueDate: "02 Sep 2026",
    health: "COMPLETED",
  },
];

export const agencyBriefs: AgencyBrief[] = [
  {
    id: "agb1",
    title: "Design and build a multi-tenant healthcare portal",
    client: "CareGrid Health",
    clientVerified: true,
    posted: "2 hours ago",
    budget: "₹8L – ₹12L",
    duration: "12–16 weeks",
    teamSize: "4–6 specialists",
    service: "Product Design",
    skills: ["Product Strategy", "UX/UI", "Next.js", "Healthcare"],
    proposals: 6,
  },
  {
    id: "agb2",
    title: "Fintech brand refresh and launch campaign",
    client: "LedgerOne",
    clientVerified: true,
    posted: "5 hours ago",
    budget: "₹4L – ₹6L",
    duration: "8 weeks",
    teamSize: "3–4 specialists",
    service: "Brand Systems",
    skills: ["Brand Strategy", "Identity", "Motion", "Campaign"],
    proposals: 9,
  },
  {
    id: "agb3",
    title: "Enterprise analytics product redesign",
    client: "MetricFlow",
    clientVerified: true,
    posted: "1 day ago",
    budget: "₹6L – ₹9L",
    duration: "10 weeks",
    teamSize: "3–5 specialists",
    service: "Product Design",
    skills: ["Data Visualization", "Design Systems", "Research"],
    proposals: 11,
  },
  {
    id: "agb4",
    title: "Frontend delivery team for B2B SaaS platform",
    client: "CloudForge",
    clientVerified: false,
    posted: "2 days ago",
    budget: "₹10L – ₹14L",
    duration: "5 months",
    teamSize: "4 engineers",
    service: "Engineering",
    skills: ["React", "Next.js", "TypeScript", "Accessibility"],
    proposals: 14,
  },
];

export const agencyProposals: AgencyProposal[] = [
  { id: "pr1", project: "Healthcare member portal", client: "CareGrid Health", value: "₹10,80,000", lead: "Samiya Ahmed", submitted: "Today", nextAction: "Finalize delivery plan", status: "DRAFT" },
  { id: "pr2", project: "Enterprise analytics redesign", client: "MetricFlow", value: "₹7,40,000", lead: "Salman Khan", submitted: "2 Oct 2026", nextAction: "Client follow-up on 7 Oct", status: "SUBMITTED" },
  { id: "pr3", project: "Fintech brand refresh", client: "LedgerOne", value: "₹5,20,000", lead: "Aisha Mehta", submitted: "29 Sep 2026", nextAction: "Pitch call on 6 Oct", status: "SHORTLISTED" },
  { id: "pr4", project: "Customer support workspace", client: "RelayDesk", value: "₹8,10,000", lead: "Mira Joseph", submitted: "24 Sep 2026", nextAction: "Contract review", status: "WON" },
  { id: "pr5", project: "Climate reporting dashboard", client: "TerraMetric", value: "₹4,60,000", lead: "Salman Khan", submitted: "18 Sep 2026", nextAction: "No action required", status: "LOST" },
  { id: "pr6", project: "B2B SaaS frontend team", client: "CloudForge", value: "₹12,40,000", lead: "Mira Joseph", submitted: "Yesterday", nextAction: "Add engineering references", status: "DRAFT" },
];

export const capacityByDiscipline = [
  { discipline: "Product Design", members: 4, utilization: 86, availableHours: 20 },
  { discipline: "Engineering", members: 6, utilization: 76, availableHours: 42 },
  { discipline: "Brand Strategy", members: 3, utilization: 68, availableHours: 30 },
  { discipline: "Research", members: 2, utilization: 52, availableHours: 36 },
];

export const openRoles: OpenRole[] = [
  { id: "role1", title: "Senior product designer", type: "Contract · 3 months", location: "Remote, India", applicants: 28, shortlisted: 6, posted: "6 days ago", status: "ACTIVE" },
  { id: "role2", title: "Frontend engineer", type: "Full-time", location: "Remote", applicants: 41, shortlisted: 8, posted: "9 days ago", status: "ACTIVE" },
  { id: "role3", title: "UX researcher", type: "Project-based", location: "Delhi / Remote", applicants: 17, shortlisted: 4, posted: "12 days ago", status: "PAUSED" },
];

export const candidates: Candidate[] = [
  { id: "ca1", name: "Priya Nair", avatar: "/home/top-rated/person1.png", role: "Senior Product Designer", skills: ["Figma", "SaaS"], rating: 4.9, source: "Sourced", nextStep: "Review portfolio", stage: "APPLIED" },
  { id: "ca2", name: "Kabir Shah", avatar: "/home/top-rated/person3.png", role: "Frontend Engineer", skills: ["React", "TypeScript"], rating: 4.7, source: "Referral", nextStep: "Review application", stage: "APPLIED" },
  { id: "ca3", name: "Tara Menon", avatar: "/home/top-rated/person2.png", role: "UX Researcher", skills: ["Interviews", "B2B"], rating: 4.8, source: "Sourced", nextStep: "Send exercise", stage: "SCREENING" },
  { id: "ca4", name: "Dev Malhotra", avatar: "/dashboard/salman.jpeg", role: "Frontend Engineer", skills: ["Next.js", "A11y"], rating: 4.9, source: "Sourced", nextStep: "Technical interview", stage: "INTERVIEW" },
  { id: "ca5", name: "Ira Kapoor", avatar: "/dashboard/freelancer/samiya.jpg", role: "Senior Product Designer", skills: ["Systems", "Fintech"], rating: 5, source: "Referral", nextStep: "Final conversation", stage: "INTERVIEW" },
  { id: "ca6", name: "Neil Dsouza", avatar: "/home/top-rated/person4.png", role: "Frontend Engineer", skills: ["React", "Testing"], rating: 4.8, source: "Sourced", nextStep: "Offer approval", stage: "OFFER" },
];

export const financeSummary = [
  { label: "Revenue this month", value: "₹8.6L", change: "+18%" },
  { label: "Available balance", value: "₹5.2L", change: "Ready to withdraw" },
  { label: "Outstanding invoices", value: "₹4.8L", change: "4 invoices" },
  { label: "Upcoming payouts", value: "₹3.1L", change: "Due this week" },
];

export const agencyInvoices: AgencyInvoice[] = [
  { id: "INV-1048", client: "WealthBase", project: "Product transformation · Milestone 5", dueDate: "08 Oct 2026", amount: "₹1,80,000", status: "DUE SOON" },
  { id: "INV-1047", client: "Northstar Logistics", project: "Operations platform · Milestone 3", dueDate: "02 Oct 2026", amount: "₹2,10,000", status: "OVERDUE" },
  { id: "INV-1046", client: "GreenRoot Co.", project: "Brand system · Final delivery", dueDate: "12 Oct 2026", amount: "₹90,000", status: "DUE SOON" },
  { id: "INV-1045", client: "Paylo Finance", project: "Design system audit", dueDate: "25 Sep 2026", amount: "₹1,20,000", status: "PAID" },
  { id: "INV-1049", client: "RelayDesk", project: "Workspace · Deposit", dueDate: "Not sent", amount: "₹1,60,000", status: "DRAFT" },
];

export const agencyTransactions = [
  { id: "tx1", label: "Payment from Paylo Finance", date: "30 Sep 2026", amount: "+₹1,20,000", type: "CREDIT" },
  { id: "tx2", label: "Team payout · September", date: "29 Sep 2026", amount: "−₹2,48,000", type: "DEBIT" },
  { id: "tx3", label: "Payment from WealthBase", date: "24 Sep 2026", amount: "+₹1,70,000", type: "CREDIT" },
  { id: "tx4", label: "Sourced service fee", date: "24 Sep 2026", amount: "−₹17,000", type: "DEBIT" },
];

export const upcomingPayouts = [
  { id: "po1", member: "Salman Khan", avatar: "/dashboard/salman.jpeg", amount: "₹88,000", due: "07 Oct" },
  { id: "po2", member: "Rohan Das", avatar: "/home/top-rated/person3.png", amount: "₹72,000", due: "07 Oct" },
  { id: "po3", member: "Neha Rao", avatar: "/home/top-rated/person2.png", amount: "₹54,000", due: "10 Oct" },
];

export const upcomingMilestones = [
  { id: "ms1", title: "Usability findings review", project: "WealthBase product transformation", date: "07 Oct", owner: "Neha Rao" },
  { id: "ms2", title: "Frontend architecture sign-off", project: "Northstar operations platform", date: "09 Oct", owner: "Mira Joseph" },
  { id: "ms3", title: "Final brand guidelines", project: "GreenRoot brand system", date: "12 Oct", owner: "Aisha Mehta" },
];

export const agencyAnalyticsSummary = [
  { label: "Revenue YTD", value: "₹54.8L", change: "+24%" },
  { label: "Proposal win rate", value: "38%", change: "+7%" },
  { label: "Avg. utilization", value: "78%", change: "+6%" },
  { label: "On-time delivery", value: "94%", change: "+3%" },
];

export const revenueTrend = [
  { month: "May", revenue: 540000 },
  { month: "Jun", revenue: 680000 },
  { month: "Jul", revenue: 610000 },
  { month: "Aug", revenue: 790000 },
  { month: "Sep", revenue: 860000 },
  { month: "Oct", revenue: 940000 },
];

export const serviceRevenue = [
  { service: "Product Design", percentage: 38, value: "₹20.8L" },
  { service: "Engineering", percentage: 31, value: "₹17.0L" },
  { service: "Brand Systems", percentage: 19, value: "₹10.4L" },
  { service: "Research & Strategy", percentage: 12, value: "₹6.6L" },
];

export const projectProfitability = [
  { project: "WealthBase transformation", client: "WealthBase", margin: 34, revenue: "₹6.8L", delivery: "72%" },
  { project: "Northstar platform", client: "Northstar Logistics", margin: 21, revenue: "₹9.4L", delivery: "48%" },
  { project: "GreenRoot brand system", client: "GreenRoot Co.", margin: 42, revenue: "₹3.2L", delivery: "86%" },
  { project: "Paylo design audit", client: "Paylo Finance", margin: 37, revenue: "₹2.4L", delivery: "100%" },
];
