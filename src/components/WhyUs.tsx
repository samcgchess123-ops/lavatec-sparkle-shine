import { Home, ShieldCheck, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "A Domicilio",
    desc: "Vamos hasta tu casa u oficina en Barranquilla.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de Satisfacción",
    desc: "Si no te gusta, lo corregimos sin costo.",
  },
  {
    icon: Leaf,
    title: "Productos Eco-Friendly",
    desc: "Seguros para niños y mascotas.",
  },
];

export default function WhyUs() {
  return (
    <section id="proceso" className="py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-16">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5">
                <r.icon size={30} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-primary-foreground/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
