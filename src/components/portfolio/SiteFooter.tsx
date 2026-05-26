"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <footer className="mt-12 border-t border-[var(--gh-border)] py-8">
      <div className="mx-auto flex max-w-[1012px] justify-center px-4 text-xs text-[var(--gh-fg-muted)]">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="footer-link cursor-pointer bg-transparent p-0 text-xs text-[var(--gh-fg-muted)]"
          >
            {copied ? "Copied!" : "Email"}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-[var(--gh-fg-muted)]"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-[var(--gh-fg-muted)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
