import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Laura Méndez",
    clinic: "Clínica Dental Sonríe",
    location: "Madrid",
    quote:
      "Pensaba que mi problema era la competencia, pero el chequeo me mostró que mi ficha de Google estaba mal optimizada y mi oferta no era clara. Apliqué los cambios y en 2 semanas noté más llamadas.",
    result: "+40% de consultas en 3 semanas",
    stars: 5,
  },
  {
    name: "Dr. Carlos Ruiz",
    clinic: "Centro de Fisioterapia Activa",
    location: "Valencia",
    quote:
      "El vídeo fue revelador. Me señaló 3 fugas que yo no veía. Cambié el perfil de Instagram y la forma de presentar mis servicios. Ahora tengo lista de espera los lunes.",
    result: "Agenda completa en menos de 1 mes",
    stars: 5,
  },
  {
    name: "Dra. Ana Beltrán",
    clinic: "Clínica Estética Glow",
    location: "Sevilla",
    quote:
      "Por 17€ recibí más información útil que en una consultoría de 300€ que contraté antes. Directo, claro y aplicable desde el primer día. Totalmente recomendable.",
    result: "Recuperó la inversión en publicidad x3",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-accent/20">
    <div className="container mx-auto px-4 max-w-5xl fade-in-section">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Lo que dicen clínicas que ya hicieron{" "}
          <span className="text-primary">su chequeo</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Resultados reales de profesionales que detectaron sus fugas y
          actuaron.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4"
          >
            {/* Quote icon */}
            <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />

            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "{t.quote}"
            </p>

            {/* Result badge */}
            <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              📈 {t.result}
            </span>

            {/* Author */}
            <div className="mt-auto pt-4 border-t border-border">
              <p className="font-semibold text-foreground text-sm">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.clinic} · {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
