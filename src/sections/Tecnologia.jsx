import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import TechCard from '../components/TechCard';
import { FaMicrochip, FaCode, FaTools } from 'react-icons/fa';
import { GiLaserSparks, GiDeliveryDrone } from 'react-icons/gi';

/**
 * Tecnologia — "Tecnologia Utilizzata" section showcasing tech stack.
 */
const technologies = [
  {
    icon: <FaMicrochip />,
    title: 'ESP32',
    description:
      'Microcontrollore dual-core ad alte prestazioni con Wi-Fi e Bluetooth integrati. Il cervello del nostro sistema di rilevamento.',
  },
  {
    icon: <GiLaserSparks />,
    title: 'Diodi Laser',
    description:
      'Emettitori laser di precisione per creare barriere di rilevamento affidabili e istantanee attraverso i gate.',
  },
  {
    icon: <FaCode />,
    title: 'Programmazione Embedded',
    description:
      'Firmware ottimizzato scritto in C/C++ per garantire tempi di risposta al millisecondo e massima affidabilità.',
  },
  {
    icon: <FaTools />,
    title: 'Prototipazione Elettronica',
    description:
      'Progettazione e assemblaggio di circuiti con componenti reali, dalla breadboard al prototipo funzionante.',
  },
  {
    icon: <GiDeliveryDrone />,
    title: 'Drone Racing FPV',
    description:
      'Tecnologia pensata per il mondo delle corse di droni in prima persona, uno sport in forte crescita globale.',
  },
];

const Tecnologia = () => {
  return (
    <SectionWrapper id="tecnologia">
      <SectionTitle>Tecnologia Utilizzata</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, i) => (
          <TechCard key={tech.title} {...tech} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tecnologia;
