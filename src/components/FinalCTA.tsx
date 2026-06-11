import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/services-data";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-cyan-accent p-10 md:p-16 text-center premium-shadow relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              ¿Listo para un hogar más sano?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-8">
              Higieniza tus muebles, colchones y textiles con vapor profesional.
            </p>
            <a
              href={whatsappLink("Hola Lavatec, quiero agendar un servicio de limpieza.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-8 py-4 text-sm font-semibold shadow-xl hover:scale-[1.03] transition-all"
            >
              <MessageCircle size={16} />
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
