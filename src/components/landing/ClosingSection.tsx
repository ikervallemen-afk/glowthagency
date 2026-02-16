import { Video, BookOpen, Coins } from "lucide-react";

const CTA_URL = "https://calendly.com/app/scheduling/meeting_types/user/me";

const ClosingSection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/30">
    <div className="container mx-auto px-4 max-w-3xl text-center fade-in-section">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
        Puede que tu clínica esté perdiendo pacientes ahora mismo{" "}
        <span className="text-primary">sin que nadie te lo esté diciendo.</span>
      </h2>

      <p className="text-xl text-muted-foreground mb-10">
        Por <strong className="text-foreground">17€</strong>, puedes saberlo hoy y descubrir qué haría yo para solucionarlo.
      </p>

      <a
        href={CTA_URL}
        className="inline-block rounded-xl bg-cta px-10 py-5 text-xl font-bold text-cta-foreground shadow-xl hover:bg-cta-hover transition-colors mb-10"
      >
        Quiero saber si estoy perdiendo pacientes
      </a>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm">
        <span className="flex items-center gap-2">
          <Video className="h-4 w-4 text-primary" /> Diagnóstico personalizado en 48h
        </span>
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" /> Incluye 3 ebooks estratégicos
        </span>
        <span className="flex items-center gap-2">
          <Coins className="h-4 w-4 text-primary" /> Solo 17€
        </span>
      </div>
    </div>
  </section>
);

export default ClosingSection;
