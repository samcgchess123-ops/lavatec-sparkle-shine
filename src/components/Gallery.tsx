export default function Gallery() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados <span className="text-gradient">Reales</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mira el cambio extremo que logramos en cada servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-border bg-card"
            >
              <div className="grid grid-cols-2">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium">
                  ANTES
                </div>
                <div className="aspect-[4/3] bg-accent/10 flex items-center justify-center text-accent-foreground text-sm font-medium">
                  DESPUÉS
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {i === 1
                    ? "Limpieza profunda de sofá — Resultado impecable"
                    : "Desinfección de colchón — Como nuevo"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          * Espacio reservado para fotos reales de nuestros clientes
        </p>
      </div>
    </section>
  );
}
