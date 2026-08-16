"use client";

import { Battery, BatteryCharging, Moon, Search, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SiteSearch from "@/components/portfolio/SiteSearch";
import { profile } from "@/data/portfolio";
import { useBattery } from "@/hooks/useBattery";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#research-projects" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const { level, charging, supported } = useBattery();
  const { toggle, label, theme, ready } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const batteryLabel = supported && level !== null ? `${level}%` : "—";
  const ThemeIcon = theme === "light" ? Moon : Sun;

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <button
            type="button"
            onClick={scrollToTop}
            className="site-header-brand"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
          </button>

          <nav className="site-header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-header-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header-actions">
            <button
              type="button"
              onClick={openSearch}
              className="site-header-icon-btn"
              aria-label="Search"
              title="Search"
            >
              <Search
                className="h-[1.125rem] w-[1.125rem]"
                strokeWidth={1.5}
                aria-hidden
              />
            </button>
            <span
              className="site-header-battery"
              title={
                supported
                  ? charging
                    ? "Charging"
                    : "Battery level"
                  : "Battery status unavailable in this browser"
              }
            >
              {charging ? (
                <BatteryCharging className="h-4 w-4 shrink-0" aria-hidden />
              ) : (
                <Battery className="h-4 w-4 shrink-0" aria-hidden />
              )}
              {batteryLabel}
            </span>
            <button
              type="button"
              onClick={toggle}
              className="site-header-theme-btn"
              aria-label={`Switch to ${label.toLowerCase()} mode`}
              title={`Switch to ${label.toLowerCase()} mode`}
            >
              {ready ? (
                <ThemeIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              ) : (
                <span className="site-header-theme-dot" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <SiteSearch open={searchOpen} onClose={closeSearch} />
    </>
  );
}
