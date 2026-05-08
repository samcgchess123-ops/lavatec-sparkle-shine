import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-background/70 font-medium">
          © {new Date().getFullYear()} LAVATEC — Lavado en Seco & Especialistas en Limpieza
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/lavatec_lavaseco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-accent transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/Lavatec.lavaseco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-accent transition-colors"
          >
            <Facebook size={22} />
          </a>
        </div>

        <p className="text-xs text-background/40">
          Diseñado por Samuel Pinto
        </p>
      </div>
    </footer>
  );
}
