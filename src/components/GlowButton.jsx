import { motion } from 'framer-motion';

/**
 * GlowButton — Animated CTA button with glow hover effect.
 * Used for primary calls-to-action throughout the site.
 */
const GlowButton = ({ children, href = '#', className = '' }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative inline-flex items-center gap-2 px-8 py-4
        font-orbitron font-semibold text-sm md:text-base tracking-wider uppercase
        text-white bg-gradient-to-r from-drone-red to-drone-red-dark
        rounded-lg overflow-hidden cursor-pointer
        transition-shadow duration-300
        hover:shadow-[0_0_30px_rgba(230,57,70,0.5),0_0_60px_rgba(230,57,70,0.2)]
        ${className}
      `}
    >
      {/* Animated shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

export default GlowButton;
