import { useState } from 'react';
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
import PrivacyPolicy from './sections/Informativa';

/**
 * App — Main application component.
 * Renders all sections in order with a fixed Navbar.
 */
const App = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div 
      className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
    >
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
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />

      {showPrivacy && (
        <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
      )}
    </div>
  );
};

export default App;
