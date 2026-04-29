import { Download } from "lucide-react";
import { eventos } from "@/lib/eventos";

export default function EventosRecentesCard() {
  function exportar() {
    const csv = [
      "Hora,Evento,Tipo",
      ...eventos.map((e) => `${e.hora},${e.evento},${e.tipo}`),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "eventos.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition-colors dark:bg-primary-base/15 dark:shadow-2xl dark:shadow-primary-base/20 dark:ring-primary-base/40">
      <h2 className="text-lg font-bold md:text-xl">Eventos Recentes</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-base">
          <thead>
            <tr className="text-left">
              <th className="rounded bg-primary-base/20 px-2 py-1 font-medium dark:bg-primary-base/40">
                Hora
              </th>
              <th className="rounded bg-primary-base/20 px-2 py-1 font-medium dark:bg-primary-base/40">
                Evento
              </th>
              <th className="rounded bg-primary-base/20 px-2 py-1 text-right font-medium dark:bg-primary-base/40">
                Tipo
              </th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((e) => (
              <tr
                key={e.hora}
                className="border-b border-black/10 dark:border-white/10"
              >
                <td className="px-2 py-2">{e.hora}</td>
                <td className="px-2 py-2">{e.evento}</td>
                <td className="px-2 py-2 text-right">{e.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={exportar}
          className="inline-flex items-center gap-2 rounded-md bg-primary-base px-4 py-2 text-sm font-bold text-surface shadow hover:bg-primary-base/80"
        >
          <Download size={16} />
          Exportar dados
        </button>
      </div>
    </section>
  );
}
