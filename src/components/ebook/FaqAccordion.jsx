import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Necesito experiencia previa en edición o Inteligencia Artificial?',
      answer: 'Absolutamente no. El E-book está diseñado "a prueba de novatos". Te mostramos todo clic por clic, asumiendo que nunca antes usaste estas herramientas.'
    },
    {
      question: '¿Las herramientas son realmente gratuitas?',
      answer: 'Sí. Todo el método se basa en 2 plataformas que tienen versiones gratuitas súper potentes y suficientes para que crees contenido todos los días sin tener que pagar suscripciones.'
    },
    {
      question: '¿Cómo y cuándo recibo el E-book?',
      answer: 'La entrega es automática. Una vez que el pago se procesa a través de Hotmart, recibís instantáneamente un correo electrónico con el link para descargar y leer tu guía en cualquier dispositivo.'
    },
    {
      question: '¿Este método sirve para mi rubro o negocio?',
      answer: 'Sí, la inteligencia artificial se adapta a todo. Ya sea que vendas productos físicos, ofrezcas servicios, o seas un creador de contenido buscando crecer, la estructura de los videos funciona para cualquier nicho.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#07070d] text-slate-100 py-24 px-4 sm:px-6 font-sans border-t border-slate-800/80" id="faqs">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-normal">
            Preguntas <span className="text-cyan-400">Frecuentes</span>
          </h2>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                        {faq.answer}
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