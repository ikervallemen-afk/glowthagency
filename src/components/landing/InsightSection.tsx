import { X, Check } from "lucide-react";
import { MotionSection, MotionItem, slideLeft, slideRight } from "@/components/motion/MotionWrappers";

const notProblems = ["El tratamiento", "El precio", "La competencia"];
const realProblems = [
  "Perfil mal optimizado",
  "Oferta poco clara",
  "Proceso de captación débil",
  "Falta de seguimiento a los interesados",
];

const InsightSection = () => (
  <section id="insight" className="py-20 md:py-28 bg-secondary/50 scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <MotionSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Antes de invertir en marketing, primero hay que saber{" "}
          <span className="text-primary">dónde se pierden los pacientes.</span>
        </h2>
      </MotionSection>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <MotionItem variants={slideLeft} className="rounded-2xl bg-card p-8 shadow-sm border">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">El problema casi nunca es...</h3>
          <ul className="space-y-4">
            {notProblems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground text-lg">
                <X className="h-5 w-5 text-destructive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </MotionItem>

        <MotionItem variants={slideRight} className="rounded-2xl bg-primary/5 p-8 shadow-sm border border-primary/20">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">Normalmente está en...</h3>
          <ul className="space-y-4">
            {realProblems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground text-lg">
                <Check className="h-5 w-5 text-cta shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </MotionItem>
      </div>

      <MotionSection>
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Si no detectas esto primero, <strong className="text-foreground">cualquier campaña puede fallar.</strong>
        </p>
      </MotionSection>
    </div>
  </section>
);

export default InsightSection;
