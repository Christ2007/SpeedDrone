import { motion } from 'framer-motion';

/**
 * Tecnologia — "Tecnologia Utilizzata" section showcasing tech stack redesign.
 */
const technologies = [
  {
    icon: 'developer_board',
    title: 'Microcontrollore ESP32',
    description:
      'Microcontrollore dual-core ad alte prestazioni con Wi-Fi e Bluetooth integrati. Il cervello del nostro sistema.',
  },
  {
    icon: 'lightbulb',
    title: 'Diodi Laser',
    description:
      'Emettitori laser di precisione per creare barriere di rilevamento affidabili e istantanee attraverso i gate.',
  },
  {
    icon: 'integration_instructions',
    title: 'Embedded Systems',
    description:
      'Firmware ottimizzato scritto in C/C++ per garantire tempi di risposta al millisecondo e massima affidabilità.',
  },
  {
    icon: 'build',
    title: 'Prototipazione',
    description:
      'Progettazione e assemblaggio di circuiti con componenti reali, dalla breadboard al prototipo funzionante.',
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
                <span className="material-icons-outlined text-primary">{tech.icon}</span>
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
