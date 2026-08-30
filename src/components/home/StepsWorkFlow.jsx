
import { motion } from 'framer-motion';
import {  CheckCircle2, ArrowRight } from 'lucide-react';

export default function EcosystemSection() {
  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, quiero empezar mi proyecto con este sistema.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  const goldGradientStyle = {
    background: 'linear-gradient(45deg, #d4af37, #a37e2c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const phases = [
    {
      phase: "Fase 1",
      title: "Arquitectura & Diseño",
      description: (
        <>
          Le damos cuerpo a tu marca (Landing, Portafolio o Sitio). No usamos plantillas genéricas; diseñamos la interfaz con un único objetivo: <strong className="text-slate-950 font-bold">captar la atención y guiar al usuario hacia la acción</strong> sin perder tu esencia.
        </>
      ),
      points: [
        "Copywriting persuasivo y UX/UI",
        "Desarrollo Mobile-First veloz"
      ],
      image: "/proyecto1.webp",
      reverse: false
    },
    {
      phase: "Fase 2",
      title: "Tracking & Analítica",
      description: (
        <>
          Instalamos los sensores en tus propias cuentas. Nunca te pedimos contraseñas. Mediante una guía sencilla de 3 pasos, te enseñamos a darnos acceso seguro para conectar <strong className="text-slate-950 font-bold">Meta Pixel, GA4 y Microsoft Clarity</strong>.
        </>
      ),
      points: [
        "Mapas de calor y sesiones de usuario",
        "Privacidad total y control de tu data"
      ],
      image: "/proyecto2.webp",
      reverse: true
    },
    {
      phase: "Fase 3",
      title: "Captura & Conversión",
      description: (
        <>
          Tu web no es solo una vidriera; es una herramienta para construir tu comunidad. Integramos formularios inteligentes y sistemas de descarga de Lead Magnets optimizados para transformar a cada visitante en un contacto de confianza.
        </>
      ),
      points: [
        "Automatización de captación",
        "Base de datos sólida y propia"
      ],
      image: "/proyecto3.webp",
      reverse: false,
      isLast: true
    }
  ];

  return (
    <section id="StepsWorkFlow" className="bg-[#f8f9fa] text-slate-900 py-24 sm:py-32 px-6 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* TÍTULO PRINCIPAL DE LA SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="w-12 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(45deg, #d4af37, #a37e2c)' }}></div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight">
            ¿Cómo construimos tu <span style={goldGradientStyle}>Ecosistema</span>?
          </h2>
          
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-500 pt-2">
            Un proceso transparente, paso a paso y basado en datos reales.
          </p>
        </motion.div>

        {/* CONTENEDOR DE LAS FASES EN ZIGZAG */}
        <div className="space-y-24 sm:space-y-32">
          {phases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* IMAGEN CON EFECTO ZOOM HOVER */}
              <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-200 group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* TEXTO Y CONTENIDO DE LA FASE */}
              <div className={`lg:col-span-6 space-y-6 ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/60 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                  <span>{item.phase}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* VIÑETAS */}
                <div className="space-y-3 pt-2">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a37e2c]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA ESPECÍFICO EN LA ÚLTIMA TARJETA */}
                {item.isLast && (
                  <div className="pt-6">
                    <motion.a 
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-slate-900 bg-white border-2 border-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:bg-[#d4af37] hover:text-white transition-all group"
                    >
                      <span>Empezar mi proyecto</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                )}

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}