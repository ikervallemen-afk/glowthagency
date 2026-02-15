import { ShoppingCart, Send, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    num: "1",
    title: "Compras el chequeo",
    desc: "Accedes inmediatamente a los bonus.",
  },
  {
    icon: Send,
    num: "2",
    title: "Me envías tus perfiles",
    desc: "Solo necesito tus redes y página si tienes.",
  },
  {
    icon: PlayCircle,
    num: "3",
    title: "Recibes tu vídeo en 48h",
    desc: "Con diagnóstico claro y recomendaciones reales.",
  },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-4xl fade-in-section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">
        Así funciona
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <step.icon className="h-8 w-8 text-primary" />
            </div>
            <span className="inline-block mb-2 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
              Paso {step.num}
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
