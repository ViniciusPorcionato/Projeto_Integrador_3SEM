import { useState } from "react";
import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!usuario.trim() || !senha.trim()) {
      setErro("Preencha usuário e senha.");
      return;
    }
    setErro("");
    router.push("/home");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-surface px-6 py-10 text-primary-dark transition-colors dark:bg-primary-dark dark:text-surface">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-mobile md:max-w-md">
        <div className="flex justify-center">
          <Logo size="lg" priority />
        </div>
        <p className="mt-10 text-center text-base">
          Entrar com seu usuário fornecido
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="sr-only">Usuário</span>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuário"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-base text-primary-dark shadow-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-base dark:border-white/10 dark:bg-surface dark:text-primary-dark"
              autoComplete="username"
            />
          </label>
          <label className="block">
            <span className="sr-only">Senha</span>
            <div className="relative">
              <input
                type={showSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 pr-12 text-base text-primary-dark shadow-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-base dark:border-white/10 dark:bg-surface dark:text-primary-dark"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowSenha((v) => !v)}
                aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-primary-dark hover:bg-black/5"
              >
                {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </label>
          {erro && <p className="text-sm text-danger">{erro}</p>}
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-primary-base py-4 text-base font-semibold text-white shadow-lg shadow-primary-base/30 transition hover:bg-primary-base/90 active:scale-[0.99]"
          >
            Logar
          </button>
        </form>
      </div>
    </div>
  );
}
