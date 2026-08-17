"use client";

import { Ellipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SocialDock from "@/components/portfolio/SocialDock";

export type NavView = "home" | "work" | "projects" | "blog" | "contact";

const navLinks: { label: string; view: NavView }[] = [
  { label: "Experience", view: "work" },
  { label: "Projects", view: "projects" },
  { label: "Blog", view: "blog" },
  { label: "Contact", view: "contact" },
];

type SiteHeaderProps = {
  view: NavView;
  onHome: () => void;
  onNavigate: (view: NavView) => void;
};

export default function SiteHeader({ view, onHome, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-wrap site-header-inner">
        <button type="button" onClick={onHome} className="site-header-brand">
          John
        </button>

        <nav className="site-header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.view}
              type="button"
              className={`site-header-link${view === link.view ? " is-active" : ""}`}
              onClick={() => onNavigate(link.view)}
            >
              {link.label}
            </button>
          ))}
          <div className="site-header-more-wrap" ref={menuRef}>
            <button
              type="button"
              className="site-header-more"
              aria-label="More"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Ellipsis className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
            {menuOpen ? <SocialDock /> : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
