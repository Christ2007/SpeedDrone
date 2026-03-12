import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * SectionWrapper — Reusable section container with scroll-triggered animation.
 * Wraps content with fade-in + slide-up effect when scrolled into view.
 */
const SectionWrapper = ({ children, id, className = '', dark = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-6 overflow-hidden ${
        dark ? 'bg-drone-dark' : 'bg-drone-gray'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
