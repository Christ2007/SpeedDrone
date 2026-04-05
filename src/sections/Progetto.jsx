import { motion } from 'framer-motion';

/**
 * Progetto — "Il Progetto" section introducing the engineering challenge.
 */
const Progetto = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="progetto">
      <div className="max-w-4xl mx-auto px-6">

        {/* Text Details Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-12 h-0.5 bg-primary"></span>
            IL PROGETTO
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6 font-body">
            SpeedDrone nasce come sfida ingegneristica per il monitoraggio e la telemetria nelle competizioni FPV (First Person View). Il nostro obiettivo è creare un sistema di rilevamento ultra-veloce ed estremamente preciso per cancelli di gara, senza fili, senza configurazioni e senza infrastrutture.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-body">
            Ogni drone trasmette continuamente il proprio nome via WiFi come un beacon radio. I gate ascoltano passivamente questi segnali in modalità promiscua e calcolano la distanza tramite l'intensità del segnale (RSSI): quando il picco di potenza sale e poi scende, il passaggio è confermato. Nessun cavo, nessun laser, nessuna sincronizzazione manuale.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Progetto;
