import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Reusable scroll-reveal island. Respects reduced-motion.
export default function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
