import type { Experience } from "@/data/portfolio";
import Avatar from "@/components/ui/Avatar";
import InnerCard from "@/components/ui/InnerCard";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <InnerCard>
      <div className="flex gap-3">
        <Avatar name={experience.company} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h4 className="text-sm font-semibold text-[var(--gh-fg)]">
                {experience.company}
              </h4>
              {experience.tagline ? (
                <p className="text-xs text-[var(--gh-fg-muted)]">
                  {experience.tagline}
                </p>
              ) : null}
            </div>
            <span className="shrink-0 text-xs text-[var(--gh-fg-muted)]">
              {experience.period}
            </span>
          </div>
          <p className="mt-1 text-xs text-[var(--gh-fg-muted)]">
            {experience.role} · {experience.location}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--gh-fg-muted)]">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-[var(--gh-fg-muted)]">●</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </InnerCard>
  );
}
