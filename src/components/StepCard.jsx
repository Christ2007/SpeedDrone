import { motion } from 'framer-motion';

/**
 * StepCard — Visual step indicator for the "Come Funziona" section.
 * Shows step number, icon, title, and description with connecting elements.
 */
const StepCard = ({ number, icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step number badge */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl
          bg-gradient-to-br from-drone-red to-drone-blue
          flex items-center justify-center mb-6
          shadow-[0_0_25px_rgba(230,57,70,0.3)]
          group-hover:shadow-[0_0_40px_rgba(230,57,70,0.5)]
          transition-shadow duration-300"
      >
        {/* Number */}
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-drone-dark border-2 border-drone-red
          flex items-center justify-center font-orbitron text-sm font-bold text-drone-red">
          {number}
        </span>
        {/* Icon */}
        <span className="text-3xl md:text-4xl text-white">{icon}</span>
      </motion.div>

      {/* Title */}
      <h3 className="font-orbitron text-lg md:text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-rajdhani text-gray-400 text-base md:text-lg leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
};

export default StepCard;
