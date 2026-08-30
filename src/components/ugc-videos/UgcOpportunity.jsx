import { motion } from 'framer-motion';
import { Sparkles, Bot, Zap, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function UgcOpportunity() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      icon: Bot,
      tag: 'Velocidad & Escala',
      title: 'Procesos de Producción con IA',
      desc: 'Generamos variantes de guiones, hooks de alta retención y voz en off ultra-realista en tiempo récord para no pausar tus campañas.',
      highlight: '10x más rápido',
      accent: 'border-violet-200 bg-violet-50/40 text-violet-700'
    },
    {
      icon: Zap,
      tag: 'Formato Orgánico',
      title: 'Estética UGC Auténtica',
      desc: 'Los anuncios que parecen anuncios se saltean. El contenido de aspecto nativo genera confianza e incrementa la tasa de clic (CTR).',
      highlight: '+3.4x en CTR',
      accent: 'border-purple-200 bg-purple-50/40 text-purple-700'
    },
    {
      icon: TrendingUp,
      tag: 'Optimización',
      title: 'Testing Continuo de Creativos',
      desc: 'No apostamos a un solo video. Creamos ángulos de venta múltiples para identificar qué gancho convierte mejor a menor costo por adquisición (CPA).',
      highlight: '-40% en CPA',
      accent: 'border-fuchsia-200 bg-fuchsia-50/40 text-fuchsia-700'
    }
  ];

  return (
    <section id="desafio" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Resplandores ambiente en Lavanda / Violeta */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-fuchsia-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado Mobile-First */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-700 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Nuestra Ventaja Competitiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            La combinación perfecta entre{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              IA & Estrategia Humana
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Aprovechamos las herramientas de Inteligencia Artificial más avanzadas para acelerar la producción sin perder la autenticidad que exige el algoritmo de TikTok y Meta.
          </p>
        </div>

        {/* Grilla Adaptativa Mobile-First (1 col en mobile, 3 en desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icono + Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.accent}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Título & Descripción */}
                  <h3 className="text-xl font-bold text-slate-900 pt-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Métricas destacadas en el footer de la tarjeta */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">Impacto estimado</span>
                  <span className="text-sm font-extrabold text-violet-700 flex items-center gap-1">
                    {item.highlight}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Inferior Informativo / Cierre de Sección */}
        <div className="rounded-3xl bg-gradient-to-r from-violet-900 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-violet-300 tracking-wider uppercase font-bold">
                ¿Por qué funciona hoy?
              </span>
              <h4 className="text-xl sm:text-2xl font-bold">
                El usuario ya no compra con anuncios tradicionales.
              </h4>
              <p className="text-slate-300 text-sm max-w-xl font-light">
                Buscan recomendaciones reales, dinamismo y contenido que resuelva un problema en los primeros 3 segundos.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('cotizacion')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-600/30 active:scale-95 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Explorar Soluciones UGC</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}