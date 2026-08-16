import { Briefcase, Calendar, Dot, MapPin } from "lucide-react";
import type { Experience } from "@/data/portfolio";
import { experienceAnchor } from "@/lib/searchPortfolio";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article id={experienceAnchor(experience.company).slice(1)} className="py-1 scroll-mt-24">
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
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[var(--gh-fg-muted)]">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {experience.location}
          </p>
        ) : null}
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-[var(--gh-fg)]">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 shrink-0 text-[var(--gh-fg-muted)]" aria-hidden />
            {experience.role}
          </span>
          {experience.period ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-[var(--gh-fg-muted)]">
              <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {experience.period}
            </span>
          ) : null}
        </p>
      </div>
      {experience.highlights.length > 0 ? (
        <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--gh-fg-muted)]">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <Dot className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gh-fg-muted)]" aria-hidden />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
