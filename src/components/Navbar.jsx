import { useState } from 'react';
import { Sparkles, Terminal, Layers, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeMode = 'agency', onModeChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Configuración de identidades por modo
  const modeConfigs = {
    agency: {
      id: 'agency',
      label: 'Agencia',
      tag: 'DIGITAL',
      icon: Sparkles,
      // Estilo Dorado Premium
      accentColor: 'text-[#d4af37]',
      bgDot: 'bg-[#d4af37]',
      activePill: 'bg-[#d4af37]/15 border-[#d4af37]/60 text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.35)]',
      btnStyle: 'bg-[#d4af37] hover:bg-[#b5932b] text-slate-950 font-bold',
      tagStyle: 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30',
    },
    ebook: {
      id: 'ebook',
      label: 'Ebooks',
      tag: 'NEON // LAB',
      icon: Terminal,
      // Estilo Cyberpunk / Neón
      accentColor: 'text-[#00ffcc]',
      bgDot: 'bg-[#00ffcc]',
      activePill: 'bg-[#00ffcc]/15 border-[#00ffcc]/80 text-[#00ffcc] shadow-[0_0_25px_rgba(0,255,204,0.5)] font-mono',
      btnStyle: 'bg-[#00ffcc] hover:bg-[#00cc00] text-black font-mono font-bold tracking-wider shadow-[0_0_15px_rgba(0,255,204,0.4)]',
      tagStyle: 'bg-[#00ffcc]/10 text-[#00ffcc] border-[#00ffcc]/40 font-mono tracking-tighter animate-pulse',
    },
    ugc: {
      id: 'ugc',
      label: 'Contenido UGC',
      tag: 'STUDIO',
      icon: Layers,
      // Estilo Stripe / Apple (Minimalista & Violeta Neón)
      accentColor: 'text-purple-400',
      bgDot: 'bg-purple-500',
      activePill: 'bg-white/10 border-purple-400/50 text-white shadow-[0_4px_20px_rgba(168,85,247,0.25)] backdrop-blur-xl',
      btnStyle: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium shadow-md',
      tagStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    },
  };

  const current = modeConfigs[activeMode] || modeConfigs.agency;

  const handleSelectMode = (modeId) => {
    if (onModeChange) onModeChange(modeId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER FLOTANTE GLOBAL */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <nav className="bg-[#09090b]/80 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-500">
          
          {/* BRANDING FIJO: "Traducción Creativa" + CHIP DE MODO RECTIVO */}
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full ${current.bgDot} animate-pulse transition-colors duration-500`} />
            
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-black tracking-widest uppercase text-white font-mono">
                Traducción <span className={`${current.accentColor} transition-colors duration-500`}>Creativa</span>
              </span>

              {/* Tag contextual que cambia según la vibra (Agencia, Cyberpunk o Stripe) */}
              <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full border transition-all duration-500 font-semibold ${current.tagStyle}`}>
                {current.tag}
              </span>
            </div>
          </div>

          {/* SELECTOR DE MODOS (DESKTOP) CON EFFECTO GLOW & DOCK */}
          <div className="hidden md:flex items-center gap-1.5 bg-black/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {Object.values(modeConfigs).map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => handleSelectMode(mode.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `border ${mode.activePill}`
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? mode.accentColor : 'text-slate-400'}`} />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA DINÁMICO */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/5491179044538?text=${encodeURIComponent(`Hola, vengo desde la sección ${current.label} de Traducción Creativa.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 ${current.btnStyle}`}
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MENÚ HAMBURGUESA MOBILE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* MODAL RESPONSIVE MOBILE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden flex flex-col justify-center px-6 pt-20 pb-10">
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-6 space-y-6 shadow-2xl">
            <div className="border-b border-white/10 pb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Seleccionar Experiencia
              </p>
              <h3 className="text-lg font-bold text-white mt-1">Traducción Creativa</h3>
            </div>
            
            <div className="space-y-3">
              {Object.values(modeConfigs).map((mode) => {
                const Icon = mode.icon;
                const isActive = activeMode === mode.id;

                return (
                  <button
                    key={mode.id}
                    onClick={() => handleSelectMode(mode.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? `bg-white/10 ${mode.activePill}`
                        : 'bg-white/5 border-white/5 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-black/50 ${mode.accentColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{mode.label}</div>
                        <span className={`text-[10px] ${mode.accentColor}`}>{mode.tag}</span>
                      </div>
                    </div>
                    {isActive && <span className={`w-2.5 h-2.5 rounded-full ${mode.bgDot}`} />}
                  </button>
                );
              })}
            </div>

            <a
              href={`https://wa.me/5491179044538?text=${encodeURIComponent(`Hola, me quiero contactar por ${current.label}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all ${current.btnStyle}`}
            >
              <span>Hablemos por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}