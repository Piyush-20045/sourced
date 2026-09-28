"use client";

export type BudgetType = "fixed" | "hourly";
export type ExperienceLevel = "entry" | "intermediate" | "expert";

export interface PostProjectFormData {
  title: string;
  category: string;
  description: string;
  skills: string[];
  budgetType: BudgetType;
  amount: string;
  duration: string;
  experience: ExperienceLevel;
  attachments: File[];
  requireNda: boolean;
}

export const INITIAL_FORM_DATA: PostProjectFormData = {
  title: "",
  category: "UI/UX Design",
  description: "",
  skills: [],
  budgetType: "fixed",
  amount: "",
  duration: "",
  experience: "intermediate",
  attachments: [],
  requireNda: false,
};

export const STEPS = [
  { number: 1, label: "Project Details" },
  { number: 2, label: "Budget & Scope" },
  { number: 3, label: "Review & Post" },
] as const;

export const CATEGORIES = [
  "UI/UX Design",
  "Web Development",
  "Mobile App",
  "Branding & Identity",
  "Content & Copy",
  "Motion & Video",
  "Data & Analytics",
  "DevOps & Cloud",
];

export const DURATIONS = [
  "Less than 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6+ months",
];

export const EXPERIENCE_LEVELS: {
  value: ExperienceLevel;
  eyebrow: string;
  title: string;
  body: string;
}[] = [
  {
    value: "entry",
    eyebrow: "Entry",
    title: "Budget-focused",
    body: "Great for simple tasks and individuals starting out.",
  },
  {
    value: "intermediate",
    eyebrow: "Intermediate",
    title: "Balanced",
    body: "Professional results at competitive market rates.",
  },
  {
    value: "expert",
    eyebrow: "Expert",
    title: "Elite Quality",
    body: "For mission-critical work needing top specialists.",
  },
];

export function formatAmountINR(amount: string, budgetType: BudgetType) {
  const num = Number(amount);
  if (!amount || Number.isNaN(num)) return "Not set";
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);
  return budgetType === "hourly" ? `${formatted}/hr` : formatted;
}
