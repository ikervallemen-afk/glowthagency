import { Check, Video } from "lucide-react";
import { MotionSection, StaggerList, MotionItem, fadeUp, scaleUp } from "@/components/motion/MotionWrappers";

const items = [
  "Revisión de tu perfil en Instagram",
  "Revisión de tu ficha en Google",
  "Identificación de 3 fugas de pacientes",
];

const ServiceSection = () => (
  <section id="servicio" className="py-20 md:py-28 bg-background scroll-mt-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <MotionSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Qué incluye el{" "}
          <span className="text-primary">Chequeo Express de Pacientes</span>
        </h2>
      </MotionSection>

      <StaggerList className="space-y-5 mb-10">
        {items.map((item) => (
          <MotionItem key={item} variants={fadeUp} className="flex items-start gap-3 text-lg text-foreground">
            <Check className="h-6 w-6 text-cta mt-0.5 shrink-0" />
            {item}
          </MotionItem>
        ))}
      </StaggerList>

      <MotionSection variants={scaleUp}>
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 flex items-start gap-4">
          <Video className="h-8 w-8 text-primary shrink-0 mt-1" />
          <p className="text-lg text-foreground">
            <strong>Recibirás un vídeo personalizado</strong> explicándote exactamente qué ocurre y qué haría yo en tu clínica.
          </p>
        </div>
      </MotionSection>
    </div>
  </section>
);

export default ServiceSection;
