import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function InmersiveSection() {
  const [isOpened, setIsOpened] = useState(false);

  const words = ["conectar", "transformar", "experimentar"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, vi la sección inmersiva y quiero contactarte.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative h-screen w-full bg-[#0b0b0b] text-white overflow-hidden">
      
      {/* 1. FONDO CON EL VIDEO */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover filter brightness-75 scale-105"
        >
          <source src="/divider-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        {/* SELLO / PARCHE (Tapa la marca de agua) */}
        <div className="absolute top-6 right-6 z-40 pointer-events-none hidden sm:block">
          <div className="bg-[#0b0b0b] border-2 border-[#d4af37] px-8 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.95)] transform rotate-3 flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#d4af37] font-black">
              Traducción Creativa
            </span>
          </div>
        </div>

        {/* Faroles de teatro cenitales */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 z-5 pointer-events-none overflow-hidden"
        >
          <div className="absolute -top-20 left-[25%] w-[450px] h-[750px] bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/10 to-transparent transform -rotate-12 blur-[50px]"></div>
          <div className="absolute -top-20 right-[25%] w-[450px] h-[750px] bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/10 to-transparent transform rotate-12 blur-[50px]"></div>
        </motion.div>
      </div>

      {/* 2. CAPA DE TEXTO (Tipografías Agrandadas y Centradas) */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ 
            opacity: isOpened ? 1 : 0, 
            scale: isOpened ? 1 : 0.95,
            y: isOpened ? 0 : 15 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 w-full pointer-events-auto"
        >
          <div className="space-y-5 w-full flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Todo es comunicación.
            </h2>
            
            <div className="flex items-center justify-center gap-x-4 text-3xl sm:text-5xl font-black tracking-tight text-white w-full">
              <span>La clave:</span>
              
              {/* Contenedor amplio alineado SIEMPRE a la izquierda */}
              <div className="inline-flex items-center justify-start relative w-[220px] sm:w-[360px] h-12 sm:h-16 overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentWordIndex]}
                    initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute left-0 text-[#d4af37] font-black underline decoration-2 sm:decoration-4 underline-offset-8 whitespace-nowrap text-left"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Más allá de lo técnico, lo que define una marca es su capacidad de conectar. Cuando tu identidad está alineada, la marca se revela y empieza a resonar.
          </p>

          <div className="pt-2">
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:bg-white transition-all group"
            >
              <span>Contactame</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* 3. PUERTAS CORREDIZAS */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none flex overflow-hidden w-full h-full"
        onViewportEnter={() => setIsOpened(true)}
        viewport={{ amount: 0.35 }}
      >
        {/* Puerta Izquierda */}
        <motion.div 
          initial={{ x: "0%" }}
          animate={{ x: isOpened ? "-100%" : "0%" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-1/2 h-full bg-[#0b0b0b] border-r-2 border-[#d4af37]/60 shadow-[20px_0_50px_rgba(0,0,0,0.8)] relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_#d4af37]"></div>
        </motion.div>

        {/* Puerta Derecha */}
        <motion.div 
          initial={{ x: "0%" }}
          animate={{ x: isOpened ? "100%" : "0%" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-1/2 h-full bg-[#0b0b0b] border-l-2 border-[#d4af37]/60 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_#d4af37]"></div>
        </motion.div>
      </motion.div>

    </section>
  );
}