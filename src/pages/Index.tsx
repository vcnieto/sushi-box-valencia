import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Flag a nivel de módulo: vive mientras la SPA esté cargada en la pestaña
let hasShownLoaderInSession = false;

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Si ya se ha mostrado el loader en esta sesión, no lo mostramos de nuevo
    return !hasShownLoaderInSession;
  });
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo as string;
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }

      // Limpiar el estado para que no se repita el scroll si el usuario vuelve atrás
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [isLoading, location.state]);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onLoadingComplete={() => {
            // Marcar que el loader ya se ha mostrado en esta sesión (mientras no se recargue la página)
            hasShownLoaderInSession = true;
            setIsLoading(false);
          }}
        />
      )}
      {!isLoading && (
        <div className="min-h-screen pt-20">
          <Header />
          <Hero />
          <FeaturedDishes />
          <Gallery />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Index;
