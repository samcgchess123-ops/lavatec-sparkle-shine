export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5 reveal">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-5 reveal reveal-delay-1">
          {title}{" "}
          {highlight && <span className="italic text-gradient">{highlight}</span>}
        </h1>
        {description && (
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
