import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Inicio", to: "/" as const },
  { label: "Servicios", to: "/servicios" as const },
  { label: "Proceso", to: "/proceso" as const },
  { label: "Nosotros", to: "/nosotros" as const },
  { label: "Agendar", to: "/agendar" as const },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-full transition-colors"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+573046571420"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
          >
            <Phone size={15} />
            <span className="hidden md:inline">Llamar Ahora</span>
            <span className="md:hidden">Llamar</span>
          </a>
          <button
            className="lg:hidden p-2 text-foreground rounded-md hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-5 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-3 text-sm font-medium text-foreground/80 rounded-lg hover:bg-muted transition-colors"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
