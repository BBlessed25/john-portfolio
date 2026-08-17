"use client";

import { Ellipsis, Menu, X } from "lucide-react";
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
  const [navOpen, setNavOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen && !navOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        setNavOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setNavOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, navOpen]);

  return (
    <header className="site-header">
      <div className="site-wrap site-header-inner" ref={headerRef}>
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

          <div className="site-header-hamburger-wrap">
            <button
              type="button"
              className="site-header-hamburger"
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                setNavOpen((open) => !open);
                setMenuOpen(false);
              }}
            >
              {navOpen ? (
                <X className="h-4 w-4" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={2} aria-hidden />
              )}
            </button>
            {navOpen ? (
              <div className="site-header-mobile-menu" id="mobile-nav" role="menu">
                {navLinks.map((link) => (
                  <button
                    key={link.view}
                    type="button"
                    role="menuitem"
                    className={`site-header-mobile-link${view === link.view ? " is-active" : ""}`}
                    onClick={() => {
                      onNavigate(link.view);
                      setNavOpen(false);
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="site-header-more-wrap">
            <button
              type="button"
              className="site-header-more"
              aria-label="More"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              onClick={() => {
                setMenuOpen((open) => !open);
                setNavOpen(false);
              }}
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
