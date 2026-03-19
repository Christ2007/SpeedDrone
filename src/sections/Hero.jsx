import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "5rem" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5), black)" }}></div>
        <img alt="Drone Racing Track Background" class="w-full h-full object-cover grayscale opacity-30 scale-110 blur-sm" src="https://imgs.search.brave.com/dsWQIJ1ljMeOmD6ob6KQwD44wtsn4frjrPXGTlJII24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjk1/Nzc0ODQ2L3Bob3Rv/L3RoZS1kcm9uZS1y/YWNpbmctbGVhZ3Vl/LWN1c3RvbS1kcm9u/ZXMtdGhlLXJhY2Vy/My1pbi1hY3Rpb24t/YXQtYWxleGFuZHJh/LXBhbGFjZS1mb3It/dGhlLWFsbGlhbnou/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJjOU5UeHhsdXdx/SDkwbC10WlM2MklP/WUNDUlpweUVNWXB1/S2ZZVXJZNXc9"></img>
      </div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 1.5rem", width: "100%", maxWidth: "56rem", margin: "0 auto" }}>

        <motion.img
          src="/logo.png"
          alt="SpeedDrone Logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: "min(480px, 85vw)", marginLeft: "2rem", marginBottom: "-5rem", filter: "drop-shadow(0 0 20px rgba(255,0,0,0.6))" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.1, textTransform: "uppercase", marginBottom: "1.5rem", color: "white" }}
        >
          Tecnologia a basso costo per le gare{" "}
          <span style={{ color: "#FF0000", fontStyle: "italic" }}>FPV</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#94a3b8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2.5rem" }}
        >
          Sistema di rilevamento del tempo per le gare di droni FPV
        </motion.p>

        <motion.a
          href="#progetto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 25px rgba(255,0,0,0.8)", 
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: "Orbitron, sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "1rem 2.5rem", borderRadius: "9999px", border: "2px solid #FF0000", color: "white", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none", boxShadow: "0 0 15px rgba(255,0,0,0.4)", cursor: "pointer" }}
        >
          Scopri il progetto
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
