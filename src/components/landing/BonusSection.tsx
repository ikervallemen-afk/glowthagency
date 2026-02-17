import { BookOpen } from "lucide-react";
import { MotionSection, StaggerList, MotionItem, scaleUp } from "@/components/motion/MotionWrappers";

const bonuses = [
  {
    color: "text-blue-600 bg-blue-100",
    title: "Las 7 fugas silenciosas por las que las clínicas pierden pacientes cada semana",
    desc: "Descubre los errores invisibles que hacen que muchas clínicas pierdan clientes sin darse cuenta.",
  },
  {
    color: "text-emerald-600 bg-emerald-100",
    title: "Cómo llenar agenda sin depender del boca a boca ni de la suerte",
    desc: "Aprende por qué algunas clínicas tienen flujo constante de pacientes y otras viven por temporadas.",
  },
  {
    color: "text-red-600 bg-red-100",
    title: "El error nº1 que hace que las clínicas tiren dinero en publicidad",
    desc: "Evita el fallo más común antes de invertir en anuncios y entiende cómo saber si una campaña está bien hecha.",
  },
];

const BonusSection = () => (
  <section id="bonus" className="py-20 md:py-28 bg-secondary/50 scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <MotionSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Al pedir tu chequeo hoy también recibirás <span className="text-primary">acceso inmediato</span> a:
        </h2>
      </MotionSection>

      <StaggerList slow className="grid md:grid-cols-3 gap-6 mt-12">
        {bonuses.map((b) => (
          <MotionItem key={b.title} variants={scaleUp} className="rounded-2xl bg-card border p-6 shadow-sm flex flex-col">
            <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${b.color} mb-4`}>
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </MotionItem>
        ))}
      </StaggerList>

      <MotionSection>
        <p className="text-center text-muted-foreground mt-10 text-lg italic">
          💬 Esta información normalmente solo la comparto con clientes.
          <br />
          La incluyo porque antes de captar pacientes, necesitas entender{" "}
          <strong className="text-foreground">qué está pasando realmente en tu clínica.</strong>
        </p>
      </MotionSection>
    </div>
  </section>
);

export default BonusSection;
