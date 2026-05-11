import { Sofa, BedDouble, Car, Blinds, Shirt, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Sofa,
    title: "Limpieza de Muebles",
    desc: "Sala, comedor y poltronas con extracción profunda y secado rápido.",
  },
  {
    icon: BedDouble,
    title: "Desinfección de Colchones",
    desc: "Eliminamos ácaros, bacterias y manchas para un descanso saludable.",
  },
  {
    icon: Car,
    title: "Detallado de Vehículos",
    desc: "Cojinería, alfombras, techos y desinfección completa de interiores.",
  },
  {
    icon: Blinds,
    title: "Alfombras y Cortinas",
    desc: "Lavado delicado que renueva las fibras y elimina olores persistentes.",
  },
  {
    icon: Shirt,
    title: "Lavado en Seco",
    desc: "Cuidado experto para tus prendas más delicadas y especiales.",
  },
  {
    icon: Sparkles,
    title: "Sanitización Premium",
    desc: "Tratamientos profesionales para hogares con niños, mascotas o alergias.",
  },
];

export default function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Lo que hacemos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Servicios pensados para tu <span className="italic text-gradient">bienestar</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Soluciones profesionales de limpieza profunda para cada espacio de tu hogar y vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-3xl p-7 md:p-8 border border-border card-hover relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center mb-5 shadow-lg">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                  0{i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <div className="mt-14 text-center">
            <Link
              to="/agendar"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-4 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              Agendar tu servicio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
