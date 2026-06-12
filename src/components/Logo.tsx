import logoAsset from "@/assets/lavatec-logo-transparent.png.asset.json";
import { Link } from "@tanstack/react-router";

export default function Logo({ variant }: { variant?: "dark" | "light" }) {
  void variant;
  return (
    <Link
      to="/"
      className="flex items-center shrink-0 group"
      aria-label="LAVATEC inicio"
    >
      <img
        src={logoAsset.url}
        alt="LAVATEC"
        width={160}
        height={64}
        className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
        style={{ background: "transparent" }}
      />
    </Link>
  );
}
