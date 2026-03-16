import { motion } from 'framer-motion';

/**
 * Problema — "Il Problema" section explaining the challenge in drone racing.
 */
const problems = [
  {
    icon: 'error_outline',
    title: 'Sistemi Costosi',
    text: 'I sistemi professionali di cronometraggio per gare di droni costano centinaia o migliaia di euro, rendendoli inaccessibili per scuole, club amatoriali e appassionati.',
  },
  {
    icon: 'visibility_off',
    title: 'Accesso Limitato',
    text: 'Le soluzioni commerciali sono complesse da configurare e spesso progettate solo per eventi professionali, tagliando fuori i principianti e la comunità educativa.',
  },
];

const Problema = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden" id="problema">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-widest text-slate-900 dark:text-white uppercase">IL PROBLEMA</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-lg md:text-xl text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
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
              className="glass p-8 rounded-xl border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="text-4xl text-primary mb-5 flex">
                <span className="material-icons-outlined text-5xl group-hover:shadow-neon transition-all rounded-full">{prob.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
                {prob.title}
              </h3>
              <p className="font-body text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                {prob.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problema;
