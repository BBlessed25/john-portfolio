export type Experience = {
  company: string;
  companyUrl?: string;
  tagline?: string;
  role: string;
  period?: string;
  location?: string;
  highlights: string[];
};

export type Activity = {
  organization: string;
  campus?: string;
  role: string;
  period?: string;
  highlights: string[];
};

export const profile = {
  name: "John Ayodeji Adelusi",
  email: "johnnyadex@gmail.com",
  linkedin: "https://www.linkedin.com/in/john-ayodeji-ab9142349/",
  github: "https://github.com/BBlessed25",
  portfolio: "https://johnayodejiportfolio.netlify.app",
  phone: "6478961121",
};

export const experiences: Experience[] = [
  {
    company: "Finsynq",
    companyUrl: "https://finsynq.ca",
    tagline: "Contract Part-time",
    role: "AI Engineer",
    period: "Jul 2026 – Present",
    location: "Calgary, Alberta, Canada · Remote",
    highlights: [],
  },
  {
    company: "CanAutomate",
    companyUrl: "https://www.canautomate.ca",
    tagline: "Contract Part-time",
    role: "Software Engineer",
    period: "Dec 2025 – Present",
    location: "London, Ontario, Canada · Hybrid",
    highlights: [],
  },
  {
    company: "Oludaye",
    tagline: "Contract Full-time",
    role: "Software Engineer",
    period: "Aug 2022 – Sep 2025",
    location: "Remote",
    highlights: [
      "Developed a cross-platform fundraising mobile app using React Native and Firebase, enhancing user experience on iOS and Android.",
      "Created comprehensive technical documentation, including UML diagrams, to support team collaboration and knowledge sharing.",
      "Resolved 90% of user issues on first contact, significantly reducing downtime and improving productivity.",
    ],
  },
  {
    company: "SEAMFIX",
    companyUrl: "https://seamfix.com/",
    tagline: "Permanent Full-time",
    role: "Frontend Developer",
    period: "Sep 2020 – Jun 2022",
    location: "On-site",
    highlights: [],
  },
  {
    company: "SEAMFIX",
    companyUrl: "https://seamfix.com/",
    tagline: "Internship",
    role: "Frontend Developer",
    period: "Feb 2020 – Jul 2020",
    location: "On-site",
    highlights: [],
  },
];

export const activities: Activity[] = [
  {
    organization: "",
    campus: "",
    role: "",
    highlights: [
      "Agentic LLM pipelines with LangGraph, LangMem, tool-calling, and persistent memory.",
      "Distributed scraping systems using Playwright and Crawlee for scalable data extraction.",
      "AI meeting workflows with Whisper, semantic processing, summaries, and action-item extraction.",
      "Scalable human-AI systems focused on modular architecture, APIs, and clean UX.",
    ],
  },
];

export const research = {
  headline: "I turn research ideas into systems that actually run in production.",
  body:
    "My work spans agentic LLM pipelines with LangGraph and persistent memory, distributed scraping systems using Playwright and Crawlee, and AI meeting workflows powered by Whisper and semantic processing. I care about modular architecture, reliable APIs, and interfaces people want to use.",
  quote:
    "The same curiosity that drives a new experiment is the one I bring to every blank codebase.",
  tags: [
    "Agentic AI",
    "LangGraph",
    "Playwright",
    "Whisper",
    "LLM Pipelines",
    "APIs & UX",
  ],
  highlights: activities[0]?.highlights ?? [],
};

export type BlogPost = {
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
};

export const posts: BlogPost[] = [
  {
    date: "Jul 10",
    readTime: "6 min read",
    category: "Agents",
    title: "Building Agentic LLM Pipelines That Survive Production",
    excerpt:
      "How LangGraph, tool-calling, and persistent memory turn experimental prompts into reliable agent workflows that can run unattended.",
    href: "#projects",
  },
  {
    date: "Jun 22",
    readTime: "5 min read",
    category: "ML Ops",
    title: "Persistent Memory for AI Agents Without Losing Control",
    excerpt:
      "A practical look at storing, retrieving, and bounding agent memory so systems stay useful without drifting or leaking context.",
    href: "#projects",
  },
  {
    date: "May 18",
    readTime: "7 min read",
    category: "Data",
    title: "Distributed Scraping with Playwright for Model-Ready Data",
    excerpt:
      "Designing scalable extraction pipelines that collect clean, structured data for enrichment, scoring, and downstream LLM tasks.",
    href: "#projects",
  },
  {
    date: "Apr 04",
    readTime: "4 min read",
    category: "Speech",
    title: "From Whisper Transcripts to Actionable Meeting Intelligence",
    excerpt:
      "Turning raw audio into summaries, decisions, and action items with semantic processing instead of dumping another wall of text.",
    href: "#posts",
  },
  {
    date: "Mar 12",
    readTime: "6 min read",
    category: "Engineering",
    title: "Designing APIs That Frontend Teams Can Actually Ship Against",
    excerpt:
      "Contracts, versioning, and error shapes that keep product work moving when multiple clients depend on the same backend.",
    href: "#posts",
  },
  {
    date: "Feb 20",
    readTime: "5 min read",
    category: "Engineering",
    title: "From Prototype to Production: A Practical Frontend Checklist",
    excerpt:
      "Performance, accessibility, and state management habits that turn a working demo into something users can trust.",
    href: "#posts",
  },
  {
    date: "Jan 28",
    readTime: "7 min read",
    category: "Engineering",
    title: "Building Reliable Background Jobs Without Losing Observability",
    excerpt:
      "Retries, queues, and logging patterns for automation systems that have to run overnight without silent failure.",
    href: "#posts",
  },
  {
    date: "Jan 08",
    readTime: "5 min read",
    category: "Engineering",
    title: "Clean Architecture for Small Teams Shipping Fast",
    excerpt:
      "How to keep modules, APIs, and UI boundaries clear enough that a two-person team can still move quickly.",
    href: "#posts",
  },
];

export const offerings = [
  {
    title: "Agentic AI Systems",
    description:
      "Design and ship LLM agents with tool-calling, memory, and structured outputs that hold up outside a demo.",
  },
  {
    title: "Automation Engineering",
    description:
      "Build multi-channel outreach, enrichment, and workflow systems that qualify and engage leads automatically.",
  },
  {
    title: "Production LLM Pipelines",
    description:
      "Move research ideas into APIs and jobs with reliable JSON, retries, evaluation, and clean interfaces.",
  },
  {
    title: "Data Extraction at Scale",
    description:
      "Collect and structure web data with Playwright and Crawlee so models and products have something real to work with.",
  },
  {
    title: "Product-Ready Interfaces",
    description:
      "Pair the backend with frontend experiences people actually use, from internal tools to customer-facing apps.",
  },
];
