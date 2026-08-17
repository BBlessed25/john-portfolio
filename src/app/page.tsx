"use client";

import { useEffect, useState } from "react";
import SiteHeader, { type NavView } from "@/components/portfolio/SiteHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ResearchProjectsSection from "@/components/portfolio/ResearchProjectsSection";
import OfferingsSection from "@/components/portfolio/OfferingsSection";
import RecentPosts from "@/components/portfolio/RecentPosts";
import ContactSection from "@/components/portfolio/ContactSection";
import SiteFooter from "@/components/portfolio/SiteFooter";

function viewFromHash(hash: string): NavView {
  if (hash === "#work") return "work";
  if (hash === "#projects") return "projects";
  if (hash === "#posts" || hash === "#blog") return "blog";
  if (hash === "#contact") return "contact";
  return "home";
}

export default function Home() {
  const [view, setView] = useState<NavView>("home");

  useEffect(() => {
    setView(viewFromHash(window.location.hash));

    const onHashChange = () => {
      setView(viewFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goHome = () => {
    window.history.pushState(null, "", window.location.pathname);
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goTo = (next: NavView) => {
    const hash =
      next === "work"
        ? "#work"
        : next === "projects"
          ? "#projects"
          : next === "blog"
            ? "#posts"
            : "#contact";
    window.history.pushState(null, "", hash);
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <SiteHeader view={view} onHome={goHome} onNavigate={goTo} />
      <main>
        {view === "home" ? <HeroSection /> : null}
        {view === "work" ? <ExperienceSection /> : null}
        {view === "projects" ? (
          <>
            <ResearchProjectsSection />
            <OfferingsSection />
          </>
        ) : null}
        {view === "blog" ? <RecentPosts /> : null}
        {view === "contact" ? <ContactSection /> : null}
      </main>
      {view !== "home" ? <SiteFooter /> : null}
    </div>
  );
}
