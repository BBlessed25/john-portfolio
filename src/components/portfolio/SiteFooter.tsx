"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function SiteFooter() {
  const year = new Date().getFullYear();
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
      <div className="mx-auto flex max-w-[1012px] flex-col items-center justify-between gap-4 px-4 text-xs text-[var(--gh-fg-muted)] sm:flex-row">
        <p>
      
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="cursor-pointer hover:text-[var(--gh-accent)]"
          >
            {copied ? "Copied!" : "Email"}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--gh-accent)]"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--gh-accent)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}