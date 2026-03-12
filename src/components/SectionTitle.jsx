import { motion } from 'framer-motion';

/**
 * SectionTitle — Consistent heading style for all sections.
 * Displays a gradient-colored title with an animated underline.
 */
const SectionTitle = ({ children, light = false }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white text-glow-white' : 'gradient-text-red-blue'
        }`}
      >
        {children}
      </motion.h2>
      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-drone-red to-drone-blue"
      />
    </div>
  );
};

export default SectionTitle;
