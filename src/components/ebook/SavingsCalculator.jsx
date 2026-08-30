import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Film, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SavingsCalculator() {
  const [level, setLevel] = useState('scale'); // solo, scale, agency, machine

  const levelsData = {
    solo: {
      title: '🥉 Creador Autónomo',
      videos: '4 videos / mes',
      tradTime: '16 Horas de Rodaje y Edición',
      tradCost: '$300 USD en estudio/equipos',
      aiTime: '45 Minutos con Avatar IA',
      savedTime: '15 Horas Ahorradas',
      color: 'from-amber-500/20 to-orange-600/20',
      borderColor: 'border-amber-500/40',
      accentColor: 'text-amber-400'
    },
    scale: {
      title: '🥈 Marca en Escala',
      videos: '12 videos / mes',
      tradTime: '48 Horas de Producción',
      tradCost: '$800 USD en Editores / Cámara',
      aiTime: '2 Horas de Generación IA',
      savedTime: '46 Horas Libres al Mes',
      color: 'from-cyan-500/20 to-blue-600/20',
      borderColor: 'border-cyan-500/50',
      accentColor: 'text-cyan-400'
    },
    agency: {
      title: '🥇 Agencia / Marca Top',
      videos: '24 videos / mes',
      tradTime: '96 Horas de Fricción',
      tradCost: '$1,800 USD Costo Fijo',
      aiTime: '4 Horas Totales con IA',
      savedTime: '92 Horas de Automatización',
      color: 'from-indigo-500/20 to-purple-600/20',
      borderColor: 'border-indigo-500/50',
      accentColor: 'text-indigo-400'
    },
    machine: {
      title: '🚀 Creador Máquina (Dominio)',
      videos: '45+ videos / mes',
      tradTime: '180+ Horas (Imposible solo)',
      tradCost: '$3,500+ USD Equipo Completo',
      aiTime: '7 Horas de Clonación en Lote',
      savedTime: '173 Horas Liberadas',
      color: 'from-fuchsia-500/25 to-pink-600/25',
      borderColor: 'border-fuchsia-500/60',
      accentColor: 'text-fuchsia-400'
    }
  };

  const current = levelsData[level];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-10 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl my-12 max-w-4xl mx-auto relative overflow-hidden font-sans"
    >
      {/* Luz Holográfica Dinámica de Fondo */}
      <div className={`absolute top-0 right-1/2 translate-x-1/2 w-full h-full bg-gradient-to-b ${current.color} blur-[120px] pointer-events-none transition-all duration-700`} />

      <div className="text-center mb-8 relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 mb-3 shadow-inner">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Comparativa de Producción: Estudio Tradicional vs. IA & Avatares
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
          Simulá la Escala de tu Contenido
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Elegí tu nivel de publicación mensual y descubrí el impacto de crear con la metodología del Ebook.
        </p>
      </div>

      {/* Selector de Niveles de Producción */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8 relative z-10">
        {Object.keys(levelsData).map((key) => (
          <button
            key={key}
            onClick={() => setLevel(key)}
            className={`p-3.5 rounded-2xl text-xs font-bold transition-all duration-300 border text-center ${
              level === key
                ? `bg-slate-900 ${levelsData[key].borderColor} ${levelsData[key].accentColor} shadow-lg scale-105`
                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <div>{levelsData[key].title}</div>
            <div className="text-[11px] font-mono opacity-80 mt-1">{levelsData[key].videos}</div>
          </button>
        ))}
      </div>

      {/* Comparativa Cara a Cara */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={level}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10"
        >
          {/* Lado Tradicional */}
          <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
                <Film className="w-4 h-4 text-slate-500" /> Producción Tradicional
              </div>
              <div className="text-xl font-extrabold text-slate-300 mb-1">{current.tradTime}</div>
              <p className="text-xs text-slate-500 mb-4">{current.tradCost}</p>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 border-t border-slate-800/80 pt-4">
              <li>❌ Coordinación con cámaras y actores</li>
              <li>❌ Días enteros perdidos por mala iluminación</li>
              <li>❌ Edición manual de corte por corte</li>
            </ul>
          </div>

          {/* Lado Sistema IA / Avatar */}
          <div className={`p-6 bg-slate-900/90 rounded-2xl border ${current.borderColor} flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.15)]`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  <Video className="w-4 h-4 text-cyan-400" /> Método Ebook + Avatares IA
                </span>
                <span className="text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded-full">
                  RECOMENDADO
                </span>
              </div>
              <div className={`text-2xl font-extrabold ${current.accentColor} mb-1`}>{current.aiTime}</div>
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mb-4">
                <Sparkles className="w-3.5 h-3.5" /> {current.savedTime}
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tu avatar o producto clonado digitalmente</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Generación de guiones y voz en 1 click</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Escala ilimitada sin tocar una cámara</li>
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}