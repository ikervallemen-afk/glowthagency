import { X, Check } from "lucide-react";

const notItems = ["No recibirás teoría", "No recibirás plantillas vacías", "No recibirás consejos vagos"];
const yesItems = [
  "Recibirás un análisis específico de TU clínica",
  "Explicado de forma simple y directa",
  "Con acciones claras que puedes aplicar ya",
];

const RiskSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-3xl fade-in-section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Esto <span className="text-primary">NO</span> es una consultoría genérica.
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ul className="space-y-4">
          {notItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
              <X className="h-5 w-5 text-destructive shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="space-y-4">
          {yesItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-lg text-foreground">
              <Check className="h-5 w-5 text-cta shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default RiskSection;
