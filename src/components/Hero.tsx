import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Sofá limpio en sala moderna"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6 backdrop-blur-sm border border-accent/30">
          <Sparkles size={14} />
          Más de 30 años de experiencia
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
          Recuperamos la vida de tus muebles y vehículos{" "}
          <span className="text-accent">hoy mismo</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Servicio profesional de limpieza y desinfección profunda a domicilio en Barranquilla. Cuidamos tu hogar con tecnología de punta.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-10 py-6 rounded-full" asChild>
          <a href="#contacto">¡Quiero una limpieza!</a>
        </Button>
      </div>
    </section>
  );
}
