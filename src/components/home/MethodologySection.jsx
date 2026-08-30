
import { motion } from 'framer-motion';
import { Zap, BarChart2, Smartphone, ShieldCheck } from 'lucide-react';

export default function MethodologySection() {
  const goldGradientStyle = {
    background: 'linear-gradient(45deg, #d4af37, #a37e2c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#d4af37]" />,
      text: "Diseño auténtico con arquitectura orientada a conversión"
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-[#d4af37]" />,
      text: "Integración guiada de tracking (GA4, Clarity, Pixel)"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#d4af37]" />,
      text: "Mobile-first, accesibilidad y código optimizado"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#d4af37]" />,
      text: "Privacidad absoluta y control total en tus manos"
    }
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-24 sm:py-32 px-6 relative overflow-hidden">
      
      {/* Resplandor sutil de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ISOTIPO VECTORIAL CON MAYOR AMPLITUD EN EL MOVIMIENTO */}
      <div className="absolute top-10 right-6 sm:right-16 lg:right-24 opacity-25 sm:opacity-35 pointer-events-none z-0 flex items-center justify-center">
        <motion.svg 
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-44 h-44 sm:w-64 sm:h-64" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flecha Izquierda (Se aleja más hacia la izquierda: -14px) */}
          <motion.path 
            animate={{ x: [0, -14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            d="M75 45L30 90C25 95 25 105 30 110L75 155" 
            stroke="#262626" 
            strokeWidth="22" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Flecha Derecha (Se aleja más hacia la derecha: +14px) */}
          <motion.path 
            animate={{ x: [0, 14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            d="M125 45L170 90C175 95 175 105 170 110L125 155" 
            stroke="#d4af37" 
            strokeWidth="22" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Punteado central con expansión al ritmo de las flechas */}
          <motion.g
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="88" cy="100" r="4" fill="#262626" />
            <circle cx="100" cy="100" r="4" fill="#d4af37" />
            <circle cx="112" cy="100" r="4" fill="#d4af37" />
            <circle cx="94" cy="88" r="3" fill="#262626" />
            <circle cx="106" cy="112" r="3" fill="#d4af37" />
          </motion.g>
        </motion.svg>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* ENCABEZADO PRINCIPAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
            Damos vida y sistema a tu proyecto
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            De la chispa al ecosistema digital: <span style={goldGradientStyle}>acompañamos cada paso</span> para que tu idea venda sin perder su autenticidad.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Nuestro proceso es simple: escuchamos tu visión, la traducimos a un diseño visualmente magnético y conectamos con tu audiencia desde el primer segundo. No imponemos fórmulas de agencia: cada proyecto exige su propia forma.
          </p>
        </motion.div>

        {/* BLOQUE DE ENFOQUE (IMAGEN + TEXTO & LISTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGEN LATERAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <img 
                src="/home-equip.webp" 
                alt="Traducción Creativa Enfoque" 
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-80"></div>
            </div>
            {/* Pequeño detalle estético flotante */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#161616] border border-white/10 px-5 py-3 rounded-2xl shadow-xl">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-mono text-slate-300">Sistema Activo</span>
            </div>
          </motion.div>

          {/* CONTENIDO Y VIÑETAS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">Nuestro enfoque</span>
                <div className="h-px bg-[#d4af37]/40 w-12"></div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
                Traducción Creativa <span style={goldGradientStyle}>& Datos</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nos fundimos con tu proyecto para entender su tono y objetivo. Captamos lo que debe decir y cómo debe sentirse, pero le sumamos la capa estratégica para que no sea solo una cara bonita. Somos el puente entre tu idea y una plataforma donde <strong className="text-white font-bold">vos tenés el control total de tus datos</strong> (privacidad absoluta, sin pedirte contraseñas).
              </p>
            </div>

            {/* LISTA DE CARACTERÍSTICAS (VIÑETAS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-[#141414] border border-white/5 p-4 rounded-2xl hover:border-[#d4af37]/40 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-white/5 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}