import { ShieldCheck, Sparkles, Droplets, HeartPulse } from "lucide-react";

const points = [
  { icon: Droplets, title: "Limpieza profunda", desc: "Vapor profesional que penetra las fibras textiles." },
  { icon: Sparkles, title: "Higienización efectiva", desc: "Sanitiza la superficie tratada con calor controlado." },
  { icon: HeartPulse, title: "Frescura y bienestar", desc: "Espacios más saludables para tu familia." },
  { icon: ShieldCheck, title: "Procesos profesionales", desc: "Estándares consistentes en cada servicio." },
];

export default function Guarantee() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card overflow-hidden premium-shadow">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-5">
                <ShieldCheck size={14} /> Nuestra garantía
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                Limpieza e higienización <span className="italic text-gradient">garantizada</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Trabajamos con procesos profesionales orientados a lograr una limpieza profunda
                y una higienización efectiva de las superficies tratadas, brindando mayor
                frescura, bienestar y confianza en cada servicio.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-cyan-accent p-10 md:p-14 lg:p-16 text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
              <div className="relative grid sm:grid-cols-2 gap-5">
                {points.map((p) => (
                  <div key={p.title} className="rounded-2xl bg-background/10 backdrop-blur p-5 border border-background/15">
                    <div className="w-10 h-10 rounded-xl bg-background/15 flex items-center justify-center mb-3">
                      <p.icon size={18} className="text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-xs text-primary-foreground/80 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
