export type PublicProfileKind = "freelancer" | "client" | "agency";

export interface PublicProfileStat {
  label: string;
  value: string;
}

export interface PublicReview {
  id: string;
  author: string;
  authorRole: string;
  avatar?: string;
  project: string;
  date: string;
  rating: number;
  quote: string;
}

interface PublicProfileBase {
  slug: string;
  kind: PublicProfileKind;
  published: boolean;
  name: string;
  initials: string;
  avatar?: string;
  coverImage: string;
  headline: string;
  location: string;
  verified: boolean;
  joined: string;
  rating: number;
  reviewCount: number;
  about: string;
  stats: PublicProfileStat[];
  reviews: PublicReview[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface WorkHistoryItem {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  rating: number;
}

export interface FreelancerPublicProfile extends PublicProfileBase {
  kind: "freelancer";
  hourlyRate: string;
  availability: string;
  responseTime: string;
  skills: string[];
  portfolio: PortfolioItem[];
  workHistory: WorkHistoryItem[];
  languages: { name: string; level: string }[];
  education: { school: string; qualification: string; period: string }[];
  certifications: { name: string; issuer: string; year: string }[];
}

export interface PublicProject {
  id: string;
  title: string;
  budget: string;
  engagement: string;
  skills: string[];
  status: "Open" | "Completed";
}

export interface HiringHistoryItem {
  id: string;
  project: string;
  talent: string;
  completed: string;
  amount: string;
  rating: number;
}

export interface ClientPublicProfile extends PublicProfileBase {
  kind: "client";
  industry: string;
  companySize: string;
  founded: string;
  website: string;
  typicalBudget: string;
  paymentVerified: boolean;
  preferredSkills: string[];
  openProjects: PublicProject[];
  hiringHistory: HiringHistoryItem[];
}

export interface AgencyCaseStudy {
  id: string;
  title: string;
  client: string;
  image: string;
  result: string;
  services: string[];
}

export interface AgencyTeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface AgencyOpportunity {
  id: string;
  title: string;
  type: string;
  location: string;
  skills: string[];
}

export interface AgencyPublicProfile extends PublicProfileBase {
  kind: "agency";
  founded: string;
  teamSize: string;
  website: string;
  minimumProject: string;
  responseTime: string;
  services: { name: string; description: string }[];
  industries: string[];
  caseStudies: AgencyCaseStudy[];
  team: AgencyTeamMember[];
  opportunities: AgencyOpportunity[];
}

export type PublicProfile =
  | FreelancerPublicProfile
  | ClientPublicProfile
  | AgencyPublicProfile;

export const publicProfiles: PublicProfile[] = [
  {
    slug: "salman-khan",
    kind: "freelancer",
    published: true,
    name: "Salman Khan",
    initials: "SK",
    avatar: "/dashboard/salman.jpeg",
    coverImage: "/dashboard/header.jpg",
    headline: "UI/UX Designer & Product Design Partner",
    location: "Mumbai, India",
    verified: true,
    joined: "March 2021",
    rating: 4.9,
    reviewCount: 86,
    about:
      "I design thoughtful digital products that make complex workflows feel simple. My work spans user research, product strategy, interaction design, prototyping, and scalable design systems for SaaS and consumer teams.",
    stats: [
      { label: "Job success", value: "98%" },
      { label: "Projects completed", value: "128" },
      { label: "Client rating", value: "4.9 / 5" },
      { label: "Response time", value: "< 2 hours" },
    ],
    hourlyRate: "₹90 / hour",
    availability: "Available for new projects",
    responseTime: "Usually responds within 2 hours",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Journey Mapping",
      "Interaction Design",
    ],
    portfolio: [
      {
        id: "salman-portfolio-1",
        title: "Nexus Analytics",
        category: "Product design · SaaS",
        image: "/proposal-submission/stage-1-img.jpeg",
        description:
          "A clearer enterprise analytics experience built around role-specific workflows.",
      },
      {
        id: "salman-portfolio-2",
        title: "WealthBase Mobile",
        category: "Fintech · Mobile",
        image: "/proposal-submission/stage-2-img.jpeg",
        description:
          "An onboarding and investment flow designed to build confidence for first-time investors.",
      },
      {
        id: "salman-portfolio-3",
        title: "Mosaic Design System",
        category: "Design systems",
        image: "/proposal-submission/stage-3-img.jpg",
        description:
          "A flexible component library that brought consistency to three product teams.",
      },
    ],
    workHistory: [
      {
        id: "salman-work-1",
        title: "Lead product designer",
        company: "Nimbus Labs",
        period: "Apr 2024 – Aug 2024",
        summary:
          "Redesigned the core analytics workflow and established a shared component library for the product team.",
        rating: 5,
      },
      {
        id: "salman-work-2",
        title: "UX designer",
        company: "WealthBase",
        period: "Nov 2023 – Feb 2024",
        summary:
          "Simplified mobile onboarding and created a research-backed prototype for the investment journey.",
        rating: 4.9,
      },
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" },
    ],
    education: [
      {
        school: "St. Xavier's College",
        qualification: "Bachelor of Computer Applications",
        period: "2022 – 2026",
      },
    ],
    certifications: [
      {
        name: "Google UX Design Professional Certificate",
        issuer: "Google",
        year: "2024",
      },
      {
        name: "Design Systems for Scale",
        issuer: "Interaction Design Foundation",
        year: "2023",
      },
    ],
    reviews: [
      {
        id: "salman-review-1",
        author: "Maya Verma",
        authorRole: "Product Director, Nimbus Labs",
        avatar: "/home/top-rated/person1.png",
        project: "Enterprise analytics redesign",
        date: "August 2024",
        rating: 5,
        quote:
          "Salman turned a dense product into an experience our customers understood immediately. He communicated clearly and raised the quality bar for the entire team.",
      },
      {
        id: "salman-review-2",
        author: "Arjun Mehta",
        authorRole: "Founder, WealthBase",
        avatar: "/home/top-rated/person3.png",
        project: "Mobile onboarding experience",
        date: "February 2024",
        rating: 4.8,
        quote:
          "Strong product thinking, polished execution, and a very collaborative process from research through handoff.",
      },
    ],
  },
  {
    slug: "nimbus-labs",
    kind: "client",
    published: true,
    name: "Nimbus Labs",
    initials: "NL",
    coverImage: "/subscriptions/pro-hero.jpg",
    headline: "Cloud-native products for modern engineering teams",
    location: "Bengaluru, India",
    verified: true,
    joined: "September 2020",
    rating: 4.8,
    reviewCount: 42,
    about:
      "Nimbus Labs builds cloud-native workflow tools for engineering and product teams. We partner with independent specialists who care about craft, direct communication, and measurable outcomes, and we regularly extend successful projects into long-term collaborations.",
    stats: [
      { label: "Total spent", value: "₹3.24L+" },
      { label: "Freelancers hired", value: "18" },
      { label: "Open projects", value: "3" },
      { label: "Talent rating", value: "4.8 / 5" },
    ],
    industry: "SaaS / B2B",
    companySize: "51–200 employees",
    founded: "2018",
    website: "nimbuslabs.example",
    typicalBudget: "₹30,000 – ₹2,00,000",
    paymentVerified: true,
    preferredSkills: [
      "Product Design",
      "React",
      "Node.js",
      "Technical Writing",
      "Data Visualization",
      "Quality Assurance",
    ],
    openProjects: [
      {
        id: "nimbus-project-1",
        title: "Rebuild our analytics dashboard",
        budget: "₹80,000 – ₹1,20,000",
        engagement: "Fixed price · 6–8 weeks",
        skills: ["Figma", "Design Systems", "Data Visualization"],
        status: "Open",
      },
      {
        id: "nimbus-project-2",
        title: "React component accessibility audit",
        budget: "₹45,000 – ₹70,000",
        engagement: "Fixed price · 3 weeks",
        skills: ["React", "Accessibility", "Storybook"],
        status: "Open",
      },
      {
        id: "nimbus-project-3",
        title: "Developer documentation refresh",
        budget: "₹35,000 – ₹55,000",
        engagement: "Part-time · 1 month",
        skills: ["Technical Writing", "APIs", "SaaS"],
        status: "Open",
      },
    ],
    hiringHistory: [
      {
        id: "nimbus-hire-1",
        project: "Enterprise analytics redesign",
        talent: "Salman Khan",
        completed: "August 2024",
        amount: "₹1,15,000",
        rating: 5,
      },
      {
        id: "nimbus-hire-2",
        project: "API documentation and examples",
        talent: "Neha Rao",
        completed: "May 2024",
        amount: "₹62,000",
        rating: 4.8,
      },
    ],
    reviews: [
      {
        id: "nimbus-review-1",
        author: "Salman Khan",
        authorRole: "Product Designer",
        avatar: "/dashboard/salman.jpeg",
        project: "Enterprise analytics redesign",
        date: "August 2024",
        rating: 5,
        quote:
          "The brief was thoughtful, feedback was fast, and every milestone was funded on time. Nimbus treated me like a genuine extension of the product team.",
      },
      {
        id: "nimbus-review-2",
        author: "Neha Rao",
        authorRole: "Technical Writer",
        avatar: "/home/top-rated/person2.png",
        project: "API documentation refresh",
        date: "May 2024",
        rating: 4.7,
        quote:
          "A well-organized client with clear owners and realistic expectations. I would happily work with the team again.",
      },
    ],
  },
  {
    slug: "pixelworks-agency",
    kind: "agency",
    published: true,
    name: "Pixelworks Agency",
    initials: "PA",
    coverImage: "/subscriptions/enterprise-hero.png",
    headline: "Digital products and brand systems built for ambitious teams",
    location: "Delhi, India · Working worldwide",
    verified: true,
    joined: "January 2019",
    rating: 4.9,
    reviewCount: 67,
    about:
      "Pixelworks is an independent product and brand studio that helps ambitious companies move from an early idea to a confident, scalable digital experience. Our senior-led teams combine strategy, research, design, and engineering in one focused engagement.",
    stats: [
      { label: "Projects delivered", value: "96" },
      { label: "Team size", value: "18 experts" },
      { label: "Clients served", value: "42" },
      { label: "Client rating", value: "4.9 / 5" },
    ],
    founded: "2017",
    teamSize: "18 specialists",
    website: "pixelworks.example",
    minimumProject: "₹1,20,000",
    responseTime: "Usually responds within 1 business day",
    services: [
      {
        name: "Product strategy",
        description:
          "Research, workshops, product definition, and a practical roadmap for the next release.",
      },
      {
        name: "UX & interface design",
        description:
          "End-to-end product design, prototyping, testing, and design systems for web and mobile.",
      },
      {
        name: "Brand systems",
        description:
          "Positioning, visual identity, launch direction, and reusable brand guidelines.",
      },
      {
        name: "Frontend engineering",
        description:
          "Accessible, production-ready React and Next.js experiences with careful design implementation.",
      },
    ],
    industries: [
      "Fintech",
      "SaaS",
      "Healthcare",
      "Consumer technology",
      "Climate tech",
    ],
    caseStudies: [
      {
        id: "pixelworks-case-1",
        title: "A calmer way to understand personal finance",
        client: "WealthBase",
        image: "/home/hero/hero-image.webp",
        result: "32% improvement in onboarding completion",
        services: ["Strategy", "Product design", "Design system"],
      },
      {
        id: "pixelworks-case-2",
        title: "A unified operations platform for field teams",
        client: "Northstar Logistics",
        image: "/proposal-submission/stage-2-img.jpeg",
        result: "4 legacy tools consolidated into one platform",
        services: ["Research", "UX/UI", "Frontend"],
      },
    ],
    team: [
      {
        id: "pixelworks-team-1",
        name: "Samiya Ahmed",
        role: "Design Director",
        avatar: "/dashboard/freelancer/samiya.jpg",
      },
      {
        id: "pixelworks-team-2",
        name: "Salman Khan",
        role: "Senior Product Designer",
        avatar: "/dashboard/salman.jpeg",
      },
      {
        id: "pixelworks-team-3",
        name: "Mira Joseph",
        role: "Engineering Lead",
        avatar: "/home/top-rated/person4.png",
      },
    ],
    opportunities: [
      {
        id: "pixelworks-opportunity-1",
        title: "Senior product designer",
        type: "Contract · 3 months",
        location: "Remote, India",
        skills: ["Figma", "SaaS", "Design Systems"],
      },
      {
        id: "pixelworks-opportunity-2",
        title: "Frontend engineer",
        type: "Project-based",
        location: "Remote",
        skills: ["React", "Next.js", "Accessibility"],
      },
    ],
    reviews: [
      {
        id: "pixelworks-review-1",
        author: "Ananya Iyer",
        authorRole: "VP Product, WealthBase",
        avatar: "/home/top-rated/person1.png",
        project: "WealthBase product transformation",
        date: "July 2024",
        rating: 5,
        quote:
          "Pixelworks brought senior thinking to every conversation and gave us a system our internal team could confidently continue using.",
      },
      {
        id: "pixelworks-review-2",
        author: "Rohan Shah",
        authorRole: "COO, Northstar Logistics",
        avatar: "/home/top-rated/person3.png",
        project: "Operations platform",
        date: "March 2024",
        rating: 4.9,
        quote:
          "They handled a complex domain with patience and rigor. The finished product is faster, clearer, and much easier to train teams on.",
      },
    ],
  },
];

export function getPublicProfileBySlug(
  slug: string,
): PublicProfile | undefined {
  return publicProfiles.find(
    (profile) => profile.slug === slug && profile.published,
  );
}
