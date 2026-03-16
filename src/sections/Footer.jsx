import { useState, useEffect } from 'react';

/**
 * Footer — Bottom section with project credits and a dark mode toggle.
 */
const Footer = () => {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on document class
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-schematic opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <img 
            alt="SpeedDrone Logo Footer" 
            className="h-8 object-contain transition-transform hover:scale-105" 
            src="/logo.png" 
          />
          <span className="font-display font-bold tracking-widest text-lg text-white">SPEEDDRONE</span>
        </div>

        {/* Controls and Copyright */}
        <div className="flex items-center gap-4">
         {/*  <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:text-primary transition-colors focus:outline-none flex items-center justify-center text-white" 
            aria-label="Toggle Dark Mode"
          >
            <span className="material-icons-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button> */}
          <p className="font-body text-slate-500 text-sm">
            © 2026 Progetto 5B. Tutti i diritti riservati.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
