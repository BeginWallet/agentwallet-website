"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial =
      (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("aw-theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={
        mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"
      }
      onClick={toggle}
      suppressHydrationWarning
    >
      <span className="theme-toggle-glyph" aria-hidden="true">
        {mounted ? (theme === "dark" ? "☼" : "☾") : "☼"}
      </span>
    </button>
  );
}
