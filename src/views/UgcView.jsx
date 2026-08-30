import { Helmet } from 'react-helmet-async';
import UgcHero from '../components/ugc-videos/UgcHero.jsx';
import UgcShowcase from '../components/interactive/UgcShowcase.jsx';
import UgcOpportunity from '../components/ugc-videos/UgcOpportunity';
import UgcIaFeature from '../components/ugc-videos/UgcIaFeature.jsx';
import UgcCarousel from '../components/ugc-videos/UgcCarousel.jsx';
import UgcZigZag from '../components/ugc-videos/UgcZigZag.jsx';
import UgcPricing from '../components/ugc-videos/UgcPricing.jsx';
import UgcFaq from '../components/ugc-videos/UgcFaq.jsx';

export default function UgcView() {
  return (
    <>
      <Helmet>
        <title>Videos UGC que Convierten | Traducción Creativa</title>
        <meta name="description" content="Impulsá tus ventas con videos UGC y anuncios para redes sociales. Creadores reales, contenido auténtico y estrategias audiovisuales para tu marca." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Videos UGC y Ads para tu Marca" />
        <meta property="og:description" content="Mostramos el verdadero valor de tu producto con videos UGC creados para vender. Creadores reales, contenido que convierte." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traduccioncreativa.com/#ugc" />
        <meta property="og:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Videos UGC y Ads para tu Marca" />
        <meta name="twitter:description" content="Mostramos el verdadero valor de tu producto con videos UGC creados para vender." />
        <meta name="twitter:image" content="https://traduccioncreativa.com/assets/img/logo-share.png" />
      </Helmet>

      <div className="space-y-12">
        {/* 1. Hero */}
        <UgcHero />

        {/* 2. Showcase / Galería / Pruebas de Videos */}
        <section className="relative z-10">
          <UgcShowcase />
          <UgcOpportunity />
          <UgcIaFeature />
          <UgcCarousel />
          <UgcZigZag />
          <UgcPricing />
          <UgcFaq />
        </section>
      </div>
    </>
  );
}