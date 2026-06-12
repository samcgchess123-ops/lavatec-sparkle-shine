import { useState } from "react";
import { ChevronDown, Clock, CheckCircle2, Droplets, Sparkles, MessageCircle } from "lucide-react";
import { services, whatsappLink } from "@/lib/services-data";

export default function Services({ compact = false, hideHeader = false }: { compact?: boolean; hideHeader?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Servicios para el Hogar
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              Higienización con vapor para tu <span className="italic text-gradient">bienestar</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Toca cada servicio para ver el detalle completo: proceso, beneficios y precios.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => {
            const isOpen = open === s.id;
            return (
              <div
                key={s.id}
                className={`group bg-card rounded-3xl border border-border overflow-hidden transition-all ${
                  isOpen ? "lg:col-span-3 sm:col-span-2 ring-1 ring-primary/30 shadow-xl" : "card-hover"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="w-full text-left p-7 md:p-8 relative"
                  aria-expanded={isOpen}
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center shadow-lg shrink-0">
                      <s.icon size={26} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold text-card-foreground">
                          {s.title}
                        </h3>
                        <ChevronDown
                          size={20}
                          className={`text-muted-foreground shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {s.shortDesc}
                      </p>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border bg-gradient-to-b from-secondary/40 to-background animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-7 md:p-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
                      <div className="md:col-span-2">
                        <p className="text-foreground/80 leading-relaxed">{s.description}</p>
                      </div>

                      <Detail icon={CheckCircle2} title="Beneficios" items={s.benefits} />
                      <Detail icon={Droplets} title="Proceso de limpieza" items={s.process} ordered />
                      <Detail icon={Sparkles} title="Ventajas del vapor" items={s.steamAdvantages} />
                      <Detail icon={CheckCircle2} title="Superficies compatibles" items={s.surfaces} />

                      <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
                        <InfoBox icon={Clock} title="Tiempo aproximado" text={s.duration} />
                        <InfoBox
                          icon={Sparkles}
                          title="Recomendaciones"
                          text={s.recommendations.join(" · ")}
                        />
                      </div>

                      <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Valor</p>
                          <p className="font-display text-2xl font-bold text-primary">{s.priceFrom}</p>
                        </div>
                        <a
                          href={whatsappLink(`Hola Lavatec, quiero cotizar el servicio de ${s.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg hover:scale-[1.03] transition-all"
                        >
                          <MessageCircle size={16} />
                          CONTACTANOS
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {compact && (
          <div className="mt-14 text-center">
            <a
              href={whatsappLink("Hola Lavatec, quiero información sobre sus servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-4 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              <MessageCircle size={16} />
              CONTACTANOS
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  title,
  items,
  ordered = false,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-accent" />
        <h4 className="font-display text-base font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold shrink-0">
              {ordered ? `${i + 1}.` : "·"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBox({ icon: Icon, title, text }: { icon: typeof Clock; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon size={15} className="text-primary" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{text}</p>
    </div>
  );
}
