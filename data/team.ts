export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  techStack: string[];
  socials: Record<string, string>;
  services: string[];
  portfolio: Portfolio[];
  certificates: Certificate[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Portfolio {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  liveUrl: string;
  githubUrl: string;
}

export const team: TeamMember[] = [
  {
    slug: "frontend-dev",
    name: "Joshua Colobong",
    role: "Frontend Developer",
    avatar: "/avatars/josh.jpg",
    bio: "Passionate about building fast, beautiful, and accessible interfaces. Crafting web experiences with modern frameworks and pixel-perfect attention to detail.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    services: [
      "Landing Page Development",
      "React / Next.js Web Apps",
      "Animation & Interaction Design",
      "Performance Optimization",
    ],
    portfolio: [
      {
        title: "E-Commerce Dashboard",
        description:
          "A full-featured admin dashboard for an online store with real-time analytics and inventory management.",
        tags: ["Next.js", "Tailwind", "Recharts"],
        thumbnail: "/projects/project1.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "SaaS Landing Page",
        description:
          "High-converting landing page with complex scroll animations and dynamic pricing tables.",
        tags: ["React", "Framer Motion", "GSAP"],
        thumbnail: "/projects/project2.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    certificates: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Coursera)",
        date: "2024",
        credentialUrl: "#",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2023",
        credentialUrl: "#",
      },
      {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        date: "2023",
        credentialUrl: "#",
      },
    ],
  },
  {
    slug: "backend-dev",
    name: "Jaylord Soguilon",
    role: "Backend Developer",
    avatar: "/avatars/jay.jpg",
    bio: "Building the invisible engine that powers great products. Expert in scalable APIs, databases, and cloud architecture with a focus on performance and security.",
    techStack: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Redis",
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    services: [
      "REST & GraphQL API Development",
      "Database Architecture",
      "Cloud Deployment (AWS/GCP)",
      "Authentication & Security",
    ],
    portfolio: [
      {
        title: "Real-time Chat API",
        description:
          "WebSocket-powered messaging API supporting 10k+ concurrent users with message persistence.",
        tags: ["Node.js", "Socket.io", "Redis", "PostgreSQL"],
        thumbnail: "/projects/project3.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Secure multi-provider payment system handling 50k+ daily transactions with fraud detection.",
        tags: ["Python", "FastAPI", "Stripe", "PostgreSQL"],
        thumbnail: "/projects/project4.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    certificates: [
      {
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#",
      },
      {
        title: "Node.js Application Development (LFW211)",
        issuer: "The Linux Foundation",
        date: "2023",
        credentialUrl: "#",
      },
      {
        title: "MongoDB Associate Developer",
        issuer: "MongoDB University",
        date: "2023",
        credentialUrl: "#",
      },
    ],
  },
  {
    slug: "ui-ux-designer",
    name: "Jenelyn Manalo",
    role: "UI/UX Designer",
    avatar: "/avatars/jen.jpg",
    bio: "Designing experiences that feel intuitive and look stunning. From research to pixel-perfect handoff, every detail matters.",
    techStack: [
      "Figma",
      "Adobe XD",
      "Protopie",
      "Webflow",
      "Illustrator",
      "Lottie",
    ],
    socials: {
      dribbble: "https://dribbble.com",
      linkedin: "https://linkedin.com",
      behance: "https://behance.net",
    },
    services: [
      "UX Research & Wireframing",
      "UI Design & Branding",
      "Prototyping & User Testing",
      "Design System Creation",
    ],
    portfolio: [
      {
        title: "FinTech Mobile App",
        description:
          "End-to-end UX design for a personal finance tracking app with 50k+ downloads.",
        tags: ["Figma", "UX Research", "Prototyping"],
        thumbnail: "/projects/project5.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Health & Wellness Platform",
        description:
          "Complete design system and UI for a telehealth platform serving 200+ clinics.",
        tags: ["Adobe XD", "Design System", "Webflow"],
        thumbnail: "/projects/project6.jpg",
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    certificates: [
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google (Coursera)",
        date: "2024",
        credentialUrl: "#",
      },
      {
        title: "Interaction Design Specialization",
        issuer: "UC San Diego (Coursera)",
        date: "2023",
        credentialUrl: "#",
      },
      {
        title: "Adobe Certified Professional in Visual Design",
        issuer: "Adobe",
        date: "2023",
        credentialUrl: "#",
      },
    ],
  },
];
