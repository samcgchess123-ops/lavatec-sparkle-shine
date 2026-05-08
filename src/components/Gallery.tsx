import sofaBefore from "@/assets/sofa-before.jpg";
import sofaAfter from "@/assets/sofa-after.jpg";
import mattressBefore from "@/assets/mattress-before.jpg";
import mattressAfter from "@/assets/mattress-after.jpg";
import carBefore from "@/assets/car-before.jpg";
import carAfter from "@/assets/car-after.jpg";

const items = [
  { before: sofaBefore, after: sofaAfter, label: "Limpieza profunda de sofá — Resultado impecable" },
  { before: mattressBefore, after: mattressAfter, label: "Desinfección de colchón — Como nuevo" },
  { before: carBefore, after: carAfter, label: "Limpieza de sillas de auto — Detallado profesional" },
];

export default function Gallery() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados <span className="text-gradient">Reales</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mira el cambio extremo que logramos en cada servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-border bg-card card-hover">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={item.before} alt="Antes" loading="lazy" width={340} height={256} className="w-full h-40 md:h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">ANTES</span>
                </div>
                <div className="relative">
                  <img src={item.after} alt="Después" loading="lazy" width={340} height={256} className="w-full h-40 md:h-48 object-cover" />
                  <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">DESPUÉS</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
