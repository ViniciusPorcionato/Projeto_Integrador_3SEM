import { useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";

export default function ControleAlertaCard() {
  const [ligado, setLigado] = useState(true);

  return (
    <section className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition-colors dark:bg-primary-base/15 dark:shadow-2xl dark:shadow-primary-base/20 dark:ring-primary-base/40">
      <h2 className="text-lg font-bold md:text-xl lg:text-center">
        Controle de alerta
      </h2>
      <div className="mt-6 flex flex-1 flex-col items-center justify-start gap-5 lg:mt-0 lg:justify-center">
        <button
          type="button"
          onClick={() => setLigado((v) => !v)}
          aria-pressed={ligado}
          className="w-full max-w-xs rounded-xl bg-danger px-4 py-4 text-center text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-danger/40 ring-1 ring-danger/60 transition hover:bg-danger/90 active:scale-[0.98] md:text-lg"
        >
          Ligar / Desligar ALERTA
        </button>
        <div className="flex items-center justify-center gap-2 text-base">
          {ligado ? (
            <Lightbulb size={20} className="text-warning" />
          ) : (
            <LightbulbOff size={20} className="text-muted" />
          )}
          <span className="text-muted">Status:</span>
          <span
            className={`font-semibold ${
              ligado ? "text-success" : "text-muted"
            }`}
          >
            {ligado ? "LIGADO" : "DESLIGADO"}
          </span>
        </div>
      </div>
    </section>
  );
}
