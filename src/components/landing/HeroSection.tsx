import { Video } from "lucide-react";
import { motion } from "framer-motion";

const CTA_URL = "https://calendly.com/app/scheduling/meeting_types/user/me";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/30 py-20 md:py-32">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-8"
      >
        <Video className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-primary">Diagnóstico en vídeo personalizado</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
      >
        ¿Tu clínica podría estar{" "}
        <span className="text-primary">perdiendo pacientes</span> cada semana sin que lo sepas?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
      >
        En este <strong>Chequeo Express de Pacientes</strong> analizo tu captación actual y te explico qué está fallando y qué haría yo para conseguir más pacientes esta misma semana.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-muted-foreground mb-2 flex items-center justify-center gap-2"
      >
        <Video className="h-4 w-4" />
        Recibirás un vídeo personalizado con diagnóstico real de tu clínica.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-2xl font-bold text-foreground mb-8"
      >
        Hoy puedes pedirlo por solo <span className="text-primary text-3xl">17€</span>
      </motion.p>

      <motion.a
        href={CTA_URL}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-xl bg-cta px-8 py-4 text-lg font-bold text-cta-foreground shadow-lg hover:bg-cta-hover transition-colors"
      >
        Quiero saber si estoy perdiendo pacientes
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
