import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import HealthSection from "@/components/HealthSection";
import Services from "@/components/Services";
import BusinessServices from "@/components/BusinessServices";
import Gallery from "@/components/Gallery";
import Commitment from "@/components/Commitment";
import Guarantee from "@/components/Guarantee";
import BlogPreview from "@/components/BlogPreview";
import { whatsappLink } from "@/lib/services-data";

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
      <BlogPreview />
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
              Higieniza tus muebles, colchones y textiles con vapor profesional.
            </p>
            <a
              href={whatsappLink("Hola Lavatec, quiero agendar un servicio de limpieza.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-8 py-4 text-sm font-semibold shadow-xl hover:scale-[1.03] transition-all"
            >
              <MessageCircle size={16} />
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
