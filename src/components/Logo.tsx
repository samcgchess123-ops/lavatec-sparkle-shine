import logoAsset from "@/assets/lavatec-logo-new.png.asset.json";
import { Link } from "@tanstack/react-router";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="LAVATEC inicio">
      <img
        src={logoAsset.url}
        alt="LAVATEC"
        width={40}
        height={40}
        className="w-10 h-10 rounded-lg object-contain bg-white p-0.5 shadow-sm ring-1 ring-border group-hover:scale-105 transition-transform"
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${
            variant === "light" ? "text-background" : "text-foreground"
          }`}
        >
          LAVATEC
        </span>
        <span
          className={`text-[9px] font-medium uppercase tracking-[0.18em] ${
            variant === "light" ? "text-background/60" : "text-muted-foreground"
          }`}
        >
          Limpieza con Vapor
        </span>
      </div>
    </Link>
  );
}
