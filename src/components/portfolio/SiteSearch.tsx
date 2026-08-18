"use client";

import { Search, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { searchPortfolio, type SearchResult } from "@/lib/searchPortfolio";

type SiteSearchProps = {
  open: boolean;
  onClose: () => void;
};

export default function SiteSearch({ open, onClose }: SiteSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const results = searchPortfolio(query);

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      handleClose();
      window.setTimeout(() => {
        const target = document.querySelector(result.href);
        target?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    },
    [handleClose],
  );

  if (!open) return null;

  return (
    <div
      className="site-search-overlay"
      role="presentation"
      onClick={handleClose}
    >
      <div
        className="site-search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Search portfolio"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="site-search-input-wrap">
          <Search className="site-search-input-icon" strokeWidth={1.5} aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search experience, projects, skills..."
            className="site-search-input"
            aria-label="Search"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={handleClose}
            className="site-search-close"
            aria-label="Close search"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {query.trim() !== "" || results.length > 0 ? (
          <div className="site-search-results">
            {query.trim() !== "" && results.length === 0 ? (
              <p className="site-search-empty">No results for &ldquo;{query}&rdquo;</p>
            ) : null}
            {results.length > 0 ? (
              <ul className="site-search-list">
                {results.map((result) => (
                  <li key={result.id}>
                    <button
                      type="button"
                      className="site-search-result"
                      onClick={() => handleSelect(result)}
                    >
                      <span className="site-search-result-title">{result.title}</span>
                      <span className="site-search-result-snippet">{result.snippet}</span>
                      <span className="site-search-result-section">{result.section}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
