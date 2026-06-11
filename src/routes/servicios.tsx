import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — LAVATEC" },
      {
        name: "description",
        content:
          "Limpieza profunda con vapor de muebles, colchones, alfombras, cortinas, tapizados y camas para mascotas.",
      },
      { property: "og:title", content: "Servicios — LAVATEC" },
      {
        property: "og:description",
        content: "Higienización premium con vapor profesional para tu hogar.",
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
        title="Higienización profunda para cada"
        highlight="rincón"
        description="Toca cada servicio para ver detalles, proceso, beneficios y precios."
      />
      <Services compact />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </>
  );
}
