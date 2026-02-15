import { AlertTriangle } from "lucide-react";

const symptoms = [
  "Hay semanas con huecos en agenda",
  "Publicas en redes pero no sabes si convierten",
  "Dependes demasiado del boca a boca",
  "No sabes cuántos pacientes podrías tener realmente",
  "Has probado anuncios sin resultados claros",
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-3xl fade-in-section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        La mayoría de clínicas no tienen un problema de tratamientos.{" "}
        <span className="text-primary">Tienen un problema de captación.</span>
      </h2>

      <p className="text-center text-muted-foreground mb-10 text-lg">
        Si te suena alguno de estos puntos, tu clínica probablemente está perdiendo pacientes:
      </p>

      <ul className="space-y-4 mb-10">
        {symptoms.map((s) => (
          <li key={s} className="flex items-start gap-3 text-foreground">
            <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span className="text-lg">{s}</span>
          </li>
        ))}
      </ul>

      <p className="text-center text-lg text-muted-foreground italic">
        Esto no significa que tu clínica vaya mal.{" "}
        <strong className="text-foreground">Significa que seguramente tiene fugas invisibles.</strong>
      </p>
    </div>
  </section>
);

export default ProblemSection;
