"use client";

import { useEffect, useState } from "react";

type BatteryManager = {
  level: number;
  charging: boolean;
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
};

type NavigatorWithBattery = Navigator & {
  getBattery?: () => Promise<BatteryManager>;
};

export function useBattery() {
  const [level, setLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const nav = navigator as NavigatorWithBattery;
    if (!nav.getBattery) {
      setSupported(false);
      return;
    }

    let battery: BatteryManager | null = null;

    const sync = () => {
      if (!battery) return;
      setLevel(Math.round(battery.level * 100));
      setCharging(battery.charging);
    };

    nav.getBattery().then((b) => {
      battery = b;
      sync();
      b.addEventListener("levelchange", sync);
      b.addEventListener("chargingchange", sync);
    });

    return () => {
      if (!battery) return;
      battery.removeEventListener("levelchange", sync);
      battery.removeEventListener("chargingchange", sync);
    };
  }, []);

  return { level, charging, supported };
}
