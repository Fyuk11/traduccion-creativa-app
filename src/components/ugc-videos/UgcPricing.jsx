import { motion } from 'framer-motion';
import { Sparkles, Check, MessageCircle, ArrowRight, Zap } from 'lucide-react';

export default function UgcPricing() {
  const handleWhatsApp = (planName) => {
    const text = encodeURIComponent(`¡Hola! Quisiera consultar sobre el ${planName} de UGC.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 sm:py-32 bg-slate-900 overflow-hidden" id="cotizacion">
      {/* Resplandor violeta en el fondo para destacar la sección */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado con contraste alto */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-bold tracking-widest uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Opciones de Inversión</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Querés crear contenido{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              para tu marca?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Elegí la opción que mejor se adapte a tus necesidades para empezar a escalar.
          </p>
        </div>

        {/* Tarjetas de Precios / Planes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Option 1: Pack Cerrado */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-violet-500 shadow-2xl shadow-violet-500/20 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Badge Destacado */}
            <div className="absolute top-0 right-0">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> Pack Destacado
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block text-xs font-mono font-bold uppercase text-violet-700 bg-violet-100 px-3 py-1 rounded-full border border-violet-200 mb-3">
                  Pack Cerrado
                </span>
                <h3 className="text-3xl font-black text-slate-900">Pack 5 Videos</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Ideal para darle impulso a tus redes con contenido de alto impacto.
                </p>
              </div>

              {/* Precio destacado */}
              <div className="py-4 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">$25.000</span>
                  <span className="text-sm font-semibold text-slate-500">ARS / pago único</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>5 Videos UGC</strong> verticales listos para publicar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Creación de guiones y ganchos (Hooks)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Edición dinámica con subtítulos optimizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Formato 9:16 para Reels, TikTok y Ads</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-8 mt-auto">
              <button
                onClick={() => handleWhatsApp('Pack 5 Videos ($25.000 ARS)')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold text-base shadow-lg shadow-violet-500/25 active:scale-[0.98] transition flex items-center justify-center gap-2 group-hover:gap-3"
              >
                <span>Consultar Pack</span>
                <ArrowRight className="w-4 h-4 transition-all" />
              </button>
            </div>
          </motion.div>

          {/* Option 2: Plan a Medida */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-900/10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block text-xs font-mono font-bold uppercase text-slate-600 bg-slate-100 px-3 py-1 rounded-full mb-3">
                  A Escala
                </span>
                <h3 className="text-3xl font-black text-slate-900">Plan a Medida</h3>
                <p className="text-slate-600 text-sm mt-2">
                  ¿Tenés otra idea en mente? Contanos qué necesita tu marca y armamos algo justo para vos.
                </p>
              </div>

              <div className="py-4 border-y border-slate-100">
                <span className="text-xl font-bold text-slate-800">Cotización Flexible & Personalizada</span>
              </div>

              <ul className="space-y-3.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Cantidad y formato de videos 100% a tu elección</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Mix flexible entre Creadores reales e Inteligencia Artificial</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Contenido enfocado en tu objetivo actual (Orgánico o Pauta)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Trato directo, rápido y sin vueltas</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-auto">
              <button
                onClick={() => handleWhatsApp('Plan a Medida')}
                className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md active:scale-[0.98] transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Charlemos por WhatsApp</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}