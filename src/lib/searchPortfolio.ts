import { activities, experiences, profile, research } from "@/data/portfolio";

export type SearchResult = {
  id: string;
  title: string;
  snippet: string;
  section: string;
  href: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildIndex(): SearchResult[] {
  const items: SearchResult[] = [];

  items.push({
    id: "profile-name",
    title: profile.name,
    snippet: "Portfolio owner",
    section: "Profile",
    href: "#work",
  });

  for (const experience of experiences) {
    const href = `#experience-${slugify(experience.company)}`;
    const baseFields = [
      experience.company,
      experience.role,
      experience.period,
      experience.location,
      experience.tagline,
    ].filter(Boolean);

    items.push({
      id: `exp-${slugify(experience.company)}`,
      title: `${experience.role} at ${experience.company}`,
      snippet: baseFields.join(" · "),
      section: "Experience",
      href,
    });

    for (const highlight of experience.highlights) {
      items.push({
        id: `exp-${slugify(experience.company)}-${slugify(highlight.slice(0, 40))}`,
        title: experience.company,
        snippet: highlight,
        section: "Experience",
        href,
      });
    }
  }

  for (const highlight of research.highlights) {
    items.push({
      id: `research-${slugify(highlight.slice(0, 40))}`,
      title: "Research & Projects",
      snippet: highlight,
      section: "Research & Projects",
      href: "#research-projects",
    });
  }

  for (const tag of research.tags) {
    items.push({
      id: `research-tag-${slugify(tag)}`,
      title: tag,
      snippet: research.headline,
      section: "Research & Projects",
      href: "#research-projects",
    });
  }

  for (const activity of activities) {
    const href = "#research-projects";
    const meta = [activity.organization, activity.role, activity.period]
      .filter(Boolean)
      .join(" · ");

    if (meta) {
      items.push({
        id: `act-${slugify(activity.organization || activity.role)}`,
        title: activity.organization || activity.role,
        snippet: meta,
        section: "Research & Projects",
        href,
      });
    }

    for (const highlight of activity.highlights) {
      items.push({
        id: `act-${slugify(highlight.slice(0, 40))}`,
        title: "Research & Projects",
        snippet: highlight,
        section: "Research & Projects",
        href,
      });
    }
  }

  return items;
}

const searchIndex = buildIndex();

export function searchPortfolio(query: string, limit = 8): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return searchIndex
    .filter((item) => {
      const haystack = `${item.title} ${item.snippet} ${item.section}`.toLowerCase();
      return haystack.includes(normalized);
    })
    .slice(0, limit);
}

export function experienceAnchor(company: string) {
  return `#experience-${slugify(company)}`;
}
