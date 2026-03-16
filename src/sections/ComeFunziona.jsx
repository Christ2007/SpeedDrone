import { motion } from 'framer-motion';

/**
 * ComeFunziona — "Come Funziona" section showing the 3-step process redesign.
 */
const ComeFunziona = () => {
  return (
    <section className="py-24 bg-white/5 dark:bg-white/[0.02]" id="come-funziona">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold mb-16 text-center tracking-widest text-slate-900 dark:text-white">COME FUNZIONA</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-2xl transition-transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-neon transition-all">
              <span className="material-icons-outlined text-primary text-4xl">settings_input_antenna</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">Raggio Laser</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Un raggio laser continuo viene emesso attraverso il cancello di gara, creando una barriera invisibile ad altissima frequenza di campionamento.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl transition-transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-neon transition-all">
              <span className="material-icons-outlined text-primary text-4xl">airplanemode_active</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">Il Drone Lo Interrompe</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Al passaggio del drone, il raggio laser viene interrotto. Questa variazione di intensità luminosa viene catturata istantaneamente da un ricevitore fotosensibile.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 rounded-2xl transition-transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-neon transition-all">
              <span className="material-icons-outlined text-primary text-4xl">memory</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">L'ESP32 Lo Rileva</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Il core ESP32 elabora il segnale e invia i dati di timing in tempo reale via Wi-Fi ad una dashboard centralizzata per la visualizzazione dei lap.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComeFunziona;
