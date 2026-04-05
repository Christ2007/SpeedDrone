import { useState, useEffect } from 'react';

/**
 * Footer — Bottom section with project credits and a dark mode toggle.
 */
const Footer = ({ onPrivacyClick }) => {
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

          <div className="flex flex-col items-end gap-3 text-right">
            <p className="font-body text-slate-500 text-sm">
              © 2026 SpeedDrone. Tutti i diritti riservati.
              <br />
              Sito a cura di Christian Luongo
            </p>

            <div className="flex items-center gap-4">
              {/* Privacy Policy link */}
              <button
                onClick={onPrivacyClick}
                className="font-body text-slate-500 text-xs hover:text-red-400 transition-colors underline underline-offset-2 cursor-pointer"
              >
                Privacy Policy
              </button>

              {/* GitHub link */}
              <a
                href="https://github.com/Christ2007/SpeedDrone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
