import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Cpu, FileDown, LifeBuoy, LogOut } from "lucide-react";

const items = [
  { label: "Células", href: "/home", icon: Cpu },
  { label: "Exportação de dados", href: "/home", icon: FileDown },
  { label: "Suporte", href: "/home", icon: LifeBuoy },
];

export default function MenuDrawer({ open, onClose }) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleLogout() {
    onClose();
    router.push("/login");
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden
      />
      <div
        className={`fixed right-4 top-20 z-50 w-60 origin-top-right rounded-xl bg-white text-primary-dark shadow-2xl ring-1 ring-black/10 transition md:right-10 md:top-24 md:w-64 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        role="menu"
        aria-label="Menu"
      >
        <div
          aria-hidden
          className="absolute -top-1.5 right-5 h-3 w-3 rotate-45 rounded-[2px] bg-white ring-1 ring-black/10"
        />
        <nav className="flex flex-col gap-0.5 p-2">
          {items.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              role="menuitem"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-primary-dark hover:bg-black/5"
            >
              <Icon size={18} className="text-muted" />
              {label}
            </Link>
          ))}
          <div className="my-1.5 h-px bg-black/10" />
          <button
            type="button"
            onClick={handleLogout}
            role="menuitem"
            className="mx-2 mb-1 mt-0.5 flex items-center justify-center gap-2 self-center rounded-md bg-danger px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow shadow-danger/40 transition hover:bg-danger/90 active:scale-[0.98]"
          >
            <LogOut size={14} />
            Logout
          </button>
        </nav>
      </div>
    </>
  );
}
