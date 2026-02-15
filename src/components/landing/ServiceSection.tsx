import { Check, Video } from "lucide-react";

const items = [
  "Revisión de tu perfil en Instagram",
  "Revisión de tu ficha en Google",
  "Análisis de tu oferta principal",
  "Identificación de 3 fugas de pacientes",
  "1 mejora inmediata aplicable",
  "1 idea de campaña que podrías lanzar esta semana",
];

const ServiceSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-3xl fade-in-section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Qué incluye el{" "}
        <span className="text-primary">Chequeo Express de Pacientes</span>
      </h2>

      <ul className="space-y-5 mb-10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg text-foreground">
            <Check className="h-6 w-6 text-cta mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 flex items-start gap-4">
        <Video className="h-8 w-8 text-primary shrink-0 mt-1" />
        <p className="text-lg text-foreground">
          <strong>Recibirás un vídeo personalizado</strong> explicándote exactamente qué ocurre y qué haría yo en tu clínica.
        </p>
      </div>
    </div>
  </section>
);

export default ServiceSection;
