import SiteHeader from "@/components/portfolio/SiteHeader";
import SiteFooter from "@/components/portfolio/SiteFooter";
import SectionCard from "@/components/portfolio/SectionCard";
import ExperienceCard from "@/components/portfolio/ExperienceCard";
import ActivityCard from "@/components/portfolio/ActivityCard";

import { experiences, activities } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--gh-canvas)] text-[var(--gh-fg)]">
      <SiteHeader />

      <main className="mx-auto max-w-[1012px] space-y-8 px-4 py-6">
        <SectionCard title="Work Experience" id="work">
          <div className="space-y-3">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Research & Projects" id="research-projects">
          <div className="space-y-3">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.organization}
                activity={activity}
              />
            ))}
          </div>
        </SectionCard>
      </main>

      <SiteFooter />
    </div>
  );
}
