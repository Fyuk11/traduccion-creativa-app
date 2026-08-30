
import { motion } from 'framer-motion';
import { AlignLeft, BarChart3, Monitor, ArrowRight } from 'lucide-react';

export default function AboutEditorialSection() {
  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, quiero este sistema en mi marca.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  const goldGradientStyle = {
    background: 'linear-gradient(45deg, #d4af37, #a37e2c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const cardsData = [
    {
      icon: <AlignLeft className="w-4 h-4 text-[#a37e2c]" />,
      tag: "Conectamos",
      title: "Escuchar & Diseñar",
      description: (
        <>
          Nos sumergimos en tu proyecto para entender su esencia, y la transformamos en una arquitectura persuasiva que <strong className="text-slate-950 font-bold">guía al usuario hacia la acción.</strong>
        </>
      )
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-[#a37e2c]" />,
      tag: "Medimos",
      title: "Traducir & Trackear",
      description: (
        <>
          Convertimos tus ideas en palabras vivas y conectamos los sensores <strong className="text-slate-950 font-bold">(GA4, Pixel, Clarity)</strong> en tus cuentas para que veas realmente qué hacen tus usuarios.
        </>
      )
    },
    {
      icon: <Monitor className="w-4 h-4 text-[#a37e2c]" />,
      tag: "Generamos",
      title: "Impacto & Identidad",
      description: "Logramos una presencia digital que respira la esencia de tu marca, diseñada estratégicamente para captar la atención y convertir visitantes en una base de datos sólida a través de recursos de valor."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="AboutEditorialSection" className="bg-slate-100 text-slate-900 py-24 sm:py-32 px-6 relative overflow-hidden border-y border-slate-300">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto space-y-16 relative z-10"
      >
        
        {/* 1. TÍTULO Y SUBTÍTULO */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(45deg, #d4af37, #a37e2c)' }}></div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight">
            Traducción <span style={goldGradientStyle}>creativa</span> & Sistemas
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-slate-800 tracking-wider uppercase pt-4 leading-relaxed max-w-3xl mx-auto">
            Adaptamos tu mensaje para que <span className="underline decoration-[#d4af37] decoration-2 underline-offset-4">conecte con emociones</span>, y construimos la tecnología para que <span className="underline decoration-[#d4af37] decoration-2 underline-offset-4">convierta en ventas</span>.
          </p>
        </motion.div>

        {/* 2. LAS 3 TARJETAS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-200/90 flex flex-col justify-between relative group hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/60 transition-all"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-200/80 bg-slate-50 text-xs font-mono text-slate-700">
                  {card.icon}
                  <span>{card.tag}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#a37e2c] transition-colors">
                <span>// Fase 0{index + 1}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CONTENEDOR INFERIOR CON EFECTO DE VIENTO Y ELEMENTOS DELANTE */}
        <div className="relative py-12 px-4 rounded-3xl overflow-hidden">
          
          {/* EFECTO DE VIENTO: Ráfaga de gradiente que cruza de izquierda a derecha, frena y repite */}
          <motion.div 
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1] // Esto le da el efecto de inercia y pausa
            }}
            className="absolute inset-y-0 w-3/4 -z-10 blur-3xl pointer-events-none bg-gradient-to-r from-transparent via-amber-300/50 to-purple-300/40"
          />

          {/* CONTENIDO DELANTE DE TODO (Diferencial y CTA bien visibles) */}
          <div className="space-y-10 relative z-20 max-w-4xl mx-auto">
            
            {/* 3. CAJA DIFERENCIAL */}
            <motion.div 
              variants={itemVariants}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-2.5" style={{ background: 'linear-gradient(45deg, #d4af37, #a37e2c)' }}></div>
              
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 sm:pl-6">
                <strong className="text-slate-950 font-bold">El Diferencial:</strong> Un mensaje hermoso sin métricas es como hablar en el desierto. Combinamos el poder de <span className="font-bold" style={goldGradientStyle}>la traducción creativa con mapas de calor y analítica</span> para saber <strong className="text-slate-950">qué</strong> sienten tus usuarios y <strong className="text-slate-950">por qué</strong> te eligen.
              </p>
            </motion.div>

            {/* 4. BOTÓN CTA INFERIOR */}
            <motion.div variants={itemVariants} className="text-center pt-2">
              <motion.a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-base text-slate-900 bg-white border-2 border-[#d4af37] shadow-[0_15px_40px_rgba(212,175,55,0.35)] hover:bg-[#d4af37] hover:text-white transition-all"
              >
                <span>Quiero este sistema en mi marca</span>
              </motion.a>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}