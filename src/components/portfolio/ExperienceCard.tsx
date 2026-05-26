import type { Experience } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="py-1">
      <div>
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link text-base font-semibold"
          >
            {experience.company}
          </a>
        ) : (
          <h4 className="text-base font-semibold text-[var(--gh-fg)]">
            {experience.company}
          </h4>
        )}
        {experience.tagline ? (
          <p className="text-xs text-[var(--gh-fg-muted)]">{experience.tagline}</p>
        ) : null}
        {experience.location ? (
          <p className="mt-0.5 text-xs text-[var(--gh-fg-muted)]">
            {experience.location}
          </p>
        ) : null}
        <p className="mt-1 text-base text-[var(--gh-fg)]">{experience.role}</p>
      </div>
      <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--gh-fg-muted)]">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="text-[var(--gh-fg-muted)]">●</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
