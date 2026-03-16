import { motion } from 'framer-motion';

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
    <section className="py-24 bg-white/5 dark:bg-white/[0.02] relative overflow-hidden" id="obiettivi">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-widest text-slate-900 dark:text-white uppercase">OBIETTIVI DEL PROGETTO</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-2xl border-t-4 border-primary shadow-neon">
          <div className="space-y-6">
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
                  <span className="material-icons-outlined text-primary text-2xl group-hover:shadow-neon transition-all rounded-full">task_alt</span>
                </motion.div>

                {/* Goal text */}
                <p className="font-body text-lg text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Obiettivi;
