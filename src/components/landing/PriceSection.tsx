import { motion } from "framer-motion";
import { MotionSection, scaleUp } from "@/components/motion/MotionWrappers";

const CTA_URL = "https://calendly.com/app/scheduling/meeting_types/user/me";

const PriceSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <MotionSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Una auditoría profesional de captación suele costar entre{" "}
          <span className="line-through text-muted-foreground">150€ y 400€</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Este chequeo no está pensado para ganar dinero.
          <br />
          <strong className="text-foreground">Está pensado para que veas si realmente puedo ayudarte.</strong>
        </p>
      </MotionSection>

      <MotionSection variants={scaleUp}>
        <p className="text-2xl font-bold text-foreground mb-8">
          Hoy puedes pedirlo por solo{" "}
          <span className="text-primary text-5xl font-extrabold">17€</span>
        </p>
      </MotionSection>

      <motion.a
        href={CTA_URL}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-xl bg-cta px-10 py-4 text-lg font-bold text-cta-foreground shadow-lg hover:bg-cta-hover transition-colors"
      >
        Quiero mi chequeo por 17€
      </motion.a>
    </div>
  </section>
);

export default PriceSection;
