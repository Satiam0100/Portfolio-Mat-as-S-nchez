"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export const THEME_LOCAL_STORAGE_KEY = "theme";

function applyDomTheme(isDarkMode: boolean) {
  document.documentElement.classList.toggle("dark", isDarkMode);
}

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;

    const savedTheme = window.localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const transitionDuration = 300;

    applyDomTheme(isDark);
    try {
      window.localStorage.setItem(
        THEME_LOCAL_STORAGE_KEY,
        isDark ? "dark" : "light",
      );
    } catch {
      /* ignore */
    }

    if (isDark) {
      root.style.transition = "";
    } else {
      root.style.transition = `background-color ${transitionDuration}ms ease-in-out`;
      window.setTimeout(() => {
        root.style.transition = "";
      }, transitionDuration);
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = window.localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
      if (saved === "dark" || saved === "light") return;
      setIsDark(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isDark, setIsDark };
};
