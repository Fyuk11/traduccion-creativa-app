import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, ArrowRight, ShieldAlert, Zap, Check, ArrowLeftRight, TrendingUp } from 'lucide-react';

export default function InteractiveShowcase() {
  // El estado mágico que controla todo el componente (de 0 a 100)
  const [sliderPos, setSliderPos] = useState(50);

  const phone = "5491179044538";
  const whatsappMsg = "Hola Traducción Creativa, probé el laboratorio interactivo y quiero transformar el mensaje de mi marca.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative py-32 bg-[#0b0b0b] text-white px-6 overflow-hidden border-t border-zinc-900">
      
      {/* Resplandor de fondo inmersivo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/10 via-rose-600/10 to-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        
        {/* Encabezado animado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest shadow-sm">
            <Sliders className="w-3.5 h-3.5 animate-pulse" />
            Laboratorio de Contraste Activo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Deslizá para ver la metamorfosis
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">
            Deslizá la barra táctil para ver cómo se transforma la fuerza persuasiva del mensaje y su estructura visual.
          </p>
        </motion.div>

        {/* CONTENEDOR PRINCIPAL DEL SLIDER (El truco de la plantilla 2) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto h-[500px] sm:h-[450px] rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] select-none bg-[#0b0b0b]"
        >
          
          {/* =========================================================
              CAPA BASE (DERECHA): VERSIÓN CREATIVA (Gradiente Naranja Dinámico)
             ========================================================= */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E00] via-[#FF0055] to-[#9D00FF] p-6 sm:p-10 flex flex-col justify-between z-0">
            {/* Destellos internos */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Cabecera disruptiva */}
            <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-white/30 flex items-center gap-1.5 shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-orange-300 animate-bounce" />
                Traducción Creativa
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl border border-white/20 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> +320% CTR
              </span>
            </div>

            {/* Contenido disruptivo (Tarjeta glassmorphism central) */}
            <div className="space-y-4 max-w-md my-auto relative z-10 bg-black/25 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-400/20 text-orange-100 text-[11px] font-mono border border-orange-400/30">
                <Zap className="w-3.5 h-3.5 text-orange-300" /> Impacto emocional directo
              </div>
              
              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                "Automatizá el caos. Recuperá 10 horas libres cada semana sin perder el control."
              </h3>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-orange-100 font-mono">
                <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded border border-white/10"><Check className="w-3.5 h-3.5 text-orange-400" /> Deseo Genuino</span>
                <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded border border-white/10"><Check className="w-3.5 h-3.5 text-orange-400" /> Cero Fricción</span>
              </div>
            </div>

            {/* Footer disruptivo */}
            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center justify-between relative z-10">
              <span className="text-orange-100 font-medium">✨ Reacción: Conexión inmediata.</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
          </div>


          {/* =========================================================
              CAPA SUPERIOR (IZQUIERDA - RECORTADA): VERSIÓN TRADICIONAL 
             ========================================================= */}
          <div 
            className="absolute inset-0 bg-[#121214] p-6 sm:p-10 flex flex-col justify-between z-10 border-r border-zinc-800"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            {/* Cabecera rígida */}
            <div className="flex items-center justify-start">
              <span className="px-3 py-1.5 rounded-md bg-zinc-800/80 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-zinc-700/50 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" />
                Google Translate / Literal
              </span>
            </div>

            {/* Contenido plano */}
            <div className="space-y-4 max-w-md my-auto">
              <span className="text-[11px] text-zinc-500 font-mono block">Traducción literal palabra por palabra</span>
              <h3 className="text-lg sm:text-2xl font-semibold text-zinc-400 leading-snug">
                "Nuestra plataforma de software optimiza la eficiencia y reduce el tiempo operativo."
              </h3>
              <p className="text-xs text-zinc-600 font-sans max-w-xs">
                Lenguaje corporativo frío. No conecta emocionalmente con el punto de dolor del cliente.
              </p>
            </div>

            {/* Footer rígido */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-500 text-xs font-mono flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-900 border border-red-500"></span>
              <span>Resultado: Lenguaje aburrido y rebote alto.</span>
            </div>
          </div>


          {/* =========================================================
              CONTROL DESLIZANTE NATIVO INVISIBLE (El núcleo interactivo)
             ========================================================= */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-pan-y"
            aria-label="Comparador de textos"
          />


          {/* =========================================================
              LÍNEA Y MANIJA VISUAL ANIMADA
             ========================================================= */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Manija central estilo Framer Motion */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white text-zinc-950 shadow-[0_0_30px_rgba(0,0,0,0.8)] border-2 border-zinc-950 rounded-full flex items-center justify-center font-bold"
            >
              <ArrowLeftRight className="w-5 h-5 text-orange-600" />
            </motion.div>
          </div>

        </motion.div>

        {/* Instrucción visual */}
        <div className="text-center">
          <p className="text-xs text-orange-400/90 font-mono uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 py-2 px-4 rounded-full inline-block shadow-sm">
            ← Arrastrá para contrastar la estructura →
          </p>
        </div>

        {/* CTA inferior */}
        <div className="pt-2 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-zinc-950 bg-[#d4af37] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
          >
            <span>Quiero transformar el mensaje de mi marca</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}