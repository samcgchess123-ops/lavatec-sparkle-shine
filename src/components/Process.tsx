import { Search, Droplets, Wind, ShieldCheck, Sun } from "lucide-react";
import processImg from "@/assets/process-cleaning.jpg";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Inspección",
    desc: "Evaluamos el material, tipo de manchas y necesidades específicas de tu mueble.",
  },
  {
    num: "02",
    icon: Droplets,
    title: "Limpieza profunda",
    desc: "Aplicamos productos eco-friendly que penetran las fibras sin dañarlas.",
  },
  {
    num: "03",
    icon: Wind,
    title: "Extracción",
    desc: "Tecnología de alta succión que retira polvo, ácaros y residuos invisibles.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Sanitización",
    desc: "Desinfección que neutraliza bacterias y alérgenos para un ambiente saludable.",
  },
  {
    num: "05",
    icon: Sun,
    title: "Secado",
    desc: "Sistema de secado acelerado para que vuelvas a usar tus muebles rápidamente.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
              Nuestro Proceso
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Un método probado en <span className="italic text-gradient">5 pasos</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Cada servicio sigue un protocolo profesional pensado para garantizar resultados
              impecables y, sobre todo, un ambiente más sano para tu familia.
            </p>
            <div className="rounded-3xl overflow-hidden premium-shadow">
              <img
                src={processImg}
                alt="Técnico Lavatec realizando limpieza profesional"
                loading="lazy"
                width={1080}
                height={1440}
                className="w-full h-72 lg:h-[440px] object-cover"
              />
            </div>
          </div>

          {/* Steps */}
          <ol className="lg:col-span-7 space-y-4">
            {steps.map((s) => (
              <li
                key={s.num}
                className="group flex gap-5 p-6 md:p-7 rounded-3xl border border-border bg-card hover:border-primary/30 hover:bg-card/50 transition-all"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-display text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 mt-2">
                    {s.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
