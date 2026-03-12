import { motion } from 'framer-motion';

/**
 * TechCard — Card component for displaying technology items.
 * Features hover glow, icon, title, and description.
 */
const TechCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-xl p-6 md:p-8
        hover:shadow-[0_0_30px_rgba(230,57,70,0.15),0_0_60px_rgba(29,78,216,0.1)]
        transition-all duration-300 group cursor-default"
    >
      {/* Icon container */}
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-drone-red/20 to-drone-blue/20
        flex items-center justify-center mb-5
        group-hover:from-drone-red/30 group-hover:to-drone-blue/30 transition-all duration-300">
        <span className="text-2xl text-drone-red group-hover:text-drone-blue-electric transition-colors duration-300">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-orbitron text-lg font-semibold text-white mb-3 group-hover:text-glow-white transition-all duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="font-rajdhani text-gray-400 leading-relaxed text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default TechCard;
