import SiteHeader from "@/components/portfolio/SiteHeader";
import SiteFooter from "@/components/portfolio/SiteFooter";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ResearchProjectsSection from "@/components/portfolio/ResearchProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--gh-canvas)] text-[var(--gh-fg)]">
      <SiteHeader />

      <main className="mx-auto max-w-[1012px] space-y-16 px-4 py-8 md:px-6">
        <ExperienceSection />
        <ResearchProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
