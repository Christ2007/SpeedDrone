import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import StepCard from '../components/StepCard';
import { GiLaserSparks, GiDeliveryDrone } from 'react-icons/gi';
import { FaMicrochip } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * ComeFunziona — "Come Funziona" section showing the 3-step process.
 */
const steps = [
  {
    number: '1',
    icon: <GiLaserSparks />,
    title: 'Fascio Laser sul Gate',
    description:
      'Un diodo laser emette un fascio continuo attraverso il gate di gara, creando una barriera invisibile.',
  },
  {
    number: '2',
    icon: <GiDeliveryDrone />,
    title: 'Il Drone Interrompe il Fascio',
    description:
      "Quando il drone attraversa il gate ad alta velocità, il suo corpo interrompe il fascio laser per un brevissimo istante.",
  },
  {
    number: '3',
    icon: <FaMicrochip />,
    title: "L'ESP32 Rileva l'Evento",
    description:
      "Il microcontrollore ESP32 rileva l'interruzione del segnale e registra il passaggio con precisione al millisecondo.",
  },
];

const ComeFunziona = () => {
  return (
    <SectionWrapper id="come-funziona" dark>
      <SectionTitle light>Come Funziona</SectionTitle>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Connecting line (desktop only) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5
            bg-gradient-to-r from-drone-red via-drone-blue-electric to-drone-blue
            origin-left"
          style={{ zIndex: 0 }}
        />

        {steps.map((step, i) => (
          <StepCard key={step.number} {...step} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ComeFunziona;
