import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="rounded-full p-2 text-primary-dark transition-colors hover:bg-black/10 dark:text-surface dark:hover:bg-white/10"
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
