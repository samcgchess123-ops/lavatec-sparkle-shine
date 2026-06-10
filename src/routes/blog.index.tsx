import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — LAVATEC | Tips de limpieza e higienización" },
      {
        name: "description",
        content:
          "Consejos profesionales sobre limpieza de muebles, colchones, alfombras y camas para mascotas con vapor.",
      },
      { property: "og:title", content: "Blog LAVATEC — Tips de limpieza con vapor" },
      {
        property: "og:description",
        content:
          "Aprende a cuidar tus textiles del hogar con consejos profesionales de higienización.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog & Tips"
        title="Consejos para una"
        highlight="higiene profunda"
        description="Artículos profesionales sobre limpieza con vapor, cuidado de textiles y bienestar del hogar."
      />
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-3xl border border-border bg-card overflow-hidden card-hover flex flex-col"
              >
                <div className="aspect-[5/3] bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                  <p.icon size={64} className="text-primary-foreground relative" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    <span>{p.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {p.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.excerpt}
                  </p>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer artículo <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
