"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

const socialLinks = [
  { label: "GITHUB", href: profile.github },
  { label: "LINKEDIN", href: profile.linkedin },
  { label: "EMAIL", href: `mailto:${profile.email}` },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <span className="site-footer-copy">© {year}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="site-footer-back"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <span className="site-footer-back-icon">
              <ArrowUp className="h-4 w-4" strokeWidth={2} aria-hidden />
            </span>
          </button>
        </div>

        <div className="site-footer-cta">
          <p className="site-footer-cta-label">HAVE A PROJECT IN MIND?</p>
          <a
            href={`mailto:${profile.email}`}
            className="site-footer-cta-heading"
          >
            LET&apos;S TALK
          </a>
        </div>

        <div className="site-footer-bottom">
          <div className="site-footer-pills">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "EMAIL" ? undefined : "_blank"}
                rel={
                  link.label === "EMAIL" ? undefined : "noopener noreferrer"
                }
                className="site-footer-pill"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="site-footer-credits">
            <p>
              Portfolio by <strong>John Ayodeji</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
