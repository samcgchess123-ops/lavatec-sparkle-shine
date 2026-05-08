import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-background/10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-background">LAVATEC</h3>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Especialistas en lavado en seco y limpieza profunda a domicilio. +30 años transformando espacios en Barranquilla.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/lavatec_lavaseco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/Lavatec.lavaseco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80">Enlaces</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Proceso", href: "#proceso" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-background/50 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+573046571420" className="flex items-center gap-3 text-sm text-background/50 hover:text-accent transition-colors">
                <Phone size={16} className="shrink-0" />
                +57 304 657 1420
              </a>
              <div className="flex items-center gap-3 text-sm text-background/50">
                <MapPin size={16} className="shrink-0" />
                Barranquilla, Colombia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} LAVATEC — Todos los derechos reservados
          </p>
          <p className="text-xs text-background/30">
            Diseñado por Samuel Pinto
          </p>
        </div>
      </div>
    </footer>
  );
}
