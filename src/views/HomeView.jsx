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
        <title>Traducción Creativa | Damos vida digital a tus ideas.</title>
        <meta name="description" content="Desarrollo de landings, portafolios y contenido audiovisual de alto rendimiento. Diseño moderno, SEO técnico y estrategias que convierten." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Traducción Creativa - Web & Contenido" />
        <meta property="og:description" content="Landings, portafolios y videos listos para convertir. SEO, performance y diseño premium." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traduccioncreativa.com/" />
        <meta property="og:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Traducción Creativa - Web & Contenido" />
        <meta name="twitter:description" content="Landings, portafolios y videos listos para convertir. SEO, performance y diseño premium." />
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