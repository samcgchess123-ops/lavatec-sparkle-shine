import sofaBefore from "@/assets/sofa-before.jpg";
import sofaAfter from "@/assets/sofa-after.jpg";
import mattressBefore from "@/assets/mattress-before.jpg";
import mattressAfter from "@/assets/mattress-after.jpg";
import carBefore from "@/assets/car-before.jpg";
import carAfter from "@/assets/car-after.jpg";

const items = [
  { before: sofaBefore, after: sofaAfter, label: "Limpieza profunda de sofá" },
  { before: mattressBefore, after: mattressAfter, label: "Desinfección de colchón" },
  { before: carBefore, after: carAfter, label: "Detallado de sillas de auto" },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Resultados Reales
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Antes y <span className="italic text-gradient">después</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Mira el cambio extremo que logramos en cada servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden border border-border bg-card card-hover"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={item.before}
                    alt={`${item.label} - antes`}
                    loading="lazy"
                    width={340}
                    height={256}
                    className="w-full h-44 md:h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-foreground/85 text-background text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.after}
                    alt={`${item.label} - después`}
                    loading="lazy"
                    width={340}
                    height={256}
                    className="w-full h-44 md:h-56 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Después
                  </span>
                </div>
              </div>
              <div className="p-5 text-center">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
