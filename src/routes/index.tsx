import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAVATEC — Lavado en Seco & Limpieza de Muebles en Barranquilla" },
      {
        name: "description",
        content:
          "Servicio profesional de limpieza y desinfección profunda a domicilio en Barranquilla. Muebles, colchones, vehículos y más. +30 años de experiencia.",
      },
      { property: "og:title", content: "LAVATEC — Especialistas en Limpieza de Muebles" },
      {
        property: "og:description",
        content:
          "Recuperamos la vida de tus muebles y vehículos. Limpieza profesional a domicilio en Barranquilla.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
