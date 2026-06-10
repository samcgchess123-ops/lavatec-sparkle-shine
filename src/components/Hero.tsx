import { Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, ArrowRight, Droplets } from "lucide-react";
import heroBg from "@/assets/hero-premium.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Hogar limpio e higienizado con vapor profesional"
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
            Más de 12 años de experiencia
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-7xl font-bold leading-[1.05] text-background mb-6 reveal reveal-delay-1">
            Higienización profunda
            <br />
            <span className="italic text-accent">con vapor profesional.</span>
          </h1>
          <p className="text-base md:text-xl text-background/85 mb-8 max-w-xl leading-relaxed reveal reveal-delay-2">
            Especialistas en limpieza profunda de muebles, alfombras, cortinas, colchones,
            tapizados y camas para mascotas. Eliminamos manchas, malos olores y alérgenos
            mientras cuidamos las fibras de cada superficie.
          </p>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-2 mb-10 max-w-md text-sm text-background/85 reveal reveal-delay-2">
            <li className="flex items-center gap-2"><Droplets size={14} className="text-accent" /> Vapor sanitizante</li>
            <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Elimina manchas y olores</li>
            <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-accent" /> Seguro para niños y mascotas</li>
            <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Cuida las fibras</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
            <Link
              to="/agendar"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-4 text-sm font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              Agendar mi servicio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 glass-dark text-background rounded-full px-7 py-4 text-sm font-semibold hover:bg-background/15 transition-all"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-background/60 text-[11px] uppercase tracking-[0.3em] float-slow">
        Desliza
      </div>
    </section>
  );
}
