import logo from "@/assets/lavatec-logo.png";
import { Link } from "@tanstack/react-router";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="LAVATEC inicio">
      <img
        src={logo}
        alt="LAVATEC"
        width={36}
        height={36}
        className="w-9 h-9 rounded-lg object-contain bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform"
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
          Limpieza Premium
        </span>
      </div>
    </Link>
  );
}
