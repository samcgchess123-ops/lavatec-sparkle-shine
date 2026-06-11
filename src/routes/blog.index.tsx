import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
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
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog & Tips"
        title="Consejos para una"
        highlight="higiene profunda"
        description="Artículos profesionales sobre limpieza con vapor, cuidado de textiles y bienestar del hogar."
      />
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid md:grid-cols-2 gap-8 lg:gap-12 rounded-3xl bg-card border border-border overflow-hidden premium-shadow mb-16 hover:shadow-2xl transition-all"
          >
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em]">
                Destacado
              </span>
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                <span className="text-primary">{featured.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight mb-5 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7 text-base md:text-lg">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all w-fit">
                Leer artículo completo <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-3xl border border-border bg-card overflow-hidden card-hover flex flex-col"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    <span className="text-primary">{p.category}</span>
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
      <FinalCTA />
    </>
  );
}
