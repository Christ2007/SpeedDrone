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
              <span className="material-icons-outlined text-primary text-4xl">wifi_tethering</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">Il Drone Trasmette</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Ogni drone monta un ESP32 che trasmette continuamente il proprio nome pilota come beacon WiFi — 10 volte al secondo. Nessuna connessione, solo un segnale radio ripetuto nel vuoto
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
              <span className="material-icons-outlined text-primary text-4xl">radar</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">Il Gate Ascolta</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Un secondo ESP32 al gate opera in modalità promiscua: intercetta tutti i beacon WiFi vicini. Più il drone si avvicina, più il segnale è forte (RSSI). Il gate rileva il picco e il calo — quello è il passaggio.
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
              <span className="material-icons-outlined text-primary text-4xl">timer</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wider text-slate-900 dark:text-white">Il Coordinatore Calcola</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
              Il gate invia l'evento via ESP-NOW — protocollo WiFi senza router — al coordinatore centrale. Questo calcola i lap time per ogni pilota in tempo reale e gestisce l'intera gara con due soli pulsanti.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComeFunziona;
