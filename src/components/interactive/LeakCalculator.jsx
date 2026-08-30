import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldAlert, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function LeakCalculator() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ tracking: null, speed: null, automation: null });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 'tracking',
      title: '¿Tenés instalado Pixel y GA4 midiendo conversiones reales?',
      options: [
        { label: 'Sí, mido eventos exactos', score: 35 },
        { label: 'Solo lo básico / No sé medirlo', score: 10 },
        { label: 'No tengo nada instalado', score: 0 },
      ]
    },
    {
      id: 'speed',
      title: '¿Tu landing carga en menos de 2.5 segundos en móviles?',
      options: [
        { label: 'Sí, vuela e interactúa rápido', score: 30 },
        { label: 'Tarda un poco en cargar', score: 15 },
        { label: 'Es lenta o pesada', score: 0 },
      ]
    },
    {
      id: 'automation',
      title: '¿Los leads reciben respuesta o entrega automatizada al instante?',
      options: [
        { label: 'Sí, respuesta inmediata (Make/WhatsApp)', score: 35 },
        { label: 'Respondo manual cuando puedo', score: 10 },
        { label: 'No tengo automatización', score: 0 },
      ]
    }
  ];

  const handleSelect = (optionScore) => {
    const currentQuestionId = questions[step - 1].id;
    setAnswers({ ...answers, [currentQuestionId]: optionScore });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(4); // Pantalla de resultado
    }
  };

  const totalScore = (answers.tracking || 0) + (answers.speed || 0) + (answers.automation || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Aquí conectaremos con tu Webhook de Make/MailerLite
    }
  };

  const resetCalculator = () => {
    setStep(1);
    setAnswers({ tracking: null, speed: null, automation: null });
    setSubmitted(false);
    setEmail('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-[#0A0A0A] border border-[#C9A94D]/30 p-6 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(201,169,77,0.1)]">
      
      {/* Header del Diagnóstico */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C9A94D]/10 border border-[#C9A94D]/30 flex items-center justify-center">
            <Activity className="w-5 h-5 text-[#FFD700]" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
              Auditoría de Convertibilidad
            </h3>
            <p className="text-xs font-mono text-zinc-400">Diagnóstico interactivo en tiempo real</p>
          </div>
        </div>

        {step <= 3 && (
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700]">
            Paso {step} de 3
          </span>
        )}
      </div>

      {/* Preguntas */}
      <AnimatePresence mode="wait">
        {step <= 3 && (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-medium text-zinc-100">
              {questions[step - 1].title}
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {questions[step - 1].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.score)}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A94D]/60 hover:bg-[#C9A94D]/5 transition-all text-left group"
                >
                  <span className="text-sm font-light text-zinc-300 group-hover:text-white">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#FFD700] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pantalla de Resultados + Formulario */}
        {step === 4 && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A94D]/10 border border-[#C9A94D]/30 text-xs font-mono text-[#FFD700]">
              <ShieldAlert className="w-4 h-4" />
              <span>RESULTADO DE TU ECOSISTEMA</span>
            </div>

            <div className="py-4">
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#C9A94D] to-[#C0C0C0]">
                {totalScore}%
              </span>
              <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-widest">
                Eficiencia de Conversión Estimada
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <p className="text-sm text-zinc-300">
                  Desbloqueá el reporte detallado de tus fugas de tráfico y el plan para corregirlas:
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo corporativo..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C9A94D]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#C9A94D] text-black font-bold text-xs uppercase tracking-wider hover:brightness-125 transition-all"
                  >
                    Obtener Reporte
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>¡Reporte enviado! Revisá tu bandeja de entrada.</span>
              </div>
            )}

            <button
              onClick={resetCalculator}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors pt-4"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reiniciar test</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}