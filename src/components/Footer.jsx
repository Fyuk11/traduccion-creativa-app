import { ArrowUpRight, Mail, Phone, Sparkles, Terminal, Layers } from 'lucide-react';

export default function Footer({ activeMode = 'agency' }) {
  const phone = "5491179044538";
  const currentYear = new Date().getFullYear();

  // Configuración de contenido dinámico según el modo activo
  const footerConfigs = {
    agency: {
      tag: "AGENCIA DIGITAL",
      accentColor: "text-[#d4af37]",
      borderColor: "border-[#d4af37]/20",
      glowBg: "bg-[#d4af37]/5",
      icon: Sparkles,
      navLinks: [
        { name: "Inicio", href: "hero" },
        { name: "Servicios", href: "AboutEditorialSection" },
        { name: "Proceso", href: "StepsWorkFlow" },
        { name: "Contacto", href: `https://wa.me/${phone}?text=${encodeURIComponent("Hola Traducción Creativa, quiero consultar por servicios de Agencia.")}`, isExternal: true },
      ],
      specialties: [
        "Identidad de Marca & Branding",
        "Diseño & Desarrollo Web",
        "Estrategia Digital Editorial",
        "Optimización UX/UI",
      ],
    },
    ebook: {
      tag: "NEON // EDITORIAL LAB",
      accentColor: "text-[#00ffcc]",
      borderColor: "border-[#00ffcc]/20",
      glowBg: "bg-[#00ffcc]/5",
      icon: Terminal,
      navLinks: [
        { name: "Inicio", href: "hero" },
        { name: "Cómo Funciona", href: "solucion" }, // Apunta a la sección ZigZag
        { name: "Herramientas", href: "herramientas" }, // Apunta a InteractiveTools
        { name: "Obtener E-book", href: "oferta" }, // Ancla directa a la tarjeta de compra
      ],
      specialties: [
        "Creación de Videos con IA",
        "Producción sin Cámara ni Estudio",
        "Automatización de Contenidos",
        "Sistemas de Trabajo 100% Gratis",
      ],
    },
    ugc: {
      tag: "STUDIO UGC & VIDEO",
      accentColor: "text-purple-400",
      borderColor: "border-purple-500/20",
      glowBg: "bg-purple-500/5",
      icon: Layers,
      navLinks: [
        { name: "Inicio", href: "problema" },
        { name: "Anatomía Viral", href: "simulador" },
        { name: "El Método", href: "metodo" },
        { name: "Planes & Oferta", href: "cotizacion" },
        { name: "Contratar Creador", href: `https://wa.me/${phone}?text=${encodeURIComponent("Hola Traducción Creativa, me interesa contratar contenido UGC.")}`, isExternal: true },
      ],
      specialties: [
        "Edición de Video Short-form",
        "Estrategia UGC para Marcas",
        "Guiones & Content Creation",
        "Campañas con Creadores",
      ],
    }
  };

  const current = footerConfigs[activeMode] || footerConfigs.agency;

  const handleScroll = (e, targetId, isExternal) => {
    if (isExternal) return;
    
    e.preventDefault();

    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#hero');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      console.warn(`No se encontró el elemento con id="${targetId}" en esta página.`);
    }
  };

  return (
    <footer className={`bg-[#0b0b0b] text-white border-t ${current.borderColor} relative overflow-hidden transition-colors duration-500`}>
      
      {/* Resplandor ambiental de fondo reactivo */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] ${current.glowBg} blur-[120px] pointer-events-none rounded-full transition-all duration-500`} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        
        {/* FILA PRINCIPAL: 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Columna 1: Branding Fijo + Badge Dinámico */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${current.accentColor.replace('text-', 'bg-')} animate-pulse transition-colors duration-500`} />
              <span className="text-lg font-black tracking-widest uppercase text-white font-mono">
                Traducción <span className={`${current.accentColor} transition-colors duration-500`}>Creativa</span>
              </span>
            </div>
            
            <div>
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-white/5 ${current.accentColor}`}>
                {current.tag}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-medium pt-2">
              Estrategia, diseño y comunicación digital para marcas que buscan transmitir su verdadera identidad y conectar de forma auténtica.
            </p>
          </div>

          {/* Columna 2: Navegación Interna Adaptativa */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest ${current.accentColor} font-bold transition-colors duration-500`}>
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {current.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.isExternal ? link.href : `#${link.href}`}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noopener noreferrer" : ""}
                    onClick={(e) => handleScroll(e, link.href, link.isExternal)}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Especialidades Adaptativas */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest ${current.accentColor} font-bold transition-colors duration-500`}>
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-400">
              {current.specialties.map((service, idx) => (
                <li key={idx} className="hover:text-slate-200 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto & Redes */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest ${current.accentColor} font-bold transition-colors duration-500`}>
              Hablemos
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hola Traducción Creativa, me contacto desde la sección ${current.tag}.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Phone className={`w-4 h-4 ${current.accentColor}`} />
                </div>
                <span>+54 9 11 7904-4538</span>
              </a>

              <a 
                href="mailto:contacto@traduccioncreativa.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Mail className={`w-4 h-4 ${current.accentColor}`} />
                </div>
                <span>Enviar mensaje</span>
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/traduccioncreativa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-slate-950 hover:bg-white hover:border-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://www.tiktok.com/@traduccion_creativa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-slate-950 hover:bg-white hover:border-white transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.001h3.01c.12 1.053.639 2.073 1.431 2.802.804.741 1.874 1.155 2.984 1.173v3.134a7.485 7.485 0 0 1-4.385-1.393v8.375c0 1.343-.39 2.658-1.121 3.784a6.56 6.56 0 0 1-3.033 2.502 6.59 6.59 0 0 1-3.903.208 6.556 6.556 0 0 1-3.324-1.996 6.5 6.5 0 0 1-1.637-3.52 6.54 6.54 0 0 1 .536-3.844 6.57 6.57 0 0 1 2.658-2.88 6.56 6.56 0 0 1 3.827-.706v3.255a3.34 3.34 0 0 0-1.87.527 3.32 3.32 0 0 0-1.258 1.408 3.29 3.29 0 0 0-.173 1.889 3.31 3.31 0 0 0 .914 1.708 3.33 3.33 0 0 0 1.745.94 3.34 3.34 0 0 0 1.954-.153 3.33 3.33 0 0 0 1.503-1.272 3.3 3.3 0 0 0 .548-1.921V.001z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* PIE INFERIOR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Traducción Creativa. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Diseñado con pasión y estrategia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}