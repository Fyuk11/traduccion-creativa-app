import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Calculator, Sparkles } from 'lucide-react';

// Importamos las 2 herramientas existentes
import PromptSim from '../interactive/PromptSim';
import SavingsCalculator from './SavingsCalculator';

export default function InteractiveTools() {
  const [activeTool, setActiveTool] = useState('prompt'); // 'prompt' | 'calculator'

  return (
    <section id="herramientas" className="w-full bg-[#07070d] text-slate-100 py-20 px-4 sm:px-6 relative overflow-hidden font-sans border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Probá la potencia antes de comprar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Herramientas Interactivas Incluidas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Seleccioná una de las burbujas para interactuar con los generadores que vas a dominar en el e-book.
          </p>
        </div>

        {/* BURBUJAS DE SELECCIÓN (TABS) */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-10">
          
          {/* Burbuja 1: Generador de Prompts */}
          <button
            onClick={() => setActiveTool('prompt')}
            className={`relative px-5 py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 ${
              activeTool === 'prompt'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Bot className={`w-4 h-4 ${activeTool === 'prompt' ? 'text-cyan-300' : 'text-slate-400'}`} />
            <span>1. Generador de Prompts IA</span>
          </button>

          {/* Burbuja 2: Calculadora de Ahorro */}
          <button
            onClick={() => setActiveTool('calculator')}
            className={`relative px-5 py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 ${
              activeTool === 'calculator'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Calculator className={`w-4 h-4 ${activeTool === 'calculator' ? 'text-cyan-300' : 'text-slate-400'}`} />
            <span>2. Calculadora de Ahorro</span>
          </button>

        </div>

        {/* CONTENEDOR DINÁMICO CON ANIMACIÓN DE TRANSICIÓN */}
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-4 sm:p-8 backdrop-blur-xl min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTool === 'prompt' ? (
              <motion.div
                key="prompt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <PromptSim />
              </motion.div>
            ) : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <SavingsCalculator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}