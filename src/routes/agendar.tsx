import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export const Route = createFileRoute("/agendar")({
  head: () => ({
    meta: [
      { title: "Agendar tu servicio — LAVATEC" },
      {
        name: "description",
        content:
          "Reserva tu cita de limpieza profesional en Barranquilla. Te contactamos en menos de 1 hora.",
      },
      { property: "og:title", content: "Agendar tu servicio — LAVATEC" },
      {
        property: "og:description",
        content: "Reserva tu cita de limpieza profesional a domicilio.",
      },
    ],
  }),
  component: AgendarPage,
});

function AgendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Agendar"
        title="Reserva tu cita en"
        highlight="minutos"
        description="Cuéntanos lo que necesitas y nuestro equipo te contactará en menos de 1 hora."
      />
      <ContactForm />
      <FAQ />
    </>
  );
}
