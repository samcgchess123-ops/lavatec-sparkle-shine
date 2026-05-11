import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import HealthSection from "@/components/HealthSection";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Commitment from "@/components/Commitment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAVATEC — Un hogar más limpio, una vida más sana" },
      {
        name: "description",
        content:
          "Limpieza profunda y desinfección profesional de muebles, colchones y vehículos a domicilio en Barranquilla. +30 años cuidando tu salud.",
      },
      { property: "og:title", content: "LAVATEC — Limpieza Premium en Barranquilla" },
      {
        property: "og:description",
        content:
          "Un hogar más limpio, una vida más sana. Servicio profesional a domicilio.",
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
      <Gallery />
      <Commitment />
      <FinalCTA />
    </>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-cyan-accent p-10 md:p-16 text-center premium-shadow relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              ¿Listo para un hogar más sano?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-8">
              Agenda tu servicio hoy y descubre la diferencia de una limpieza profesional.
            </p>
            <Link
              to="/agendar"
              className="inline-flex items-center gap-2 bg-background text-foreground rounded-full px-8 py-4 text-sm font-semibold shadow-xl hover:scale-[1.03] transition-all"
            >
              Agendar mi limpieza
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
