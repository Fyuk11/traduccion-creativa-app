import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UgcIaFeature() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      
      {/* Resplandor suave de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-200/30 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Video Explicativo */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-violet-200 bg-slate-900 shadow-[0_20px_50px_rgba(124,58,237,0.15)] group">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/ugc/UgcIaFeature.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
            </div>
          </div>

          {/* Columna Derecha: Copy + Beneficios */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/90 border border-violet-200 text-violet-700 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Agilidad & Escala</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Hoy con la inteligencia artificial, crear contenido de calidad{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                todos los días
              </span>{' '}
              es posible.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              En menos de cinco minutos podés hacer un video mostrando tu servicio para generar confianza y explicar tus beneficios sin complicarte con producciones eternas.
            </p>

            {/* Lista de Beneficios Rápidos */}
            <div className="space-y-3 pt-2">
              {[
                'Guiones optimizados según los ángulos de venta de tu nicho.',
                'Edición dinámica pensada para retener atención en los primeros 3 segundos.',
                'Procesos escalables para testear múltiples creativos por semana.'
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-violet-100 text-violet-600 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('cotizacion')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Ver Planes de Producción</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}