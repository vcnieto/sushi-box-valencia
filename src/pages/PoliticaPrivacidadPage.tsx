import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PoliticaPrivacidadPage = () => {
  return (
    <div className="min-h-screen bg-[#EEEBDD] pt-20 page-fade-in">
      <Header />
      <main className="py-16">
        <section className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B1717] mb-6">
            Política de Privacidad
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            En esta página se explica cómo tratamos tus datos personales, con qué finalidad,
            durante cuánto tiempo y cuáles son tus derechos de acceso, rectificación y
            supresión, entre otros.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
