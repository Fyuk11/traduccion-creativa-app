import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Video, DollarSign, AlertCircle,} from 'lucide-react';

export default function PainTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'La Hoja en Blanco',
      icon: FileText,
      subtitle: 'Bloqueo creativo inicial',
      desc: 'Pasás 3 horas mirando TikTok intentando copiar tendencias. Anotás un par de ideas sueltas en el celular, pero ninguna te convence para transmitir el valor de tu marca.',
      impact: '3 horas perdidas por video',
      badge: 'Fase 1: Idea'
    },
    {
      id: '02',
      title: 'El Miedo al Botón "Grabar"',
      icon: Video,
      subtitle: 'Frustración frente a cámara',
      desc: 'Te preparás, acomodás la iluminación, pero te trabás con las palabras una y otra vez. Grabar un clip simple de 30 segundos te consume toda la tarde.',
      impact: 'Agotamiento mental diario',
      badge: 'Fase 2: Grabación'
    },
    {
      id: '03',
      title: 'El Presupuesto Quemado',
      icon: DollarSign,
      subtitle: 'Delegación costosa e ineficiente',
      desc: 'Decidís contratar afuera. Las agencias te piden fortunas mensuales o los editores freelancers tardan semanas en entregarte un material que ni refleja tu visión.',
      impact: 'Costos desorbitados',
      badge: 'Fase 3: Producción'
    }
  ];

  return (
    <section className="w-full bg-[#07070d] text-slate-100 py-24 px-4 sm:px-6 relative overflow-hidden font-sans">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-normal mb-3">
            El ciclo tóxico de crear contenido <span className="text-slate-400 font-normal"><br></br>¿Te suena?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Hacé clic en cada fase del problema para ver cómo el método tradicional destruye tu tiempo y presupuesto.
          </p>
        </div>

        {/* SELECTOR DE PASOS EN TABS (Interacción de React) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 ${
                  isActive 
                    ? 'bg-[#111528] border-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.2)]' 
                    : 'bg-[#0a0d18] border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className={`text-xs font-semibold block ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    PASO {step.id}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* TARJETA DINÁMICA CON ANIMATE PRESENCE */}
        <div className="relative min-h-[220px] rounded-3xl bg-gradient-to-b from-[#0e1222] to-[#0a0d18] border border-slate-800/90 p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs mb-4">
                  {steps[activeStep].badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0 p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-center">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                  Impacto negativo
                </span>
                <span className="text-sm font-bold text-rose-200">
                  ⚠️ {steps[activeStep].impact}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* CONCLUSIÓN DEL PROBLEMA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-rose-950/40 via-red-950/20 to-rose-950/40 border border-rose-500/40 text-center"
        >
          <p className="text-sm sm:text-base font-semibold text-rose-200 flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>Resultado del modelo viejo: <strong className="text-rose-400">Te rendís y el algoritmo te entierra. 📉</strong></span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}