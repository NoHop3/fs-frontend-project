import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Reads the theme the inline script in index.html already applied, and keeps the
 * document in sync. Nothing is written to storage until the visitor actually
 * toggles, so an untouched site keeps following the operating system setting.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // storage can be unavailable (private mode, blocked cookies) — the theme still applies
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
