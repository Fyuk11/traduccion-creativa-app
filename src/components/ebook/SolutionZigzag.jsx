
import { motion } from 'framer-motion';

export default function SolutionZigzag() {
  const items = [
    {
      id: '01',
      title: '01. Guiones Virales Inagotables',
      description: (
        <>
          Descubrí el <em className="text-cyan-300 not-italic font-semibold">Prompt Exacto</em> para que la IA escupa guiones persuasivos adaptados a tu nicho en 5 segundos. Adiós al bloqueo creativo.
        </>
      ),
      imgSrc: '/ebook-zigzag1.webp',
      alt: 'Captura de pantalla del chat generando un guion con IA'
    },
    {
      id: '02',
      title: '02. Clonación de Voz y Avatares',
      description: 'Usá 2 herramientas gratuitas (que nadie te cuenta) para generar voces hiperrealistas o usar avatares que hablen por vos. Nunca más vas a tener que salir en cámara si no querés.',
      imgSrc: '/ebook-zigzag2.webp',
      alt: 'Descripción de la herramienta de voz y avatares'
    },
    {
      id: '03',
      title: '03. Videos listos sin edición',
      description: 'No necesitas pasar horas editando un video. Con nuestro método tenés un video listo para publicar en menos de 5 minutos.',
      imgSrc: '/ebook-zigzag3.webp',
      alt: 'Descripción de video final listo para publicar'
    }
  ];

  return (
    <section className="w-full bg-[#07070d] text-slate-100 py-24 px-4 sm:px-6 font-sans relative overflow-hidden" id="solucion">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado exacto V1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-normal mb-3">
            Cortá el ciclo. Tu Agencia <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-300">24/7</span> llegó.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Un método probado donde la tecnología trabaja para vos, no al revés.
          </p>
        </motion.div>

        {/* Layout Zig-Zag con animaciones cruzadas */}
        <div className="space-y-24 sm:space-y-32">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                {/* TEXTO: Entra desde la izquierda si es par, desde la derecha si es impar */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>

                {/* IMAGEN: Entra desde la dirección opuesta al texto */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-sm hover:border-slate-700 transition-colors duration-300">
                    <div className="rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800/50">
                      <img 
                        src={item.imgSrc} 
                        alt={item.alt} 
                        className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
                        onError={(e) => {
                          // Placeholder si la imagen 3 aún no existe
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<div class="p-16 text-center text-slate-500 text-sm font-medium">📷 Preview / ${item.title}</div>`;
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}