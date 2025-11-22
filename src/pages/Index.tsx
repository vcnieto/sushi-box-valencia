import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen">
          <Hero />
          <Menu />
          <Experience />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Index;
