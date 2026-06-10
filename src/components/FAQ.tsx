import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda el servicio?",
    answer:
      "Entre 2 y 3 horas dependiendo del tipo de superficie y nivel de suciedad.",
  },
  {
    question: "¿Los productos que usan son seguros para niños y mascotas?",
    answer:
      "Sí. Utilizamos vapor profesional y productos biodegradables completamente seguros para tu familia y mascotas. No dejan residuos tóxicos ni olores fuertes.",
  },
  {
    question: "¿Cuánto tarda el secado?",
    answer:
      "El tiempo máximo estimado de secado es de 2 a 3 horas después de finalizar el proceso, gracias al sistema de extracción y limpieza profesional.",
  },
  {
    question: "¿Ofrecen garantía?",
    answer:
      "Sí. Trabajamos con procesos profesionales orientados a una limpieza profunda y una higienización efectiva. Si no quedas conforme, revisamos el servicio sin costo adicional.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Resolvemos tus <span className="italic text-gradient">dudas</span>
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas saber antes de agendar tu cita.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-2xl px-6 bg-card data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
