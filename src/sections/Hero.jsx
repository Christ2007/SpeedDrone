import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
        <img 
          alt="Drone Racing Track Background" 
          className="w-full h-full object-cover grayscale opacity-30 scale-110 blur-sm" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATUAE2-b6ogjvalB4W8FYLxiLQnoyTk2aLmDaTT5ZDV7dnVIGZ_JcfarSQR6hGfcPmS0O72-Qw4El4bXDuz9GZJoBQO_L5wOKg9p8pszO9NwK9n8A8VTdWXFKrDneo6OhanJYclIWMMNECX8FP08UNQ-KcQEST9G-djN4BykpYwhjV5_Dya3YFcWf_yGAEbc1VcCWjnpU_s3oHs4inZ_-12H4uyj7vbZP4JY5cmi12UnTfi-M_2-qFeT2MvfWoNA3DbSjTj3h-a_xD"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-4">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          alt="SpeedDrone Logo Large" 
          className="mx-auto mb-8 w-56 sm:w-72 md:w-96 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" 
          src="/logo.png"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase"
        >
          <span className="text-white">Tecnologia intelligente per le gare </span>
          <span className="text-primary italic">FPV</span>
          <span className="text-white"> a basso costo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-sm md:text-base text-slate-400 mb-10 uppercase tracking-[0.2em]"
        >
          Sistema di rilevamento gate • Progetto Classe 5B
        </motion.p>
        
        <motion.a 
          href="#progetto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-display group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold rounded-full transition-all bg-transparent border-2 border-primary text-white hover:bg-primary shadow-neon"
        >
          <span className="relative uppercase tracking-[0.2em]">Scopri il progetto</span>
        </motion.a>
      </div>

      {/* Decorative Beams */}
      <div className="absolute top-1/4 -left-20 w-96 h-1 bg-primary/20 blur-xl -rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-1 bg-primary/20 blur-xl -rotate-45 animate-pulse" style={{ animationDelay: '0.7s' }}></div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary shadow-neon" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;