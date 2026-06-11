import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import HealthSection from "@/components/HealthSection";
import Services from "@/components/Services";
import BusinessServices from "@/components/BusinessServices";
import Gallery from "@/components/Gallery";
import Commitment from "@/components/Commitment";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAVATEC — Higienización profunda con vapor profesional" },
      {
        name: "description",
        content:
          "Especialistas en limpieza profunda e higienización con vapor de muebles, alfombras, cortinas, colchones, tapizados y camas para mascotas. Más de 12 años de experiencia.",
      },
      { property: "og:title", content: "LAVATEC — Limpieza Premium con Vapor" },
      {
        property: "og:description",
        content:
          "Higienización profunda con vapor profesional. Cuidamos tu hogar y a tus mascotas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HealthSection />
      <Services compact />
      <BusinessServices />
      <Gallery />
      <Commitment />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </>
  );
}
