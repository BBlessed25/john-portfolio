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
    highlights: [
      "Built a multi-channel outreach system for email, WhatsApp, SMS, and AI voice using FastAPI, Celery, Redis, Twilio, ElevenLabs, and Claude API.",
      "Developed lead sourcing and enrichment pipelines with external APIs and LLMs to qualify, score, and engage prospects automatically.",
      "Designed structured AI workflows using Claude Skills, JSON mode, tool-calling, and Supabase/PostgreSQL for reliable automation and lead tracking.",
    ],
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
