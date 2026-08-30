import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Sparkles, ShieldCheck, Flame, Zap, ArrowRight, Video } from 'lucide-react';

export default function UgcShowcase() {
  const [activeTab, setActiveTab] = useState('hook');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const videoPhases = {
    hook: {
      id: 'hook',
      title: '1. El Gancho (0 - 3s)',
      subtitle: 'Detiene el scroll de inmediato',
      desc: 'Interrumpe el patrón de navegación con una pregunta incómoda, un movimiento visual fuerte o una afirmación contraintuitiva. Evita que el usuario deslice hacia arriba.',
      badge: 'Retención Alta',
      accentColor: 'from-violet-600 to-indigo-600',
      badgeBg: 'bg-violet-100 text-violet-700 border-violet-200',
      stat: '+85% Retención Inicial',
      icon: Flame,
      previewOverlay: '¿Tu producto no vende como debería?'
    },
    problem: {
      id: 'problem',
      title: '2. Agitación del Problema (3 - 10s)',
      subtitle: 'Conexión emocional y empatía',
      desc: 'Muestra el punto de dolor exacto que experimenta el cliente en su rutina diaria. El objetivo no es vender todavía, sino hacer que sienta: "Esto me pasa a mí".',
      badge: 'Empatía Real',
      accentColor: 'from-indigo-600 to-purple-600',
      badgeBg: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      stat: 'Conexión Directa',
      icon: Zap,
      previewOverlay: 'Perdés tiempo intentando grabar sin resultados...'
    },
    solution: {
      id: 'solution',
      title: '3. Presentación & Demostración (10 - 20s)',
      subtitle: 'Prueba visual en acción',
      desc: 'El producto o servicio entra en escena. Transiciones dinámicas de 3 a 4 cortes rápidos mostrando cómo resuelve el problema sin rodeos ni rodeos teóricos.',
      badge: 'Prueba Visual',
      accentColor: 'from-purple-600 to-fuchsia-600',
      badgeBg: 'bg-purple-100 text-purple-700 border-purple-200',
      stat: 'Alta Conversión',
      icon: Video,
      previewOverlay: 'Mirá cómo la IA crea contenido en segundos'
    },
    cta: {
      id: 'cta',
      title: '4. Llamado a la Acción (20 - 30s)',
      subtitle: 'Cierre y dirección clara',
      desc: 'Instrucción directa y sin ambigüedades. Le indicamos al espectador qué paso dar exactamente (comprar, registrarse, comentar) con un incentivo exclusivo.',
      badge: 'Acción Inmediata',
      accentColor: 'from-fuchsia-600 to-violet-600',
      badgeBg: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
      stat: '3.4x CTR Promedio',
      icon: ShieldCheck,
      previewOverlay: '👉 Hacé clic abajo y probá el pack'
    }
  };

  const keys = Object.keys(videoPhases);
  const current = videoPhases[activeTab];

  // Simulación automática de reproducción
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Pasar a la siguiente fase
            const currentIndex = keys.indexOf(activeTab);
            const nextIndex = (currentIndex + 1) % keys.length;
            setActiveTab(keys[nextIndex]);
            return 0;
          }
          return prev + 4;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeTab, keys]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="simulador" className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6">
      {/* Tarjeta Contenedora Principal con temática Blanca & Lavanda */}
      <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-violet-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(124,58,237,0.08)] overflow-hidden">
        
        {/* Decoración de luz lavanda suave en el fondo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-fuchsia-100/50 rounded-full blur-3xl pointer-events-none" />

        {/* Encabezado */}
        <div className="text-center space-y-3 mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100/80 border border-violet-200 text-violet-700 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Anatomía de un Video Viral</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Estructura de Conversión <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">9:16</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Hacé clic en cada etapa o iniciá la simulación para entender cómo estructuramos el guión estratégico de cada video.
          </p>
        </div>

        {/* Selector de Pasos (Tabs) con diseño cápsula */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10 relative z-10">
          {keys.map((key, index) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-2xl transition-all duration-300 text-left border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-violet-900/10 scale-[1.02]'
                    : 'bg-violet-50/50 hover:bg-violet-100/60 text-slate-700 border-violet-100/80 hover:border-violet-200'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-violet-500 text-white' : 'bg-violet-200/60 text-violet-800'}`}>
                    Fase 0{index + 1}
                  </span>
                </div>
                <span className="text-xs font-bold capitalize text-center">{key}</span>

                {/* Línea de progreso interactiva si está activo */}
                {isActive && (
                  <div className="absolute bottom-0 left-3 right-3 h-1 bg-violet-500/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Área Principal: Mockup Interactivo + Detalles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Columna Izquierda: Simulación de Smartphone */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-[260px] h-[480px] rounded-[42px] bg-slate-950 p-3 shadow-2xl shadow-violet-500/15 relative border-[5px] border-slate-800/90 ring-1 ring-violet-200">
              
              {/* Isla Dinámica / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Pantalla con Degradado Dinámico */}
              <div className={`w-full h-full rounded-[32px] bg-gradient-to-b ${current.accentColor} p-5 flex flex-col justify-between text-white relative overflow-hidden transition-all duration-500 shadow-inner`}>
                
                {/* Header de la Pantalla */}
                <div className="pt-6 flex justify-between items-center relative z-10">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${current.badgeBg}`}>
                    {current.badge}
                  </span>
                  <span className="text-[10px] font-mono bg-black/30 backdrop-blur-md px-2 py-0.5 rounded text-white/90">
                    9:16 HD
                  </span>
                </div>

                {/* Centro: Animación de Reproducción / Texto Superpuesto */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="my-auto text-center space-y-3 relative z-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto shadow-lg shadow-black/20">
                      <current.icon className="w-6 h-6 text-white animate-pulse" />
                    </div>

                    <div className="bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                      <p className="text-xs font-semibold leading-snug text-white">
                        "{current.previewOverlay}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer de la Pantalla: Métricas */}
                <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center relative z-10">
                  <p className="text-[10px] font-mono uppercase text-violet-200 tracking-wider">Métrica Clave</p>
                  <p className="text-xs font-extrabold text-white">{current.stat}</p>
                </div>

              </div>
            </div>

            {/* Botón de Control de Reproducción */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-all shadow-md shadow-violet-500/20 active:scale-95 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" /> Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" /> Simular Video
                  </>
                )}
              </button>
              <button
                onClick={() => { setProgress(0); setIsPlaying(false); }}
                className="p-2 rounded-xl bg-violet-100 text-violet-700 hover:bg-violet-200 transition-all cursor-pointer"
                title="Reiniciar"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Columna Derecha: Explicación Detallada */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <span className="text-xs font-bold font-mono text-violet-600 uppercase tracking-wider block mb-1">
                    {current.subtitle}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {current.title}
                  </h4>
                </div>

                <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base bg-violet-50/30 p-4 rounded-2xl border border-violet-100/60">
                  {current.desc}
                </p>

                {/* Tarjetas Informativas Secundarias */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Formato Optimizado</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Vertical 9:16 (Meta & TikTok)</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Objetivo Comercial</span>
                    <span className="text-xs sm:text-sm font-bold text-violet-700">Paid Ads & Reels Orgánicos</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection('cotizacion')}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-900 group cursor-pointer"
                  >
                    <span>Ver cómo aplicamos esto en los packs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}