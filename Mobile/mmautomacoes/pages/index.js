import { useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/Logo";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/login"), 1800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 transition-colors dark:bg-primary-dark">
      <div className="animate-pulse">
        <Logo size="xl" priority />
      </div>
      <p className="mt-10 text-sm text-muted">Carregando…</p>
    </div>
  );
}
