import { ArrowRight, Sparkles } from 'lucide-react';

export default function UgcHero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problema" className="relative py-16 lg:py-24 overflow-hidden bg-slate-50">
      
      {/* 📹 Video de Fondo con Textura - PRIORIDAD ALTA */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/ugc/background-ugcA.mp4" type="video/mp4" />
        </video>
        {/* Capa suave para difuminar los bordes hacia el fondo blanco */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/80" />
      </div>

      {/* Resplandores de luz lavanda en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-200/30 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-fuchsia-200/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/90 border border-violet-200 text-violet-700 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Estrategia Audiovisual & IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Mostrar tu producto{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                no quiere decir
              </span>{' '}
              que comuniques su valor.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Tener un gran producto no alcanza si no lográs transmitir por qué debería importarle a tu cliente. Convertimos tu propuesta en contenido visual de alto impacto que vende.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('cotizacion')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>Ver Packs & Precios</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('metodo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/90 border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 transition-all duration-300 shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <span>Conocer el Método</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Video Hero en Celular - PRIORIDAD BAJA */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-violet-200 bg-slate-900 shadow-[0_20px_50px_rgba(124,58,237,0.15)] group">
              <video
                controls
                playsInline
                preload="metadata"
                fetchPriority="low"
                poster="/ugc/hero-imagenframe.webp"
                className="w-full h-full object-cover"
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/ugc/HERO 1 -Trc 7.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}