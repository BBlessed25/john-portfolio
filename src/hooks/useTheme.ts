"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(preference: ThemePreference): Theme {
  return preference === "system" ? getSystemTheme() : preference;
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light" || stored === "system") {
    return stored;
  }
  return "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(getStoredPreference);
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(getStoredPreference()));

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = getStoredPreference();
      if (stored === "system") {
        const next = getSystemTheme();
        applyTheme(next);
        setTheme(next);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const setThemePreference = useCallback((nextPreference: ThemePreference) => {
    const resolved = resolveTheme(nextPreference);
    applyTheme(resolved);
    localStorage.setItem("theme", nextPreference);
    setPreference(nextPreference);
    setTheme(resolved);
  }, []);

  const toggle = useCallback(() => {
    setThemePreference(theme === "light" ? "dark" : "light");
  }, [setThemePreference, theme]);

  const label = theme === "light" ? "Dark" : "Light";

  return { theme, preference, setThemePreference, toggle, label, ready: true };
}
