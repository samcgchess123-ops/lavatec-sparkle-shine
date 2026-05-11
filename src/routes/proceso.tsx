import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Nuestro Proceso — LAVATEC" },
      {
        name: "description",
        content:
          "Conoce el método profesional de 5 pasos de Lavatec: inspección, limpieza profunda, extracción, sanitización y secado.",
      },
      { property: "og:title", content: "Nuestro Proceso — LAVATEC" },
      {
        property: "og:description",
        content: "Un método profesional probado para resultados impecables.",
      },
    ],
  }),
  component: ProcesoPage,
});

function ProcesoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cómo trabajamos"
        title="Un proceso profesional,"
        highlight="paso a paso"
        description="Cada servicio sigue un protocolo riguroso para garantizar resultados visibles y un ambiente más sano para tu familia."
      />
      <Process />
      <Gallery />
    </>
  );
}
