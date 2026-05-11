import { Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-premium.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Sala con sofá limpio y luz natural"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-background/90 mb-7 reveal">
            <Sparkles size={13} className="text-accent" />
            Más de 30 años cuidando hogares en Barranquilla
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-7xl font-bold leading-[1.05] text-background mb-6 reveal reveal-delay-1">
            Un hogar más limpio,
            <br />
            <span className="italic text-accent">una vida más sana.</span>
          </h1>
          <p className="text-base md:text-xl text-background/85 mb-10 max-w-xl leading-relaxed reveal reveal-delay-2">
            Limpieza profunda y desinfección profesional de muebles, colchones y vehículos.
            Eliminamos lo invisible para que respires tranquilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
            <Link
              to="/agendar"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-4 text-sm font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              Agendar mi limpieza
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 glass-dark text-background rounded-full px-7 py-4 text-sm font-semibold hover:bg-background/15 transition-all"
            >
              Ver servicios
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-background/80 text-sm reveal reveal-delay-4">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" /> Garantía de satisfacción
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" /> Productos eco-friendly
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-background/60 text-[11px] uppercase tracking-[0.3em] float-slow">
        Desliza
      </div>
    </section>
  );
}
