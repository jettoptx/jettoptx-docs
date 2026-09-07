import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle="true"
      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[var(--color-orange-500)] transition-colors hover:bg-fd-accent hover:text-[var(--color-orange-400)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange-500)]/40"
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
    >
      <Sun className="size-4 hidden dark:block" aria-hidden="true" />
      <Moon className="size-4 block dark:hidden" aria-hidden="true" />
    </button>
  );
}
