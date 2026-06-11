import logoAsset from "@/assets/lavatec-logo-new.png.asset.json";
import { Link } from "@tanstack/react-router";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="LAVATEC inicio">
      <img
        src={logoAsset.url}
        alt="LAVATEC"
        width={48}
        height={48}
        className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
        style={{ background: "transparent" }}
      />
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          variant === "light" ? "text-background" : "text-foreground"
        }`}
      >
        LAVATEC
      </span>
    </Link>
  );
}
