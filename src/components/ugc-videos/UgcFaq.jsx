import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown} from 'lucide-react';

export default function UgcFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Cómo es el proceso una vez que contrato el pack?',
      a: 'Apenas confirmás el pedido, coordinamos los detalles de tu producto o servicio. Redactamos los guiones y ganchos virales, producimos el material con creadores reales o IA, editamos y te entregamos los videos listos para publicar.'
    },
    {
      q: '¿Tengo que enviar mi producto físico?',
      a: 'Si tu producto requiere muestra física para un unboxing o demo directa, nos coordinamos para el envío. Si trabajás con servicios, infoproductos o apps, producimos todo de forma 100% digital usando recursos visuales e IA.'
    },
    {
      q: '¿Cuánto tiempo tarda la entrega de los videos?',
      a: 'El tiempo promedio de entrega para el Pack de 5 videos es de entre 3 y 5 días hábiles una vez aprobados los guiones iniciales.'
    },
    {
      q: '¿Sirven estos videos para campañas de Meta Ads / TikTok Ads?',
      a: '¡Totalmente! Todos nuestros videos están estructurados bajo metodologías de conversión (Hook -> Problema -> Solución -> CTA), optimizados para pauta publicitaria en TikTok, Instagram y Facebook Ads.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Preguntas Frecuentes
        </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-colors bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-violet-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-violet-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}