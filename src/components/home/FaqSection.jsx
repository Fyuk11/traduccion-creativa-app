import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageSquare } from 'lucide-react';

const faqsData = [
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer: "Los tiempos varían según el alcance del proyecto. Un ecosistema web o desarrollo estándar suele rondar entre las 2 y 4 semanas desde que iniciamos y tenemos todo el material alineado."
  },
  {
    question: "¿Tengo que darles acceso a mis contraseñas?",
    answer: "No es necesario que nos des tus claves principales. Te guiaremos para que nos otorgues accesos seguros como colaborador o trabajamos directamente sobre tus entornos de forma segura."
  },
  {
    question: "¿Las webs están optimizadas para Google (SEO)?",
    answer: "Sí, absolutamente. Cada desarrollo se construye bajo estrictas normas de rendimiento, estructura semántica limpia y optimización técnica para que Google indexe tu sitio de la mejor manera."
  },
  {
    question: "¿Cómo es la modalidad de pago?",
    answer: "Trabajamos con un esquema fraccionado: un anticipo para reservar el espacio en agenda y dar inicio al proyecto, y un saldo final contra entrega y satisfacción con el resultado."
  },
  {
    question: "¿Qué pasa si quiero pedir cambios?",
    answer: "Durante las etapas de revisión pautadas, incorporamos tus devoluciones y ajustes necesarios. Queremos asegurarnos de que la identidad refleje exactamente lo que buscás."
  },
  {
    question: "¿Tengo que pagar un abono mensual fijo?",
    answer: "No de forma obligatoria. Los desarrollos son tuyos y se entregan listos. Sí ofrecemos opcionalmente planes de mantenimiento o evolución continua para quienes prefieren delegar esa parte."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, leí las consultas frecuentes y quiero iniciar mi proyecto.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative py-32 bg-[#0b0b0b] text-white px-6 overflow-hidden">
      
      {/* Fondo gris plateado / tecnológico de agencia */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-slate-400/15 via-zinc-400/10 to-transparent rounded-full blur-[140px]"
        ></motion.div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Lo que necesitás saber
          </h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest pt-1">
            Claridad desde el día uno.
          </p>
        </div>

        {/* Grilla de FAQs interactiva con estética gris plateada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen 
                    ? 'bg-zinc-900/95 border-slate-300/60 shadow-[0_0_30px_rgba(255,255,255,0.08)]' 
                    : 'bg-zinc-950/70 border-zinc-800/90 hover:border-slate-500/40 hover:bg-zinc-900/40'
                }`}
              >
                {/* Botón de la pregunta */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors duration-200 ${isOpen ? 'text-slate-200' : 'text-slate-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 shadow-md ${
                    isOpen ? 'bg-slate-200 text-zinc-950 rotate-45' : 'bg-zinc-900 text-slate-300 border border-zinc-800'
                  }`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {/* Contenido desplegable de la respuesta */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/80 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ÚLTIMO CTA DE CONVERSIÓN CON BRANDING DORADO (Transición perfecta al footer) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ¿Tenés un proyecto en mente y querés darle vida?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Hablemos directamente por WhatsApp. Te asesoramos sin compromiso sobre la mejor estrategia para tu marca.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-zinc-950 bg-[#d4af37] hover:bg-white transition-all shadow-[0_0_35px_rgba(212,175,55,0.4)] group"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>Iniciar Conversación con Traducción Creativa</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}