import SiteHeader from "@/components/portfolio/SiteHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ResearchProjectsSection from "@/components/portfolio/ResearchProjectsSection";
import OfferingsSection from "@/components/portfolio/OfferingsSection";
import RecentPosts from "@/components/portfolio/RecentPosts";
import ContactSection from "@/components/portfolio/ContactSection";
import SiteFooter from "@/components/portfolio/SiteFooter";

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ResearchProjectsSection />
        <OfferingsSection />
        <RecentPosts />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
