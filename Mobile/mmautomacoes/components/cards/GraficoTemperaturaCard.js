const points = [
  [0, 60],
  [12, 50],
  [24, 70],
  [36, 40],
  [48, 55],
  [60, 30],
  [72, 50],
  [84, 25],
  [96, 45],
  [100, 35],
];

const horas = ["10am", "11am", "12pm", "01pm", "02pm", "03pm", "04pm", "05pm", "06pm"];
const ticks = [100, 80, 60, 40, 20, 0];

export default function GraficoTemperaturaCard() {
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");
  const area = `${path} L 100 100 L 0 100 Z`;

  return (
    <section className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition-colors dark:bg-primary-base/15 dark:shadow-2xl dark:shadow-primary-base/20 dark:ring-primary-base/40">
      <h2 className="text-lg font-bold md:text-xl">Gráfico de temperatura</h2>
      <div className="mt-4 flex h-48 gap-2">
        <div className="flex flex-col justify-between text-2xs text-muted">
          {ticks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="relative flex-1">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden
          >
            {ticks.map((_, i) => (
              <line
                key={i}
                x1="0"
                x2="100"
                y1={i * 20}
                y2={i * 20}
                stroke="#A2AAB3"
                strokeWidth="0.3"
                strokeDasharray="1,1"
              />
            ))}
            <path d={area} fill="#185ADB" fillOpacity="0.25" />
            <path d={path} fill="none" stroke="#185ADB" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="mt-2 ml-7 flex justify-between text-2xs text-muted">
        {horas.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
    </section>
  );
}
