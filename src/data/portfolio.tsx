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
