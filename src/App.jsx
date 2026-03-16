import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Progetto from './sections/Progetto';
import ComeFunziona from './sections/ComeFunziona';
import Tecnologia from './sections/Tecnologia';
import Problema from './sections/Problema';
import Soluzione from './sections/Soluzione';
import Team from './sections/Team';
import Obiettivi from './sections/Obiettivi';
import Futuro from './sections/Futuro';
import Footer from './sections/Footer';

/**
 * App — Main application component.
 * Renders all sections in order with a fixed Navbar.
 */
const App = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Progetto />
      <ComeFunziona />
      <Tecnologia />
      <Problema />
      <Soluzione />
      <Team />
      <Obiettivi />
      <Futuro />
      <Footer />
    </div>
  );
};

export default App;
