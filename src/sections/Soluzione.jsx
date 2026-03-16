import { motion } from 'framer-motion';

/**
 * Soluzione — "La Nostra Soluzione" section detailing the project's solution.
 */
const solutions = [
  {
    icon: 'attach_money',
    title: 'Basso Costo',
    text: 'Componenti economici e facilmente reperibili. Il costo totale del sistema è una frazione rispetto alle soluzioni commerciali.',
  },
  {
    icon: 'accessibility_new',
    title: 'Accessibile',
    text: 'Progettato per essere utilizzato da chiunque: scuole, club locali, appassionati e piloti in formazione.',
  },
  {
    icon: 'school',
    title: 'Educativo',
    text: "Ogni fase del progetto è un'opportunità di apprendimento: elettronica, programmazione, problem solving e lavoro di squadra.",
  },
  {
    icon: 'open_in_full',
    title: 'Scalabile',
    text: 'Il sistema può essere facilmente espanso: più gate, telemetria wireless, integrazione con software di gara e molto altro.',
  },
];

const Soluzione = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="soluzione">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-widest text-slate-900 dark:text-white uppercase">LA NOSTRA SOLUZIONE</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-lg md:text-xl text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          SpeedDrone risponde a queste sfide con un approccio intelligente e pragmatico, rendendo il cronometraggio per droni accessibile a tutti.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-xl border-l-4 border-primary hover:-translate-y-2 hover:shadow-neon transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="material-icons-outlined text-2xl text-primary">{sol.icon}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
                {sol.title}
              </h3>
              <p className="font-body text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {sol.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluzione;
