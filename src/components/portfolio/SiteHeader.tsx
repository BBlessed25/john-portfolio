"use client";

import { profile } from "@/data/portfolio";
import { useBattery } from "@/hooks/useBattery";
import { useTheme } from "@/hooks/useTheme";

export default function SiteHeader() {
  const { level, charging, supported } = useBattery();
  const { toggle, label, ready } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const batteryLabel =
    supported && level !== null ? `${level}%` : "—";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gh-border)] bg-[var(--gh-default)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1012px] items-center justify-between gap-4 px-4">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-[var(--gh-radius)] px-2 py-1 text-sm font-semibold text-[var(--gh-fg)] hover:bg-[var(--gh-subtle)]"
        >
          <span
            className="relative inline-flex h-2.5 w-2.5 shrink-0"
            aria-label="Online"
            title="Online"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          {profile.name.split(" ").slice(0, 2).join(" ")}
        </button>

        <div className="flex items-center gap-3 text-sm font-medium text-[var(--gh-fg)]">
          <button
            type="button"
            onClick={toggle}
            className="cursor-pointer text-[var(--gh-fg)] hover:text-[var(--gh-accent)]"
            aria-label={`Switch to ${label.toLowerCase()} mode`}
            title={`Switch to ${label.toLowerCase()} mode`}
          >
            {ready ? label : "Dark"}
          </button>
          <span
            className="tabular-nums"
            title={
              supported
                ? charging
                  ? "Charging"
                  : "Battery level"
                : "Battery status unavailable in this browser"
            }
          >
            {batteryLabel}
          </span>
        </div>
      </div>
    </header>
  );
}
