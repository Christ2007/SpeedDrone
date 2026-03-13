import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import GlowButton from '../components/GlowButton';

/**
 * Hero — Full-viewport landing section.
 * Features animated logo, title, tagline, CTA, and particle background.
 */
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-drone-dark"
    >
      {/* Particle background */}
      <ParticleBackground />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(29,78,216,0.08)_0%,transparent_70%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-orbitron text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight"
        >
          <span className="text-white text-glow-white">Speed</span>
          <span className="text-drone-red text-glow-red">Drone</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-rajdhani text-lg md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Tecnologia intelligente per le gare FPV a basso costo
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-exo text-sm md:text-base text-gray-500 mb-10 uppercase tracking-widest"
        >
          Sistema di rilevamento gate • Progetto Classe 5B
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <GlowButton href="#progetto">Scopri il progetto</GlowButton>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-drone-gray to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-drone-red" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
