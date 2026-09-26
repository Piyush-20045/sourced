export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: string;
  url?: string;
}

export interface Message {
  id: string;
  senderId: string; // "user" for currentUser, or contact id
  text: string;
  timestamp: string;
  attachment?: Attachment;
  status?: "sent" | "delivered" | "read";
}

export interface SharedFile {
  id: string;
  name: string;
  type: "image" | "pdf" | "excel" | "zip";
  size?: string;
}

export interface ContractDetails {
  title: string;
  budget: string;
  timeline: string;
}

export interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  role: string;
  online: boolean;
  statusText: string;
  timeAgo: string;
  unread: boolean;
  category: "all" | "unread" | "archived";
  lastMessage: string;
  contract: ContractDetails;
  sharedFiles: SharedFile[];
  messages: Message[];
}

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    role: "Senior UI/UX Designer",
    online: true,
    statusText: "Senior UI/UX Designer • Active Now",
    timeAgo: "2m ago",
    unread: true,
    category: "all",
    lastMessage: "I've attached the latest wireframes for the dashboard...",
    contract: {
      title: "Nexus Dashboard Redesign",
      budget: "₹20,250.00 Fixed Price",
      timeline: "Oct 12 - Nov 28 (Active)",
    },
    sharedFiles: [
      { id: "sf-1", name: "Hero_Section_V1.png", type: "image", size: "2.4 MB" },
      { id: "sf-2", name: "Brand_Guidelines.pdf", type: "pdf", size: "1.8 MB" },
      { id: "sf-3", name: "User_Research.xlsx", type: "excel", size: "850 KB" },
    ],
    messages: [
      {
        id: "m-1",
        senderId: "conv-1",
        text: "Hi Alex! I've had a chance to review the initial concepts. They look fantastic, especially the typography choices.",
        timestamp: "10:42 AM",
      },
      {
        id: "m-2",
        senderId: "conv-1",
        text: "I've attached the revised brief for the dashboard component. Could you take a look at the data visualization requirements on page 4?",
        timestamp: "10:43 AM",
        attachment: {
          id: "att-1",
          name: "Dashboard_Brief_V2.pdf",
          size: "4.2 MB",
          type: "PDF Document",
        },
      },
      {
        id: "m-3",
        senderId: "user",
        text: "Thanks Sarah! I'm glad you liked the direction. I'll review the brief immediately and get those data visualizations drafted. Do you have a preference for the chart library?",
        timestamp: "10:45 AM",
        status: "read",
      },
      {
        id: "m-4",
        senderId: "user",
        text: "I'll have the update to you by EOD.",
        timestamp: "10:45 AM",
        status: "read",
      },
    ],
  },
  {
    id: "conv-2",
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    role: "API Integration",
    online: true,
    statusText: "Full-Stack Dev • Active 15m ago",
    timeAgo: "1h ago",
    unread: false,
    category: "all",
    lastMessage: "The endpoints are now live on the staging server.",
    contract: {
      title: "Backend GraphQL Migration",
      budget: "₹35,000.00 Fixed Price",
      timeline: "Nov 01 - Dec 15 (Active)",
    },
    sharedFiles: [
      { id: "sf-4", name: "API_Endpoints_Doc.pdf", type: "pdf", size: "3.1 MB" },
      { id: "sf-5", name: "Staging_Logs.txt", type: "pdf", size: "120 KB" },
    ],
    messages: [
      {
        id: "m-21",
        senderId: "conv-2",
        text: "Hey Alex! All GraphQL resolvers for user authentication and payments are deployed.",
        timestamp: "09:15 AM",
      },
      {
        id: "m-22",
        senderId: "conv-2",
        text: "The endpoints are now live on the staging server.",
        timestamp: "09:30 AM",
      },
      {
        id: "m-23",
        senderId: "user",
        text: "Awesome work! I'll test the webhooks right away.",
        timestamp: "09:45 AM",
        status: "read",
      },
    ],
  },
  {
    id: "conv-3",
    name: "Marcus Knight",
    initials: "MK",
    role: "Logo Refresh",
    online: false,
    statusText: "Brand Identity Designer • Offline",
    timeAgo: "Yesterday",
    unread: false,
    category: "all",
    lastMessage: "Thanks for the quick turnaround on those files!",
    contract: {
      title: "Logo & Brand Mark Refresh",
      budget: "₹15,000.00 Fixed Price",
      timeline: "Oct 20 - Nov 10 (Completed)",
    },
    sharedFiles: [
      { id: "sf-6", name: "Logo_Variants_Final.zip", type: "zip", size: "14.5 MB" },
    ],
    messages: [
      {
        id: "m-31",
        senderId: "user",
        text: "Hi Marcus, here are the vector exports in SVG and EPS format.",
        timestamp: "Yesterday 4:10 PM",
        status: "read",
      },
      {
        id: "m-32",
        senderId: "conv-3",
        text: "Thanks for the quick turnaround on those files!",
        timestamp: "Yesterday 4:45 PM",
      },
    ],
  },
  {
    id: "conv-4",
    name: "Elena Rossi",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    role: "Brand Strategy",
    online: true,
    statusText: "Product Strategist • Active Now",
    timeAgo: "2d ago",
    unread: false,
    category: "archived",
    lastMessage: "Let's schedule a call for Monday morning.",
    contract: {
      title: "Q4 Growth Strategy Deck",
      budget: "₹50,000.00 Fixed Price",
      timeline: "Nov 15 - Dec 30 (Active)",
    },
    sharedFiles: [
      { id: "sf-7", name: "Market_Analysis_Q4.pdf", type: "pdf", size: "5.6 MB" },
    ],
    messages: [
      {
        id: "m-41",
        senderId: "conv-4",
        text: "I've finalized the competitor matrix slides for the pitch.",
        timestamp: "2d ago",
      },
      {
        id: "m-42",
        senderId: "conv-4",
        text: "Let's schedule a call for Monday morning.",
        timestamp: "2d ago",
      },
    ],
  },
];
