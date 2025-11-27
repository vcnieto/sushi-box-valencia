import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AvisoLegalPage = () => {
  return (
    <div className="min-h-screen bg-[#EEEBDD] pt-20 page-fade-in">
      <Header />
      <main className="py-16">
        <section className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B1717] mb-6">
            Aviso Legal
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Este sitio web es propiedad de Sushi Box Valencia. Aquí se recogen los datos
            identificativos del titular, las condiciones de uso de la web y otra información
            legal relevante para los usuarios.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegalPage;
