export type Experience = {
  company: string;
  companyUrl?: string;
  tagline?: string;
  role: string;
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
    company: "CanAutomate",
    companyUrl: "https://www.canautomate.ca",
    role: "AI Engineer",
    highlights: [
      "Built a multi-channel outreach system, email, WhatsApp, SMS, AI voice, using FastAPI, Celery, Redis, Claude API, ElevenLabs, and Twilio, with a Supabase/PostgreSQL backend tracking lead state and outreach history.",
      "Built lead sourcing and enrichment pipelines using external APIs and LLMs to qualify and engage prospects automatically.",
      "Developed cold outreach automation and lead enrichment pipelines integrating external APIs and AI models to source, score, and engage prospects directly applying eCommerce-adjacent data and conversion analytics thinking.",
      "Developed prompt engineering workflows using Claude Skills and structured outputs, JSON mode, tool use, for reliable, repeatable AI-driven tasks.",
    ],
  },
  {
    company: "OLUDAYE NG",
    role: "Software Engineer",
    highlights: [
      "Demonstrated strong analytical and technical skills to translate business questions into use cases and data model requirements, anticipating future ad-hoc needs.",
      "Created detailed technical documentation, including use cases and UML diagrams, to facilitate knowledge sharing and understanding among team members.",
      "Engineered cross-platform fund-raising mobile app with React Native and Firebase to streamline fundraising efforts, ensuring a user-friendly experience on both iOS and Android platforms.",
    ],
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
