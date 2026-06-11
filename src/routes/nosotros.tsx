import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Commitment from "@/components/Commitment";
import HealthSection from "@/components/HealthSection";
import FinalCTA from "@/components/FinalCTA";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — LAVATEC" },
      {
        name: "description",
        content:
          "Más de 12 años de experiencia cuidando familias en Barranquilla. Conoce el compromiso de Lavatec con tu salud, tu hogar y tu bienestar.",
      },
      { property: "og:title", content: "Nosotros — LAVATEC" },
      {
        property: "og:description",
        content: "Comprometidos con espacios más sanos para tu familia.",
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Más de 12 años de experiencia cuidando"
        highlight="hogares"
        description="Lavatec nació para ofrecer un servicio profesional, honesto y comprometido con la salud de las familias barranquilleras."
      />
      <Commitment />
      <HealthSection />
      <FinalCTA />
    </>
  );
}
