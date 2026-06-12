import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "He contratado sus servicios para lavado de sofás, colchones, alfombras y cortinas, y siempre he quedado muy satisfecha con los resultados. Realiza un trabajo impecable, detallado y de excelente calidad. Además de ser un gran profesional, es una persona honesta y de absoluta confianza.",
    name: "Luisa Salgado",
    role: "Airbnb",
  },
  {
    quote:
      "El servicio excelente. Mis muebles quedaron como nuevos. Sin malos olores, secado rápido. 100% recomendados. Volveré a contratarlos.",
    name: "Vera Soho",
    role: "BQA",
  },
  {
    quote:
      "En mi hogar hemos utilizado sus servicios para sala, comedor y colchones con resultados excelentes. Destaco el cuidado, la minuciosidad y la confianza que transmite el personal.",
    name: "Alberto C. Torres",
    role: "BQA",
  },
  {
    quote:
      "Quedé realmente encantada con el resultado. Los colchones y muebles quedaron como nuevos y con un aroma muy agradable. Para mis apartamentos Airbnb una limpieza profesional es indispensable y LavaTec supera las expectativas.",
    name: "Shirley Reales",
    role: "Airbnb",
  },
];

function useItemsPerView() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setN(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return n;
}

export default function Testimonials() {
  const perView = useItemsPerView();
  const maxIndex = Math.max(0, testimonials.length - perView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5 leading-tight">
            La confianza de nuestros clientes habla por nosotros
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Cada servicio realizado refleja nuestro compromiso con la limpieza, el detalle
            y la excelencia. Estas son algunas experiencias reales de quienes han confiado
            en LavaTec.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <article className="h-full bg-background border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                    <Quote className="text-accent mb-4" size={28} />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          size={16}
                          className="fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed flex-1">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Anterior"
                className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir al testimonio ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-7 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Siguiente"
                className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
