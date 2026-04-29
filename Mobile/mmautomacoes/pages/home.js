import Layout from "@/components/Layout";
import StatusMaquinaCard from "@/components/cards/StatusMaquinaCard";
import GraficoTemperaturaCard from "@/components/cards/GraficoTemperaturaCard";
import EventosRecentesCard from "@/components/cards/EventosRecentesCard";
import ControleAlertaCard from "@/components/cards/ControleAlertaCard";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-1">
          <StatusMaquinaCard />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <GraficoTemperaturaCard />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <EventosRecentesCard />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <ControleAlertaCard />
        </div>
      </div>
    </Layout>
  );
}
