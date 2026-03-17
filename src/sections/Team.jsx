import { motion } from 'framer-motion';

/**
 * Team — "Sviluppato dalla Classe 5B" section redesigned.
 */
const Team = () => {
  return (
    <section className="py-24 bg-background-dark relative" id="team">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-widest text-slate-900 dark:text-white uppercase">IL NOSTRO TEAM</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-2xl text-center max-w-4xl mx-auto border-t-4 border-primary"
        >
          <span className="material-icons-outlined text-primary text-6xl mb-6">school</span>
          <h3 className="font-display text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase">Progetto Ideato e Sviluppato da Studenti</h3>
          <p className="font-body text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Questo progetto è il risultato del lavoro collaborativo degli studenti della classe 5B. Siamo un semplice gruppo di studenti appassionati di tecnologia e aviazione. SpeedDrone rappresenta un modo per tirare fuori il meglio di noi, unendo competenze teoriche alla risoluzione pratica di problemi complessi.
          </p>
          <p className="text-primary font-bold italic font-display tracking-wide">
            L'innovazione nasce anche tra i banchi di scuola.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
