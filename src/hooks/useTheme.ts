"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = getPreferredTheme();
    applyTheme(initial);
    setTheme(initial);
    setReady(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const label = theme === "light" ? "Dark" : "Light";

  return { theme, toggle, label, ready };
}
