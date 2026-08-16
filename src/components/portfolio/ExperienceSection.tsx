import type { Experience } from "@/data/portfolio";
import { experiences } from "@/data/portfolio";
import { experienceAnchor } from "@/lib/searchPortfolio";

function isCurrentRole(period?: string) {
  return period?.includes("Present") ?? false;
}

function formatCity(location?: string) {
  if (!location) return "";

  const place = location.split("·")[0]?.trim() ?? location;
  const city = place.split(",")[0]?.trim();

  return city || place;
}

function CompanyName({ experience }: { experience: Experience }) {
  const label = experience.location
    ? `${experience.company} · ${formatCity(experience.location)}`
    : experience.company;

  if (experience.companyUrl) {
    return (
      <a
        href={experience.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="company-link experience-company-line"
      >
        {label}
      </a>
    );
  }

  return <p className="experience-company-line">{label}</p>;
}

function CurrentExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article
      id={experienceAnchor(experience.company).slice(1)}
      className="experience-current-card scroll-mt-24"
    >
      <p className="experience-current-label">
        <span className="experience-current-dot" aria-hidden>
          <span className="experience-current-dot-ping" />
          <span className="experience-current-dot-core" />
        </span>
        CURRENTLY
      </p>
      <div className="experience-current-company">
        <CompanyName experience={experience} />
      </div>
      <h3 className="experience-current-role">{experience.role}</h3>
      {experience.period ? (
        <p className="experience-current-period">{experience.period}</p>
      ) : null}
      {experience.highlights.length > 0 ? (
        <ul className="experience-current-highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function PreviousExperienceRow({ experience }: { experience: Experience }) {
  return (
    <article
      id={experienceAnchor(experience.company).slice(1)}
      className="experience-previous-row scroll-mt-24"
    >
      {experience.period ? (
        <time className="experience-previous-period">{experience.period}</time>
      ) : (
        <span className="experience-previous-period" />
      )}
      <div className="experience-previous-details">
        <CompanyName experience={experience} />
        <h4 className="experience-previous-role">{experience.role}</h4>
        {experience.highlights.length > 0 ? (
          <ul className="experience-previous-highlights">
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
  const currentRoles = experiences.filter((experience) =>
    isCurrentRole(experience.period),
  );
  const previousRoles = experiences.filter(
    (experience) => !isCurrentRole(experience.period),
  );

  return (
    <section id="work" className="experience-section scroll-mt-16">
      <span className="portfolio-section-number">01</span>
      <h2 className="portfolio-section-title">Experience</h2>
      <p className="portfolio-section-subtitle">
        Where I have built products and systems, the most recent first.
      </p>

      <div className="experience-current-list">
        {currentRoles.map((experience) => (
          <CurrentExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>

      {previousRoles.length > 0 ? (
        <>
          <div className="experience-divider" aria-hidden>
            <span className="experience-divider-line" />
            <span className="experience-divider-icon">
              <span className="experience-divider-dot" />
            </span>
            <span className="experience-divider-line" />
          </div>

          <div className="experience-previous">
            <p className="experience-previous-label">PREVIOUSLY</p>
            <div className="experience-previous-list">
              {previousRoles.map((experience) => (
                <PreviousExperienceRow
                  key={experience.company}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}
