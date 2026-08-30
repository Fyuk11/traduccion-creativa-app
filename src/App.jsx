import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeView from './views/HomeView.jsx';
import EbookView from './views/EbookView.jsx';
import UgcView from './views/UgcView.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Lista de IDs internos pertenecientes a la vista UGC
  const ugcSectionIds = ['simulador', 'metodo', 'cotizacion', 'problema', 'desafio'];

  const getInitialMode = () => {
    const hash = window.location.hash.replace('#', '');
    
    if (['agency', 'ebook', 'ugc'].includes(hash)) {
      return hash;
    }
    // Si el hash es una sección interna de UGC, mantenemos la vista 'ugc'
    if (ugcSectionIds.includes(hash)) {
      return 'ugc';
    }
    
    return 'agency';
  };

  const [activeMode, setActiveMode] = useState(getInitialMode);

  const handleModeChange = (newMode) => {
    setActiveMode(newMode);
    window.location.hash = newMode;
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (['agency', 'ebook', 'ugc'].includes(hash)) {
        setActiveMode(hash);
        window.scrollTo(0, 0);
      } else if (ugcSectionIds.includes(hash)) {
        setActiveMode('ugc');
        // Si es una sección interna, hacemos scroll suave hasta ella
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#070709] min-h-screen text-slate-100 font-sans selection:bg-amber-400 selection:text-black pt-20">
      <Navbar activeMode={activeMode} onModeChange={handleModeChange} />
      
      <main id="hero">
        {activeMode === 'agency' && <HomeView />}
        {activeMode === 'ebook' && <EbookView />}
        {activeMode === 'ugc' && <UgcView />}
      </main>
      
      <Footer activeMode={activeMode} />
    </div>
  );
}

export default App;