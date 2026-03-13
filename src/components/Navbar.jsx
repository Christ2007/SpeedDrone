import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

/**
 * Navbar — Fixed top navigation with smooth scroll links.
 * Features glass-morphism background on scroll and mobile hamburger menu.
 */
const navLinks = [
  { label: 'Progetto', href: '#progetto' },
  { label: 'Come Funziona', href: '#come-funziona' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Soluzione', href: '#soluzione' },
  { label: 'Team', href: '#team' },
  { label: 'Futuro', href: '#futuro' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-drone-dark/50 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full px-4 sm:px-8 xl:px-12 py-4 flex items-center justify-between">
        {/* Logo Container */}
        <div className="relative flex items-center h-12 w-24 md:w-32 lg:w-48">
          <a href="#hero" className="flex items-center group absolute -top-4 -left-2 md:-top-6 md:-left-4 lg:-top-10 z-50">
            <img
              src="/logo.png"
              alt="SpeedDrone Logo"
              className="h-20 w-auto md:h-24 lg:h-32 object-contain transition-transform duration-300 group-hover:scale-105 origin-top-left"
            />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-rajdhani text-sm font-medium text-gray-400 uppercase tracking-wider
                hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-drone-red to-drone-blue
                group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-drone-dark/95 backdrop-blur-lg border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      setMobileOpen(false);
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }
                  }}
                  className="font-rajdhani text-base text-gray-300 hover:text-white
                    uppercase tracking-wider transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
