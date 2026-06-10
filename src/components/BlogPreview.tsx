import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog-data";

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Blog & Tips
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Consejos para un hogar más <span className="italic text-gradient">higiénico</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Aprende cómo cuidar y mantener tus muebles, colchones, alfombras y camas para mascotas.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Ver todos los artículos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-3xl border border-border bg-card overflow-hidden card-hover flex flex-col"
            >
              <div className="aspect-[5/3] bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                <p.icon size={56} className="text-primary-foreground relative" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  <span>{p.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {p.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.excerpt}
                </p>
                <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer artículo <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Ver todos los artículos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
