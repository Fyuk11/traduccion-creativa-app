
import { motion } from 'framer-motion';

/**
 * Componente Button reutilizable
 * @param {string} href - Si pasamos un link, se comporta como etiqueta <a>.
 * @param {string} variant - 'primary' (dorado/ambar) | 'outline' (borde blanco/gris) | 'solid-white'
 * @param {ReactNode} icon - Icono opcional (lucide-react) para acompañar el texto.
 */
export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  icon, 
  className = '' 
}) {
  // Definimos los estilos según la variante elegida
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-sm";
  
  const variants = {
    primary: "bg-amber-400 text-black hover:bg-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.3)]",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800",
    'solid-white': "bg-white text-black hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={href?.includes('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      // Animación de hover (Desktop) y tap/toque (Mobile)
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </Component>
  );
}