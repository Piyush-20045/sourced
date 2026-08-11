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

export const topNav = ["Browse projects", "Post a project", "Messages"];
