import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import BusinessServices from "@/components/BusinessServices";
import FAQ from "@/components/FAQ";

export const Route = createFileRoute("/empresarial")({
  head: () => ({
    meta: [
      { title: "Servicios Empresariales — LAVATEC" },
      {
        name: "description",
        content:
          "Limpieza e higienización con vapor para oficinas, instituciones y Airbnb. Adaptamos el precio al volumen.",
      },
      { property: "og:title", content: "Servicios Empresariales — LAVATEC" },
      {
        property: "og:description",
        content:
          "Soluciones premium de limpieza con vapor para mobiliario corporativo, institucional y Airbnb.",
      },
    ],
  }),
  component: EmpresarialPage,
});

function EmpresarialPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresarial"
        title="Higienización profesional para tu"
        highlight="negocio"
        description="Mantenemos tu mobiliario corporativo e institucional impecable con vapor profesional."
      />
      <BusinessServices />
      <FAQ />
    </>
  );
}
