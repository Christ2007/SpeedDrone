import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaRocket, FaGraduationCap } from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';

/**
 * Progetto — "Il Progetto" section explaining the project and motivation.
 */
const features = [
  {
    icon: <FaRocket />,
    title: 'Innovazione',
    text: 'Un sistema originale per il rilevamento automatico del passaggio dei droni attraverso i gate di gara, sfruttando tecnologie embedded e sensori laser.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Educazione',
    text: "Un progetto che unisce teoria e pratica: dall'elettronica alla programmazione, dalla progettazione alla realizzazione di un prototipo funzionante.",
  },
  {
    icon: <GiDeliveryDrone />,
    title: 'Drone Racing',
    text: 'Le gare FPV sono uno sport in rapida crescita. Il nostro sistema offre una soluzione accessibile per il cronometraggio e il rilevamento dei passaggi.',
  },
];

const Progetto = () => {
  return (
    <SectionWrapper id="progetto">
      <SectionTitle>Il Progetto</SectionTitle>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-rajdhani text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        SpeedDrone è un sistema di rilevamento gate per gare di droni FPV, progettato e costruito
        dalla classe 5B come progetto di ingegneria scolastica. Il sistema utilizza laser, sensori
        e un microcontrollore ESP32 per rilevare con precisione il passaggio dei droni attraverso
        i gate di gara.
      </motion.p>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-xl p-8 text-center group
              hover:shadow-[0_0_25px_rgba(29,78,216,0.2)] transition-all duration-300"
          >
            <div className="text-4xl text-drone-blue-electric mb-5 flex justify-center
              group-hover:scale-110 transition-transform duration-300">
              {feat.icon}
            </div>
            <h3 className="font-orbitron text-xl font-semibold text-white mb-3">
              {feat.title}
            </h3>
            <p className="font-rajdhani text-gray-400 leading-relaxed">
              {feat.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Progetto;
