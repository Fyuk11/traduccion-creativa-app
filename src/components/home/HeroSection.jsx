
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import Button from '../common/Button';

/**
 * COMPONENTE AYUDANTE 1: Efecto Máquina de Escribir estándar
 */
const TypewriterText = ({ text, delay = 0, speed = 0.03, className = "" }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: speed, delayChildren: delay }
        }
      }}
      className={className}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * COMPONENTE AYUDANTE 2: Palabra Mágica ("creativa")
 * Ahora la opacidad y el color son independientes.
 */
const AnimatedWord = ({ word, typeDelay = 0, rainbowDelay = 4 }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          // staggerChildren maneja la velocidad del tipeo
          transition: { staggerChildren: 0.08, delayChildren: typeDelay }
        }
      }}
      className="inline-block font-black"
    >
      {Array.from(word).map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 } // Primero aparece (tipeo)
          }}
        >
          <motion.span
            // Y de forma independiente, maneja el color arcoíris
            animate={{
              color: ["#fbbf24", "#fbbf24", "#a855f7", "#ec4899", "#3b82f6", "#14b8a6", "#fbbf24"]
            }}
            transition={{
              duration: 5,           
              repeat: Infinity,      
              delay: rainbowDelay + (index * 0.1), // Espera a que termine todo para brillar
              ease: "linear"
            }}
          >
            {char}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, me gustaría cotizar un ecosistema digital para mi proyecto.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
      
      {/* VIDEO DE FONDO Y CAPAS DE OSCURECIMIENTO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          {/* ACÁ CARGAMOS TU VIDEO: Asegurate de poner tu video en la carpeta "public" */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/90 via-transparent to-[#070709]/90" />
      </div>

      {/* CONTENIDO DEL HERO */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-6 mt-16">
        
        {/* Etiqueta superior */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-slate-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Traducción Creativa & Systems</span>
        </motion.div>

        {/* Título Principal Tipeado */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.05] min-h-[120px] sm:min-h-[100px]">
          <TypewriterText text="Traducción " delay={0.5} speed={0.05} />
          {/* Empieza a tipear en 1.1s y el arcoíris arranca a los 6s */}
          <AnimatedWord word="creativa" typeDelay={1.1} rainbowDelay={6} />
        </h1>

        {/* Subtítulos Tipeados en secuencia */}
        <div className="max-w-3xl mx-auto space-y-2 min-h-[80px]">
          <p className="text-xl sm:text-2xl text-white font-semibold">
            {/* Empieza a tipear al 2.0s */}
            <TypewriterText text="Damos vida digital a tus ideas." delay={2.0} speed={0.03} />
          </p>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {/* Empieza a tipear al 3.5s */}
            <TypewriterText 
              text="Experiencias digitales profesionales: performance, SEO técnico y conversión en primer plano." 
              delay={3.5} 
              speed={0.02} 
            />
          </p>
        </div>

        {/* Botón CTA (Aparece suave al final de todo el tipeo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.5, ease: "easeOut" }}
          className="pt-8"
        >
          <Button 
            href={waLink} 
            variant="solid-white"
            icon={<MessageSquare className="w-5 h-5 fill-black" />}
          >
            Solicitar Propuesta Estratégica
          </Button>
        </motion.div>

      </div>
    </section>
  );
}