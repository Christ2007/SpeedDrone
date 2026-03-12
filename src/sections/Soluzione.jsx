import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaMoneyBillWave, FaUniversalAccess, FaBook, FaExpandArrowsAlt } from 'react-icons/fa';

/**
 * Soluzione — "La Nostra Soluzione" section detailing the project's solution.
 */
const solutions = [
  {
    icon: <FaMoneyBillWave />,
    title: 'Basso Costo',
    text: 'Componenti economici e facilmente reperibili. Il costo totale del sistema è una frazione rispetto alle soluzioni commerciali.',
    color: 'from-green-500/20 to-drone-blue/20',
  },
  {
    icon: <FaUniversalAccess />,
    title: 'Accessibile',
    text: 'Progettato per essere utilizzato da chiunque: scuole, club locali, appassionati e piloti in formazione.',
    color: 'from-drone-blue/20 to-drone-blue-electric/20',
  },
  {
    icon: <FaBook />,
    title: 'Educativo',
    text: "Ogni fase del progetto è un'opportunità di apprendimento: elettronica, programmazione, problem solving e lavoro di squadra.",
    color: 'from-drone-blue-electric/20 to-purple-500/20',
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: 'Scalabile',
    text: 'Il sistema può essere facilmente espanso: più gate, telemetria wireless, integrazione con software di gara e molto altro.',
    color: 'from-purple-500/20 to-drone-red/20',
  },
];

const Soluzione = () => {
  return (
    <SectionWrapper id="soluzione">
      <SectionTitle>La Nostra Soluzione</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-rajdhani text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
      >
        SpeedDrone risponde a queste sfide con un approccio intelligente e pragmatico,
        rendendo il cronometraggio per droni accessibile a tutti.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card rounded-xl p-8 group cursor-default
              hover:shadow-[0_0_30px_rgba(29,78,216,0.2)] transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sol.color}
              flex items-center justify-center mb-5
              group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl text-drone-blue-electric">{sol.icon}</span>
            </div>
            <h3 className="font-orbitron text-lg font-semibold text-white mb-3">
              {sol.title}
            </h3>
            <p className="font-rajdhani text-gray-400 leading-relaxed">
              {sol.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Soluzione;
