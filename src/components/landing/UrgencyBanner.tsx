import { Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const UrgencyBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-3 rounded-full bg-destructive/10 border border-destructive/20 px-5 py-2.5 text-sm font-medium text-destructive mb-6"
  >
    <span className="flex items-center gap-1.5">
      <Users className="h-4 w-4" />
      Solo quedan <strong>5 plazas</strong> esta semana
    </span>
    <span className="w-px h-4 bg-destructive/30" />
    <span className="flex items-center gap-1.5">
      <Clock className="h-4 w-4" />
      Oferta limitada
    </span>
  </motion.div>
);

export default UrgencyBanner;
