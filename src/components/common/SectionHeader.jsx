
import { motion } from 'framer-motion';

/**
 * Componente SectionHeader
 * Estandariza los títulos de las secciones.
 */
export default function SectionHeader({ tag, title, subtitle, isDark = true }) {
  // Usamos un observer para animar SOLO cuando el usuario hace scroll y entra en pantalla
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // margin negativo hace que anime un poquito antes de que aparezca completo en el celular
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 max-w-2xl mx-auto mb-16"
    >
      {/* Etiqueta superior estilo código / developer */}
      {tag && (
        <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
          // {tag}
        </span>
      )}
      
      {/* Título Principal */}
      <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      
      {/* Subtítulo o bajada */}
      {subtitle && (
        <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}