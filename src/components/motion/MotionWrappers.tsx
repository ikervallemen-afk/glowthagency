import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ── shared viewport config ── */
const viewport = { once: true, margin: "-80px" };

/* ── variant presets ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── stagger container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

/* ── reusable wrapper components ── */

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export const MotionSection = ({ children, className, variants = fadeUp }: MotionSectionProps) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}

export const StaggerList = ({ children, className, slow }: StaggerListProps) => (
  <motion.div
    variants={slow ? staggerContainerSlow : staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    className={className}
  >
    {children}
  </motion.div>
);

interface MotionItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export const MotionItem = ({ children, className, variants = fadeUp }: MotionItemProps) => (
  <motion.div variants={variants} className={className}>
    {children}
  </motion.div>
);
