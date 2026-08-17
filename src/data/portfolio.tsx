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
    role: "AI Engineer",
    period: "Jul 2026 – Present",
    location: "Calgary, Alberta, Canada · Remote",
    highlights: [],
  },
  {
    company: "CanAutomate",
    companyUrl: "https://www.canautomate.ca",
    role: "Senior Software Engineer",
    period: "Dec 2025 – Present",
    location: "London, Ontario, Canada · Remote",
    highlights: [],
  },
  {
    company: "OLUDAYE NG",
    role: "Software Engineer",
    period: "Aug 2020 – Dec 2025",
    location: "Hybrid",
    highlights: [
      "Demonstrated strong analytical and technical skills to translate business questions into use cases and data model requirements, anticipating future ad-hoc needs.",
      "Created detailed technical documentation, including use cases and UML diagrams, to facilitate knowledge sharing and understanding among team members.",
      "Engineered cross-platform fund-raising mobile app with React Native and Firebase to streamline fundraising efforts, ensuring a user-friendly experience on both iOS and Android platforms.",
    ],
  },
  {
    company: "SEAMFIX",
    companyUrl: "https://seamfix.com/",
    role: "Frontend Developer",
    period: "Feb 2020 – Mar 2021",
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
