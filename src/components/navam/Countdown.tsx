import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-19T18:00:00+05:30").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center gap-3 sm:gap-6">
          <div className="text-center">
            <div className="font-display text-3xl sm:text-5xl text-gold-foil tabular-nums">
              {String(it.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brass/80">
              {it.label}
            </div>
          </div>
          {i < items.length - 1 && (
            <span className="font-display text-2xl text-gold/50">·</span>
          )}
        </div>
      ))}
    </div>
  );
}
