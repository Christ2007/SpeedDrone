import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';

/**
 * Obiettivi — "Obiettivi del Progetto" section listing project goals.
 */
const goals = [
  'Imparare elettronica e programmazione embedded attraverso un progetto reale',
  'Applicare conoscenze ingegneristiche per risolvere un problema concreto',
  'Sviluppare tecnologie innovative per il mondo del drone racing',
  'Lavorare in squadra e gestire un progetto complesso dall\'inizio alla fine',
  'Creare un prototipo funzionante e documentare il processo',
  'Dimostrare che l\'innovazione è possibile anche in ambito scolastico',
];

const Obiettivi = () => {
  return (
    <SectionWrapper id="obiettivi">
      <SectionTitle>Obiettivi del Progetto</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-5">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 group"
            >
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.2, type: 'spring' }}
                className="flex-shrink-0 mt-1"
              >
                <FaCheckCircle className="text-drone-red text-lg group-hover:text-drone-blue-electric transition-colors duration-300" />
              </motion.div>

              {/* Goal text */}
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed
                group-hover:text-white transition-colors duration-300">
                {goal}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Obiettivi;
