import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda tu cita <span className="text-gradient">hoy</span>
          </h2>
          <p className="text-muted-foreground">
            Déjanos tus datos y te contactamos en menos de 1 hora.
          </p>
        </div>

        {sent ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">¡Solicitud enviada!</h3>
            <p className="text-muted-foreground">Te contactaremos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" placeholder="Tu nombre completo" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" type="tel" placeholder="+57 300 123 4567" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="servicio">Servicio de interés</Label>
              <select
                id="servicio"
                required
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="">Selecciona un servicio</option>
                <option>Limpieza de Muebles</option>
                <option>Desinfección de Colchones</option>
                <option>Detallado de Vehículos</option>
                <option>Alfombras y Cortinas</option>
                <option>Lavado en Seco</option>
              </select>
            </div>
            <div>
              <Label htmlFor="direccion">Dirección</Label>
              <Input id="direccion" placeholder="Tu dirección en Barranquilla" required className="mt-1.5" />
            </div>
            <Button variant="cta" size="lg" type="submit" className="w-full rounded-full">
              <Send size={16} />
              Enviar Solicitud
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
