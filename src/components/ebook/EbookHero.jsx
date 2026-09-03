
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function EbookHero({ 
  videoSrc = "/hero-vid-Ebook.mp4" 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-10 bg-[#07070d] text-center overflow-hidden font-sans">
      
     {/* 📹 VIDEO DE FONDO */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        /* poster="/path/tu-poster-ebook.jpg" */ /* Opcional: Descomentá si agregás una imagen poster */
        className="w-full h-full object-cover opacity-60 filter contrast-125 saturate-150"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/80 via-[#07070d]/70 to-[#07070d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.12)_0%,rgba(6,182,212,0.08)_50%,transparent_80%)]" />
    </div>

      {/* CONTENIDO BIEN DISTRIBUIDO (max-w-5xl) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center"
      >
        
        {/* Badge Neon con más espacio abajo */}
        <motion.div
          variants={fadeUpVariant}
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-normal mb-8 backdrop-blur-md"
        >
          <span>🚀 El secreto de las marcas que publican todos los días</span>
        </motion.div>

        {/* Título Principal con tamaño equilibrado */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-normal leading-[1.18] mb-3 max-w-4xl"
        >
          Creá Videos de Alta Conversión con
        </motion.h1>

        {/* Highlight Gradient */}
        <motion.div variants={fadeUpVariant} className="mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-normal">
            Inteligencia Artificial
          </span>
        </motion.div>

        {/* Bajada con aire y ancho equilibrado */}
        <motion.p
          variants={fadeUpVariant}
          className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed mb-12 font-normal px-4"
        >
          Descubrí el sistema paso a paso. Usando solo <strong className="text-white font-semibold">2 herramientas gratuitas</strong>, terminás de leer la guía y ya tenés tu primer video publicado.{' '}
          <span className="text-cyan-300 font-medium">Cero costos. Cero cámaras.</span>
        </motion.p>

       {/* Botón CTA con enlace directo a Hotmart */}
<motion.div variants={fadeUpVariant} className="w-full max-w-md flex justify-center mb-14">
  <a
    href="https://go.hotmart.com/F107264981G"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(147,51,234,0.38)] active:scale-95 group text-center"
  >
    ⚡ SÍ, QUIERO MI PRIMER VIDEO HOY
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
</motion.div>

        {/* Highlights del Pie bien separados */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Acceso Inmediato</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Herramientas 100% Gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Publicá Hoy Mismo</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}