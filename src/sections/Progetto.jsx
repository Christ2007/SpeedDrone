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
            SpeedDrone nasce come sfida ingegneristica per il monitoraggio e la telemetria nelle competizioni FPV (First Person View). Il nostro obiettivo è creare un sistema di rilevamento ultra-veloce ed estremamente preciso per cancelli di gara.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-body">
            Utilizzando microcontrollori avanzati e sensori laser a bassa latenza, abbiamo sviluppato una soluzione scalabile che garantisce tempi di risposta in millisecondi, portando l'automazione professionale nel mondo del racing amatoriale e scolastico.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Progetto;
