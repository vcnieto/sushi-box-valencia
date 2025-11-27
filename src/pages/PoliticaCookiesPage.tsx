import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PoliticaCookiesPage = () => {
  return (
    <div className="min-h-screen bg-[#EEEBDD] pt-20 page-fade-in">
      <Header />
      <main className="py-16">
        <section className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B1717] mb-6">
            Política de Cookies
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Aquí se detalla qué cookies utiliza este sitio web, con qué finalidad, durante
            cuánto tiempo permanecen activas y cómo puedes gestionarlas desde tu navegador.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookiesPage;
