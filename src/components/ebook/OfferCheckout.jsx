
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Flame, 
  Sparkles, 
  CreditCard,
  ArrowRight,
  Video
} from 'lucide-react';

export default function OfferCheckout() {
  const HOTMART_LINK = "https://go.hotmart.com/F107264981G"; // Tu enlace de pago

  const benefits = [
    'Crear videos para TikTok, Instagram y otras redes.',
    'Generar contenido para tu marca todos los días.',
    'Utilizar inteligencia artificial para acelerar tu producción.',
    'Transformar una idea en un video sin necesidad de grabarte.',
    'Crear contenido visual para productos y servicios.',
    'Producir más contenido en menos tiempo y 100% GRATIS.'
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 relative font-sans overflow-hidden bg-[#070709]" id="oferta">
      
      {/* FONDO DINÁMICO: Onda de energía Neón Cyan / Verde Esmeralda */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#051111] to-[#070709]" />

        {/* Onda 1: Verde Esmeralda */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 180, 360],
            x: ['-20%', '20%', '-20%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-teal-600/15 to-transparent rounded-full blur-[130px]"
        />

        {/* Onda 2: Cyan Neón */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: ['20%', '-20%', '20%'],
            y: ['10%', '-10%', '10%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[650px] h-[650px] bg-gradient-to-tl from-cyan-400/25 via-emerald-600/15 to-transparent rounded-full blur-[140px]"
        />

        {/* Resplandor central que respira */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sin cámara • Sin estudio • Sin herramientas pagas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Aprendé a crear videos con IA <span className="text-emerald-400">GRATIS</span> todos los días
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Descubrí qué herramientas usar, cómo utilizarlas y cómo combinarlas para crear tus propios videos desde cero.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LADO IZQUIERDO: DETALLES */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl bg-[#0a0f12]/80 border border-emerald-500/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                
                {/* Portada del E-book en Verde / Cyan */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
                  <div className="relative w-36 sm:w-40 h-52 sm:h-56 rounded-xl bg-gradient-to-b from-[#0e1d1a] to-[#070b0c] border border-emerald-400/40 p-4 flex flex-col justify-between shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                    <div>
                      <span className="text-[9px] tracking-widest text-emerald-400 font-bold uppercase block mb-1">
                        TRADUCCIÓN CREATIVA
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                        De 1 a 5 Videos Gratis
                      </h4>
                    </div>
                    <p className="text-[10px] text-slate-400">Todos los días con IA</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    🚀 ¿Qué vas a poder hacer?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Un sistema simple: <strong className="text-emerald-400 font-semibold">1 idea → 1 herramienta → 1 video.</strong> Sin necesidad de saber editar ni programar.
                  </p>
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 text-sm font-normal">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LADO DERECHO: CHECKOUT VERDE NEÓN */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl bg-[#080d0f]/90 border border-emerald-400/40 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_50px_rgba(16,185,129,0.15)] relative"
          >
            <div className="space-y-6">
              
              {/* Badge Cupos */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-rose-950/60 border border-rose-500/40">
                <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold">
                  <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
                  <span>Únicas 50 copias a este precio</span>
                </div>
                <span className="text-[11px] bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded-full border border-rose-500/40">
                  Quedan 12
                </span>
              </div>

              {/* Caja Requisitos */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Video className="w-4 h-4 text-cyan-400" />
                  <span>¿Necesitás experiencia previa?</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  No. Solo necesitás una idea, conexión a internet y seguir los pasos de la guía.
                </p>
              </div>

              {/* Bloque Precio */}
              <div className="text-center py-2">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block mb-1">
                  Valor Normal: <span className="line-through text-slate-500">$47 USD</span>
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs text-emerald-400 font-bold uppercase mr-1">Lanzamiento:</span>
                  <span className="text-2xl font-bold text-emerald-400">$</span>
                  <span className="text-5xl font-black text-white tracking-tight drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                    15
                  </span>
                  <span className="text-slate-400 font-semibold text-sm">USD</span>
                </div>
              </div>

            </div>

            {/* Botón CTA Verde Neón */}
            <div className="space-y-4 mt-6">
              <a 
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 overflow-hidden block text-center"
              >
                <Lock className="w-4 h-4 text-slate-950" />
                <span>QUIERO EL E-BOOK AHORA</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="pt-3 border-t border-slate-800 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Compra 100% Segura • Respaldada por Hotmart</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <CreditCard className="w-3.5 h-3.5 text-slate-400" /> 
                  <span>Entrega automática e inmediata por email</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}