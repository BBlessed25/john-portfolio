import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/data/portfolio";
import { experiences } from "@/data/portfolio";
import { experienceAnchor } from "@/lib/searchPortfolio";

function isCurrentRole(period?: string) {
  return period?.includes("Present") ?? false;
}

function CompanyName({ experience }: { experience: Experience }) {
  if (experience.companyUrl) {
    return (
      <a
        href={experience.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="experience-company-link"
      >
        {experience.company}
        <ArrowUpRight aria-hidden strokeWidth={1.8} />
      </a>
    );
  }

  return <p className="experience-company-link">{experience.company}</p>;
}

function ExperienceStep({
  experience,
}: {
  experience: Experience;
}) {
  const current = isCurrentRole(experience.period);

  return (
    <article
      id={experienceAnchor(experience.company).slice(1)}
      className="experience-row scroll-mt-24"
    >
      <div className="experience-row-meta">
        {current ? (
          <p className="experience-status">
            <span aria-hidden />
            Current
          </p>
        ) : null}
        {experience.period ? <time>{experience.period}</time> : null}
      </div>
      <div className="experience-row-content">
        <h2>{experience.role}</h2>
        <CompanyName experience={experience} />
        {experience.location ? (
          <p className="experience-location">{experience.location}</p>
        ) : null}
        {experience.highlights.length > 0 ? (
          <ul className="experience-highlights">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section id="work" className="inner-page site-wrap scroll-mt-24">
      <header className="inner-page-intro">
        <p className="inner-page-eyebrow">Experience</p>
        <h1 className="inner-page-title">Work that shaped how I build.</h1>
        <p className="inner-page-copy">
          A selection of teams, products, and systems I have helped move
          forward from production software to intelligent, agentic experiences.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceStep
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
