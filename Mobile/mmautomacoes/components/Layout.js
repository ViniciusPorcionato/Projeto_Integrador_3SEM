import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MenuDrawer from "./MenuDrawer";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-primary-dark transition-colors dark:bg-primary-dark dark:text-surface">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-5 md:px-10">
        <Logo size="md" priority />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full p-2 text-primary-dark hover:bg-black/10 dark:text-surface dark:hover:bg-white/10"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:px-10 md:pt-10">
        {children}
      </main>
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
