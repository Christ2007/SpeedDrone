import { motion } from 'framer-motion';

/**
 * Futuro — "Futuro del Progetto" section showing future vision redesigned.
 */
const visions = [
  {
    title: 'Integrazione in Gare Reali',
    text: 'Portare il sistema SpeedDrone in competizioni locali e regionali di drone racing per testarlo sul campo.',
  },
  {
    title: 'Sistema di Cronometraggio',
    text: 'Sviluppare un sistema completo di lap timing con classifica in tempo reale e storico dei tempi.',
  },
  {
    title: 'Uso in Competizioni',
    text: 'Rendere SpeedDrone una soluzione certificabile per gare ufficiali di drone racing.',
  },
  {
    title: 'Telemetria Wireless',
    text: 'Espandere il sistema con trasmissione dati wireless, dashboard live e analisi delle prestazioni.',
  },
];

const Futuro = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="futuro">
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white uppercase"
        >
          IL NOSTRO <span className="text-primary italic">FUTURO</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
          Il prototipo attuale è solo l'inizio. Stiamo già progettando le prossime evoluzioni di SpeedDrone.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {visions.map((vis, i) => (
            <motion.div
              key={vis.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-xl border-l-4 border-primary hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 className="font-display font-bold text-xl mb-3 text-slate-900 dark:text-white">{vis.title}</h4>
              <p className="font-body text-slate-500 dark:text-slate-400 leading-relaxed">
                {vis.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Futuro;
