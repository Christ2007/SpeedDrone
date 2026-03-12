import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaUsers, FaHeart, FaHandsHelping } from 'react-icons/fa';

/**
 * Team — "Sviluppato dalla Classe 5B" section.
 * Inspiring, proud, and collaborative tone.
 */
const Team = () => {
  return (
    <SectionWrapper id="team" dark>
      <SectionTitle light>Sviluppato dalla Classe 5B</SectionTitle>

      <div className="max-w-4xl mx-auto text-center">
        {/* Main motivational text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-rajdhani text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
        >
          Questo progetto è il risultato del lavoro collaborativo degli studenti della{' '}
          <span className="text-drone-red font-semibold">classe 5B</span>. Un team di ragazzi
          appassionati di tecnologia che ha trasformato un'idea in un prototipo funzionante,
          dimostrando che <span className="text-drone-blue-electric font-semibold">
            l'innovazione nasce anche tra i banchi di scuola</span>.
        </motion.p>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <FaUsers />,
              title: 'Lavoro di Squadra',
              text: 'Ogni membro ha contribuito con le proprie competenze uniche al successo del progetto.',
            },
            {
              icon: <FaHeart />,
              title: 'Passione',
              text: 'La passione per la tecnologia e gli aerei ha guidato ogni fase del lavoro.',
            },
            {
              icon: <FaHandsHelping />,
              title: 'Collaborazione',
              text: 'Confronto, condivisione e supporto reciproco sono stati i pilastri del nostro team.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 group
                hover:shadow-[0_0_20px_rgba(230,57,70,0.15)] transition-all duration-300"
            >
              <div className="text-3xl text-drone-red mb-4 flex justify-center
                group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-orbitron text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block glass-card rounded-2xl px-8 py-5 border border-white/5"
        >
          <p className="font-exo text-base md:text-lg text-gray-400 italic">
            "Dalla teoria alla pratica — dalla classe alla pista."
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Team;
