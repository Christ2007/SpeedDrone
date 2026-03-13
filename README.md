# SpeedDrone — Sistema Intelligente di Rilevamento per Gare FPV 🏎️🚁 

**Progetto Scolastico — Classe 5B | Anno Scolastico 2025/2026**
*Indirizzo: Struttura e Costruzione del Mezzo Aereo*

![SpeedDrone Logo](./public/logo.png)

## 📖 Il Progetto
**SpeedDrone** nasce dall\'esigenza di risolvere un problema reale nel mondo del Drone Racing FPV: gli attuali sistemi professionali di cronometraggio e rilevamento dei gate sono estremamente costosi e poco accessibili ai principianti. 

Questo progetto unisce l\'elettronica, la programmazione e le tecnologie aero-spaziali per creare un **sistema di rilevamento passaggi (gate detection) a basso costo**, basato su microcontrollori ESP32 e diodi laser. L\'obiettivo è permettere a scuole, piccoli club e appassionati di organizzare gare con infrastrutture professionali ed economiche.

## 🚀 Come Funziona
Il sistema si divide in 3 fasi principali:
1. **Fascio di Laser & Sensore:** Alcuni diodi laser puntati verso sensori fotoresistivi creano una "barriera" invisibile attraverso il gate.
2. **Interruzione del Fascio:** Quando il drone attraversa il gate, interrompe il fascio laser per una frazione di secondo.
3. **Rilevamento ESP32:** Il microcontrollore rileva il calo di tensione, scatta il tempo di passaggio e lo invia al sistema centrale.

## 🛠️ Tecnologia Utilizzata
Il progetto fonde hardware e software per funzionare in perfetta sinergia:
* **Hardware:** Microcontrollori ESP32, sensori fotoelettrici, diodi laser 5V.
* **Sviluppo Web (Questa Repository):** Frontend moderno sviluppato come SPA (Single Page Application) veloce e reattiva.
  * **React & Vite:** Per prestazioni estreme e modularità.
  * **TailwindCSS:** Per lo styling e design system coerente.
  * **Framer Motion:** Per animazioni fluide e interazioni dinamiche.
* **Drone Racing FPV:** Conoscenza dell\'aerodinamica e delle manovre ad alta velocità dei quadricotteri.