"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";

type BatteryManager = EventTarget & {
  charging: boolean;
  level: number;
};

type BatteryNavigator = Navigator & {
  getBattery?: () => Promise<BatteryManager>;
  battery?: BatteryManager;
  mozBattery?: BatteryManager;
};

function readBatteryManager(): Promise<BatteryManager | null> {
  const nav = navigator as BatteryNavigator;
  if (typeof nav.getBattery === "function") {
    return nav.getBattery();
  }
  const legacy = nav.battery ?? nav.mozBattery;
  return Promise.resolve(legacy ?? null);
}

function useBatteryStatus() {
  const [level, setLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    let battery: BatteryManager | null = null;
    let cancelled = false;

    const update = () => {
      if (!battery) return;
      setLevel(Math.round(Math.min(1, Math.max(0, battery.level)) * 100));
      setCharging(Boolean(battery.charging));
    };

    readBatteryManager()
      .then((manager) => {
        if (cancelled || !manager) return;
        battery = manager;
        update();
        manager.addEventListener("levelchange", update);
        manager.addEventListener("chargingchange", update);
      })
      .catch(() => {
        if (!cancelled) setLevel(null);
      });

    return () => {
      cancelled = true;
      battery?.removeEventListener("levelchange", update);
      battery?.removeEventListener("chargingchange", update);
    };
  }, []);

  return { level, charging };
}

function BatteryStatusIcon({
  level,
  charging,
}: {
  level: number | null;
  charging: boolean;
}) {
  const pct = level ?? 0;
  const fillWidth = level == null ? 0 : Math.max(1.2, (pct / 100) * 14);

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="7"
        width="18"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect x="21" y="10" width="2.2" height="4" rx="0.6" fill="currentColor" />
      {level != null ? (
        <rect
          x="4"
          y="9"
          width={fillWidth}
          height="6"
          rx="0.8"
          fill="currentColor"
          opacity={pct <= 15 ? 0.55 : 0.9}
        />
      ) : null}
      {charging ? (
        <path
          d="M11.6 8.4 9.4 12.2h2.2L10.8 15.6l3.2-4.4h-2.2L13.2 8.4h-1.6Z"
          fill="var(--bg-card)"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      ) : null}
    </svg>
  );
}

const socials = [
  {
    label: "Github",
    href: profile.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.94 8.5H3.75V20h3.19V8.5ZM5.34 3C4.22 3 3.3 3.92 3.3 5.04c0 1.11.91 2.04 2.05 2.04h.02c1.13 0 2.04-.93 2.04-2.04C7.4 3.92 6.48 3 5.34 3ZM20.25 20h-3.18v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.43-.81 1.47-1.66 3.02-1.66 3.23 0 3.83 2.13 3.83 4.9V20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function SocialDock() {
  const { theme, setThemePreference } = useTheme();
  const { level, charging } = useBatteryStatus();
  const batteryLabel =
    level == null
      ? "Battery status unavailable"
      : charging
        ? `Battery ${level}%, charging`
        : `Battery ${level}%`;

  return (
    <aside className="social-dock" aria-label="Social links and theme">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-dock-link"
        >
          {icon}
          {label}
        </a>
      ))}
      <div className="social-dock-themes">
        <button
          type="button"
          className={`social-dock-theme${theme === "dark" ? " is-active" : ""}`}
          aria-label="Dark mode"
          title="Dark mode"
          onClick={() => setThemePreference("dark")}
        >
          <Moon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
        </button>
        <span
          className="social-dock-theme social-dock-battery"
          role="status"
          aria-live="polite"
          aria-label={batteryLabel}
          title={batteryLabel}
        >
          <BatteryStatusIcon level={level} charging={charging} />
          <span className="social-dock-battery-pct">
            {level == null ? "—" : `${level}%`}
          </span>
        </span>
        <button
          type="button"
          className={`social-dock-theme${theme === "light" ? " is-active" : ""}`}
          aria-label="Light mode"
          title="Light mode"
          onClick={() => setThemePreference("light")}
        >
          <Sun className="h-4 w-4" strokeWidth={1.7} aria-hidden />
        </button>
      </div>
    </aside>
  );
}
