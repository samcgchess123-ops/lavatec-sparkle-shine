import { Wind, Sparkles, HeartPulse } from "lucide-react";
import healthImg from "@/assets/health-mattress.jpg";

const stats = [
  {
    icon: Wind,
    value: "1/3",
    label: "de tu vida",
    desc: "lo pasas sobre tu colchón. Merece la limpieza más profunda.",
  },
  {
    icon: Sparkles,
    value: "+200",
    label: "tipos de partículas",
    desc: "se acumulan en muebles y colchones sin una desinfección regular.",
  },
  {
    icon: HeartPulse,
    value: "100%",
    label: "respirable",
    desc: "una limpieza profunda ayuda a crear espacios más saludables.",
  },
];

export default function HealthSection() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden premium-shadow">
              <img
                src={healthImg}
                alt="Colchón limpio en habitación luminosa"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-5 max-w-[220px] premium-shadow">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Aire más puro
                </span>
              </div>
              <p className="text-sm text-foreground leading-snug">
                Reducimos ácaros, polvo y alérgenos invisibles.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
              Salud & Bienestar
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Lo que no ves
              <br />
              <span className="italic text-gradient">también afecta tu salud.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Sofás, colchones y tapicerías acumulan ácaros, bacterias, polvo y alérgenos que
              pueden afectar tu descanso y bienestar respiratorio. Una limpieza profunda
              regular crea un ambiente más sano para ti y tu familia.
            </p>

            <div className="space-y-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex gap-4 p-5 rounded-2xl border border-border bg-card card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground leading-none">
                      {s.value}{" "}
                      <span className="text-sm font-sans font-medium text-muted-foreground">
                        {s.label}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
