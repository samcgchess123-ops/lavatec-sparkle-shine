import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — LAVATEC" },
      {
        name: "description",
        content:
          "Limpieza profunda de muebles, colchones, alfombras, cortinas y vehículos. Servicio profesional a domicilio en Barranquilla.",
      },
      { property: "og:title", content: "Servicios — LAVATEC" },
      {
        property: "og:description",
        content: "Soluciones premium de limpieza profesional para tu hogar y vehículo.",
      },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Limpieza profesional para cada"
        highlight="rincón"
        description="Cubrimos todo lo que tu hogar y vehículo necesitan, con productos seguros y técnicas profesionales."
      />
      <Services compact />
      <FAQ />
    </>
  );
}
