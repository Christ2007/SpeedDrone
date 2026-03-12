import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaFlagCheckered, FaStopwatch, FaTrophy, FaWifi } from 'react-icons/fa';

/**
 * Futuro — "Futuro del Progetto" section showing future vision.
 */
const visions = [
  {
    icon: <FaFlagCheckered />,
    title: 'Integrazione in Gare Reali',
    text: 'Portare il sistema SpeedDrone in competizioni locali e regionali di drone racing per testarlo sul campo.',
  },
  {
    icon: <FaStopwatch />,
    title: 'Sistema di Cronometraggio',
    text: 'Sviluppare un sistema completo di lap timing con classifica in tempo reale e storico dei tempi.',
  },
  {
    icon: <FaTrophy />,
    title: 'Uso in Competizioni',
    text: 'Rendere SpeedDrone una soluzione certificabile per gare ufficiali di drone racing.',
  },
  {
    icon: <FaWifi />,
    title: 'Telemetria Wireless',
    text: "Espandere il sistema con trasmissione dati wireless, dashboard live e analisi delle prestazioni in tempo reale.",
  },
];

const Futuro = () => {
  return (
    <SectionWrapper id="futuro" dark>
      <SectionTitle light>Futuro del Progetto</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-rajdhani text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
      >
        SpeedDrone non è solo un progetto scolastico: è il punto di partenza per qualcosa di più grande.
        Ecco le evoluzioni che immaginiamo per il futuro.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {visions.map((vis, i) => (
          <motion.div
            key={vis.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative glass-card rounded-xl p-8 group cursor-default overflow-hidden
              hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] transition-all duration-300"
          >
            {/* Background glow accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full
              bg-drone-blue-electric/5 group-hover:bg-drone-blue-electric/10
              blur-2xl transition-all duration-500" />

            <div className="relative z-10">
              <div className="text-3xl text-drone-blue-electric mb-5
                transition-colors duration-300">
                {vis.icon}
              </div>
              <h3 className="font-orbitron text-lg font-semibold text-white mb-3">
                {vis.title}
              </h3>
              <p className="font-rajdhani text-gray-400 leading-relaxed">
                {vis.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Futuro;
