export interface UserProfile {
  name: string;
  avatar: string;
  email: string;
  location: string;
  title: string;
  activeMode: "Freelancer" | "Client" | "Agency";
  modes: ("Freelancer" | "Client" | "Agency")[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  link: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile;
  notifications: NotificationItem[];
}

export const initialAuthState: AuthState = {
  isLoggedIn: true,
  user: {
    name: "Salman Khan",
    avatar: "/dashboard/salman.jpeg",
    email: "salman@sourced.com",
    location: "Mumbai, India",
    title: "UI/UX Designer",
    activeMode: "Freelancer",
    modes: ["Freelancer", "Client", "Agency"],
  },
  notifications: [
    {
      id: "n1",
      title: "New Message",
      message: "Sarah Jenkins sent you a message regarding Nexus Dashboard.",
      time: "2m ago",
      read: false,
      link: "/message",
    },
    {
      id: "n2",
      title: "Proposal Accepted",
      message: "Nimbus Labs accepted your bid for SaaS Dashboard UI Redesign.",
      time: "1h ago",
      read: false,
      link: "/dashboard/freelancer",
    },
    {
      id: "n3",
      title: "Contract Funded",
      message: "Milestone 1 funded for WealthBase App Redesign.",
      time: "1d ago",
      read: true,
      link: "/dashboard/client",
    },
  ],
};
