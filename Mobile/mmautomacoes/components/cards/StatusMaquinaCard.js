import { Thermometer } from "lucide-react";

export default function StatusMaquinaCard({
  temperatura = 85,
  estado = "Crítico",
}) {
  const estadoColor =
    estado === "Crítico"
      ? "text-danger"
      : estado === "Alerta"
      ? "text-warning"
      : "text-success";

  return (
    <section className="flex h-[100%] flex-col rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition-colors dark:bg-primary-base/15 dark:shadow-2xl dark:shadow-primary-base/20 dark:ring-primary-base/40">
      <h2 className="text-center text-lg font-bold md:text-xl">
        Status da máquina
      </h2>

      <div className="mt-4 flex flex-1 items-center justify-center gap-6">
        <Thermometer size={72} className="text-danger" strokeWidth={1.75} />
        <span className="text-2xl font-bold leading-none md:text-[2.25rem] lg:text-[2.75rem]">
          {temperatura}ºC
        </span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-base">
        <span className="text-muted">Estado:</span>
        <span className={`font-semibold ${estadoColor}`}>{estado}</span>
      </div>
    </section>
  );
}
