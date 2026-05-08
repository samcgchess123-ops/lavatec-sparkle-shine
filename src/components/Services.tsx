import { Sofa, BedDouble, Car, Blinds, Shirt } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Limpieza de Muebles",
    desc: "Sala, comedor y poltronas con tecnología de extracción profunda.",
  },
  {
    icon: BedDouble,
    title: "Desinfección de Colchones",
    desc: "Eliminación de ácaros, bacterias y manchas para un descanso saludable.",
  },
  {
    icon: Car,
    title: "Detallado de Vehículos",
    desc: "Cojinería, alfombras, techos y desinfección de interiores.",
  },
  {
    icon: Blinds,
    title: "Alfombras y Cortinas",
    desc: "Lavado delicado que renueva las fibras y elimina olores.",
  },
  {
    icon: Shirt,
    title: "Lavado en Seco",
    desc: "Cuidado experto para tus prendas más delicadas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluciones completas de limpieza profesional para cada rincón de tu hogar y vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 border border-border card-hover cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
