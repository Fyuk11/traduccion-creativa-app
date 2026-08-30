import { Helmet } from 'react-helmet-async';
import EbookHero from '../components/ebook/EbookHero';
import PainTimeline from '../components/ebook/PainTimeline';
import SolutionZigZag from '../components/ebook/SolutionZigzag';
import InteractiveTools from '../components/ebook/InteractiveTools';
import OfferCheckout from '../components/ebook/OfferCheckout';
import FaqAccordion from '../components/ebook/FaqAccordion';

export default function EbookView() {
  return (
    <>
      <Helmet>
        <title>Creá Videos con IA para tu Marca | E-Book Gratuito</title>
        <meta name="description" content="Descubrí el sistema paso a paso para crear videos de alta conversión con Inteligencia Artificial usando solo 2 herramientas gratuitas." />
        
        {/* Open Graph */}
        <meta property="og:title" content="E-Book Gratis: Videos con IA para tu Marca" />
        <meta property="og:description" content="Aprendé a crear contenido de alta conversión en minutos con Inteligencia Artificial. Descargá el método paso a paso gratis." />
        <meta property="og:type" content="book" />
        <meta property="og:url" content="https://traduccioncreativa.com/#ebook" />
        <meta property="og:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Book Gratis: Videos con IA para tu Marca" />
        <meta name="twitter:description" content="Aprendé a crear contenido de alta conversión en minutos con IA usando solo 2 herramientas gratuitas." />
        <meta name="twitter:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        {/* Hero a pantalla completa de borde a borde */}
        <EbookHero />

        <PainTimeline />
        <SolutionZigZag />
        <InteractiveTools />
        <OfferCheckout />
        <FaqAccordion />
        
        {/* Contenedor restringido para el resto de la página */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
        </div>
      </div>
    </>
  );
}