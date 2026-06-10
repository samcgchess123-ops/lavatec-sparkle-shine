import { Link } from "@tanstack/react-router";
import { Building2, GraduationCap, BedDouble, ArrowRight, BadgeCheck } from "lucide-react";

const blocks = [
  {
    icon: Building2,
    title: "Mobiliario Corporativo",
    desc: "Higienización integral para oficinas, salas de juntas, recepciones y espacios de coworking.",
    items: ["Oficinas", "Salas de juntas", "Recepciones", "Coworkings"],
  },
  {
    icon: GraduationCap,
    title: "Mobiliario Institucional",
    desc: "Servicio especializado para entidades que requieren altos estándares de higiene.",
    items: ["Colegios", "Universidades", "Clínicas", "Consultorios", "Entidades"],
  },
];

export default function BusinessServices() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Servicios Empresariales
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Soluciones premium para tu <span className="italic text-gradient">negocio</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Mantenemos tus espacios profesionales impecables con limpieza profunda y sanitización con vapor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 card-hover relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/5" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center mb-5 shadow-lg">
                  <b.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {b.items.map((i) => (
                    <li
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Airbnb block */}
        <div className="rounded-3xl bg-gradient-to-br from-primary to-cyan-accent p-8 md:p-12 text-primary-foreground premium-shadow relative overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="w-16 h-16 rounded-2xl bg-background/15 backdrop-blur flex items-center justify-center shrink-0">
              <BedDouble size={30} className="text-primary-foreground" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-accent mb-2">
                Servicio para Airbnb
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Mantén el estándar premium de tu Airbnb
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed max-w-2xl">
                Ayudamos a propietarios y administradores a mantener muebles, colchones,
                tapizados y textiles impecables entre huéspedes, prolongando la vida útil y
                mejorando la experiencia del cliente.
              </p>
            </div>
          </div>
        </div>

        {/* Featured message + CTA */}
        <div className="rounded-2xl border border-accent/40 bg-accent/5 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
          <div className="flex items-center gap-3">
            <BadgeCheck size={22} className="text-accent shrink-0" />
            <p className="text-sm md:text-base text-foreground font-medium">
              Adaptamos el precio según el volumen y las necesidades de tu empresa.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/agendar"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            AGENDA TU SERVICIO
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
