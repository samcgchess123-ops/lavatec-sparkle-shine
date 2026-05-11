import { Link } from "@tanstack/react-router";
import { Heart, Leaf, ShieldCheck, Users } from "lucide-react";
import familyImg from "@/assets/commitment-family.jpg";

const values = [
  { icon: Heart, label: "Cuidado de tu familia", desc: "Tratamos cada hogar como si fuera el nuestro." },
  { icon: Leaf, label: "Productos eco-friendly", desc: "Seguros para niños, mascotas y el planeta." },
  { icon: ShieldCheck, label: "Garantía total", desc: "Si no quedas conforme, lo corregimos sin costo." },
  { icon: Users, label: "+30 años de experiencia", desc: "Miles de familias en Barranquilla confían en nosotros." },
];

export default function Commitment() {
  return (
    <section className="py-24 md:py-32 dark-section text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-5">
              Nuestro Compromiso
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ayudamos a las familias a vivir en
              <br />
              <span className="italic text-accent">espacios más sanos.</span>
            </h2>
            <p className="text-background/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              No solo limpiamos: cuidamos la salud, el bienestar y la tranquilidad de quienes
              confían en nosotros. Cada servicio es una promesa de excelencia y respeto por
              tu hogar.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {values.map((v) => (
                <div key={v.label} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                    <v.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-background mb-0.5">{v.label}</p>
                    <p className="text-xs text-background/60 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/agendar"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-4 text-sm font-semibold shadow-xl hover:scale-[1.03] transition-all"
            >
              Agendar mi servicio
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden premium-shadow ring-1 ring-background/10">
              <img
                src={familyImg}
                alt="Familia disfrutando un hogar limpio"
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -left-6 glass rounded-2xl p-5 max-w-[200px]">
              <p className="font-display text-2xl font-bold text-foreground leading-none">
                +30
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Años transformando hogares en Barranquilla
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
