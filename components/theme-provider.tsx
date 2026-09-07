"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";

function toggleTheme(setTheme: (theme: string) => void) {
  const current = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  switch (current) {
    case "light":
      setTheme("dark");
      return;
    case "dark":
      setTheme("light");
      return;
    default: {
      const _exhaustive: never = current;
      return _exhaustive;
    }
  }
}

function ThemeHotkeys() {
  const { setTheme } = useTheme();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const el = event.target;
      if (!(el instanceof Element)) return;
      if (!el.closest("[data-theme-toggle]")) return;
      event.preventDefault();
      toggleTheme(setTheme);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key.toLowerCase() !== "d") return;
      const t = event.target;
      if (t instanceof HTMLElement) {
        const tag = t.tagName;
        if (
          t.isContentEditable ||
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT"
        ) {
          return;
        }
      }
      toggleTheme(setTheme);
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [setTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
    >
      <ThemeHotkeys />
      {children}
    </NextThemesProvider>
  );
}
