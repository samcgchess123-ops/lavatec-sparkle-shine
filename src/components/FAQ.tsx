import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el servicio de limpieza?",
    answer: "Depende del tipo de mueble y su tamaño. Un sofá de 3 puestos generalmente toma entre 1 y 2 horas. Los colchones entre 30 minutos y 1 hora. Te damos un estimado exacto al agendar tu cita.",
  },
  {
    question: "¿Los productos que usan son seguros para niños y mascotas?",
    answer: "¡Sí! Utilizamos productos biodegradables y eco-friendly que son completamente seguros para tu familia y mascotas. No dejan residuos tóxicos ni olores fuertes.",
  },
  {
    question: "¿Cuánto tiempo tarda en secar el mueble después de la limpieza?",
    answer: "El tiempo de secado varía entre 2 y 6 horas dependiendo del material y la ventilación del espacio. Te damos recomendaciones para acelerar el proceso.",
  },
  {
    question: "¿Trabajan a domicilio en toda Barranquilla?",
    answer: "Sí, cubrimos toda el área metropolitana de Barranquilla y sus alrededores. El servicio a domicilio no tiene costo adicional.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, transferencias bancarias (Nequi, Daviplata) y pagos con tarjeta. El pago se realiza una vez finalizado el servicio y estés satisfecho con el resultado.",
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer: "Sí, ofrecemos garantía de satisfacción. Si no quedas conforme con el resultado, volvemos a realizar el servicio sin costo adicional.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resolvemos tus dudas antes de agendar tu cita.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
