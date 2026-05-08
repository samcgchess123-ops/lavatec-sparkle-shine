import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Agendar", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-3 items-center">
        {/* Logo - left */}
        <a href="#inicio" className="text-xl font-bold tracking-tight text-gradient justify-self-start">
          LAVATEC
        </a>

        {/* Desktop nav - center */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA - right */}
        <div className="hidden md:flex justify-self-end">
          <Button variant="cta" size="lg" asChild>
            <a href="tel:+573046571420">
              <Phone size={16} />
              Llamar Ahora
            </a>
          </Button>
        </div>

        {/* Mobile - right side: phone + menu */}
        <div className="md:hidden col-start-3 flex items-center justify-end gap-3">
          <a
            href="tel:+573046571420"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-3 py-1.5 text-xs font-bold shadow-lg"
          >
            <Phone size={14} />
            Llamar
          </a>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
