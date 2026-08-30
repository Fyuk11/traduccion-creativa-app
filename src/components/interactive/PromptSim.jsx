import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Copy, Check, Sparkles, Terminal, Layers, ShieldCheck } from 'lucide-react';

export default function PromptSim() {
  const [businessType, setBusinessType] = useState('ecommerce');
  const [contentGoal, setContentGoal] = useState('hook');
  const [format, setFormat] = useState('avatar');

  const [displayText, setDisplayText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [particles, setParticles] = useState([]);

  // Presets seguros sin input libre de usuario
  const businessPresets = {
    ecommerce: { label: '🛍️ Marca / E-Commerce', nicheName: 'Productos Físicos & Tiendas' },
    services: { label: '💼 Servicios & Consultoría', nicheName: 'Servicios B2B / Agencias' },
    info: { label: '🎓 Infoproductos & Cursos', nicheName: 'Cursos Digitales & Mentores' },
    ugc: { label: '🎬 UGC / Creador de Contenido', nicheName: 'Marcas de Estilo de Vida' }
  };

  const goalPresets = {
    hook: { label: '🔥 Gancho Viral (0-3s)', text: 'Detener el scroll con una afirmación contraintuitiva.' },
    conversion: { label: '🎯 Anuncio de Alta Conversión', text: 'Presentar problema -> Solución IA -> Llamado a la Acción directo.' },
    authority: { label: '🧠 Posicionamiento de Marca', text: 'Demostrar autoridad inmediata rompiendo un mito del sector.' }
  };

  const formatPresets = {
    avatar: { label: '🤖 Avatar IA / Guión Hablado', formatText: 'Formato optimizado para HeyGen / ElevenLabs / Synthesia.' },
    broll: { label: '📹 Video B-Roll + Voiceover', formatText: 'Escenas dinámicas generadas con Midjourney/Luma + Voz IA.' }
  };

  // Generación sintética del prompt
  const buildPrompt = () => {
    const bus = businessPresets[businessType].nicheName;
    const goal = goalPresets[contentGoal].text;
    const fmt = formatPresets[format].formatText;

    return `[ROL: Director Creativo de Contenido e IA]
[MODELO DE NEGOCIO]: ${bus}
[OBJETIVO DEL VIDEO]: ${goal}
[FORMATO TÉCNICO]: ${fmt}

ESTRUCTURA DE PRODUCCIÓN RÁPIDA:
1. SCROLL STOPPER (0-3s): "El error que cometen el 90% de las marcas en ${bus} y cómo corregirlo en 1 click..."
2. DESARROLLO VISUAL (3-12s): Mostrar la solución apoyado con imágenes b-roll o avatar expresivo.
3. LLAMADO A LA ACCIÓN (12-15s): "Escribí 'SISTEMA' abajo y te enviamos la guía de automatización."`;
  };

  useEffect(() => {
    const fullText = buildPrompt();

    setDisplayText('');
    setIsProcessing(true);

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText.charAt(index);
        setDisplayText((prev) => prev + nextChar);
        index++;
      } else {
        setIsProcessing(false);
        clearInterval(interval);
      }
    }, 8);

    return () => clearInterval(interval);
  }, [businessType, contentGoal, format]);

  // Explosión de partículas neón con Framer Motion
  const triggerParticles = () => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 160,
      scale: Math.random() * 0.8 + 0.4
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildPrompt());
    setCopied(true);
    triggerParticles();
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto my-12 p-6 md:p-8 bg-slate-950/90 border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.18)] backdrop-blur-2xl relative overflow-hidden font-sans"
    >
      {/* Malla Cyberpunk de Fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800/80 pb-5 mb-6 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-950/90 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              Prompt Reactor IA <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>
            <p className="text-xs text-slate-400">Generador de arquitectura de guiones libre de vulnerabilidades</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/60 shadow-inner">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>SISTEMA_SEGURO_ACTIVO</span>
        </div>
      </div>

      {/* Selector de Negocio */}
      <div className="mb-5 relative z-10">
        <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" /> 1. Seleccioná el Modelo de Negocio
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {Object.keys(businessPresets).map((key) => (
            <button
              key={key}
              onClick={() => setBusinessType(key)}
              className={`p-3 rounded-xl text-xs font-semibold transition-all duration-300 border text-left ${
                businessType === key
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              {businessPresets[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Objetivo y Formato */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
        <div>
          <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            2. Ángulo de Contenido
          </label>
          <div className="flex flex-col gap-2">
            {Object.keys(goalPresets).map((key) => (
              <button
                key={key}
                onClick={() => setContentGoal(key)}
                className={`p-2.5 rounded-xl text-xs text-left transition-all border ${
                  contentGoal === key
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 font-bold'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                {goalPresets[key].label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            3. Formato de IA
          </label>
          <div className="flex flex-col gap-2">
            {Object.keys(formatPresets).map((key) => (
              <button
                key={key}
                onClick={() => setFormat(key)}
                className={`p-2.5 rounded-xl text-xs text-left transition-all border ${
                  format === key
                    ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200 font-bold'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                {formatPresets[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal de Código */}
      <div className="relative bg-slate-950 p-5 rounded-2xl border border-slate-800/90 font-mono text-xs md:text-sm text-slate-300 min-h-[185px] shadow-2xl relative z-10 overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-500">
          <span className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-amber-400 animate-ping' : 'bg-cyan-400'}`} />
            {isProcessing ? 'COMPILANDO PROMPT...' : 'PROMPT SINTETIZADO'}
          </span>
          <Terminal className="w-3.5 h-3.5 text-slate-600" />
        </div>

        <pre className="whitespace-pre-wrap font-mono leading-relaxed text-cyan-100/90">{displayText}</pre>
        {isProcessing && <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />}
      </div>

      {/* Botón con Partículas */}
      <div className="flex justify-end mt-5 relative z-10">
        <div className="relative">
          <AnimatePresence>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: p.scale }}
                animate={{ opacity: 0, x: p.x, y: p.y, scale: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] pointer-events-none"
              />
            ))}
          </AnimatePresence>

          <button
            onClick={handleCopy}
            disabled={isProcessing}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs transition-all duration-300 border shadow-lg ${
              copied
                ? 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-cyan-300/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] active:scale-95'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> ¡Prompt Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copiar Arquitectura de Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}