import { Sparkles } from 'lucide-react';

export default function UgcCarousel() {
  const items = [
    {
      img: '/ugc/Videos Carrusel/1.webp',
      title: 'Problem - Solution',
      subtitle: 'Hook de Frustración',
      tag: 'Alta Conversión'
    },
    {
      img: '/ugc/Videos Carrusel/2.webp',
      title: 'Product In-Action',
      subtitle: 'Demostración Real',
      tag: 'E-commerce'
    },
    {
      img: '/ugc/Videos Carrusel/3.webp',
      title: 'Unboxing & First Impression',
      subtitle: 'Experiencia de Marca',
      tag: 'Orgánico'
    },
    {
      img: '/ugc/Videos Carrusel/4.webp',
      title: 'Testimonial Directo',
      subtitle: 'Prueba Social Humanizada',
      tag: 'Confianza'
    },
    {
      img: '/ugc/Videos Carrusel/5.webp',
      title: 'Tutorial / Paso a Paso',
      subtitle: 'Explicativo Dinámico',
      tag: 'Educativo'
    },
    {
      img: '/ugc/Videos Carrusel/6.webp',
      title: 'Comparativa A/B',
      subtitle: 'Antes vs Después',
      tag: 'Estrategia'
    },
    {
      img: '/ugc/Videos Carrusel/7.webp',
      title: 'Voz en Off + B-Roll',
      subtitle: 'Narrativa Envolvente',
      tag: 'Retención'
    },
    {
      img: '/ugc/Videos Carrusel/8.webp',
      title: 'Tendencia & AI Hook',
      subtitle: 'Formato Viral',
      tag: 'Escala'
    }
  ];

  // Duplicamos el array para el efecto de scroll infinito sin cortes
  const doubleItems = [...items, ...items];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      
      {/* Resplandores ambiente */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-violet-100/50 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-fuchsia-100/40 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14">
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/90 border border-violet-200 text-violet-700 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Galería Dinámica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Formatos diseñados para{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              capturar atención
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Explorá la variedad de estéticas y ángulos visuales que combinamos para potenciar tus creativos.
          </p>
        </div>
      </div>

      {/* Tira Infinita Deslizante (Marquee) */}
      <div className="relative w-full overflow-hidden flex group">
        
        {/* Sombras suaves en los bordes para difuminar la entrada y salida */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Cintas con Animación Continua */}
        <div className="flex gap-5 animate-marquee flex-shrink-0 group-hover:[animation-play-state:paused]">
          {doubleItems.map((item, index) => (
            <div
              key={index}
              className="w-[220px] sm:w-[260px] flex-shrink-0 bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-violet-500/15 transition-all duration-300 relative"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 border border-white/40 backdrop-blur-md shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-1 text-left">
                  <span className="text-[10px] font-mono font-semibold text-violet-300 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regla CSS para la animación fluida */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}