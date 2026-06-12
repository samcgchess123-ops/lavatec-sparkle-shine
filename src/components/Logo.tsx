import logoAsset from "@/assets/lavatec-logo-new.png.asset.json";
import { Link } from "@tanstack/react-router";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  void variant;
  return (
    <Link to="/" className="flex items-center group" aria-label="LAVATEC inicio">
      <img
        src={logoAsset.url}
        alt="LAVATEC"
        width={140}
        height={56}
        className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
        style={{ mixBlendMode: "screen", background: "transparent" }}
      />
    </Link>
  );
}
