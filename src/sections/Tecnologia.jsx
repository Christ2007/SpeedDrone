import { motion } from 'framer-motion';
import { DroneIcon } from '../components/DroneIcon';

/**
 * Tecnologia — "Tecnologia Utilizzata" section showcasing tech stack redesign.
 */
const technologies = [
  {
    icon: 'developer_board',
    title: 'Microcontrollore ESP32',
    description:
      'Microcontrollore dual-core ad alte prestazioni con Wi-Fi integrato. Presente sia sul drone (trasmettitore beacon) che al gate (ricevitore) e al coordinatore centrale.',
  },
  {
    icon: 'wifi_tethering',
    title: 'WiFi Beacon & RSSI',
    description:
      'Ogni drone irradia il proprio nome come beacon WiFi 10 volte al secondo. I gate misurano l\'intensità del segnale (RSSI) per rilevare il passaggio tramite il picco di potenza.',
  },
  {
    icon: 'cell_tower',
    title: 'ESP-NOW',
    description:
      'Protocollo di comunicazione peer-to-peer di Espressif, senza router. I gate inviano gli eventi di passaggio al coordinatore in millisecondi, senza infrastruttura WiFi.',
  },
  {
    icon: 'integration_instructions',
    title: 'Embedded Systems',
    description:
      'Firmware ottimizzato scritto in C/C++ per garantire tempi di risposta al millisecondo e massima affidabilità. I nomi dei piloti vengono salvati nella flash NVS.',
  },
  {
    icon: 'flight',
    title: 'Drone Racing FPV',
    description:
      'Tecnologia pensata per il mondo delle corse di droni in prima persona, uno sport in forte crescita globale.',
  },
];

const Tecnologia = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="tecnologia">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-widest text-slate-900 dark:text-white">ECOSISTEMA TECNOLOGICO</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="red-gradient-border p-8 rounded-xl glass hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {tech.icon === 'flight' ? (
                  <DroneIcon className="text-primary w-6 h-6" />
                ) : (
                  <span className="material-icons-outlined text-primary">{tech.icon}</span>
                )}
                <h4 className="font-display font-bold text-slate-900 dark:text-white">{tech.title}</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologia;
