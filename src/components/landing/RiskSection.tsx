import { X, Check } from "lucide-react";
import { MotionSection, StaggerList, MotionItem, slideLeft, slideRight } from "@/components/motion/MotionWrappers";

const notItems = ["No recibirás teoría", "No recibirás plantillas vacías", "No recibirás consejos vagos"];
const yesItems = [
  "Recibirás un análisis específico de TU clínica",
  "Explicado de forma simple y directa",
  "Con acciones claras que puedes aplicar ya",
];

const RiskSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-3xl">
      <MotionSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Esto <span className="text-primary">NO</span> es una consultoría genérica.
        </h2>
      </MotionSection>

      <div className="grid md:grid-cols-2 gap-8">
        <StaggerList className="space-y-4">
          {notItems.map((item) => (
            <MotionItem key={item} variants={slideLeft} className="flex items-center gap-3 text-lg text-muted-foreground">
              <X className="h-5 w-5 text-destructive shrink-0" />
              {item}
            </MotionItem>
          ))}
        </StaggerList>

        <StaggerList className="space-y-4">
          {yesItems.map((item) => (
            <MotionItem key={item} variants={slideRight} className="flex items-center gap-3 text-lg text-foreground">
              <Check className="h-5 w-5 text-cta shrink-0" />
              {item}
            </MotionItem>
          ))}
        </StaggerList>
      </div>
    </div>
  </section>
);

export default RiskSection;
