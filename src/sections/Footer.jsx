import { motion } from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';

/**
 * Footer — Bottom section with project credits and links.
 */
const footerLinks = [
  { label: 'Progetto', href: '#progetto' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Soluzione', href: '#soluzione' },
  { label: 'Team', href: '#team' },
  { label: 'Futuro', href: '#futuro' },
];

const Footer = () => {
  return (
    <footer className="relative bg-drone-dark border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-drone-red/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="SpeedDrone"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-orbitron text-lg font-bold">
                <span className="text-white">SPEED</span>
                <span className="text-drone-red">DRONE</span>
              </span>
            </div>
            <p className="font-rajdhani text-gray-500 text-sm leading-relaxed">
              Sistema di rilevamento gate per gare FPV.<br />
              Progetto scolastico di ingegneria.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigazione
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-rajdhani text-gray-500 hover:text-white text-sm
                    transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Informazioni
            </h4>
            <div className="font-rajdhani text-gray-500 text-sm space-y-2">
              <p>Progetto scolastico — Classe 5B</p>
              <p>Anno Scolastico 2025/2026</p>
              <p>Indirizzo: Struttura e costruzione del mezzo aereo</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-rajdhani text-gray-600 text-sm">
            © 2026 SpeedDrone — Tutti i diritti riservati
          </p>
          <p className="font-rajdhani text-gray-600 text-sm flex items-center gap-1">
            Realizzato con <FaHeart className="text-drone-red text-xs" /> dalla Classe 5B
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
