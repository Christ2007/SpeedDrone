import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

/**
 * Problema — "Il Problema" section explaining the challenge in drone racing.
 */
const problems = [
  {
    icon: <FaExclamationTriangle />,
    title: 'Sistemi Costosi',
    text: 'I sistemi professionali di cronometraggio per gare di droni costano centinaia o migliaia di euro, rendendoli inaccessibili per scuole, club amatoriali e appassionati.',
  },
  {
    icon: <FaTimesCircle />,
    title: 'Accesso Limitato',
    text: 'Le soluzioni commerciali sono complesse da configurare e spesso progettate solo per eventi professionali, tagliando fuori i principianti e la comunità educativa.',
  },
];

const Problema = () => {
  return (
    <SectionWrapper id="problema" dark>
      <SectionTitle light>Il Problema</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-rajdhani text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
      >
        Il mondo del drone racing sta crescendo rapidamente, ma i sistemi di cronometraggio
        professionali restano fuori portata per la maggior parte dei piloti e delle comunità educative.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {problems.map((prob, i) => (
          <motion.div
            key={prob.title}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative glass-card rounded-xl p-8 group
              border border-drone-red/20 hover:border-drone-red/40
              hover:shadow-[0_0_30px_rgba(230,57,70,0.15)] transition-all duration-300"
          >
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-xl">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-drone-red/10 rotate-45" />
            </div>

            <div className="text-3xl text-drone-red mb-5 transition-colors duration-300 group-hover:text-drone-blue-electric">
              {prob.icon}
            </div>
            <h3 className="font-orbitron text-xl font-semibold text-white mb-3">
              {prob.title}
            </h3>
            <p className="font-rajdhani text-gray-400 leading-relaxed text-base">
              {prob.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Problema;
