import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function UgcZigZag() {
  const steps = [
    {
      number: '01',
      title: 'Ser Entendida',
      tag: 'UGC & Hooks',
      desc: 'Si tenés un producto o servicio y necesitás explicar qué hace, cómo funciona y por qué alguien debería elegirlo, un buen video hace la diferencia.',
      bullets: [
        'Engancha en los primeros 3 segundos',
        'Elimina dudas de uso en segundos',
        'Lenguaje nativo de redes sociales'
      ],
      videoSrc: '/ugc/ZIG ZAG 1 -UGC.mp4',
      gradient: 'from-violet-600/20 via-purple-500/10 to-transparent'
    },
    {
      number: '02',
      title: 'Generar Deseo',
      tag: 'Product Content',
      desc: 'Mostramos tu producto en acción real: texturas, empaque, uso cotidiano y detalles estéticos que hacen que la audiencia quiera tenerlo ya.',
      bullets: [
        'Enfoque 100% en el producto',
        'Estética cuidada y aspiracional',
        'Ideal para pauta publicitaria (Ads)'
      ],
      videoSrc: '/ugc/ZIG ZAG 2 -Product content.mp4',
      gradient: 'from-fuchsia-600/20 via-purple-500/10 to-transparent'
    },
    {
      number: '03',
      title: 'Generar Confianza',
      tag: 'Testimoniales',
      desc: 'La gente le compra a personas. Mostramos experiencias reales y testimonios orgánicos que validan tu propuesta y derriban objeciones.',
      bullets: [
        'Prueba social auténtica',
        'Historias reales que conectan',
        'Aumenta la tasa de conversión'
      ],
      videoSrc: '/ugc/ZIG ZAG 3 -Testimonios.mp4',
      gradient: 'from-violet-600/20 via-indigo-500/10 to-transparent'
    },
    {
      number: '04',
      title: 'Comunicar su Valor',
      tag: 'Explicativo & IA',
      desc: 'Estructuramos mensajes clave, guiones estratégicos y edición dinámica para dejar bien en claro el verdadero valor diferencial de tu marca.',
      bullets: [
        'Propuesta de valor cristalina',
        'Edición optimizada para retención',
        'Llamado a la acción (CTA) directo'
      ],
      videoSrc: '/ugc/ZIG ZAG 4 -Explicativo (1).mp4',
      gradient: 'from-purple-600/20 via-fuchsia-500/10 to-transparent'
    }
  ];

  return (
    <section id="metodo" className="relative py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Principal */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/90 border border-violet-200 text-violet-700 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>El Método Creativo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tu marca necesita...
          </h2>

          <p className="text-slate-600 text-base sm:text-xl font-medium max-w-2xl mx-auto">
            Ser entendida. Generar deseo. Generar confianza. Y comunicar su valor.
          </p>
        </div>

        {/* Lista Zig-Zag con Conos Reflectores */}
        <div className="space-y-28 sm:space-y-40">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* CONO REFLECTOR EN EL FONDO */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.8 }}
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[85%] h-[550px] pointer-events-none z-0 blur-3xl ${
                    isEven
                      ? 'left-[-10%] bg-gradient-to-r ' + step.gradient
                      : 'right-[-10%] bg-gradient-to-l ' + step.gradient
                  }`}
                  style={{
                    clipPath: isEven
                      ? 'polygon(0% 50%, 100% 0%, 100% 100%)'
                      : 'polygon(100% 50%, 0% 0%, 0% 100%)'
                  }}
                />

                {/* Columna de Texto */}
                <div className="flex-1 text-left space-y-5 relative z-10">
                  <div className="flex items-center gap-3">
                    <motion.span 
                      variants={{
                        hidden: { scale: 0.9, opacity: 0.5 },
                        visible: { scale: 1, opacity: 1 }
                      }}
                      className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 font-mono"
                    >
                      {step.number}
                    </motion.span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-100 text-violet-700 border border-violet-200 shadow-sm">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {step.desc}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Columna de Video con Resplandor Neón */}
                <div className="flex-1 w-full max-w-[340px] sm:max-w-[380px] relative z-10">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0.3, scale: 0.95 },
                      visible: { opacity: 0.9, scale: 1.02 }
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 blur-md opacity-60"
                  />

                  <div className="relative aspect-[9/16] rounded-3xl bg-slate-900 border border-violet-200/50 shadow-2xl overflow-hidden">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <source src={step.videoSrc} type="video/mp4" />
                      Tu navegador no soporta el formato de video.
                    </video>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}