import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutEditorialSection from '../components/home/AboutEditorialSection';
import MethodologySection from '../components/home/MethodologySection';
import StepsWorkFlow from '../components/home/StepsWorkFlow';
import InmersiveSection from '../components/home/InmersiveSection';
import InteractiveShowcase from '../components/home/InteractiveShowcase';
import FaqSection from '../components/home/FaqSection';

export default function HomeView() {
  return (
    <>
      <Helmet>
        <title>Traducción Creativa | Páginas Web, Tiendas Online & Videos UGC</title>
        <meta name="description" content="Agencia de desarrollo web y creación de contenido audiovisual. Diseñamos páginas web, tiendas online (ecommerce), portafolios e landing pages optimizadas para SEO y ventas." />
        <meta name="keywords" content="paginas web, desarrollo web, tiendas online, ecommerce, portafolios, diseño web, landing page, SEO, agencia web" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Traducción Creativa | Páginas Web, Ecommerce & Videos UGC" />
        <meta property="og:description" content="Diseño de páginas web, tiendas online (ecommerce), portafolios interactivos y contenido UGC de alto rendimiento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traduccioncreativa.com/" />
        <meta property="og:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Traducción Creativa | Páginas Web, Ecommerce & Videos UGC" />
        <meta name="twitter:description" content="Diseño de páginas web, tiendas online (ecommerce), portafolios interactivos y contenido UGC de alto rendimiento." />
        <meta name="twitter:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />
      </Helmet>

      <div className="flex flex-col w-full overflow-hidden">
        <HeroSection />
        <AboutEditorialSection />
        <MethodologySection />
        <StepsWorkFlow />
        <InmersiveSection />
        <InteractiveShowcase />
        <FaqSection />
      </div>
    </>
  );
}